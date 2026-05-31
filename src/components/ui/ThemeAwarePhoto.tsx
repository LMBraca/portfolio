"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface ThemeAwarePhotoProps {
  lightModeVideo: string;
  darkModeVideo: string;
}

export default function ThemeAwarePhoto({
  lightModeVideo,
  darkModeVideo,
}: ThemeAwarePhotoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInitialRef = useRef(true);

  useEffect(() => {
    const preloadVideo = (src: string) => {
      const v = document.createElement("video");
      v.src = src;
      v.preload = "auto";
    };
    preloadVideo(lightModeVideo);
    preloadVideo(darkModeVideo);
    setMounted(true);
  }, [lightModeVideo, darkModeVideo]);

  useEffect(() => {
    if (!mounted || !videoRef.current || !theme) return;

    const video = videoRef.current;
    const videoSrc = theme === "light" ? lightModeVideo : darkModeVideo;
    const isInitial = isInitialRef.current;
    isInitialRef.current = false;

    video.src = videoSrc;

    const handleLoaded = () => {
      if (isInitial) {
        video.currentTime = video.duration;
      } else {
        video.currentTime = 0;
        video.play().catch(() => {
          video.currentTime = video.duration;
        });
      }
    };

    video.addEventListener("loadedmetadata", handleLoaded, { once: true });

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, [theme, mounted, lightModeVideo, darkModeVideo]);

  if (!mounted) {
    return (
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl md:aspect-auto md:h-full" />
    );
  }

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl md:aspect-auto md:h-full">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-contain"
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}
