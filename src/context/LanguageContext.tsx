"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import translations, { Language, TranslationStrings } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationStrings;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Language | null;
    if (saved && (saved === "en" || saved === "es")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("portfolio-lang", newLang);
    document.documentElement.lang = newLang;
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
