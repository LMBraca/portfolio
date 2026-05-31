"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ThemeAwarePhoto from "@/components/ui/ThemeAwarePhoto";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Heading + Text */}
          <div className="md:col-span-3">
            <SectionHeading title={t.about.title} />
            <ScrollReveal>
              <div className="space-y-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Theme-aware animated photo */}
          <ScrollReveal delay={0.2} className="md:col-span-2 h-full">
            <ThemeAwarePhoto
              lightModeVideo="/about/sunglasses-on.mp4"
              darkModeVideo="/about/sunglasses-off.mp4"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
