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
    "Node.js (TypeScript, JavaScript, Express.js)",
    "Java (Spring Boot)",
    "PHP (Laravel, CodeIgniter)",
    "C# (ASP.NET)",
    "Python (Django, Flask, FastAPI)",
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
    "OpenAPI",
    "Swagger",
  ],
};

const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company_name: "SenseTime",
    icon: "/company/sensetime.png",
    iconBg: "#383E56",
    date: "Jan 2023 -  Aug 2025",
    points: [
      " Project: NovaPay Fraud Detection Platform",
      " Architected the backend infrastructure using Java 17, Spring Boot 3, Kafka, and AWS Lambda, enabling the platform to handle 2M+ events/day with sub-100ms latency.",
      " Implemented event-streaming pipelines for transaction monitoring and fraud scoring, cutting detection time from 5 minutes to under 10 seconds.",
      " Developed a secure REST/gRPC API that integrated with banking partners and internal AI models for continuous fraud prediction.",
      "	Automated deployments via Jenkins + Terraform, reducing release time by 70% while improving reliability.",
      "	Most proud of: Building the core fraud analysis engine that now powers every transaction check in production — a system that directly prevents financial losses daily."
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Exist Software Labs",
    icon: "/company/exist.png",
    iconBg: "#383E56",
    date: "Sep 2019 - Dec 2022",
    points: [
      "Project: ShipFlow Logistics Tracking System",
      "Designed and developed the Django + React architecture, connecting front-end dashboards to real-time shipment data.",
      "Integrated RabbitMQ for asynchronous event handling, enabling 70K+ shipment updates daily without system lag.",
      "Built geo-tracking and predictive routing modules using AWS Lambda and DynamoDB, helping reduce delivery time and fuel usage by 18%.",
      "Led UI optimization efforts that cut average page load time by 35%, improving client satisfaction scores.",
      "Most proud of: Designing the asynchronous messaging system that became the backbone of the platform’s real-time tracking capability."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Sytian IT Productions Inc",
    icon: "/company/sytian.png",
    iconBg: "#383E56",
    date: "Jun 2018 - Aug 2019",
    points: [
      "Built ETL pipelines using Azure Data Factory and Databricks, integrating 15+ data sources from ERP, CRM, and HR systems.",
      "Automated financial reporting with Power BI dashboards, giving executives live revenue insights instead of weekly static reports.",
      "Created data quality and reconciliation checks with Azure Functions, cutting manual review time by 90%.",
      "Most proud of: Designing the ETL validation framework that became a company-wide template for new analytics projects."
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
