export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  country: string;
  type: string;
  skills: string[];
  details: string[];
  summary: string;
}

export const experiences: Experience[] = [
  {
    id: "voiseed-1",
    period: "Jan 2023 - Nov 2024",
    role: "Software Engineer",
    country: "Milan, Italy",
    company: "Voiseed",
    type: "job",
    skills: [
      "ReactJS",
      "AWS",
      "GraphQL",
      "TypeScript",
      "Redux",
      "Material-UI",
      "Prometheus",
      "Grafana",
    ],
    summary:
      "Developed a cloud-based web application with React, TypeScript, GraphQL, and AWS serverless services. Integrated AWS Lambda functions with DynamoDB for efficient data handling and backend logic.",
    details: [
      "Developed a scalable, cloud-based web app using React, TypeScript, and GraphQL.",
      "Built serverless backend with AWS Lambda and DynamoDB for efficient data handling.",
      "Integrated pre-deployed deep learning models for real-time inference.",
      "Managed automated CI/CD pipelines via AWS Amplify.",
      "Implemented system monitoring and optimization with Prometheus and Grafana.",
      "Maintained technical documentation with Docusaurus.",
    ],
  },
  {
    id: "voiseed-2",
    period: "Sept 2021 - Dec 2022",
    role: "Software Engineer",
    company: "Voiseed",
    country: "Milan, Italy",
    type: "job",
    skills: [
      "ReactJS",
      "AWS",
      "GraphQL",
      "Redux",
      "Material-UI",
      "Git",
      "Strapi",
      "Gatsby",
    ],
    summary:
      "Worked in a cross-functional team to build cloud-based applications for controlling AI-powered TTS modules. Developed responsive UIs with React and GraphQL, and implemented content-driven websites using Gatsby and Strapi.",
    details: [
      "Developed responsive user interfaces using React and GraphQL, ensuring seamless frontend-backend integration.",
      "Created static content-driven websites using Gatsby and Strapi (headless CMS).",
      "Designed custom content models, user roles, and permissions tailored to team needs.",
      "Integrated third-party services and APIs for enhanced functionality.",
      "Maintained detailed technical documentation to support development workflows.",
    ],
  },
  {
    id: "masters",
    period: "2019 - 2022",
    role: "Masters",
    company: "Politecnico di Milano",
    country: "Milan, Italy",
    type: "education",
    skills: [],
    summary:
      "Completed advanced coursework in Software Engineering, Business Information Systems, Data Engineering, Machine Learning, and Natural Language Processing. Developed a strong foundation in building intelligent, scalable systems and bridging data insights with business applications.",
    details: [],
  },
  {
    id: "asteria-1",
    period: "June 2018 - July 2019",
    role: "Software Developer",
    company: "Asteria Aerospace",
    country: "Bangalore, India",
    skills: [
      "Golang",
      "AWS",
      "gRPC",
      "Protocol Buffers",
      "Docker",
      "PostgreSQL",
      "Git",
    ],
    type: "job",
    summary:
      "Developed backend systems for drone data processing and secure cloud access, using Go, AWS, and gRPC. Focused on authentication, role-based access control, and centralized logging.",
    details: [
      "Built software for uploading drone data to AWS and processing aerial imagery (orthophotos, DSM, DTM).",
      "Integrated Auth0 with JWTs for secure user authentication.",
      "Implemented RBAC using Go libraries like Casbin for flexible access control.",
      "Developed high-performance gRPC APIs with Protocol Buffers for data serialization.",
      "Automated log ingestion from AWS CloudWatch and applications into a centralized system.",
    ],
  },
  {
    id: "asteria-2",
    period: "Jan 2018 - May 2018",
    role: "Technical Intern",
    company: "Asteria Aerospace",
    country: "Bangalore, India",

    type: "job",
    skills: ["ReactJS", "Bootstrap", "Git"],
    summary:
      "Contributed to frontend development using ReactJS and Bootstrap, building responsive user interfaces. Collaborated in an agile environment using Jira for project tracking and Git for version control.",
    details: [],
  },
  {
    id: "bachelors",
    period: "2014 - 2018",
    role: "Bachelors",
    country: "Kerala, India",
    company: "Amrita Vishwa Vidyapeetham",
    type: "education",
    skills: [],
    summary:
      "Developed core technical skills in software engineering and computational thinking through coursework and practical projects.",
    details: [],
  },
];
