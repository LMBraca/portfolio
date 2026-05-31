"use client";

import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedProjects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
