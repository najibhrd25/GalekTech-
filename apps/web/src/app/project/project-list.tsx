"use client";

import { motion } from "motion/react";
import { Globe, Github } from "lucide-react";
import Link from "next/link";

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  readingTime: string;
  contentMarkdown?: string;
  markdownFile?: string;
  techstack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  challengeImages?: (string | { url: string; caption?: string; aspect?: "16:9" | "9:16" })[];
  resultImages?: (string | { url: string; caption?: string; aspect?: "16:9" | "9:16" })[];
}

export const PROJECTS: Project[] = [
  {
    title: "Bapperida Trenggalek",
    category: "# Government & Innovation",
    description:
      "Portal resmi dan digitalisasi Bapperida Trenggalek dengan fokus Sistem Inovasi Daerah & Executive Dashboard berbasis Next.js.",
    image: "/projects/Galektech.webp",
    date: "Aug 25",
    readingTime: "5 min",
    techstack: ["nextjs", "typescript", "tailwindcss", "wordpress"],
    liveUrl: "https://bapperida.trenggalekkab.go.id/inovasi",
    markdownFile: "/dataproject/bapperida.md",
  },
  {
    title: "Alrent Creative",
    category: "# Creative Studio",
    description:
      "Layanan penyewaan peralatan outdoor dan kebutuhan event terpercaya di Kabupaten Trenggalek.",
    image: "/mockup/AlrentCreative.png",
    date: "Mar 10",
    readingTime: "8 min",
    techstack: ["react", "nodejs", "postgresql", "tailwindcss"],
    liveUrl: "https://alrentcreative.vercel.app",
    markdownFile: "/dataproject/alrent-creative.md",
  },
  {
    title: "IPRS BEM ITS",
    category: "# Security & Engineering",
    description:
      "Integrated Public Relations System BEM ITS: Audit forensik keamanan, eliminasi webshell backdoor, dan modernisasi sistem disposisi proposal kemitraan kampus.",
    image: "/projects/safe.webp",
    date: "Sep 20",
    readingTime: "6 min",
    techstack: ["nodejs", "postgresql", "javascript", "tailwindcss"],
    liveUrl: "https://zeus2.its.ac.id:2083/",
    markdownFile: "/dataproject/iprs-bem-its.md",
  },
  {
    title: "Parcel Trenggalek",
    category: "# E-Commerce",
    description:
      "Platform e-commerce lokal penyedia berbagai macam parcel & buah tangan khas Kabupaten Trenggalek secara kustom.",
    image: "/projects/PARCEL.webp",
    date: "Apr 18",
    readingTime: "4 min",
    techstack: ["nextjs", "tailwindcss", "typescript"],
    markdownFile: "/dataproject/parcel-trenggalek.md",
  },
  {
    title: "Unfold Caffe",
    category: "# Food & Beverage",
    description:
      "Website profil interaktif dan menu digital modern untuk menyajikan varian kopi robusta lokal khas Trenggalek.",
    image: "/projects/Flowmath.webp",
    date: "Jan 15",
    readingTime: "5 min",
    techstack: ["nextjs", "tailwindcss", "typescript"],
    markdownFile: "/dataproject/unfold-caffe.md",
  },
  {
    title: "Ndalem Kopi",
    category: "# Food & Beverage",
    description:
      "Website profil dan e-commerce eksklusif untuk pemasaran produk bubuk kopi arabika dan robusta khas tani lokal Trenggalek.",
    image: "/projects/Side Project.webp",
    date: "Aug 28",
    readingTime: "6 min",
    techstack: ["nextjs", "tailwindcss", "typescript"],
    githubUrl: "https://github.com/najibhrd25/ndalemkopi",
    markdownFile: "/dataproject/ndalem-kopi.md",
  },
  {
    title: "MurniSaji",
    category: "# Culinary",
    description:
      "Katalog digital dan platform pemesanan produk olahan pangan lokal UMKM Trenggalek spesialis aneka abon berkualitas.",
    image: "/projects/Typeleap.webp",
    date: "Aug 29",
    readingTime: "4 min",
    techstack: ["nextjs", "tailwindcss", "typescript"],
    markdownFile: "/dataproject/murni-saji.md",
  },
  {
    title: "Seccar IDN",
    category: "# Automotive & Services",
    description:
      "Platform inovasi digital untuk ekosistem otomotif dan layanan perawatan serta keamanan kendaraan modern di Indonesia.",
    image: "/projects/mobile-app.webp",
    date: "Sep 15",
    readingTime: "5 min",
    techstack: ["nextjs", "tailwindcss", "typescript"],
    markdownFile: "/dataproject/seccar-idn.md",
  },
  {
    title: "Hubungan Luar BEM ITS",
    category: "# Organization & Portal",
    description:
      "Website dan portal media informasi resmi milik Hubungan Luar (Hublu) yang diberikan kepada seluruh internal pengurus BEM ITS.",
    image: "/projects/s.a.f.e.webp",
    date: "Sep 25",
    readingTime: "5 min",
    techstack: ["nextjs", "tailwindcss", "typescript"],
    markdownFile: "/dataproject/hublu-bem-its.md",
  },
];

