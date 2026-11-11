interface Project {
  id: string;
  title: string;
  context: string; // e.g. "AgriProve", "Voiseed", "Master's thesis"
  date?: string;
  description: string[];
  tech: string[];
  link?: string;
  linkLabel?: string; // e.g. "Read paper"
}

export const ProjectData: Project[] = [
  {
    id: "exclusion-zones",
    title: "Automated exclusion-zone detection from public datasets",
    context: "AgriProve",
    date: "2026",
    description: [
      "Built the step that finds land that can't earn carbon credits (steep slopes, roads, buildings, power lines, dams) and excludes it from a property. Operations staff used to draw these zones by hand in QGIS, a desktop mapping tool; now the system proposes them and a team member reviews and confirms.",
      "Pulls the data from public sources: a national elevation model for slope, OpenStreetMap for roads and tracks, Geoscience Australia for power lines and dams, and building footprints. Everything is converted to one coordinate system, with area calculations consistent with the later crediting calculations.",
      "Made the pipeline reliable when external sources are rate-limited or slow: consolidated OpenStreetMap requests, improved retry handling, moved building detection from a rate-limited API to a pre-loaded Overture dataset in PostGIS, and cached repeated lookups in the database.",
      "Runs one Temporal workflow per project in parallel, so a slow or failing data source only affects that project. Confirmed zones aren't regenerated, and re-saving resets the later setup steps so the data can't get out of sync.",
    ],
    tech: [
      "Python",
      "PostGIS",
      "Temporal",
      "TypeScript",
      "GraphQL",
      "Prisma",
      "OpenStreetMap",
      "ArcGIS REST",
    ],
  },
  {
    id: "voiseed-audio-editors",
    title: "Interactive editors for AI-generated speech",
    date: "2024",
    context: "Voiseed",
    description: [
      "Designed and built two browser-based editors for shaping AI-generated speech: a phoneme-level pitch editor and a pronunciation editor backed by SSML.",
      "Pitch editor: modelled pitch as a time series segmented by phoneme, with drag editing and smoothing across neighbouring phonemes to keep transitions natural. Kept interaction fluid with memoised, segment-level updates and an undo/redo history, and regenerated audio on demand through GraphQL and AWS Lambda.",
      "Pronunciation editor: built on a custom Slate.js document model that keeps SSML attached to words while hiding the markup, with a raw view for advanced edits. Implemented a two-way SSML and document parser that handles overlapping tags, escaping and validation, since the synthesis models accept only valid SSML.",
      "Chose libraries through short proofs of concept: Chart.js over D3 and Recharts for point-level control with faster integration, and Slate over simpler editors for custom-node flexibility.",
    ],
    tech: [
      "React",
      "Chart.js",
      "Slate.js",
      "Redux",
      "GraphQL",
      "AWS Lambda",
      "DynamoDB",
    ],
  },
  {
    id: "masters-thesis",
    title: "Unified Monitoring System",
    context: "Master's thesis",
    date: "2022",
    description: [
      "Developed a centralised monitoring system for Voiseed, an AI-driven text-to-speech startup, with scalable data pipelines on AWS Kinesis, Athena and Glue to monitor and process critical system data, improving operational efficiency and early issue detection.",
      "Focused on four key areas: customer activity, deep learning model performance, AWS services, and local computing resources.",
      "Implemented operational monitoring for deep learning models using TorchServe, enabling proactive issue detection and timely intervention.",
      "Optimised AWS service monitoring for reliability, cost efficiency and performance.",
      "Deployed infrastructure monitoring for backend components and tracked GPU resources to optimise allocation and data centre efficiency.",
    ],
    tech: ["Amazon Kinesis", "S3", "Athena", "Glue", "Prometheus", "Grafana"],
    link: "https://hdl.handle.net/10589/198376",
    linkLabel: "View thesis record",
  },
  {
    id: "bachelors-thesis",
    title:
      "Evaluation of predisposing factors of Diabetes Mellitus using Machine Learning Techniques",
    context: "Bachelor's thesis",
    date: "2018",
    description: [
      "Collaborated closely with medical professionals to design and collect data from patients diagnosed with Gestational Diabetes Mellitus (GDM).",
      "Developed machine learning models using SVM and Naive Bayes to predict diabetes risk and identify key predisposing factors from patient data.",
      "Used grid search, k-fold cross-validation and leave-one-out cross-validation (LOOCV) to improve model performance.",
      "Published a paper reviewing current practices and analysing GDM patient data to identify predisposing factors, aiming to improve prediction accuracy.",
    ],
    tech: ["SVM", "Naive Bayes", "scikit-learn", "Python"],
    link: "https://ieeexplore.ieee.org/abstract/document/8896323",
    linkLabel: "Read paper",
  },
];