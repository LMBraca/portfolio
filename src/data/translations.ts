const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Luis Mario Bracamontes",
      headline: "Software engineer.",
      subheadline:
        "I work on full-stack web applications, native mobile apps, APIs, and developer tools.",
      cta: {
        projects: "View Projects",
        resume: "Download Resume",
        contact: "Contact Me",
      },
    },
    about: {
      title: "About",
      p1: "I'm a software engineer with three years of experience building full-stack applications, cloud services, and APIs. I work primarily in JavaScript/TypeScript, C#, and Python, with experience in SQL, digital twins, and automation.",
      p2: "My projects range from data pipelines and mobile apps to homelab infrastructure and developer tools. Recent examples include a wait-time predictor for US–Mexico border commuters and a terminal interface for browsing CLI commands.",
      p3: "I hold a Bachelor's in Computer Science from CETYS Universidad. My professional experience covers AECO technology consulting, medical technology, fleet tracking, and semiconductor manufacturing.",
    },
    skills: {
      title: "Tech Stack",
    },
    projects: {
      title: "Projects",
      subtitle: "Tools and applications I've built.",
      viewProject: "View Case Study",
      viewGithub: "GitHub",
      viewDemo: "Live Demo",
      otherProjects: "Other Projects",
    },
    projectDetail: {
      back: "Back to Projects",
      overview: "Overview",
      problem: "The Problem",
      solution: "The Solution",
      result: "The Result",
      highlights: "Key Features",
      techStack: "Tech Stack",
      role: "My Role",
      status: "Status",
      screenshots: "Screenshots",
      videoDemo: "Video Demo",
      screenshotPlaceholder: "Screenshots coming soon",
      videoPlaceholder: "Video demo coming soon",
      links: "Links",
      subprojects: "Subprojects",
      comingSoon: "Coming Soon",
      visitSite: "Visit Site",
    },
    experience: {
      title: "Experience",
      education: "Education",
      downloadResume: "Download Resume",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "I'm open to new opportunities. If you have a question or want to connect, feel free to reach out.",
      email: "Email Me",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      built: "Built with Next.js, Tailwind CSS & Framer Motion",
    },
  },
  es: {
    nav: {
      about: "Acerca",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Luis Mario Bracamontes",
      headline: "Ingeniero de software.",
      subheadline:
        "Trabajo en aplicaciones web full-stack, apps móviles nativas, APIs y herramientas para desarrolladores.",
      cta: {
        projects: "Ver Proyectos",
        resume: "Descargar CV",
        contact: "Contáctame",
      },
    },
    about: {
      title: "Acerca de mí",
      p1: "Soy ingeniero de software con tres años de experiencia construyendo aplicaciones full-stack, servicios en la nube y APIs. Trabajo principalmente con JavaScript/TypeScript, C# y Python, con experiencia en SQL, digital twins y automatización.",
      p2: "Mis proyectos abarcan desde pipelines de datos y apps móviles hasta infraestructura de homelab y herramientas para desarrolladores. Algunos ejemplos recientes incluyen un predictor de tiempos de espera para quienes cruzan la frontera entre EE.UU. y México, y una interfaz de terminal para explorar comandos CLI.",
      p3: "Tengo una Ingeniería en Ciencias Computacionales de CETYS Universidad. Mi experiencia profesional cubre consultoría tecnológica AECO, tecnología médica, rastreo de flotas y manufactura de semiconductores.",
    },
    skills: {
      title: "Stack Tecnológico",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Herramientas y aplicaciones que he construido.",
      viewProject: "Ver Caso de Estudio",
      viewGithub: "GitHub",
      viewDemo: "Demo en Vivo",
      otherProjects: "Otros Proyectos",
    },
    projectDetail: {
      back: "Volver a Proyectos",
      overview: "Descripción General",
      problem: "El Problema",
      solution: "La Solución",
      result: "El Resultado",
      highlights: "Características Clave",
      techStack: "Stack Tecnológico",
      role: "Mi Rol",
      status: "Estado",
      screenshots: "Capturas de Pantalla",
      videoDemo: "Demo en Video",
      screenshotPlaceholder: "Capturas de pantalla próximamente",
      videoPlaceholder: "Demo en video próximamente",
      links: "Enlaces",
      subprojects: "Subproyectos",
      comingSoon: "Próximamente",
      visitSite: "Visitar Sitio",
    },
    experience: {
      title: "Experiencia",
      education: "Educación",
      downloadResume: "Descargar CV",
    },
    contact: {
      title: "Contacto",
      subtitle: "Estoy abierto a nuevas oportunidades. Si tienes una pregunta o quieres conectar, escríbeme.",
      email: "Enviar Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      built: "Construido con Next.js, Tailwind CSS y Framer Motion",
    },
  },
};

export type Language = "en" | "es";
export type TranslationStrings = (typeof translations)["en"];
export default translations;
