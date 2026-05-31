"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slideVariants = {
  enter: (dir: number) => ({ x: `${dir * 100}%`, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: `${dir * -100}%`, opacity: 0 }),
};

export interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface MediaCarouselProps {
  items: MediaItem[];
  title?: string;
}

export default function MediaCarousel({ items, title }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [aspects, setAspects] = useState<Record<number, number>>({});

  useEffect(() => {
    let cancelled = false;
    const update = (idx: number, ratio: number) => {
      if (cancelled || !Number.isFinite(ratio) || ratio <= 0) return;
      setAspects((prev) => (prev[idx] === ratio ? prev : { ...prev, [idx]: ratio }));
    };
    items.forEach((item, idx) => {
      if (item.type === "image") {
        const img = new window.Image();
        img.onload = () => update(idx, img.naturalWidth / img.naturalHeight);
        img.src = item.src;
      } else {
        const v = document.createElement("video");
        v.preload = "metadata";
        v.onloadedmetadata = () => update(idx, v.videoWidth / v.videoHeight);
        v.src = item.src;
      }
    });
    return () => {
      cancelled = true;
    };
  }, [items]);

  const currentAspect = aspects[currentIndex] ?? 16 / 9;
  const isPortrait = currentAspect < 1;

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  }, [items.length]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  }, [items.length]);

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > currentIndex ? 1 : -1);
      setCurrentIndex(i);
    },
    [currentIndex],
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = original;
    };
  }, [lightboxOpen, goPrev, goNext]);

  useEffect(() => {
    const handleFullscreen = () => {
      const fsElement =
        document.fullscreenElement ??
        (document as Document & { webkitFullscreenElement?: Element })
          .webkitFullscreenElement;

      const orientation = screen.orientation as ScreenOrientation & {
        lock?: (o: string) => Promise<void>;
      };

      if (fsElement && fsElement.tagName === "VIDEO") {
        orientation?.lock?.("landscape").catch(() => {});
      } else {
        orientation?.unlock?.();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreen);
    document.addEventListener("webkitfullscreenchange", handleFullscreen);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreen);
      document.removeEventListener("webkitfullscreenchange", handleFullscreen);
    };
  }, []);

  if (items.length === 0) return null;

  const current = items[currentIndex];

  return (
    <>
      <div className="relative px-0 sm:px-14">
        <div
          className="relative mx-auto overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 transition-[aspect-ratio,max-width] duration-300 dark:border-neutral-800 dark:bg-neutral-900"
          style={{
            aspectRatio: currentAspect,
            maxWidth: isPortrait ? "22rem" : "100%",
          }}
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                opacity: { duration: 0.25 },
              }}
              className="absolute inset-0"
            >
              {current.type === "image" ? (
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="block h-full w-full cursor-zoom-in"
                  aria-label="Enlarge image"
                >
                  <img
                    src={current.src}
                    alt={title ? `${title} ${currentIndex + 1}` : `Media ${currentIndex + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              ) : (
                <video
                  key={current.src}
                  src={current.src}
                  className="h-full w-full object-contain"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60 sm:bg-transparent sm:text-neutral-500 sm:backdrop-blur-none sm:hover:bg-transparent sm:hover:text-neutral-900 dark:sm:text-neutral-400 dark:sm:hover:text-white"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 sm:h-7 sm:w-7">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60 sm:bg-transparent sm:text-neutral-500 sm:backdrop-blur-none sm:hover:bg-transparent sm:hover:text-neutral-900 dark:sm:text-neutral-400 dark:sm:hover:text-white"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 sm:h-7 sm:w-7">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex
                  ? "w-6 bg-blue-600 dark:bg-blue-400"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600"
              }`}
              aria-label={`Go to ${item.type} ${i + 1}`}
            />
          ))}
        </div>
      )}

      {lightboxOpen && current.type === "image" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>

          <img
            src={current.src}
            alt={title ?? "Enlarged"}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {items.filter((it) => it.type === "image").length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                aria-label="Previous"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                aria-label="Next"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
