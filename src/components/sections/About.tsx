"use client";

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ThemeAwarePhoto from "@/components/ui/ThemeAwarePhoto";

function PhotoThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-11" aria-hidden />;
  }

  const isDark = theme === "dark";
  const nextLabel = isDark ? "Light mode" : "Dark mode";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 text-sm font-medium text-neutral-700 shadow-sm transition-colors active:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:active:bg-neutral-800"
      aria-label={`Switch to ${nextLabel.toLowerCase()}`}
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.06 1.06l1.06 1.06z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clipRule="evenodd" />
        </svg>
      )}
      <span>{nextLabel}</span>
    </button>
  );
}

export default function About() {
  const { t } = useLanguage();
  const [videosReady, setVideosReady] = useState(false);
  const handleReady = useCallback(() => setVideosReady(true), []);

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
          <ScrollReveal delay={0.2} className="md:col-span-2">
            <ThemeAwarePhoto
              lightModeVideo="/about/sunglasses-on.mp4"
              darkModeVideo="/about/sunglasses-off.mp4"
              poster="/about/sunglasses-off-poster.jpg"
              onReady={handleReady}
            />
            <div className="mt-4 flex h-11 justify-center">
              {videosReady && <PhotoThemeToggle />}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
