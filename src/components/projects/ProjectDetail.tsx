"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import TechBadge from "@/components/ui/TechBadge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MediaCarousel, { type MediaItem } from "@/components/ui/MediaCarousel";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProjectDetail({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Project not found
            </p>
            <Link
              href="/#projects"
              className="mt-6 inline-block text-blue-600 hover:underline dark:text-blue-400"
            >
              {t.projectDetail.back}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const currentIndex = projects.indexOf(project);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const media: MediaItem[] = [];
  for (const src of project.videos ?? []) {
    media.push({ type: "video", src });
  }
  const seen = new Set<string>();
  for (const src of [
    ...(project.image ? [project.image] : []),
    ...(project.screenshots ?? []),
  ]) {
    if (!seen.has(src)) {
      seen.add(src);
      media.push({ type: "image", src });
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="container-narrow">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
              </svg>
              {t.projectDetail.back}
            </Link>
          </motion.div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                {project.category[lang]}
              </span>
              <span className="text-xs text-neutral-500">
                {project.status[lang]}
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
              {project.shortDescription[lang]}
            </p>

            {/* Tech stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} size="md" />
              ))}
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700"
                >
                  {t.projectDetail.visitSite} →
                </a>
              )}
              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  App Store
                </a>
              )}
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199 2.807 1.626a1 1 0 0 1 0 1.732l-2.808 1.626L15.21 12l2.488-2.492zM5.864 2.658 16.802 8.99l-2.302 2.302-8.636-8.634z" />
                  </svg>
                  Play Store
                </a>
              )}
              
            </div>
          </motion.div>

          {media.length > 0 && (
            <ScrollReveal className="mt-12">
              <MediaCarousel items={media} title={project.title} />
            </ScrollReveal>
          )}

          {/* Content grid */}
          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {t.projectDetail.overview}
                </h2>
                <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {project.longDescription[lang]}
                </p>
              </ScrollReveal>

              {/* Problem / Solution / Result */}
              <div className="mt-12 space-y-10">
                <ScrollReveal>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {t.projectDetail.problem}
                  </h3>
                  <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {project.problem[lang]}
                  </p>
                </ScrollReveal>

                <ScrollReveal>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {t.projectDetail.solution}
                  </h3>
                  <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {project.solution[lang]}
                  </p>
                </ScrollReveal>

                <ScrollReveal>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {t.projectDetail.result}
                  </h3>
                  <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {project.result[lang]}
                  </p>
                </ScrollReveal>
              </div>

              {/* Highlights */}
              <ScrollReveal className="mt-12">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {t.projectDetail.highlights}
                </h3>
                <ul className="mt-4 space-y-3">
                  {project.highlights[lang].map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              {/* Subprojects */}
              {project.subprojects && project.subprojects.length > 0 && (
                <ScrollReveal className="mt-12">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {t.projectDetail.subprojects}
                  </h3>
                  <div className="mt-4 space-y-4">
                    {project.subprojects.map((sub) => (
                      <div
                        key={sub.title}
                        className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="font-semibold text-neutral-900 dark:text-white">
                            {sub.title}
                          </h4>
                          {sub.githubUrl && (
                            <a
                              href={sub.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                              aria-label={`${sub.title} on GitHub`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                              GitHub
                            </a>
                          )}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {sub.description[lang]}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              )}

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <ScrollReveal>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {t.projectDetail.role}
                    </h4>
                    <p className="mt-2 font-medium text-neutral-900 dark:text-white">
                      {project.role[lang]}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {t.projectDetail.status}
                    </h4>
                    <p className="mt-2 font-medium text-neutral-900 dark:text-white">
                      {project.status[lang]}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {t.projectDetail.techStack}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Project navigation */}
          <div className="mb-16 mt-20 flex items-center justify-between border-t border-neutral-200 pt-8 dark:border-neutral-800">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group text-left"
              >
                <span className="text-xs text-neutral-500">Previous</span>
                <p className="text-sm font-semibold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  ← {prevProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group text-right"
              >
                <span className="text-xs text-neutral-500">Next</span>
                <p className="text-sm font-semibold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {nextProject.title} →
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
