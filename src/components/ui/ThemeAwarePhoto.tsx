"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface ThemeAwarePhotoProps {
  lightModeVideo: string;
  darkModeVideo: string;
  poster: string;
  onReady?: () => void;
}

export default function ThemeAwarePhoto({
  lightModeVideo,
  darkModeVideo,
  poster,
  onReady,
}: ThemeAwarePhotoProps) {
  const { theme } = useTheme();
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState<"none" | "light" | "dark">("none");
  const lightRef = useRef<HTMLVideoElement>(null);
  const darkRef = useRef<HTMLVideoElement>(null);
  const onReadyRef = useRef(onReady);
  const prevThemeRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  useEffect(() => {
    let cancelled = false;
    const sources = [lightModeVideo, darkModeVideo];
    let loaded = 0;
    const done = () => {
      if (cancelled) return;
      loaded++;
      if (loaded === sources.length) {
        setReady(true);
        onReadyRef.current?.();
      }
    };
    sources.forEach((src) => {
      fetch(src)
        .then((res) => res.blob())
        .then(done)
        .catch(done);
    });
    return () => {
      cancelled = true;
    };
  }, [lightModeVideo, darkModeVideo]);

  useEffect(() => {
    if (!ready || !theme) return;

    if (prevThemeRef.current === undefined) {
      prevThemeRef.current = theme;
      return;
    }
    if (prevThemeRef.current === theme) return;
    prevThemeRef.current = theme;

    const next = theme === "light" ? "light" : "dark";
    const v = next === "light" ? lightRef.current : darkRef.current;
    setActive(next);
    if (!v) return;
    try {
      v.currentTime = 0;
    } catch {}
    v.play().catch(() => {});
  }, [theme, ready]);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
      <img
        src={poster}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-contain"
      />
      {ready && (
        <>
          <video
            ref={lightRef}
            src={lightModeVideo}
            poster={poster}
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-150 ${
              active === "light" ? "opacity-100" : "opacity-0"
            }`}
          />
          <video
            ref={darkRef}
            src={darkModeVideo}
            poster={poster}
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-150 ${
              active === "dark" ? "opacity-100" : "opacity-0"
            }`}
          />
        </>
      )}
    </div>
  );
}
