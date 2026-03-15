import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { HiChartBar } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import placeholderImg from "../assets/placeholder.webp";

const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "") || "";
const IMG = (name: string) => `${base}/images/${name}`;
const FALLBACK = placeholderImg;

export interface ProjectCard {
  title: string;
  description: string;
  tags: string[];
  milestones: string[];
  progress: number;
  image: string;
  link?: string;
}

const projects: ProjectCard[] = [
  {
    title: "Deep Learning-Based Skin Disease Classification System",
    description:
      "Medical AI for automated dermatology diagnostics trained on DermNet dataset. Compares multiple CNN architectures (ResNet, DenseNet, EfficientNet) for optimal classification. Focuses on clinical accuracy and medical compliance.",
    tags: ["Python", "TensorFlow", "Keras", "Medical AI", "CNN"],
    milestones: ["Data Prep", "Evaluation", "CNN Models", "Compliance"],
    progress: 87,
    image: IMG("skin-disease.png.jpg"),
  },
  {
    title: "Franchise Statement Automation System",
    description:
      "Enterprise automation replacing manual Excel/Sheets workflows. Consolidates revenue, expenses, and fees into unified pipeline. Generates per-franchise statements with automated validation and PDF export.",
    tags: ["Python", "Data Engineering", "Automation", "PDF Generation", "Excel Integration"],
    milestones: ["Data Pipeline", "PDF Export", "Validation", "Deployment"],
    progress: 100,
    image: IMG("franchise.png.jpg"),
  },
  {
    title: "Human Activity Recognition from Video",
    description:
      "Computer vision system classifying 15 human activities using fine-tuned EfficientNet-B3. Trained on 12,600 labeled images. Real-time frame-by-frame inference with high precision for activities like calling, dancing, and hugging.",
    tags: ["Python", "TensorFlow", "Computer Vision", "Deep Learning", "EfficientNet"],
    milestones: ["Dataset Prep", "Fine-tuning", "Model Training", "Inference"],
    progress: 93,
    image: IMG("human-activity.png.jpg"),
  },
  {
    title: "Emergency Towing Service Flutter Application",
    description:
      "Cross-platform Flutter app for emergency towing services. Features real-time location tracking, ETA estimates, and dynamic pricing. Integrated with Google Maps API and Firebase for seamless backend operations.",
    tags: ["Flutter", "Firebase", "Google Maps", "Mobile Development", "Real-time"],
    milestones: ["UI/UX", "Backend", "Maps Integration", "Testing"],
    progress: 98,
    image: IMG("towing-flutter.png.jpg"),
  },
  {
    title: "EduPath - Smart Student Advisory and University Recommendation Bot",
    description:
      "Intelligent chatbot helping students choose universities and programs. Analyzes age, education, CGPA, and interests for personalized recommendations. Flask backend with responsive web interface and NLP capabilities.",
    tags: ["Python", "Flask", "Chatbot", "NLP", "Web Development"],
    milestones: ["NLP Engine", "Web UI", "Database", "Deployment"],
    progress: 92,
    image: IMG("edupath.png.jpg"),
  },
  {
    title: "YOLO-Based Autonomous Pilot Transfer Safety System",
    description:
      "Computer vision system using YOLOv8 and DeepSort for maritime pilot transfer safety. Real-time motion analysis identifies safe jump windows. Features platform estimation, motion tracking, and intelligent recommendations.",
    tags: ["Python", "YOLOv8", "Computer Vision", "DeepSort", "Safety Systems"],
    milestones: ["YOLOv8 Setup", "Tracking", "Motion Analysis", "Safety Alerts"],
    progress: 91,
    image: IMG("yolo-wave.png.jpg"),
  },
  {
    title: "Smart University Neighborhood Advisory System",
    description:
      "AI-powered platform analyzing rental prices, transportation, safety, and job markets to help students choose optimal neighborhoods. Features interactive maps, ML-based scoring, and intelligent chatbot recommendations.",
    tags: ["Python", "Machine Learning", "Data Analysis", "Chatbot", "Geospatial Analysis"],
    milestones: ["Data Integration", "Chatbot", "ML Models", "Deployment"],
    progress: 95,
    image: IMG("university-neighborhood.png.jpg"),
  },
  {
    title: "AI Voice Call Agent with Twilio Integration",
    description:
      "Intelligent voice automation handling inbound/outbound calls via Twilio API. Uses OpenAI LLM for transcript processing and Alloy TTS for natural voice synthesis. Features conversation management and comprehensive logging.",
    tags: ["Python", "Twilio", "OpenAI", "TTS", "Voice AI"],
    milestones: ["Twilio Setup", "TTS Engine", "LLM Integration", "Deployment"],
    progress: 89,
    image: IMG("ai-voice-agent.png.jpg"),
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 750);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((proj, index) => (
                <div className="carousel-slide" key={index}>
                  <article className="project-card">
                    <div className="project-card-image-wrap">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="project-card-image"
                        onError={(e) => {
                          const el = e.currentTarget;
                          if (el.src !== FALLBACK) {
                            el.src = FALLBACK;
                          }
                        }}
                      />
                      <span className="project-card-badge">1.5+ Year Experience</span>
                      <span className="project-card-progress">
                        <HiChartBar /> {proj.progress}%
                      </span>
                    </div>
                    <div className="project-card-body">
                      <div className="project-card-tags">
                        {proj.tags.map((tag) => (
                          <span key={tag} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="project-card-title">{proj.title}</h3>
                      <p className="project-card-desc">{proj.description}</p>
                      <div className="project-card-milestones">
                        <h4 className="milestones-heading">
                          <IoRocketOutline /> Milestones
                        </h4>
                        <ul className="milestones-list">
                          {proj.milestones.map((m) => (
                            <li key={m}>
                              <IoCheckmarkCircle className="milestone-check" /> {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="project-card-progress-bar">
                        <h4 className="progress-heading">Progress</h4>
                        <div className="progress-bar-wrap">
                          <div className="progress-bar-track">
                            <div className="progress-bar-fill" style={{ width: `${proj.progress}%` }} />
                          </div>
                          <span className="progress-bar-pct">{proj.progress}%</span>
                        </div>
                      </div>
                      <a
                        href={proj.link || "#"}
                        className="project-card-cta"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="disable"
                      >
                        View Details <MdArrowOutward />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
