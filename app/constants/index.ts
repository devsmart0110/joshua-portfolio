export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Architect",
    icon: "/backend.webp",
  },
  {
    title: "Technical Project Manager",
    icon: "/web.webp",
  },
  {
    title: "DevOps Engineer",
    icon: "/mobile.webp",
  },
  {
    title: "AI & Automation Specialist",
    icon: "/creator.webp",
  },
];

// const technologies = [
//   {
//     name: "Javascript",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500",
//   },
//   {
//     name: "Python",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600",
//   },
//   {
//     name: "PHP",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500",
//   },
//   {
//     name: "C/C++/C#",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500",
//   },
//   {
//     name: "AWS",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500",
//   },
//   {
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500",
//     name: "Next.JS",
//   },
//   {
//     name: "Django",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500",
//   },
//   {
//     name: "PostgreSQL",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-lime-500",
//   },
//   {
//     name: "Vue",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500",
//   },
//   {
//     name: "Docker",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600",
//   },
//   {
//     name: "GraphQL",
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500",
//   },
//   {
//     color:
//       "text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500",
//     name: "Java",
//   },
// ];

const skills = {
  backend: [
    "Python (Django, Flask, FastAPI)",
    "Node.js (TypeScript, JavaScript, Express.js)",
    "Apache Kafka",
    "Java (Spring Boot)",
    "PHP (Laravel, CodeIgniter)",
    "C# (ASP.NET)",
    "Go (Golang)",
    "gRPC",
    "NestJS",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "Angular",
    "Vue.js",
    "React Native",
    "Tailwind CSS",
    "MUI",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  cloud: [
    "AWS (EC2, Lambda, S3, CloudWatch, ECS, Fargate)",
    "Google Firebase",
    "Azure DevOps",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
    "Terraform",
    "Helm",
  ],
  data: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "DynamoDB",
    "CassandraDB",
    "Elasticsearch",
    "Snowflake",
    "BigQuery",
  ],
  api: [
    "REST APIs",
    "GraphQL",
    "gRPC",
    "JWT/OAuth2 Authentication",
    "WebSockets",
    "WebRTC",
    "OpenAPI",
    "Swagger",
  ],
};

