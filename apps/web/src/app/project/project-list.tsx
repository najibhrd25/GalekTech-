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

const PROJECTS: Project[] = [
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
    <div className="flex flex-col gap-12 md:gap-16 w-full">
      {PROJECTS.map((project, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`flex flex-col ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 md:gap-12 p-6 md:p-8 bg-[#09090b] border border-neutral-900 rounded-3xl overflow-hidden hover:border-neutral-800/80 hover:${project.color.hoverGlow} transition-all duration-500 group`}
          >
            {/* Image Container */}
            <div className="w-full md:w-[45%] lg:w-[48%] shrink-0 aspect-[16/10] overflow-hidden rounded-2xl relative bg-neutral-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-40" />
            </div>

            {/* Content Side */}
            <div className="flex flex-col flex-1 justify-center space-y-4 md:space-y-5">
              {/* Category Badge */}
              <div className="flex">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide border ${project.color.badgeBg} ${project.color.badgeText} ${project.color.badgeBorder}`}
                >
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-white leading-tight group-hover:text-neutral-100 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Info Row */}
              <div className="flex items-center gap-5 text-xs md:text-sm text-neutral-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="stroke-[2px]" />
                  {project.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="stroke-[2px]" />
                  {project.readingTime}
                </span>
              </div>

              {/* Read More Link */}
              <div className="pt-2">
                <Link
                  href={`/project/${idx}`}
                  className={`inline-flex items-center gap-2 text-sm md:text-base font-semibold group/link transition-all ${project.color.linkText}`}
                >
                  Read more
                  <ArrowRight
                    size={16}
                    className="transform group-hover/link:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
