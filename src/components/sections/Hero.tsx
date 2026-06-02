"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="hero-gradient grid-overlay absolute inset-0" />

      <div className="container-narrow relative z-10 py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-sm font-medium tracking-widest text-blue-600 dark:text-blue-400 sm:text-base"
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t.hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-4 text-2xl font-semibold tracking-tight text-neutral-700 dark:text-neutral-300 sm:text-3xl md:text-4xl"
        >
          {t.hero.headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 dark:shadow-blue-600/15 dark:hover:shadow-blue-600/25"
          >
            {t.hero.cta.projects}
          </a>
          <div className="flex gap-3 sm:contents">
            <a
              href="/LuisMarioBracamontes.pdf"
              download
              className="inline-flex flex-1 items-center justify-center rounded-full border border-neutral-300 bg-white px-7 py-3 text-sm font-semibold text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 sm:flex-none"
            >
              {t.hero.cta.resume}
            </a>
            <a
              href="#contact"
              className="inline-flex flex-1 items-center justify-center rounded-full border border-neutral-300 bg-white px-7 py-3 text-sm font-semibold text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 sm:flex-none"
            >
              {t.hero.cta.contact}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-neutral-300 p-1.5 dark:border-neutral-700"
        >
          <motion.div className="h-2 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
