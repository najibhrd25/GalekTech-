"use client";

import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  readingTime: string;
  color: {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    hoverGlow: string;
    linkText: string;
  };
}

export const PROJECTS: Project[] = [
  {
    title: "Introduction to Machine Learning dengan Python",
    category: "# Tech",
    description:
      "Panduan dasar memahami machine learning, mulai dari konsep dasar hingga implementasi sederhana menggunakan Python.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800&h=500",
    date: "Jan 15",
    readingTime: "8 min",
    color: {
      badgeBg: "bg-purple-950/40",
      badgeText: "text-purple-400",
      badgeBorder: "border-purple-800/30",
      hoverGlow: "shadow-purple-500/5",
      linkText: "text-purple-400 hover:text-purple-300",
    },
  },
  {
    title: "Sistem Kasir Digital Kerajinan Bambu Pule",
    category: "# Craft",
    description:
      "Digitalisasi pembukuan dan kasir berbasis cloud untuk pelaku usaha mikro kerajinan anyaman bambu di Desa Pule.",
    image:
      "https://images.unsplash.com/photo-1490226848259-7101e4a6d4eb?auto=format&fit=crop&q=80&w=800&h=500",
    date: "Feb 02",
    readingTime: "5 min",
    color: {
      badgeBg: "bg-emerald-950/40",
      badgeText: "text-emerald-400",
      badgeBorder: "border-emerald-800/30",
      hoverGlow: "shadow-emerald-500/5",
      linkText: "text-emerald-400 hover:text-emerald-300",
    },
  },
  {
    title: "Branding & E-Commerce Kopi Khas Trenggalek",
    category: "# Food & Beverage",
    description:
      "Pengembangan identitas visual brand dan website e-commerce modern untuk mendongkrak penjualan kopi robusta lokal.",
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800&h=500",
    date: "Mar 10",
    readingTime: "6 min",
    color: {
      badgeBg: "bg-amber-950/40",
      badgeText: "text-amber-400",
      badgeBorder: "border-amber-800/30",
      hoverGlow: "shadow-amber-500/5",
      linkText: "text-amber-400 hover:text-amber-300",
    },
  },
  {
    title: "Portal Wisata Pantai Prigi Terintegrasi",
    category: "# Tourism",
    description:
      "Sistem e-ticketing dan informasi destinasi wisata pantai terintegrasi guna memberikan kemudahan bagi wisatawan nusantara.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800&h=500",
    date: "Apr 22",
    readingTime: "10 min",
    color: {
      badgeBg: "bg-blue-950/40",
      badgeText: "text-blue-400",
      badgeBorder: "border-blue-800/30",
      hoverGlow: "shadow-blue-500/5",
      linkText: "text-blue-400 hover:text-blue-300",
    },
  },
];

export function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full">
      {PROJECTS.map((project, idx) => {
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col group"
          >
            {/* Image Container with premium inner mockup framing */}
            <div className="w-full aspect-[4/3] overflow-hidden rounded-3xl relative bg-gradient-to-br from-[#0c1618] to-[#040809] border border-neutral-900 p-6 flex items-center justify-center group-hover:border-neutral-800/80 transition-all duration-500 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-700 ease-out shadow-md"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-3xl" />
            </div>

            {/* Content Side */}
            <div className="flex flex-col mt-5 space-y-1.5 px-2">
              {/* Title */}
              <h3 className="text-xl font-bold text-white leading-tight group-hover:text-pink-500 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-normal">
                {project.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
