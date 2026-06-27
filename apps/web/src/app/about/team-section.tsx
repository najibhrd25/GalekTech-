"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Najib",
    role: "Founder & Fullstack Developer",
    image: "/images/najib.jpeg",
    bio: "Pecinta teknologi yang berfokus membangun solusi digital inovatif untuk memberdayakan UMKM lokal.",
  },
  {
    name: "Dimas",
    role: "Frontend Engineer",
    image: "/images/dimas.jpg",
    bio: "Spesialis pembuat antarmuka web yang interaktif, cepat, dan ramah pengguna dengan estetika modern.",
  },
  {
    name: "Dapa",
    role: "UI/UX & Product Designer",
    image: "/images/Dapa.jpg",
    bio: "Desainer kreatif yang mendedikasikan karyanya untuk menciptakan pengalaman pengguna yang memukau dan fungsional.",
  },
];

export function TeamSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mb-24">
      <h2 className="text-4xl font-bold mb-16 text-center text-white">
        People Behind <span className="text-pink-500">GalekTech</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((person, idx) => (
          <div key={idx} className="flex flex-col group">
            {/* Image Container with Zoom trigger */}
            <div
              onClick={() => setSelectedImage(person.image)}
              className="w-full aspect-[4/5] bg-neutral-900 overflow-hidden mb-4 rounded-2xl relative cursor-zoom-in border border-neutral-800/40 hover:border-pink-500/30 transition-all duration-300"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-pink-500 text-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>

            {/* Info */}
            <h3 className="text-2xl font-bold text-white leading-tight mb-1">
              {person.name}
            </h3>
            <p className="text-pink-500 text-base font-medium mb-2">
              {person.role}
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {person.bio}
            </p>
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
