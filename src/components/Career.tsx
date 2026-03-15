import "./styles/Career.css";
import { FaBriefcase } from "react-icons/fa6";

const experiences = [
  {
    title: "AI Engineer & Data Scientist (Freelance)",
    company: "Fiverr & International Clients",
    period: "2024 - Present",
    description:
      "Delivering 100+ AI/ML projects for international clients through Fiverr and long-term partnerships. Specializing in machine learning, data science, and full-stack AI integration across multiple industries.",
    bullets: [
      "Completed 100+ projects in AI/ML, Data Science, and Data Engineering",
      "Developed production-ready ML models for healthcare, finance, and e-commerce",
      "Built end-to-end data pipelines and ETL systems for large-scale data processing",
      "Integrated AI capabilities into web and mobile applications",
      "Maintained long-term relationships with international clients",
    ],
  },
  {
    title: "Data Science (Freelance)",
    company: "Industry Internship",
    period: "Summer",
    description:
      "Worked on predictive analytics projects, developed data pipelines, and created stakeholder-ready dashboards. Gained hands-on experience in production ML systems and data visualization.",
    bullets: [
      "Developed predictive models for business analytics",
      "Performed feature engineering and data preprocessing",
      "Created interactive dashboards for data visualization",
      "Collaborated with cross-functional teams on data-driven solutions",
    ],
  },
];

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2 className="career-heading">Professional Experience</h2>
        <p className="career-subtitle">
          1.5+ years of professional experience in AI, data science, and
          business development
        </p>
        <div className="career-divider" />
        <div className="career-cards">
          {experiences.map((exp, index) => (
            <article className="career-card" key={index}>
              <div className="career-card-accent" />
              <div className="career-card-icon">
                <FaBriefcase />
              </div>
              <div className="career-card-body">
                <h3 className="career-card-title">{exp.title}</h3>
                <p className="career-card-company">{exp.company}</p>
                <p className="career-card-period">{exp.period}</p>
                <p className="career-card-desc">{exp.description}</p>
                <ul className="career-card-bullets">
                  {exp.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
