"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Globe } from "lucide-react";
import { PROJECTS } from "../project-list";

function parseMarkdown(md: string) {
  return md.split("\n\n").map((block, index) => {
    if (block.startsWith("### ")) {
      return (
        <h4 key={index} className="text-lg md:text-xl font-bold text-white mt-6 mb-3">
          {block.replace("### ", "")}
        </h4>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h3 key={index} className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4 border-b border-neutral-800 pb-2">
          {block.replace("## ", "")}
        </h3>
      );
    }
    if (block.startsWith("- ")) {
      return (
        <ul key={index} className="list-disc pl-6 space-y-2 text-neutral-300 my-4">
          {block.split("\n").map((li, i) => (
            <li key={i}>{li.replace("- ", "")}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={index} className="text-neutral-350 text-base md:text-lg leading-relaxed my-4">
        {block}
      </p>
    );
  });
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);

  const project = PROJECTS[id];

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
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>

        {/* Hero image header */}
        <div className="w-full aspect-[16/9] overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title and Metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide border border-pink-500/25 bg-pink-500/5 text-pink-400">
              {project.category}
            </span>
            <div className="flex items-center gap-4 text-xs md:text-sm text-neutral-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {project.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {project.readingTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {project.title}
          </h1>

          {project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-850 hover:border-neutral-700 transition-all font-semibold text-sm"
              >
                <Globe size={16} />
                <span>Kunjungi Website</span>
              </a>
            </div>
          )}
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none pt-6 border-t border-neutral-900">
          {project.contentMarkdown ? (
            parseMarkdown(project.contentMarkdown)
          ) : (
            <p className="text-neutral-300 leading-relaxed text-lg">
              {project.description}
            </p>
          )}
        </article>
      </div>
    </main>
  );
}
