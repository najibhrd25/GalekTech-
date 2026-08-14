"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  scale: number; // Mengatur zoom per orang (contoh: 1.0, 1.15, 1.25)
  linkedin?: string;
  translateY?: string; // Menggeser gambar ke atas/bawah secara manual (contoh: "-10px", "5%", "-15%")
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Najib Bahrudin",
    role: "Product Manajer",
    image: "/images/najib.jpeg",
    scale: 1.5, // Sesuaikan zoom di sini
    linkedin: "https://www.linkedin.com/in/najibbahrudin",
    translateY: "-45px",
  },
  {
    name: "Dimas",
    role: "Frontend Engineer",
    image: "/images/dimas.jpg",
    scale: 1.0, // Sesuaikan zoom di sini
    linkedin: "https://www.linkedin.com/in/dimas-username",
    translateY: "-35px",
  },
  {
    name: "Dava",
    role: "Frontend Engineer",
    image: "/images/Dava.jpeg",
    scale: 1.0, // Sesuaikan zoom di sini
    linkedin: "https://www.linkedin.com/in/dava-username",
    translateY: "0px",
  },
  {
    name: "Erlangga",
    role: "Frontend Engineer",
    image: "/images/Erlangga.jpeg",
    scale: 1.1,
    linkedin: "https://www.linkedin.com/in/erlanggaaghna",
    translateY: "-100px",
  },
];

export function TeamSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mb-24">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-pink-500" />
        <h2 className="text-2xl sm:text-4xl font-bold text-white whitespace-nowrap">
          People behind <span className="text-pink-500">GalekTech</span>
        </h2>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-pink-500 to-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((person, idx) => (
          <div key={idx} className="flex flex-col group bg-zinc-900/40 rounded-tl-[64px] rounded-tr-2xl rounded-b-2xl border border-neutral-800/50 overflow-hidden transition-all duration-300">
            {/* Image Container with Zoom trigger */}
            <div
              onClick={() => setSelectedImage(person.image)}
              className="w-full aspect-square bg-neutral-900 overflow-hidden relative cursor-zoom-in"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
                style={{
                  transform: `scale(${person.scale}) translateY(${person.translateY || "0px"})`,
                }}
              />
            </div>

            {/* Info Footer */}
            <div className="p-5 flex flex-col justify-between flex-1 bg-zinc-950/80 border-t border-neutral-800/30">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-white leading-tight">
                  {person.name}
                </h3>
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors mt-0.5"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-zinc-400 text-sm mt-1">{person.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-neutral-900/60 p-2 rounded-full border border-white/10 hover:bg-neutral-800 transition-colors"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-3xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Zoomed team photo"
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
