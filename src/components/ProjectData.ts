interface Project {
  id: string;
  title: string;
  degree: string;
  date: string;
  description: string[];
  tech: string[];
  link: string;
}

export const ProjectData: Project[] = [
  {
    id: "masters-thesis",
    title: "Unified Monitoring System",
    degree: "Master's Thesis",
    date: "2022",
    description: [
      "Developed a centralized monitoring system for Voiseed, an AI-driven text-to-speech startup,integrating scalable data processing pipelines with AWS Kinesis, Athena, and Glue to monitor and process critical system data, improving operational efficiency and early issue detection",
      "Focused monitoring efforts on four key areas: customer activities, deep learning model performance, AWS services, and local computing resources.",
      "Implemented operational monitoring for deep learning models using TorchServe, enabling proactive issue detection and timely intervention.",
      "Optimized AWS service monitoring to ensure reliability, cost efficiency, and performance.",
      "Deployedinfrastructure monitoring for backend components and managed GPU resource tracking to optimize resource allocation and maximize data center efficiency.",
    ],
    tech: ["Amazon Kinesis", "S3", "Athena", "Glue", "Prometheus", "Grafana"],
    link: "https://hdl.handle.net/10589/198376",
  },
  {
    id: "bachelors-thesis",
    title:
      "Evaluation of predisposing factors of Diabetes Mellitus using Machine Learning Techniques",
    degree: "Bachelor's Thesis",
    date: "2018",
    description: [
      "Collaborated closely with medical professionals to design and collect relevant data from patients diagnosed with Gestational Diabetes Mellitus (GDM).",
      "Developed a machine learning model using SVM and Naive Bayes to predict the risk of Diabetes Mellitus, leveraging patient data to identify key predisposing factors.",
      "Employed techniques like Grid Search, K-Fold Cross-Validation, and Leave-One-Out Cross Validation (LOOCV) to enhance model performance, achieving an accuracy range of 60-70%.",
      "Published a paper detailing the methodical review of current practices and analyzing GDM data to identify predisposing factors from patient data, aiming to enhance machine learning models for improved prediction accuracy.",
    ],
    tech: ["SVM", "Naive Bayes", "scikit-learn library", "Python",],
    link: "https://ieeexplore.ieee.org/abstract/document/8896323",
  },
];
