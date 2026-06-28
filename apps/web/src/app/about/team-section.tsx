"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  scale: number; // Mengatur zoom per orang (contoh: 1.0, 1.15, 1.25)
  objectPosition: string; // Mengatur geser kanan-kiri/atas-bawah per orang (contoh: "center", "50% 20%")
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Najib Bahrudin",
    role: "Product Manajer",
    image: "/images/najib.jpeg",
    scale: 1.5, // Sesuaikan zoom di sini
    objectPosition: "50% 70%", // Sesuaikan geser kanan-kiri (X) dan atas-bawah (Y) di sini
  },
  {
    name: "Dimas",
    role: "Frontend Engineer",
    image: "/images/dimas.jpg",
    scale: 1.0, // Sesuaikan zoom di sini
    objectPosition: "50% 50%", // Sesuaikan geser kanan-kiri (X) dan atas-bawah (Y) di sini
  },
  {
    name: "Dava",
    role: "Frontend Engineer",
    image: "/images/Dapa.jpg",
    scale: 1.2, // Sesuaikan zoom di sini
    objectPosition: "50% -60%", // Sesuaikan geser kanan-kiri (X) dan atas-bawah (Y) di sini
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
              className="w-full aspect-[3/4] bg-neutral-900 overflow-hidden mb-4 rounded-2xl relative cursor-zoom-in border border-neutral-800/40 transition-all duration-300"
            >
              <motion.img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                style={{
                  objectPosition: person.objectPosition,
                  transformOrigin: person.objectPosition,
                }}
                initial={{ scale: person.scale }}
                whileHover={{ scale: person.scale * 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Info */}
            <h3 className="text-2xl font-bold text-white leading-tight mb-1">
              {person.name}
            </h3>
            <p className="text-pink-500 text-base font-medium">{person.role}</p>
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