const experiences = [
  {
    title: "Senior Backend Engineer",
    company_name: "CLOUDSYNC TECHNOLOGIES ",
    icon: "/company/cloudsync.png",
    iconBg: "#ffffff",
    date: "May 2024 -  Oct 2025",
    points: [
      "Key Highlight: Built the automated validation engine that reduced manual review by 75% and became the core workflow for all client implementations.",
      " Built backend services using Python (FastAPI, Django) and Node.js for document ingestion, parsing, validation, and workflow automation; added asynchronous processing with RabbitMQ and cloud queues.",
      " Developed and improved ETL pipelines using Azure Data Factory and Azure Functions to process tax documents accurately and efficiently.",
      " Implemented event-streaming pipelines for transaction monitoring and fraud scoring, cutting detection time from 5 minutes to under 10 seconds.",
      " Set up CI/CD pipelines with Azure DevOps and Jenkins, using containerized workflows to speed up deployments and cut release errors by 60%; added monitoring with Azure Monitor, Datadog, and Prometheus.",
      "	Worked with product and QA teams using Jira for sprint planning and delivery.",
      "	Most proud of: Building the core fraud analysis engine that now powers every transaction check in production — a system that directly prevents financial losses daily."
    ],
  },
  {
    title: "Senior Backend Engineer",
    company_name: "SENSETIME",
    icon: "/company/sensetime.png",
    iconBg: "#ffffff",
    date: "Nov 2022 -  Feb 2024",
    points: [
      " Key Highlight: Built the core fraud analysis engine that powers all production transaction checks and prevents daily financial losses.",
      " Designed and built backend systems for the NovaPay Fraud Detection Platform using Java 17, Spring Boot, and Kafka, supporting over 2M events per day with sub-100ms processing.",
      " Created real-time event pipelines for transaction scoring, reducing fraud detection time from 5 minutes to under 10 seconds.",
      " Developed a secure REST/gRPC API that integrated with banking partners and internal AI models for continuous fraud prediction.",
      "	Automated deployments via Jenkins + Terraform, reducing release time by 70% while improving reliability.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "EXIST SOFTWARE LABS",
    icon: "/company/exist.png",
    iconBg: "#ffffff",
    date: "May 2017 - Oct 2022",
    points: [
      "Key Highlight: Designed the platformʼs real-time messaging backbone, forming the core event-processing layer used by all enterprise clients for shipment tracking and operational visibility.",
      "Led backend development for the ShipFlow Logistics Platform, designing the full Django + React architecture and delivering scalable, reliable connections between realtime shipment data and enterprise dashboards.",
      "Built and maintained high-volume asynchronous workflows using RabbitMQ, supporting 70K+ shipment updates/day with low latency and stable system performance.",
      "Developed geo-tracking, predictive routing, and delivery analytics modules using AWS Lambda, DynamoDB, and serverless patterns, helping reduce client delivery times and fuel consumption by 18%.",
      "Improved platform performance through API optimization, database tuning, and frontend performance improvements, achieving a 35% faster load time and increasing overall user satisfaction.",
      "• Drove CI/CD modernization using GitHub Actions, Docker, and infrastructure-as-code, enabling faster, more reliable releases and better environment consistency across development, staging, and production."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "SYTIAN IT PRODUCTIONS INC",
    icon: "/company/sytian.png",
    iconBg: "#ffffff",
    date: "Jun 2016 - Apr 2017",
    points: [
      "Assisted in building ETL pipelines using Azure Data Factory and Databricks, helping integrate data from ERP, CRM, and HR systems into unified workflows.",
      "Supported the development of financial and operational reports using Power BI, enabling teams to view updated metrics and business data more easily.",
      "Performed data validation, testing, and documentation, ensuring pipeline accuracy, clean data flows, and consistent reporting for internal teams."
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Joshua Aguilar",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/joshua-aguilar-335064399/",
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web" | "Wordpress";
}[] = [
  {
    name: "HealthTap – Virtual Primary Care Platform",
    description:
      "Developed a responsive and secure healthcare platform that enables patients to connect with doctors and access personalized care. Focused on performance, accessibility, and HIPAA-compliant design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "orange-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/healthtap.png",
    platform: "Web",
    deploy_link: "https://www.healthtap.com/",
  },
  {
    name: "Sierra Structures – Commercial Website",
    description:
      "Built a user-friendly website for a leading fencing and structures company, featuring interactive service pages, lead generation forms, and a clean design for improved customer engagement.",
    tags: [
      {
        name: "ASP.NET",
        color: "orange-text-gradient",
      },
      {
        name: "DynamoDB",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/sierra.png",
    platform: "Web",
    deploy_link: "https://www.sierrastructures.com/",
  },
  {
    name: "Chirayu Hospital – Multispeciality Hospital",
    description:
      "Designed and developed a modern hospital website to showcase medical services, departments, and facilities. Throughout the development, focused on ease of navigation, patient trust, and accessibility.",

    tags: [
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/chirayu.png",
    platform: "Web",
    deploy_link: "https://www.chirayuhospitaljaipur.com/",
  },
  {
    name: "eToro – Social Trading & Investment Platform",
    description:
      "Contributed to building a scalable trading platform supporting stocks, crypto, and ETFs. Implemented secure APIs and optimized performance to ensure a smooth trading experience for millions of users globally.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/etoro.png",
    platform: "Web",
    deploy_link: "https://www.etoro.com/",
  },
  {
    name: "RangeTrainer – Golf Practice & Improvement",
    description:
      "Developed a specialized sports web app that helps golfers improve practice sessions through structured training plans, progress tracking, and interactive drills. Delivered a sleek UI with mobile-first design.",

    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/rangetraner.png",
    platform: "Web",
    deploy_link: "https://rangetrainer.app/",
  },
  {
    name: "Toyota Lipa – Automotive Dealership Website",
    description:
      "Built a responsive dealership website to showcase Toyota’s latest models, promotions, and customer services. Integrated booking features and optimized for local SEO to attract new buyers.",

    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "BootStrap",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/toyotalipa.png",
    platform: "Web",
    deploy_link: "https://toyotalipa.com/",
  },
];

export { services, skills, experiences, testimonials, projects };
