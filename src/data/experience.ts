export interface Experience {
  company: string;
  industry: { en: string; es: string };
  location: string;
  role: { en: string; es: string };
  period: string;
  bullets: { en: string[]; es: string[] };
}

export const experience: Experience[] = [
  {
    company: "Avant Leap",
    industry: { en: "AECO Technology Consulting", es: "Consultoría Tecnológica AECO" },
    location: "Irvine, CA",
    role: { en: "Back-End Software Engineer", es: "Ingeniero de Software Back-End" },
    period: "Jul 2023 – Present",
    bullets: {
      en: [
        "Tested AI applications (Mirar, Andiamo, Clash Detection, 4D Simulation, Object Visualizer), strengthening expertise in AI integration and LLM applications",
        "Served as technical liaison for customer support, translating business needs into technical specifications",
        "Delivered bug fixes and feature enhancements",
        "Implemented business process automation to streamline workflows and improve operational efficiency",
        "Developed Digital Twin solutions using Microsoft Azure, SharePoint, Autodesk Construction Cloud (ACC), and ACC Forge APIs",
      ],
      es: [
        "Probé aplicaciones de IA (Mirar, Andiamo, Clash Detection, 4D Simulation, Object Visualizer), fortaleciendo experiencia en integración de IA y aplicaciones LLM",
        "Serví como enlace técnico para soporte al cliente, traduciendo necesidades de negocio a especificaciones técnicas",
        "Entregué correcciones de bugs y mejoras de funcionalidades",
        "Implementé automatización de procesos de negocio para optimizar flujos de trabajo y mejorar eficiencia operativa",
        "Desarrollé soluciones de Digital Twin usando Microsoft Azure, SharePoint, Autodesk Construction Cloud (ACC) y APIs de ACC Forge",
      ],
    },
  },
  {
    company: "Masimo Corporation",
    industry: { en: "Medical Technology", es: "Tecnología Médica" },
    location: "Mexicali, Baja California, México",
    role: { en: "Front-End Software Engineer Intern", es: "Ingeniero de Software Front-End (Pasante)" },
    period: "Jun 2025 – Sep 2025",
    bullets: {
      en: [
        "Developed internal applications using Expo/React Native and JavaScript, following agile methodologies",
        "Collaborated with UX/UI designers to implement responsive designs",
        "Delivered technical course on React Native and React Vite to experienced developers",
        "Participated in code reviews and Oracle training for enterprise database solutions",
      ],
      es: [
        "Desarrollé aplicaciones internas usando Expo/React Native y JavaScript, siguiendo metodologías ágiles",
        "Colaboré con diseñadores UX/UI para implementar diseños responsive",
        "Impartí curso técnico de React Native y React Vite a desarrolladores experimentados",
        "Participé en revisiones de código y capacitación en Oracle para soluciones de bases de datos empresariales",
      ],
    },
  },
  {
    company: "BraNix",
    industry: { en: "Fleet Tracking Solutions", es: "Soluciones de Rastreo de Flotas" },
    location: "Mexicali, Baja California, México",
    role: { en: "Full-Stack Software Engineer", es: "Ingeniero de Software Full-Stack" },
    period: "Mar 2024 – May 2025",
    bullets: {
      en: [
        "Developed MexLog web application using ASP.NET (C#), implementing secure RESTful APIs with authentication and input validation",
        "Designed and optimized Microsoft SQL Server database schemas, writing complex queries and stored procedures for data reporting and analytics",
        "Built responsive web interfaces using JavaScript, CSHTML, and CSS3, with JSON data structure implementation",
        "Implemented API security measures including authentication protocols and rate limiting",
      ],
      es: [
        "Desarrollé la aplicación web MexLog usando ASP.NET (C#), implementando APIs RESTful seguras con autenticación y validación de entrada",
        "Diseñé y optimicé esquemas de bases de datos en Microsoft SQL Server, escribiendo consultas complejas y stored procedures para reportes y analítica",
        "Construí interfaces web responsive usando JavaScript, CSHTML y CSS3, con implementación de estructuras de datos JSON",
        "Implementé medidas de seguridad de API incluyendo protocolos de autenticación y rate limiting",
      ],
    },
  },
  {
    company: "Skyworks Solutions, Inc.",
    industry: { en: "Semiconductor Solutions", es: "Soluciones de Semiconductores" },
    location: "Mexicali, Baja California, México",
    role: { en: "Data Analyst Intern", es: "Analista de Datos (Pasante)" },
    period: "Jul 2022 – Dec 2022",
    bullets: {
      en: [
        "Developed Python-based regression analysis scripts to optimize manufacturing processes",
        "Created technical documentation and automated reports to support data-driven decision making",
      ],
      es: [
        "Desarrollé scripts de análisis de regresión en Python para optimizar procesos de manufactura",
        "Creé documentación técnica y reportes automatizados para apoyar la toma de decisiones basada en datos",
      ],
    },
  },
];

export interface Education {
  institution: string;
  location: string;
  degree: { en: string; es: string };
  period: string;
}

export const education: Education = {
  institution: "CETYS Universidad",
  location: "Mexicali, Baja California, México",
  degree: {
    en: "Bachelor of Engineering in Computer Science",
    es: "Ingeniería en Ciencias Computacionales",
  },
  period: "Aug 2021 – Jun 2025",
};
