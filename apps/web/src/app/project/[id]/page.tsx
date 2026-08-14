"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, Globe } from "lucide-react";
import { PROJECTS } from "../project-list";

function renderTextWithMarkdown(text: string) {
  // Regex parsing for bold **text** and italic *text*
  const parts = text.split(/(\*\*|\*)/g);
  let isBold = false;
  let isItalic = false;

  return parts.map((part, i) => {
    if (part === "**") {
      isBold = !isBold;
      return null;
    }
    if (part === "*") {
      isItalic = !isItalic;
      return null;
    }
    if (isBold) {
      return <strong key={i} className="font-bold text-white">{part}</strong>;
    }
    if (isItalic) {
      return <em key={i} className="italic text-neutral-200">{part}</em>;
    }
    return part;
  });
}

function parseMarkdown(md: string) {
  return md.split("\n\n").map((block, index) => {
    if (block.startsWith("### ")) {
      return (
        <h4 key={index} className="text-lg md:text-xl font-bold text-white mt-6 mb-3">
          {renderTextWithMarkdown(block.replace("### ", ""))}
        </h4>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h3 key={index} className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4 border-b border-neutral-900 pb-2">
          {renderTextWithMarkdown(block.replace("## ", ""))}
        </h3>
      );
    }
    if (block.startsWith("- ")) {
      return (
        <ul key={index} className="list-disc pl-6 space-y-2 text-neutral-300 my-4">
          {block.split("\n").map((li, i) => (
            <li key={i}>{renderTextWithMarkdown(li.replace("- ", ""))}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="text-neutral-350 text-base md:text-lg leading-relaxed my-4">
        {renderTextWithMarkdown(block)}
      </p>
    );
  });
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
        {/* Title and Metadata wrapped in premium layout */}
        <div className="space-y-6">
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

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-900">
            <p className="text-neutral-400 text-base md:text-lg max-w-xl">
              {project.description}
            </p>
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-850 hover:border-neutral-700 transition-all font-semibold text-sm shadow-md"
              >
                <Globe size={16} />
                <span>Kunjungi Website</span>
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none pt-8 border-t border-neutral-900">
          {markdownContent ? (
            parseMarkdown(markdownContent)
          ) : (
            <p className="text-neutral-350 leading-relaxed text-lg">
              {project.description}
            </p>
          )}
        </article>
      </div>
    </main>
  );
}
