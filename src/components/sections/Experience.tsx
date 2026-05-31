"use client";

import { useLanguage } from "@/context/LanguageContext";
import { experience, education } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Experience() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="experience"
      className="section-padding bg-neutral-50 dark:bg-neutral-900/50"
    >
      <div className="container-narrow">
        <SectionHeading title={t.experience.title} />

        {/* Timeline */}
        <div className="relative space-y-8 md:space-y-12">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-blue-500/60 via-neutral-200 to-transparent dark:via-neutral-800" />

          {experience.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 0.1}>
              <div className="group relative pl-8 md:pl-10">
                {/* Dot */}
                <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-[3px] border-blue-600 bg-white dark:border-blue-400 dark:bg-neutral-950" />

                <div className="rounded-2xl border border-neutral-200 bg-white p-5 transition-colors dark:border-neutral-800 dark:bg-neutral-900 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                        {job.role[lang]}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                        {job.company}{" "}
                        <span className="text-neutral-400 dark:text-neutral-600">
                          — {job.industry[lang]}
                        </span>
                      </p>
                    </div>
                    <div className="text-right text-sm text-neutral-500 dark:text-neutral-500">
                      <p>{job.period}</p>
                      <p className="text-xs text-neutral-400 dark:text-neutral-600">
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.bullets[lang].map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Education */}
        <ScrollReveal className="mt-16">
          <h3 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-white">
            {t.experience.education}
          </h3>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {education.degree[lang]}
                </h4>
                <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {education.institution}
                </p>
              </div>
              <div className="text-right text-sm text-neutral-500">
                <p>{education.period}</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-600">
                  {education.location}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Download Resume */}
        <ScrollReveal className="mt-10 text-center">
          <a
            href="/LuisMarioBracamontes.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3 text-sm font-semibold text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            {t.experience.downloadResume}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
