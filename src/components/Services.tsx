import "./styles/Services.css";
import { IoCheckmarkCircle } from "react-icons/io5";
import {
  FaRobot,
  FaChartLine,
  FaDatabase,
  FaRocket,
  FaGlobe,
  FaMobileScreen,
} from "react-icons/fa6";

const services = [
  {
    icon: FaRobot,
    title: "Machine Learning & AI",
    description:
      "Development of custom machine learning models for predictive analytics, classification, pattern recognition, and intelligent automation. Expertise in deep learning, computer vision, NLP, and reinforcement learning using Python, TensorFlow, PyTorch, and advanced ML frameworks.",
    items: [
      "Predictive Modeling",
      "Computer Vision",
      "Natural Language Processing",
      "Deep Learning",
      "Reinforcement Learning",
      "Transfer Learning",
    ],
  },
  {
    icon: FaChartLine,
    title: "Data Science & Analysis",
    description:
      "Comprehensive data analysis and scientific insights extraction from complex datasets. Statistical modeling, hypothesis testing, exploratory data analysis, and advanced analytics to drive data-driven decision making across industries.",
    items: [
      "Statistical Analysis",
      "Exploratory Data Analysis",
      "Hypothesis Testing",
      "Predictive Analytics",
      "Business Intelligence",
      "Data Mining",
    ],
  },
  {
    icon: FaDatabase,
    title: "Data Engineering",
    description:
      "Building robust, scalable data pipelines and infrastructure for efficient data processing, transformation, and analytics. Design and implementation of ETL/ELT processes, data warehousing solutions, and big data processing systems.",
    items: [
      "ETL/ELT Pipelines",
      "Data Warehousing",
      "Big Data Processing",
      "Data Quality Assurance",
      "Data Integration",
      "Real-time Streaming",
    ],
  },
  {
    icon: FaRocket,
    title: "Model Deployment & MLOps",
    description:
      "End-to-end deployment of machine learning models as scalable APIs, microservices, or web applications. Implementation of MLOps practices including CI/CD pipelines, model versioning, monitoring, and automated retraining systems.",
    items: [
      "REST API Development",
      "Containerization (Docker/K8s)",
      "Cloud Deployment (AWS/GCP/Azure)",
      "Performance Monitoring",
      "Model Versioning",
      "Automated Retraining",
    ],
  },
  {
    icon: FaGlobe,
    title: "Web Development",
    description:
      "Full-stack web application development using modern frameworks and technologies. Building responsive, scalable web applications with React, Next.js, Tailwind CSS, and Node.js. Integration of AI capabilities into web platforms.",
    items: [
      "React & Next.js",
      "Tailwind CSS",
      "Node.js & Express",
      "RESTful APIs",
      "AI Integration",
      "Responsive Design",
    ],
  },
  {
    icon: FaMobileScreen,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile application development using Flutter and React Native. Creating native-feeling mobile apps with integrated AI capabilities, real-time features, and seamless user experiences.",
    items: [
      "Flutter Development",
      "React Native",
      "Firebase Integration",
      "AI/ML Integration",
      "Real-time Features",
      "Cross-platform Apps",
    ],
  },
];

const Services = () => {
  return (
    <section className="services-section section-container" id="services">
      <div className="services-container">
        <p className="services-intro">What I can do for you</p>
        <h2 className="services-title">My Services</h2>
        <p className="services-subtitle">
          Comprehensive solutions across AI/ML, Data Science, Data Engineering,
          and Full-Stack Development
        </p>
        <div className="services-divider" />

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={index}>
                <div className="service-card-icon">
                  <Icon />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <ul className="service-card-list">
                  {service.items.map((item) => (
                    <li key={item}>
                      <IoCheckmarkCircle className="service-card-check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
