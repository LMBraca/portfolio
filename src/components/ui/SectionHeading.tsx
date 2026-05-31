"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-12 md:mb-20">
      <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        {title}
        <span className="text-blue-600 dark:text-blue-400">.</span>
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
