"use client";

import { useLanguage } from "@/context/LanguageContext";
import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Skills() {
  const { lang, t } = useLanguage();

  return (
    <section id="skills" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container-narrow">
        <SectionHeading title={t.skills.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.name.en} delay={i * 0.08}>
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {category.name[lang]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
