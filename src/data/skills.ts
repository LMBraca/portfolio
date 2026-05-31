export interface SkillCategory {
  name: { en: string; es: string };
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: { en: "Languages", es: "Lenguajes" },
    skills: ["Python", "JavaScript", "TypeScript", "C#", "Java", "Swift"],
  },
  {
    name: { en: "Frontend", es: "Frontend" },
    skills: ["React", "Next.js", "React Native (Expo)", "SwiftUI", "HTML/CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: { en: "Backend", es: "Backend" },
    skills: ["ASP.NET", "Node.js", "FastAPI", "Flask", "REST APIs", "OAuth2/JWT"],
  },
  {
    name: { en: "Databases", es: "Bases de Datos" },
    skills: ["PostgreSQL", "TimescaleDB", "SQL Server", "MongoDB", "SQLite", "Redis"],
  },
  {
    name: { en: "Cloud & DevOps", es: "Nube y DevOps" },
    skills: ["Azure", "AWS", "Docker", "CI/CD", "Tailscale", "Caddy", "systemd"],
  },
  {
    name: { en: "Tools & Platforms", es: "Herramientas y Plataformas" },
    skills: ["Git", "Firebase", "Mapbox", "Leaflet", "Three.js", "Home Assistant", "Sentry"],
  },
];
