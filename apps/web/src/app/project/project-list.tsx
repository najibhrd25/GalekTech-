"use client";

import { motion } from "motion/react";
import { Globe, Github } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  readingTime: string;
  contentMarkdown?: string;
  techstack?: string[];
  liveUrl?: string;
  githubUrl?: string;
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
    techstack: ["python", "pandas", "jupyter"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    contentMarkdown: `## Pengenalan Proyek
Proyek ini dibuat sebagai wadah pembelajaran interaktif bagi pemula yang ingin memahami konsep kecerdasan buatan (*Artificial Intelligence*) menggunakan bahasa Python.

### Pembahasan Utama
- **Dasar Statistika:** Pemahaman data numerik dan kategori.
- **Supervised Learning:** Regresi linear dan klasifikasi dasar.
- **Unsupervised Learning:** Pengelompokan data dengan K-Means.

### Teknologi Yang Digunakan
Python, Pandas, NumPy, Scikit-Learn, dan Jupyter Notebook.`,
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
    techstack: ["react", "firebase", "pwa"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    contentMarkdown: `## Solusi Kasir Digital
Membantu UMKM anyaman bambu di Desa Pule berpindah dari pembukuan manual menggunakan kertas menuju pencatatan digital otomatis berbasis Cloud.

### Manfaat Utama
- **Pencatatan Real-time:** Memantau stok anyaman bambu langsung dari HP.
- **Laporan Bulanan:** Menghasilkan PDF laporan laba rugi secara instan.
- **Multi-kasir:** Bisa dioperasikan oleh beberapa admin kelompok pengrajin secara bersamaan.

### Fitur Teknis
PWA (Progressive Web App), Firebase Database, Offline support, dan cetak struk via bluetooth printer.`,
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
    techstack: ["nextjs", "tailwindcss", "typescript"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    contentMarkdown: `## Akselerasi Kopi Robusta Lokal
Pengembangan branding menyeluruh dan website toko online eksklusif guna memasarkan biji kopi pilihan hasil tani pegunungan Trenggalek ke kancah nasional.

### Poin Utama Branding
- **Desain Kemasan Baru:** Mengangkat nilai kearifan lokal dengan estetika modern.
- **Website Mandiri:** Transaksi e-commerce langsung tanpa potongan komisi marketplace.
- **Payment Gateway:** Mendukung QRIS, GoPay, dan Transfer Bank otomatis.

### Stack Pengembangan
Next.js, TailwindCSS, Midtrans API, dan Sanity CMS.`,
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
    techstack: ["react", "nodejs", "postgresql"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    contentMarkdown: `## Portal Informasi & E-Ticketing
Modernisasi layanan wisata pantai Prigi guna menghadirkan pemesanan tiket online terpadu dan direktori pemandu wisata lokal.

### Fitur Unggulan
- **Tiket QR Code:** Wisatawan cukup memindai kode di gerbang masuk tanpa perlu antre tiket fisik.
- **Peta Destinasi Interaktif:** Penunjuk rute spot foto menarik dan fasilitas umum pantai.
- **Direktori Kuliner & Penginapan:** Memajang usaha kuliner seafood dan homestay warga lokal.

### Arsitektur Sistem
React, Node.js Express, PostgreSQL, dan QR Code Generator API.`,
  },
];

// Tech stack SVGs
const TECH_SVGS: Record<string, React.ReactNode> = {
  python: (
    <svg className="size-5 text-neutral-400 fill-current hover:text-[#3776AB] transition-colors" viewBox="0 0 24 24" title="Python">
      <path d="M14.25.18c.9 0 1.66.76 1.66 1.66v1.38h-3.32v-.46c0-.5-.4-.92-.92-.92H7.85c-.5 0-.92.42-.92.92v2.77c0 .5.42.92.92.92h5.54c.9 0 1.66.76 1.66 1.66v2.77c0 .9-.76 1.66-1.66 1.66H7.85C6.95 13.52 6.2 12.76 6.2 11.86v-1.38h3.32v.46c0 .5.4.92.92.92h3.81c.5 0 .92-.42.92-.92V8.17c0-.5-.42-.92-.92-.92H7.85c-.9 0-1.66-.76-1.66-1.66V2.82c0-.9.76-1.66 1.66-1.66h5.54c.9 0 1.2-.98 1.2-.98z"/>
    </svg>
  ),
  pandas: (
    <svg className="size-5 text-neutral-400 fill-current hover:text-[#150458] transition-colors" viewBox="0 0 24 24" title="Pandas">
      <path d="M18.8 0H5.2C2.3 0 0 2.3 0 5.2v13.6C0 21.7 2.3 24 5.2 24h13.6c2.9 0 5.2-2.3 5.2-5.2V5.2C24 2.3 21.7 0 18.8 0zm-7.6 17.6h-2v-4h2v4zm4-4h-2v4h2v-4zm-8-4h2v8h-2v-8z"/>
    </svg>
  ),
  jupyter: (
    <svg className="size-5 text-neutral-400 fill-current hover:text-[#F37626] transition-colors" viewBox="0 0 24 24" title="Jupyter">
      <path d="M12 0a1.8 1.8 0 00-1.285.536l-8.48 8.48A1.8 1.8 0 002.77 12l8.48 8.48a1.8 1.8 0 002.545 0l8.48-8.48A1.8 1.8 0 0021.23 10l-8.48-8.48A1.8 1.8 0 0012 0zm0 3.6a1.4 1.4 0 011 1.4v1.4a1.4 1.4 0 01-1 1.4 1.4 1.4 0 01-1-1.4V5a1.4 1.4 0 011-1.4z"/>
    </svg>
  ),
  nextjs: (
    <svg className="size-5 text-neutral-400 fill-current hover:text-white transition-colors" viewBox="0 0 24 24" title="Next.js">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.892 18.005l-5.692-7.33v7.33H10.28V7.995h1.92l5.692 7.33v-7.33h1.92v10.01h-1.92z"/>
    </svg>
  ),
  tailwindcss: (
    <svg className="size-5 text-neutral-400 fill-current hover:text-[#06B6D4] transition-colors" viewBox="0 0 24 24" title="TailwindCSS">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  typescript: (
    <svg className="size-5 text-neutral-400 fill-current hover:text-[#3178C6] transition-colors" viewBox="0 0 24 24" title="TypeScript">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.063 15.297c.563 0 1.125.187 1.625.5l-.625 1.5c-.312-.187-.625-.312-.937-.312-.5 0-.75.25-.75.688 0 .312.188.5.563.687l.937.438c.813.375 1.188.937 1.188 1.688 0 1.25-.938 1.937-2.438 1.937-1 .063-1.688-.25-2.188-.625l.625-1.437c.375.312.875.562 1.375.562.563 0 .813-.25.813-.625 0-.312-.188-.5-.563-.687l-.937-.438c-.813-.375-1.188-.937-1.188-1.687 0-1.188.875-1.875 2.313-1.875zm-7.688.063H12.5v7.062H10.5v-7.062z"/>
    </svg>
  ),
  react: (
    <svg className="size-5 text-neutral-400 fill-current hover:text-[#61DAFB] transition-colors" viewBox="0 0 24 24" title="React">
      <path d="M24 10.636c0-1.111-.647-2.029-1.656-2.505.748-.962 1.056-2.164.717-3.284-.339-1.121-1.22-1.954-2.31-2.18-.337-.899-.99-1.616-1.83-2.003-1.077-.496-2.383-.34-3.32.392-.916-.763-2.162-.977-3.25-.561-.926.353-1.632 1.118-1.938 2.05-.337-.07-.686-.107-1.037-.107-1.745 0-3.23 1.122-3.712 2.721-.861.157-1.632.663-2.138 1.408-.636.937-.732 2.155-.25 3.19C.367 10.158 0 11.196 0 12.273c0 1.11.647 2.029 1.656 2.504-.748.963-1.056 2.165-.717 3.285.339 1.12 1.22 1.954 2.31 2.18.337.898.99 1.615 1.83 2.002 1.077.496 2.383.34 3.32-.392.916.764 2.162.977 3.25.562.926-.354 1.632-1.119 1.938-2.05.337.07.686.106 1.037.106 1.745 0 3.23-1.122 3.712-2.72.861-.157 1.632-.663 2.138-1.409.636-.936.732-2.154.25-3.19.914-.401 1.28-1.439 1.28-2.516z"/>
    </svg>
  ),
  firebase: (
    <svg className="size-5 text-neutral-400 fill-current hover:text-[#FFCA28] transition-colors" viewBox="0 0 24 24" title="Firebase">
      <path d="M3.89 15.75L2.1 4.85C2.03 4.41 2.25 3.99 2.65 3.82c.4-.17.86-.03 1.12.33l1.86 3.13 8.35-8.48c.32-.33.84-.33 1.16 0l2.54 2.58L3.89 15.75z"/>
    </svg>
  ),
  pwa: (
    <svg className="size-5 text-neutral-400 fill-current hover:text-[#5A0FC8] transition-colors" viewBox="0 0 24 24" title="PWA">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.237 17.5v-11h2.247c1.78 0 2.825.807 2.825 2.589 0 1.488-.77 2.378-2.361 2.493v.068c1.693.092 2.551 1.077 2.551 2.766 0 1.942-1.07 3.084-3.089 3.084h-2.173zm1.61-6.702h.67c.783 0 1.206-.312 1.206-1.127 0-.776-.412-1.092-1.206-1.092h-.67v2.219zm0 5.161h.689c.874 0 1.341-.351 1.341-1.291 0-.916-.467-1.282-1.341-1.282h-.689v2.573z"/>
    </svg>
  ),
  nodejs: (
    <svg className="size-5 text-neutral-400 fill-current hover:text-[#339933] transition-colors" viewBox="0 0 24 24" title="Node.js">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.331 16.915l-1.091.631-1.092-.631v-2.392l1.092-.631 1.091.631v2.392zm-3.241-1.876l-1.091.631-1.092-.631v-2.392l1.092-.631 1.091.631v2.392zm0-3.753l-1.091.631-1.092-.631v-2.392l1.092-.631 1.091.631v2.392z"/>
    </svg>
  ),
  postgresql: (
    <svg className="size-5 text-neutral-400 fill-current hover:text-[#4169E1] transition-colors" viewBox="0 0 24 24" title="PostgreSQL">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.33 17.58c-.37.32-.82.49-1.29.49-.69 0-1.27-.4-1.57-.99-.3-.59-.3-1.31 0-1.9.3-.59.88-.99 1.57-.99.47 0 .92.17 1.29.49l1.15-1.15c-.65-.58-1.52-.91-2.44-.91-1.35 0-2.52.8-3.08 1.99-.56 1.19-.56 2.61 0 3.8.56 1.19 1.73 1.99 3.08 1.99.92 0 1.79-.33 2.44-.91l-1.15-1.15z"/>
    </svg>
  )
};

export function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full">
      {PROJECTS.map((project, idx) => {
        return (
          <Link
            key={idx}
            href={`/project/${idx}`}
            className="flex flex-col group cursor-pointer"
          >
            {/* Image Container — Aspect 1:1 (Square), borderless, transparent bg, full image */}
            <div className="w-full aspect-square overflow-hidden rounded-2xl relative transition-all duration-500">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Content Side */}
            <div className="flex flex-col mt-4 px-1">
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-pink-500 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-sm leading-relaxed font-normal mt-1">
                {project.description}
              </p>

              {/* Hover techstack & live site - slides up and fades in on hover */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {/* Tech Stack Icons */}
                <div className="flex items-center gap-2.5">
                  {project.techstack?.map((tech) => (
                    <div key={tech}>
                      {TECH_SVGS[tech] || <span className="text-xs text-neutral-500 uppercase">{tech}</span>}
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
