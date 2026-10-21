"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export interface GalleryImage {
  url: string;
  caption?: string;
  aspect?: "16:9" | "9:16";
}

interface ProjectGalleryCarouselProps {
  title?: string;
  badge?: string;
  images: (string | GalleryImage)[];
  aspectRatio?: "16:9" | "9:16";
  className?: string;
}

export function ProjectGalleryCarousel({
  title,
  badge,
  images,
  aspectRatio = "16:9",
  className = "",
}: ProjectGalleryCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Normalize image data
  const normalizedImages: GalleryImage[] = images.map((img) =>
    typeof img === "string" ? { url: img, aspect: aspectRatio } : { aspect: aspectRatio, ...img }
  );

  const total = normalizedImages.length;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + total) % total : null));
  }, [selectedIndex, total]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % total : null));
  }, [selectedIndex, total]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation listener (Arrow Left, Arrow Right, Escape)
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext, handleClose]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  if (total === 0) return null;

  return (
    <div className={`w-full my-8 ${className}`}>
      {/* Header section with title, badge and carousel controls */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2.5">
          {badge && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-pink-500/10 text-pink-400 border border-pink-500/20">
              {badge}
            </span>
          )}
          {title && (
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {title}
            </h4>
          )}
        </div>

        {total > 2 && (
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all shadow-sm"
              title="Geser Kiri"
              aria-label="Geser Kiri"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all shadow-sm"
              title="Geser Kanan"
              aria-label="Geser Kanan"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Horizontal Carousel View */}
      {total === 1 ? (
        /* Single Image Case */
        <div
          onClick={() => setSelectedIndex(0)}
          className={`relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950/70 cursor-pointer group shadow-xl ${
            normalizedImages[0]?.aspect === "9:16"
              ? "max-w-sm aspect-[9/16] mx-auto"
              : "w-full max-w-2xl aspect-video mx-auto"
          }`}
        >
          <img
            src={normalizedImages[0]?.url}
            alt={normalizedImages[0]?.caption || "Dokumentasi"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
            <span className="text-xs text-neutral-200 font-medium">
              {normalizedImages[0]?.caption || "Klik untuk memperbesar"}
            </span>
            <div className="size-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
              <ZoomIn size={16} />
            </div>
          </div>
        </div>
      ) : (
        /* 2+ Images: Horizontal Carousel (Max 2 shown, 3rd peeking ~1/4) */
        <div className="relative group/carousel">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth py-1 px-1 scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {normalizedImages.map((img, idx) => {
              const isVertical = img.aspect === "9:16";
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`shrink-0 snap-start rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950 cursor-pointer relative group/item shadow-md hover:border-pink-500/40 hover:shadow-pink-500/10 transition-all duration-300 ${
                    isVertical
                      ? "w-[48%] sm:w-[32%] lg:w-[28%] aspect-[9/16]"
                      : "w-[82%] sm:w-[calc(50%-10px)] lg:w-[44%] aspect-video"
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption || `Gambar ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient & Hover info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5">
                    <span className="text-xs text-neutral-200 font-medium truncate max-w-[80%]">
                      {img.caption || `Gambar ${idx + 1}`}
                    </span>
                    <div className="size-7 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn size={14} />
                    </div>
                  </div>

                  {/* Small index badge on card */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-neutral-300 border border-white/10">
                    {idx + 1}/{total}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Lightbox Modal with Keyboard Navigation (Arrow Left, Arrow Right, Esc) */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Top Header Bar */}
          <div
            className="flex items-center justify-between w-full max-w-6xl mx-auto z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-neutral-900 border border-neutral-800 text-pink-400">
                {selectedIndex + 1} / {total}
              </span>
              {normalizedImages[selectedIndex]?.caption && (
                <span className="text-sm md:text-base text-neutral-300 font-medium truncate max-w-md">
                  {normalizedImages[selectedIndex]?.caption}
                </span>
              )}
            </div>

            <button
              onClick={handleClose}
              className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all shadow-md"
              title="Tutup (Esc)"
              aria-label="Tutup Modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Photo Display with Navigation Arrows */}
          <div
            className="relative flex items-center justify-center flex-1 my-4 w-full max-w-6xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {total > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 p-3 sm:p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-white hover:bg-neutral-800 hover:border-pink-500/50 hover:scale-105 active:scale-95 transition-all shadow-2xl backdrop-blur-md"
                title="Foto Sebelumnya (Panah Kiri)"
                aria-label="Panah Kiri"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <div className="relative max-h-[75vh] max-w-full flex items-center justify-center">
              <img
                src={normalizedImages[selectedIndex]?.url}
                alt={normalizedImages[selectedIndex]?.caption || `Gambar ${selectedIndex + 1}`}
                className="max-h-[75vh] max-w-[90vw] md:max-w-4xl object-contain rounded-2xl shadow-2xl border border-neutral-800/80"
              />
            </div>

            {total > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 p-3 sm:p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-white hover:bg-neutral-800 hover:border-pink-500/50 hover:scale-105 active:scale-95 transition-all shadow-2xl backdrop-blur-md"
                title="Foto Selanjutnya (Panah Kanan)"
                aria-label="Panah Kanan"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails Strip */}
          {total > 1 && (
            <div
              className="flex items-center justify-center gap-2 overflow-x-auto max-w-xl mx-auto py-2 px-3 rounded-2xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-md z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {normalizedImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`size-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    idx === selectedIndex
                      ? "border-pink-500 scale-105 shadow-md shadow-pink-500/20"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
