"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      className="flex h-9 items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-3 text-sm font-medium text-neutral-600 backdrop-blur-sm transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-400 dark:hover:bg-neutral-700"
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
    >
      <span className={lang === "en" ? "text-neutral-900 dark:text-white" : ""}>
        EN
      </span>
      <span className="text-neutral-300 dark:text-neutral-600">/</span>
      <span className={lang === "es" ? "text-neutral-900 dark:text-white" : ""}>
        ES
      </span>
    </button>
  );
}
