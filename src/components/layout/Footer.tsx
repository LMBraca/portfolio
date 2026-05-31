"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-neutral-200 bg-white py-8 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="container-narrow flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          &copy; {new Date().getFullYear()} Luis Mario Bracamontes
        </p>
        <p className="text-sm text-neutral-400 dark:text-neutral-600">
          {t.footer.built}
        </p>
      </div>
    </footer>
  );
}
