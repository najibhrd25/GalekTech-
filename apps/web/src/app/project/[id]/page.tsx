"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, Globe, Github, ArrowLeft } from "lucide-react";
import { PROJECTS } from "../project-list";
import { ProjectGalleryCarousel, GalleryImage } from "@/components/project/project-gallery-carousel";
import { TechStackList } from "@/components/project/tech-icon";

function renderTextWithMarkdown(text: string) {
  // Regex parsing for links [label](url), bold **text**, and italic *text*
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, i) => {
    if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        const [, label, href] = match;
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 underline underline-offset-4 font-semibold transition-colors"
          >
            {label}
          </a>
        );
      }
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic text-neutral-300">
          {part.slice(1, -1)}
        </em>
      );
    }
    return (
      <span key={i} className="font-normal">
        {part}
      </span>
    );
  });
}

function parseMarkdown(md: string) {
  // Remove HTML comments
  const cleanMd = md.replace(/<!--[\s\S]*?-->/g, "").trim();
  const lines = cleanMd.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let currentParagraph: string[] = [];
  let currentQuote: string[] = [];

  const flushParagraph = (key: string) => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim();
      if (text) {
        elements.push(
          <p key={key} className="text-neutral-300 font-normal text-base md:text-lg leading-relaxed mb-4">
            {renderTextWithMarkdown(text)}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  const flushList = (key: string) => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={key} className="list-disc pl-6 space-y-2 text-neutral-300 font-normal text-base md:text-lg my-4">
          {currentList.map((item, idx) => (
            <li key={idx} className="leading-relaxed font-normal">
              {renderTextWithMarkdown(item)}
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const flushQuote = (key: string) => {
    if (currentQuote.length > 0) {
      const text = currentQuote.join(" ").trim();
      if (text) {
        elements.push(
          <blockquote
            key={key}
            className="border-l-4 border-pink-500/80 bg-neutral-900/40 rounded-r-2xl p-5 my-6 text-neutral-300 font-normal text-base md:text-lg leading-relaxed backdrop-blur-sm"
          >
            {renderTextWithMarkdown(text)}
          </blockquote>
        );
      }
      currentQuote = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i] ?? "";
    const line = rawLine.trim();

    // Check for Gallery Carousel Block: :::gallery ... :::
    if (line.startsWith(":::gallery")) {
      flushParagraph(`p-pre-gal-${i}`);
      flushList(`ul-pre-gal-${i}`);
      flushQuote(`q-pre-gal-${i}`);

      let galleryBadge = "Gallery";
      let galleryTitle = "";
      let galleryAspect: "16:9" | "9:16" = "16:9";
      const galleryImages: GalleryImage[] = [];

      i++;
      while (i < lines.length && !lines[i]?.trim().startsWith(":::")) {
        const gLine = lines[i]?.trim() || "";
        if (gLine.startsWith("badge:")) {
          galleryBadge = gLine.replace("badge:", "").trim();
        } else if (gLine.startsWith("title:")) {
          galleryTitle = gLine.replace("title:", "").trim();
        } else if (gLine.startsWith("aspect:")) {
          const asp = gLine.replace("aspect:", "").trim();
          if (asp === "9:16" || asp === "16:9") {
            galleryAspect = asp;
          }
        } else if (gLine) {
          // Format: /path/to/image.png | Optional Caption
          const [urlPart, captionPart] = gLine.split("|");
          if (urlPart) {
            galleryImages.push({
              url: urlPart.trim(),
              caption: captionPart?.trim(),
              aspect: galleryAspect,
            });
          }
        }
        i++;
      }

      if (galleryImages.length > 0) {
        elements.push(
          <ProjectGalleryCarousel
            key={`gallery-${i}`}
            badge={galleryBadge}
            title={galleryTitle}
            aspectRatio={galleryAspect}
            images={galleryImages}
          />
        );
      }
      continue;
    }

    if (!line) {
      flushParagraph(`p-${i}`);
      flushList(`ul-${i}`);
      flushQuote(`q-${i}`);
      continue;
    }

    // Horizontal Rule
    if (line === "---" || line === "***") {
      flushParagraph(`p-pre-hr-${i}`);
      flushList(`ul-pre-hr-${i}`);
      flushQuote(`q-pre-hr-${i}`);
      elements.push(<hr key={`hr-${i}`} className="border-neutral-900 my-8" />);
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      flushParagraph(`p-pre-q-${i}`);
      flushList(`ul-pre-q-${i}`);
      currentQuote.push(line.replace(/^>\s*/, ""));
      continue;
    } else {
      flushQuote(`q-flush-${i}`);
    }

    // H4 / H3 Header
    if (line.startsWith("### ")) {
      flushParagraph(`p-pre-h3-${i}`);
      flushList(`ul-pre-h3-${i}`);
      elements.push(
        <h4 key={`h3-${i}`} className="text-xl md:text-2xl font-bold text-white mt-8 mb-3">
          {renderTextWithMarkdown(line.replace("### ", ""))}
        </h4>
      );
      continue;
    }

    // H2 Header
    if (line.startsWith("## ")) {
      flushParagraph(`p-pre-h2-${i}`);
      flushList(`ul-pre-h2-${i}`);
      elements.push(
        <h3 key={`h2-${i}`} className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 pb-2 border-b border-neutral-900">
          {renderTextWithMarkdown(line.replace("## ", ""))}
        </h3>
      );
      continue;
    }

    // Lists
    if (line.startsWith("- ") || line.startsWith("* ")) {
      flushParagraph(`p-pre-li-${i}`);
      currentList.push(line.replace(/^[-*]\s+/, ""));
      continue;
    }

    flushList(`ul-pre-p-${i}`);
    currentParagraph.push(line);
  }

  flushParagraph("p-end");
  flushList("ul-end");
  flushQuote("q-end");

  return elements;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Number(params?.id);

  const project = PROJECTS[id];
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    if (project?.markdownFile) {
      fetch(project.markdownFile)
        .then((res) => {
          if (!res.ok) throw new Error("Markdown not found");
          return res.text();
        })
        .then((text) => setMarkdownContent(text))
        .catch((err) => {
          console.error("Failed to load project markdown:", err);
          setMarkdownContent("");
        });
    } else {
      setMarkdownContent("");
    }
  }, [project?.markdownFile]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Proyek Tidak Ditemukan</h1>
        <Link href="/project" className="text-pink-500 hover:underline">
          Kembali ke Daftar Proyek
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Link */}
        <Link
          href="/project"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group mb-2"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Semua Project</span>
        </Link>

        {/* Title and Metadata */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide border border-pink-500/20 bg-pink-500/5 text-pink-400">
                {project.category}
              </span>
              <div className="flex items-center gap-4 text-xs md:text-sm text-neutral-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-neutral-600" />
                  {project.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-neutral-600" />
                  {project.readingTime}
                </span>
              </div>
            </div>

            {project.techstack && project.techstack.length > 0 && (
              <div className="flex items-center gap-2">
                <TechStackList techs={project.techstack} iconClassName="size-4" />
              </div>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-900">
            <p className="text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-850 hover:border-neutral-700 transition-all font-semibold text-sm shadow-md"
                  title="Lihat Repository GitHub"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-600/90 hover:bg-pink-600 text-white transition-all font-semibold text-sm shadow-lg shadow-pink-600/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Globe size={16} />
                  <span>Kunjungi Website</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <article className="w-full max-w-none pt-8 border-t border-neutral-900">
          {markdownContent ? (
            parseMarkdown(markdownContent)
          ) : (
            <p className="text-neutral-300 font-normal text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          )}
        </article>
      </div>
    </main>
  );
}