// High-fidelity Tech Stack icons mapped to public/icon SVGs
const TECH_ICONS: Record<string, { label: string; icon: string }> = {
  nextjs: { label: "Next.js", icon: "/icon/nextjs.svg" },
  react: { label: "React", icon: "/icon/react.svg" },
  typescript: { label: "TypeScript", icon: "/icon/typescript.svg" },
  tailwindcss: { label: "TailwindCSS", icon: "/icon/tailwindcss.svg" },
  javascript: { label: "JavaScript", icon: "/icon/javascript.svg" },
  postgresql: { label: "PostgreSQL", icon: "/icon/postgresql.svg" },
  nodejs: { label: "Node.js", icon: "/icon/nodejs.svg" },
  python: { label: "Python", icon: "/icon/python.svg" },
  wordpress: { label: "WordPress", icon: "/icon/wordpress.svg" },
  supabase: { label: "Supabase", icon: "/icon/supabase.svg" },
  firebase: { label: "Firebase", icon: "/icon/firebase.svg" },
  figma: { label: "Figma", icon: "/icon/figma.svg" },
  golang: { label: "Go", icon: "/icon/golang_dark.svg" },
  framer: { label: "Framer", icon: "/icon/framer_dark.svg" },
  vscode: { label: "VS Code", icon: "/icon/vscode.svg" },
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
            {/* Image Container — Forced 1:1 Aspect Ratio (Square) */}
            <div 
              className="w-full relative overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950/60 transition-all duration-500 group-hover:border-neutral-800"
              style={{ paddingBottom: "100%", height: 0 }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                /* Sleek Dark Placeholder Box */
                <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-700 bg-gradient-to-br from-neutral-900/30 to-neutral-950/80 group-hover:text-neutral-500 transition-colors">
                  <svg className="size-8 stroke-[1.2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                  </svg>
                  <span className="text-[10px] mt-2.5 font-mono tracking-widest uppercase">Foto Project</span>
                </div>
              )}
            </div>

            {/* Content Side */}
            <div className="flex flex-col mt-4 px-1">
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-pink-500 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-sm leading-relaxed font-normal mt-1 line-clamp-2">
                {project.description}
              </p>

              {/* Hover techstack & live site - slides up and fades in on hover */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {/* Tech Stack Icons */}
                <div className="flex items-center gap-2">
                  {project.techstack?.map((tech) => {
                    const item = TECH_ICONS[tech.toLowerCase()];
                    if (!item) {
                      return (
                        <span key={tech} className="text-[10px] font-mono text-neutral-500 uppercase">
                          {tech}
                        </span>
                      );
                    }
                    return (
                      <div
                        key={tech}
                        className="relative flex items-center justify-center p-1 rounded-md bg-neutral-900/60 border border-neutral-800/80 hover:border-pink-500/50 hover:bg-neutral-850 transition-all"
                        title={item.label}
                      >
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="size-4 object-contain"
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors p-1"
                      onClick={(e) => e.stopPropagation()}
                      title="Lihat Source Code di GitHub"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors p-1"
                      onClick={(e) => e.stopPropagation()}
                      title="Kunjungi Website"
                    >
                      <Globe size={16} />
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
