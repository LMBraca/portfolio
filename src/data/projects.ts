import { projectMedia } from "./projectMedia.generated";

export interface Subproject {
  title: string;
  description: { en: string; es: string };
  githubUrl?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: { en: string; es: string };
  longDescription: { en: string; es: string };
  problem: { en: string; es: string };
  solution: { en: string; es: string };
  result: { en: string; es: string };
  techStack: string[];
  category: { en: string; es: string };
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  playStorePending?: boolean;
  status: { en: string; es: string };
  highlights: { en: string[]; es: string[] };
  role: { en: string; es: string };
  featured: boolean;
  image?: string;
  screenshots?: string[];
  videos?: string[];
  subprojects?: Subproject[];
}

export const projects: Project[] = [
  {
    slug: "borderpulse",
    title: "BorderPulse",
    shortDescription: {
      en: "Real-time US-Mexico border crossing wait times, historical patterns, and predictions.",
      es: "Tiempos de espera en cruces fronterizos México-EE.UU. en tiempo real, patrones históricos y predicciones.",
    },
    longDescription: {
      en: "BorderPulse polls the CBP Border Wait Times API every 5 minutes, normalizes and deduplicates the data, and stores observations in a TimescaleDB hypertable. The API serves live wait times from a Redis cache, and the frontend auto-refreshes every 60 seconds. Predictions use day-of-week × hour-of-day medians computed from the last 90 days of observations. It targets people who cross the border regularly: commuters, families, and truckers.",
      es: "BorderPulse consulta la API de Tiempos de Espera del CBP cada 5 minutos, normaliza y deduplica los datos, y almacena observaciones en una hypertable de TimescaleDB. La API sirve tiempos de espera en vivo desde una caché Redis, y el frontend se actualiza automáticamente cada 60 segundos. Las predicciones usan medianas de día-de-la-semana × hora-del-día calculadas con los últimos 90 días de observaciones. Está pensado para personas que cruzan la frontera con regularidad: trabajadores, familias y transportistas.",
    },
    problem: {
      en: "Border crossing wait times are unpredictable. Commuters and families waste hours without knowing which port or time is optimal.",
      es: "Los tiempos de espera en los cruces fronterizos son impredecibles. Los viajeros y familias pierden horas sin saber qué puerto o horario es el óptimo.",
    },
    solution: {
      en: "A full-stack application that ingests real-time CBP data, stores historical observations, and generates predictions based on 90 days of patterns, covering 23 ports across CA, AZ, and TX.",
      es: "Una aplicación full-stack que ingiere datos del CBP en tiempo real, almacena observaciones históricas y genera predicciones basadas en 90 días de patrones, cubriendo 23 puertos en CA, AZ y TX.",
    },
    result: {
      en: "Covers 23 border ports with live updates every 60 seconds. Predictions become useful after about a week of data collection.",
      es: "Cubre 23 puertos fronterizos con actualizaciones en vivo cada 60 segundos. Las predicciones se vuelven útiles tras aproximadamente una semana de recolección de datos.",
    },
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "TimescaleDB", "Redis", "Docker"],
    category: { en: "Full-Stack Application", es: "Aplicación Full-Stack" },
    githubUrl: "https://github.com/LMBraca/BorderPulse",
    liveUrl: "https://border-pulse.com",
    status: { en: "Active Development", es: "Desarrollo Activo" },
    highlights: {
      en: [
        "Real-time data pipeline polling CBP API every 5 minutes",
        "TimescaleDB hypertable for efficient time-series storage",
        "Redis caching layer with PostgreSQL fallback",
        "Prediction engine using 90-day historical medians",
        "Covers 23 US-Mexico border ports across 3 states",
      ],
      es: [
        "Pipeline de datos en tiempo real consultando la API del CBP cada 5 minutos",
        "Hypertable de TimescaleDB para almacenamiento eficiente de series de tiempo",
        "Capa de caché Redis con respaldo en PostgreSQL",
        "Motor de predicciones usando medianas históricas de 90 días",
        "Cubre 23 puertos fronterizos México-EE.UU. en 3 estados",
      ],
    },
    role: { en: "Solo Developer", es: "Desarrollador Individual" },
    featured: true,
  },
  {
    slug: "borderpulse-mobile",
    title: "BorderPulse Mobile",
    shortDescription: {
      en: "Native mobile app for real-time border wait times with interactive maps.",
      es: "Aplicación móvil nativa para tiempos de espera fronterizos en tiempo real con mapas interactivos.",
    },
    longDescription: {
      en: "The mobile companion to BorderPulse, built with Expo and React Native. It includes interactive Mapbox maps showing all border ports, real-time wait time updates, haptic feedback, push notification support, and Sentry error tracking.",
      es: "La aplicación móvil complementaria de BorderPulse, construida con Expo y React Native. Incluye mapas interactivos de Mapbox mostrando todos los puertos fronterizos, actualizaciones de tiempos de espera en tiempo real, retroalimentación háptica, soporte para notificaciones push y seguimiento de errores con Sentry.",
    },
    problem: {
      en: "Border commuters need quick access to wait times while on the road, and a web app isn't always convenient when driving to the port.",
      es: "Los viajeros fronterizos necesitan acceso rápido a los tiempos de espera en el camino, y una app web no siempre es conveniente cuando se conduce hacia el puerto.",
    },
    solution: {
      en: "A native mobile app with Mapbox integration showing all ports on a map, with real-time updates and optimized mobile UX.",
      es: "Una aplicación móvil nativa con integración de Mapbox mostrando todos los puertos en un mapa, con actualizaciones en tiempo real y UX móvil optimizada.",
    },
    result: {
      en: "Cross-platform mobile app (iOS/Android) with interactive maps and real-time data.",
      es: "Aplicación móvil multiplataforma (iOS/Android) con mapas interactivos y datos en tiempo real.",
    },
    techStack: ["React Native", "Expo", "TypeScript", "Mapbox", "React Query", "Sentry"],
    category: { en: "Mobile App", es: "Aplicación Móvil" },
    githubUrl: "https://github.com/LMBraca/borderpulse-mobile",
    appStoreUrl: "https://apps.apple.com/mx/app/borderpulse/id6762310342?l=en-GB",
    playStorePending: true,
    status: { en: "Active Development", es: "Desarrollo Activo" },
    highlights: {
      en: [
        "Interactive Mapbox maps with all border port locations",
        "Cross-platform iOS and Android support via Expo",
        "React Query for efficient data fetching and caching",
        "Sentry integration for error tracking",
        "Haptic feedback throughout the interface",
      ],
      es: [
        "Mapas interactivos de Mapbox con ubicaciones de todos los puertos",
        "Soporte multiplataforma iOS y Android con Expo",
        "React Query para fetching y caché de datos eficiente",
        "Integración de Sentry para seguimiento de errores",
        "Retroalimentación háptica en toda la interfaz",
      ],
    },
    role: { en: "Solo Developer", es: "Desarrollador Individual" },
    featured: true,
  },
  {
    slug: "cmdgui",
    title: "cmdgui",
    shortDescription: {
      en: "A terminal TUI for discovering, browsing, and composing CLI commands.",
      es: "Una interfaz TUI de terminal para descubrir, explorar y componer comandos CLI.",
    },
    longDescription: {
      en: "Instead of googling flags or re-reading man pages, cmdgui gives you a searchable, browsable interface for any CLI tool installed on your system. Add a tool by name, and cmdgui parses its --help output to extract commands, flags, and options, then presents them in a browsable TUI. Optionally configure an AI provider (Anthropic, OpenAI, or local via Ollama) to generate practical examples, common errors, and usage tips. Ships with curated Git documentation.",
      es: "En lugar de buscar flags en Google o releer páginas man, cmdgui ofrece una interfaz navegable y buscable para cualquier herramienta CLI instalada en tu sistema. Agrega una herramienta por nombre y cmdgui analiza su salida --help para extraer comandos, flags y opciones, presentándolos en una TUI navegable. Opcionalmente configura un proveedor de IA (Anthropic, OpenAI, o local con Ollama) para generar ejemplos prácticos, errores comunes y tips de uso.",
    },
    problem: {
      en: "CLI tools have hundreds of flags and options. Developers waste time googling syntax and re-reading man pages for tools they already have installed.",
      es: "Las herramientas CLI tienen cientos de flags y opciones. Los desarrolladores pierden tiempo buscando sintaxis y releyendo páginas man para herramientas que ya tienen instaladas.",
    },
    solution: {
      en: "A terminal UI that auto-discovers flags from --help output, provides fuzzy search, command composition with clipboard copy, and optional AI-powered examples.",
      es: "Una interfaz de terminal que auto-descubre flags desde --help, proporciona búsqueda fuzzy, composición de comandos con copia al portapapeles, y ejemplos opcionales con IA.",
    },
    result: {
      en: "Works with any CLI tool that supports --help, including ffmpeg, docker, kubectl, and curl.",
      es: "Funciona con cualquier herramienta CLI que soporte --help, incluyendo ffmpeg, docker, kubectl y curl.",
    },
    techStack: ["TypeScript", "React", "Ink", "Fuse.js", "Node.js"],
    category: { en: "Developer Tool", es: "Herramienta de Desarrollo" },
    githubUrl: "https://github.com/LMBraca/cmdgui",
    status: { en: "Released", es: "Publicado" },
    highlights: {
      en: [
        "Parses --help output from any installed CLI tool",
        "Fuzzy search across tools and commands with Fuse.js",
        "Command composer that toggles flags, previews output, and copies to clipboard",
        "AI integration (Anthropic, OpenAI, Ollama) for examples and error fixes",
        "Built with Ink (React for the terminal)",
      ],
      es: [
        "Analiza la salida --help de cualquier herramienta CLI instalada",
        "Búsqueda fuzzy entre herramientas y comandos con Fuse.js",
        "Compositor de comandos que activa flags, previsualiza la salida y copia al portapapeles",
        "Integración con IA (Anthropic, OpenAI, Ollama) para ejemplos y solución de errores",
        "Construido con Ink (React para la terminal)",
      ],
    },
    role: { en: "Solo Developer", es: "Desarrollador Individual" },
    featured: true,
  },
  {
    slug: "bracabudget",
    title: "BracaBudget",
    shortDescription: {
      en: "iOS personal finance app built with SwiftUI and SwiftData.",
      es: "Aplicación iOS de finanzas personales construida con SwiftUI y SwiftData.",
    },
    longDescription: {
      en: "A native iOS budgeting application for tracking transactions, managing categories, setting savings goals, and monitoring recurring bills. Built with SwiftUI and SwiftData for local persistence. It includes an onboarding flow, a dashboard with budget calculations, CSV import/export, home screen widgets for quick expense tracking, and Siri Shortcuts integration.",
      es: "Una aplicación nativa iOS de presupuestos para rastrear transacciones, administrar categorías, establecer metas de ahorro y monitorear pagos recurrentes. Construida con SwiftUI y SwiftData para persistencia local. Incluye flujo de onboarding, dashboard con cálculos de presupuesto, importación/exportación CSV, widgets en la pantalla de inicio e integración con Siri Shortcuts.",
    },
    problem: {
      en: "Most budgeting apps are either too complex or require subscriptions. I wanted a simple, private, offline-first tool to track spending.",
      es: "La mayoría de las apps de presupuesto son demasiado complejas o requieren suscripción. Quería una herramienta simple, privada y offline para rastrear gastos.",
    },
    solution: {
      en: "A native iOS app with SwiftData for local-first storage, widgets for quick entry, and a clean dashboard showing budget health at a glance.",
      es: "Una app nativa iOS con SwiftData para almacenamiento local, widgets para entrada rápida, y un dashboard limpio que muestra la salud del presupuesto de un vistazo.",
    },
    result: {
      en: "A working iOS app with widgets, Siri Shortcuts, and CSV import/export. No subscription required.",
      es: "Una app iOS funcional con widgets, Siri Shortcuts e importación/exportación CSV. Sin suscripción.",
    },
    techStack: ["Swift", "SwiftUI", "SwiftData", "WidgetKit", "Siri Shortcuts"],
    category: { en: "iOS App", es: "Aplicación iOS" },
    githubUrl: "https://github.com/LMBraca/BracaBudget",
    appStoreUrl: "https://apps.apple.com/mx/app/bracabudget/id6763797025?l=en-GB",
    status: { en: "Released", es: "Publicado" },
    highlights: {
      en: [
        "Native SwiftUI interface with SwiftData persistence",
        "iOS home screen widgets for quick expense tracking",
        "Siri Shortcuts integration for voice-based expense entry",
        "CSV import/export for data portability",
        "Savings goals tracking and recurring bill management",
      ],
      es: [
        "Interfaz nativa SwiftUI con persistencia SwiftData",
        "Widgets de pantalla de inicio iOS para rastreo rápido de gastos",
        "Integración con Siri Shortcuts para entrada de gastos por voz",
        "Importación/exportación CSV para portabilidad de datos",
        "Seguimiento de metas de ahorro y gestión de pagos recurrentes",
      ],
    },
    role: { en: "Solo Developer", es: "Desarrollador Individual" },
    featured: true,
  },
  {
    slug: "homelab",
    title: "Homelab",
    shortDescription: {
      en: "Self-hosted infrastructure with Docker, Home Assistant, and a 3D digital twin dashboard.",
      es: "Infraestructura autoalojada con Docker, Home Assistant y un dashboard de gemelo digital 3D.",
    },
    longDescription: {
      en: "A personal homelab running on Ubuntu 22.04, accessed via Tailscale. It runs 10+ Docker services including Home Assistant for IoT, a Mosquitto MQTT broker, a custom Flask dashboard API, Nextcloud for file storage, Glances for monitoring, and Caddy as a reverse proxy. It also includes a Three.js 3D digital twin viewer that renders the house layout and integrates with Home Assistant to show real-time device states, plus an automated backup system running on a separate server.",
      es: "Un homelab personal corriendo en Ubuntu 22.04, accesible vía Tailscale. Ejecuta 10+ servicios Docker, entre ellos Home Assistant para IoT, un broker MQTT Mosquitto, una API de dashboard en Flask, Nextcloud para almacenamiento, Glances para monitoreo y Caddy como reverse proxy. También incluye un visor 3D de gemelo digital en Three.js que renderiza el plano de la casa y se integra con Home Assistant para mostrar estados de dispositivos en tiempo real, además de un sistema de respaldo automatizado en un servidor aparte.",
    },
    problem: {
      en: "Managing smart home devices, file storage, and server monitoring across multiple services is fragmented and hard to visualize.",
      es: "Administrar dispositivos inteligentes, almacenamiento de archivos y monitoreo de servidores en múltiples servicios es fragmentado y difícil de visualizar.",
    },
    solution: {
      en: "A unified Docker-based infrastructure with a custom Flask dashboard API, Three.js 3D viewer for the home layout, and automated backups on a secondary server.",
      es: "Una infraestructura unificada basada en Docker con una API de dashboard Flask personalizada, visor 3D Three.js del plano de la casa, y respaldos automatizados en un servidor secundario.",
    },
    result: {
      en: "10+ services managed via Docker Compose with a unified dashboard, 3D digital twin, and automated daily backups.",
      es: "10+ servicios administrados con Docker Compose, dashboard unificado, gemelo digital 3D, y respaldos diarios automatizados.",
    },
    techStack: ["Docker", "Flask", "Three.js", "Home Assistant", "Tailscale", "Caddy", "Nextcloud", "SQLite"],
    category: { en: "Infrastructure / DevOps", es: "Infraestructura / DevOps" },
    githubUrl: "https://github.com/LMBraca/homelab",
    status: { en: "Active", es: "Activo" },
    highlights: {
      en: [
        "10+ Docker services orchestrated with Docker Compose",
        "Three.js 3D digital twin viewer integrated with Home Assistant",
        "Custom Flask dashboard API aggregating Glances, Tailscale, and HA data",
        "Caddy reverse proxy with HTTP basic auth",
        "Automated Nextcloud backups to a secondary server",
      ],
      es: [
        "10+ servicios Docker orquestados con Docker Compose",
        "Visor 3D de gemelo digital con Three.js integrado con Home Assistant",
        "API de dashboard Flask agregando datos de Glances, Tailscale y HA",
        "Reverse proxy Caddy con autenticación HTTP básica",
        "Respaldos automatizados de Nextcloud a un servidor secundario",
      ],
    },
    role: { en: "Solo Developer", es: "Desarrollador Individual" },
    featured: true,
    subprojects: [
      {
        title: "Homelab Backup",
        description: {
          en: "Dedicated backup server on separate hardware. Flask HTTP API for remote-triggered Nextcloud backups, with live progress tracking, systemd service, and daily cron schedule.",
          es: "Servidor de respaldo dedicado en hardware separado. API HTTP Flask para respaldos remotos de Nextcloud, con seguimiento de progreso en vivo, servicio systemd y cron diario.",
        },
        githubUrl: "https://github.com/LMBraca/homelab-backup",
      },
    ],
  },
  {
    slug: "baja-solutions",
    title: "Baja Solutions",
    shortDescription: {
      en: "Real estate website built for a client with property listings and interactive maps.",
      es: "Sitio web inmobiliario construido para un cliente con listados de propiedades y mapas interactivos.",
    },
    longDescription: {
      en: "A real estate website built for a client in Baja California. Features property listings with image carousels, interactive maps using Leaflet and Google Maps, Firebase backend for data storage, and contact forms with reCAPTCHA protection. Built with React and Vite on the frontend with a Node.js API backend.",
      es: "Un sitio web inmobiliario construido para un cliente en Baja California. Incluye listados de propiedades con carruseles de imágenes, mapas interactivos usando Leaflet y Google Maps, backend Firebase para almacenamiento de datos, y formularios de contacto con protección reCAPTCHA. Construido con React y Vite en el frontend con una API backend en Node.js.",
    },
    problem: {
      en: "The client needed a modern web presence to showcase their real estate listings with interactive maps and easy-to-update property data.",
      es: "El cliente necesitaba una presencia web moderna para mostrar sus listados inmobiliarios con mapas interactivos y datos de propiedades fáciles de actualizar.",
    },
    solution: {
      en: "A responsive React SPA with Leaflet/Google Maps integration, Swiper image carousels, Firebase for content management, and reCAPTCHA-protected contact forms.",
      es: "Una SPA responsive en React con integración de Leaflet/Google Maps, carruseles de imágenes Swiper, Firebase para gestión de contenido, y formularios de contacto protegidos con reCAPTCHA.",
    },
    result: {
      en: "Delivered a production website for the client with property listings, maps, and contact functionality.",
      es: "Se entregó un sitio web en producción al cliente con listados de propiedades, mapas y funcionalidad de contacto.",
    },
    techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Firebase", "Leaflet", "Google Maps"],
    category: { en: "Client Project", es: "Proyecto para Cliente" },
    githubUrl: "https://github.com/LMBraca/baja-solutions",
    liveUrl: "https://bajasolutions.org/",
    status: { en: "Delivered", es: "Entregado" },
    highlights: {
      en: [
        "Interactive property maps with Leaflet and Google Maps",
        "Image carousels with Swiper for property galleries",
        "Firebase backend for real-time property data",
        "reCAPTCHA-protected contact forms",
        "Responsive design with Tailwind CSS",
      ],
      es: [
        "Mapas interactivos de propiedades con Leaflet y Google Maps",
        "Carruseles de imágenes con Swiper para galerías de propiedades",
        "Backend Firebase para datos de propiedades en tiempo real",
        "Formularios de contacto protegidos con reCAPTCHA",
        "Diseño responsive con Tailwind CSS",
      ],
    },
    role: { en: "Solo Developer", es: "Desarrollador Individual" },
    featured: false,
  },
  {
    slug: "simpleports",
    title: "simpleports",
    shortDescription: {
      en: "A small CLI for checking and killing processes bound to local ports.",
      es: "Una CLI compacta para verificar y terminar procesos en puertos locales.",
    },
    longDescription: {
      en: "Faster to type than lsof flags. A cross-platform CLI tool that lists all ports in use, shows what process is using a specific port, and can kill it with a single command. Works on macOS, Linux, and Windows with automatic platform detection. Uses psutil for process management with lsof/netstat fallback.",
      es: "Más rápido que escribir flags de lsof. Una herramienta CLI multiplataforma que lista todos los puertos en uso, muestra qué proceso está usando un puerto específico, y puede terminarlo con un solo comando. Funciona en macOS, Linux y Windows con detección automática de plataforma.",
    },
    problem: {
      en: "Checking and killing processes on ports means remembering lsof flags or netstat syntax, which gets tedious during development.",
      es: "Verificar y terminar procesos en puertos implica recordar flags de lsof o sintaxis de netstat, lo cual se vuelve tedioso durante el desarrollo.",
    },
    solution: {
      en: "A simple CLI wrapper: `ports 3000` shows what's there, `ports 3000 kill` ends it. Cross-platform with automatic detection.",
      es: "Un wrapper CLI simple: `ports 3000` muestra qué hay ahí, `ports 3000 kill` lo termina. Multiplataforma con detección automática.",
    },
    result: {
      en: "Single-command port management that works across macOS, Linux, and Windows.",
      es: "Gestión de puertos con un solo comando que funciona en macOS, Linux y Windows.",
    },
    techStack: ["Python", "psutil"],
    category: { en: "Developer Tool", es: "Herramienta de Desarrollo" },
    githubUrl: "https://github.com/LMBraca/simpleports",
    status: { en: "Released", es: "Publicado" },
    highlights: {
      en: [
        "Simple syntax: ports, ports 3000, ports 3000 kill",
        "Cross-platform: macOS, Linux, Windows",
        "Automatic platform detection with appropriate system calls",
      ],
      es: [
        "Sintaxis simple: ports, ports 3000, ports 3000 kill",
        "Multiplataforma: macOS, Linux, Windows",
        "Detección automática de plataforma con llamadas al sistema apropiadas",
      ],
    },
    role: { en: "Solo Developer", es: "Desarrollador Individual" },
    featured: false,
  },
];

// Merge filesystem-discovered media into each project. Generated at build
// time by scripts/generateProjectMedia.mjs.
for (const p of projects) {
  const m = projectMedia[p.slug];
  if (!m) continue;
  if (m.cover) p.image = m.cover;
  if (m.screenshots.length) p.screenshots = m.screenshots;
  if (m.videos.length) p.videos = m.videos;
}

/*
  Adding a new project:
  1. Add an object to the `projects` array above.
  2. Fill in all required fields. Use an existing project as a template.
  3. Set `featured: true` to include it in the main showcase.
  4. Create folders /public/images/projects/<slug>/ and /public/videos/projects/<slug>/.
  5. Drop media in:
       Images: cover.png, 1.png, 2.png, ...
       Videos: 1.mp4, 2.mp4, ...
     Media is auto-discovered on `npm run dev` and `npm run build`.
  6. The project appears at /projects/<slug>.
*/
