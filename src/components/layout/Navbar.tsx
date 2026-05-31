"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/ui/LanguageToggle";

const navLinks = ["about", "skills", "projects", "experience", "contact"] as const;

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkHref = (link: string) => (isHome ? `#${link}` : `/#${link}`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-neutral-200/60 bg-white/80 backdrop-blur-xl dark:border-neutral-800/60 dark:bg-neutral-950/80"
            : "bg-transparent"
        }`}
      >
        <div className="container-narrow flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setMobileOpen(false);
            }}
          >
            LMB
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={linkHref(link)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                {t.nav[link]}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/80 dark:hover:bg-neutral-700 md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex w-4 flex-col gap-1">
                <span
                  className={`h-0.5 w-full rounded-full bg-neutral-600 transition-all dark:bg-neutral-400 ${
                    mobileOpen ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-neutral-600 transition-all dark:bg-neutral-400 ${
                    mobileOpen ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl dark:bg-neutral-950/95 md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={linkHref(link)}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-neutral-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  {t.nav[link]}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
