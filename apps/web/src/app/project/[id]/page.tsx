"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, Globe } from "lucide-react";
import { PROJECTS } from "../project-list";

function renderTextWithMarkdown(text: string) {
  // Regex parsing for bold **text** and italic *text*
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, i) => {
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

  lines.forEach((rawLine, idx) => {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph(`p-${idx}`);
      flushList(`ul-${idx}`);
      return;
    }

    if (line.startsWith("### ")) {
      flushParagraph(`p-pre-h3-${idx}`);
      flushList(`ul-pre-h3-${idx}`);
      elements.push(
        <h4 key={`h3-${idx}`} className="text-lg md:text-xl font-bold text-white mt-6 mb-2">
          {renderTextWithMarkdown(line.replace("### ", ""))}
        </h4>
      );
      return;
    }

    if (line.startsWith("## ")) {
      flushParagraph(`p-pre-h2-${idx}`);
      flushList(`ul-pre-h2-${idx}`);
      elements.push(
        <h3 key={`h2-${idx}`} className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 pb-1 border-b border-neutral-800">
          {renderTextWithMarkdown(line.replace("## ", ""))}
        </h3>
      );
      return;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      flushParagraph(`p-pre-li-${idx}`);
      currentList.push(line.replace(/^[-*]\s+/, ""));
      return;
    }

    flushList(`ul-pre-p-${idx}`);
    currentParagraph.push(line);
  });

  flushParagraph("p-end");
  flushList("ul-end");

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
