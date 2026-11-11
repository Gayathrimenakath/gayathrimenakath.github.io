export interface Role {
  title: string;
  period: string;
  details: string[];
}

export interface Experience {
  id: string;
  period: string; // overall span, shown on the timeline
  company: string;
  country: string;
  type: "job" | "education";
  summary: string;
  skills: string[];
  roles: Role[]; // newest first; one item for single-role entries
}

export const experiences: Experience[] = [
  {
    id: "agriprove",
    period: "Jun 2025 - Present",
    company: "AgriProve",
    country: "Australia",
    type: "job",
    summary:
      "Building a geospatial soil-carbon platform end to end, from React and TypeScript front ends to GraphQL APIs, regulated crediting calculations and data pipelines..",
    skills: [
      "React",
      "TypeScript",
      "Apollo",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
      "PostGIS",
      "Python",
      "Temporal",
      "pg-boss",
      "Puppeteer",
    ],
    roles: [
      {
        title: "Full Stack TypeScript Engineer",
        period: "Jun 2025 - Present",
        details: [
          "Built customer-facing features end to end with React, TypeScript, Apollo and GraphQL, from a map-based dashboard with a full mobile experience to a credentials hub with three certification application flows and herd-insights analytics.",
          "Designed GraphQL APIs on PostgreSQL (Prisma) behind these features, including a composable product framework that launched four partner marketplace products.",
          "Own the build of the carbon-crediting calculator, implementing the CER Schedule 2 soil carbon method in Python, reconciled against lodged offsets reports.",
          "Architected a print-quality reporting engine (HTML and Puppeteer): 12-page PDFs with 300 DPI maps in under 2 seconds.",
          "Designed an automated project-setup pipeline (PostGIS, Temporal, Python) that replaced manual QGIS workflows.",
          "Led the migration of background jobs from AWS SQS to PostgreSQL (pg-boss).",
          "Coordinate releases, review code and write the design documents that set technical direction.",
        ],
      },
    ],
  },
  {
    id: "voiseed",
    period: "Aug 2021 - Nov 2024",
    company: "Voiseed",
    country: "Milan, Italy",
    type: "job",
    summary:
      "Built cloud-based applications for controlling AI-powered text-to-speech modules, starting as an intern and growing into a full-time software engineer.",
    skills: [
      "React",
      "TypeScript",
      "GraphQL",
      "AWS",
      "Redux",
      "Material-UI",
      "Prometheus",
      "Grafana",
      "Strapi",
      "Gatsby",
    ],
    roles: [
      {
        title: "Software Engineer",
        period: "Jan 2023 - Nov 2024",
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
        title: "Intern",
        period: "Aug 2021 - Dec 2022",
        details: [
          "Developed responsive user interfaces using React and GraphQL, ensuring seamless frontend-backend integration.",
          "Created static content-driven websites using Gatsby and Strapi (headless CMS).",
          "Designed custom content models, user roles, and permissions tailored to team needs.",
          "Integrated third-party services and APIs for enhanced functionality.",
          "Maintained detailed technical documentation to support development workflows.",
        ],
      },
    ],
  },
  {
    id: "masters",
    period: "2019 - 2022",
    company: "Politecnico di Milano",
    country: "Milan, Italy",
    type: "education",
    summary:
      "Completed advanced coursework in Software Engineering, Business Information Systems, Data Engineering, Machine Learning, and Natural Language Processing. Developed a strong foundation in building intelligent, scalable systems and bridging data insights with business applications.",
    skills: [],
    roles: [
      {
        title: "M.Sc. in Computer Science and Engineering",
        period: "2019 - 2022",
        details: [],
      },
    ],
  },
  {
    id: "asteria",
    period: "Jan 2018 - Jul 2019",
    company: "Asteria Aerospace",
    country: "Bangalore, India",
    type: "job",
    summary:
      "Developed backend systems for drone data processing and secure cloud access, using Go, AWS, and gRPC. Focused on authentication, role-based access control, and centralized logging.",
    skills: [
      "Golang",
      "AWS",
      "gRPC",
      "Protocol Buffers",
      "Docker",
      "PostgreSQL",
      "ReactJS",
      "Git",
    ],
    roles: [
      {
        title: "Software Developer",
        period: "Jun 2018 - Jul 2019",
        details: [
          "Built software for uploading drone data to AWS and processing aerial imagery (orthophotos, DSM, DTM).",
          "Integrated Auth0 with JWTs for secure user authentication.",
          "Implemented RBAC using Go libraries like Casbin for flexible access control.",
          "Developed high-performance gRPC APIs with Protocol Buffers for data serialization.",
          "Automated log ingestion from AWS CloudWatch and applications into a centralized system.",
        ],
      },
      {
        title: "Technical Intern",
        period: "Jan 2018 - May 2018",
        details: [
          "Built responsive user interfaces with ReactJS and Bootstrap.",
          "Worked in an agile team, using Jira for project tracking and Git for version control.",
        ],
      },
    ],
  },
  {
    id: "bachelors",
    period: "2014 - 2018",
    company: "Amrita Vishwa Vidyapeetham",
    country: "Kerala, India",
    type: "education",
    summary:
      "Developed core technical skills in software engineering and computational thinking through coursework and practical projects.",
    skills: [],
    roles: [
      {
        title: "B.Tech in Computer Science and Engineering",
        period: "2014 - 2018",
        details: [],
      },
    ],
  },
];