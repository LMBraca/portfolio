"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import TechBadge from "./TechBadge";
import ScrollReveal from "./ScrollReveal";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { lang, t } = useLanguage();
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = project.image && !imageFailed;

  return (
    <ScrollReveal delay={index * 0.1}>
      <Link
        href={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
      >
        {/* Cover image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          {showImage ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImageFailed(true)}
              className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-neutral-400 dark:text-neutral-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                  </svg>
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                  Screenshot
                </span>
              </div>
            </div>
          )}
          {/* Category badge */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur-sm dark:bg-neutral-900/90 dark:text-neutral-300">
              {project.category[lang]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {project.shortDescription[lang]}
          </p>

          {/* Tech stack */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
            {project.techStack.length > 5 && (
              <span className="inline-block rounded-full px-2.5 py-1 text-xs text-neutral-500 dark:text-neutral-500">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-neutral-800">
            <span className="text-xs text-neutral-500 dark:text-neutral-500">
              {project.status[lang]}
            </span>
            <span className="text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-500 dark:text-blue-400">
              {t.projects.viewProject} →
            </span>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}
