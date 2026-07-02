"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  readingTime: string;
  contentMarkdown?: string;
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
    contentMarkdown: `## Pengenalan Proyek
Proyek ini dibuat sebagai wadah pembelajaran interaktif bagi pemula yang ingin memahami konsep kecerdasan buatan (*Artificial Intelligence*) menggunakan bahasa Python.

### Pembahasan Utama
- **Dasar Statistika:** Pemahaman data numerik dan kategori.
- **Supervised Learning:** Regresi linear dan klasifikasi dasar.
- **Unsupervised Learning:** Pengelompokan data dengan K-Means.

### Teknologi Yang Digunakan
Python, Pandas, NumPy, Scikit-Learn, dan Jupyter Notebook.`,
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
    contentMarkdown: `## Solusi Kasir Digital
Membantu UMKM anyaman bambu di Desa Pule berpindah dari pembukuan manual menggunakan kertas menuju pencatatan digital otomatis berbasis Cloud.

### Manfaat Utama
- **Pencatatan Real-time:** Memantau stok anyaman bambu langsung dari HP.
- **Laporan Bulanan:** Menghasilkan PDF laporan laba rugi secara instan.
- **Multi-kasir:** Bisa dioperasikan oleh beberapa admin kelompok pengrajin secara bersamaan.

### Fitur Teknis
PWA (Progressive Web App), Firebase Database, Offline support, dan cetak struk via bluetooth printer.`,
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
    contentMarkdown: `## Akselerasi Kopi Robusta Lokal
Pengembangan branding menyeluruh dan website toko online eksklusif guna memasarkan biji kopi pilihan hasil tani pegunungan Trenggalek ke kancah nasional.

### Poin Utama Branding
- **Desain Kemasan Baru:** Mengangkat nilai kearifan lokal dengan estetika modern.
- **Website Mandiri:** Transaksi e-commerce langsung tanpa potongan komisi marketplace.
- **Payment Gateway:** Mendukung QRIS, GoPay, dan Transfer Bank otomatis.

### Stack Pengembangan
Next.js, TailwindCSS, Midtrans API, dan Sanity CMS.`,
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
    contentMarkdown: `## Portal Informasi & E-Ticketing
Modernisasi layanan wisata pantai Prigi guna menghadirkan pemesanan tiket online terpadu dan direktori pemandu wisata lokal.

### Fitur Unggulan
- **Tiket QR Code:** Wisatawan cukup memindai kode di gerbang masuk tanpa perlu antre tiket fisik.
- **Peta Destinasi Interaktif:** Penunjuk rute spot foto menarik dan fasilitas umum pantai.
- **Direktori Kuliner & Penginapan:** Memajang usaha kuliner seafood dan homestay warga lokal.

### Arsitektur Sistem
React, Node.js Express, PostgreSQL, dan QR Code Generator API.`,
    color: {
      badgeBg: "bg-blue-950/40",
      badgeText: "text-blue-400",
      badgeBorder: "border-blue-800/30",
      hoverGlow: "shadow-blue-500/5",
      linkText: "text-blue-400 hover:text-blue-300",
    },
  },
];

function parseMarkdown(md: string) {
  return md.split("\n\n").map((block, index) => {
    if (block.startsWith("### ")) {
      return (
        <h4 key={index} className="text-base md:text-lg font-bold text-white mt-4 mb-2">
          {block.replace("### ", "")}
        </h4>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h3 key={index} className="text-xl md:text-2xl font-bold text-white mt-5 mb-3 border-b border-neutral-800 pb-2">
          {block.replace("## ", "")}
        </h3>
      );
    }
    if (block.startsWith("- ")) {
      return (
        <ul key={index} className="list-disc pl-5 space-y-1.5 text-neutral-350 my-2">
          {block.split("\n").map((li, i) => (
            <li key={i}>{li.replace("- ", "")}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="text-neutral-300 text-sm md:text-base leading-relaxed my-2">
        {block}
      </p>
    );
  });
}

export function ProjectList() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full">
        {PROJECTS.map((project, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setActiveProject(project)}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container — No inner padding or background, edge-to-edge cover like reference */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl relative border border-neutral-900 group-hover:border-neutral-800/80 transition-all duration-500 shadow-lg bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Content Side */}
              <div className="flex flex-col mt-4 space-y-1.5 px-1">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-pink-500 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Premium Preview Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-neutral-900/60 p-2 rounded-full border border-white/10 hover:bg-neutral-800 transition-colors"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#09090b] border border-neutral-800 rounded-3xl overflow-hidden flex flex-col md:flex-row cursor-default shadow-2xl max-h-[85vh] md:max-h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Mockup Image */}
              <div className="w-full md:w-1/2 aspect-[16/10] md:aspect-auto md:h-full relative overflow-hidden bg-neutral-950 border-b md:border-b-0 md:border-r border-neutral-800 shrink-0">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Details & Markdown Content */}
              <div className="flex-1 p-6 md:p-8 overflow-y-auto flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide border border-pink-500/25 bg-pink-500/5 text-pink-400">
                    {activeProject.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 font-medium">
                    <span>{activeProject.date}</span>
                    <span>{activeProject.readingTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {activeProject.title}
                </h2>

                <div className="prose prose-invert max-w-none text-neutral-300">
                  {activeProject.contentMarkdown ? (
                    parseMarkdown(activeProject.contentMarkdown)
                  ) : (
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {activeProject.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
