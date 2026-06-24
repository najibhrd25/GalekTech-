"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";
import { Flame, Eye, ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/shared/tag";
import type { PagebuilderType } from "@/types";

type TopPitchesProps = PagebuilderType<"topPitchesSection">;

type MockProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  upvotes: number;
  views: number;
  author: {
    name: string;
    avatarInitials: string;
  };
  color: string;
};

const MOCK_PROJECTS: MockProject[] = [
  {
    id: "galekcloud",
    title: "GalekCloud Platform",
    category: "Infrastructure",
    description:
      "Next-generation decentralized serverless hosting with globally distributed edge nodes and sub-millisecond cold starts.",
    upvotes: 142,
    views: 1205,
    author: { name: "Alex Rivers", avatarInitials: "AR" },
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: "novaai",
    title: "NovaAI Agents",
    category: "Artificial Intelligence",
    description:
      "Autonomous AI agent workflows designed for enterprise software integration, automating repetitive processes securely.",
    upvotes: 98,
    views: 894,
    author: { name: "Sarah Chen", avatarInitials: "SC" },
    color: "from-purple-600 to-pink-600",
  },
  {
    id: "pulseanalytics",
    title: "Pulse Telemetry",
    category: "Developer Tools",
    description:
      "Real-time telemetry and user-flow monitoring dashboard built specifically for high-traffic modern SaaS products.",
    upvotes: 87,
    views: 742,
    author: { name: "Marcus Brody", avatarInitials: "MB" },
    color: "from-emerald-600 to-teal-600",
  },
  {
    id: "decentrust",
    title: "DecenTrust Audit",
    category: "Web3",
    description:
      "Automated smart contract security auditing and continuous verification for multi-chain decentralized applications.",
    upvotes: 112,
    views: 933,
    author: { name: "Elena Rostova", avatarInitials: "ER" },
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "auradesign",
    title: "Aura Design System",
    category: "Design Systems",
    description:
      "AI-driven component generator that curates and builds harmonious design systems and UI libraries dynamically.",
    upvotes: 130,
    views: 1045,
    author: { name: "Liam Miller", avatarInitials: "LM" },
    color: "from-fuchsia-600 to-pink-600",
  },
  {
    id: "shieldops",
    title: "ShieldOps Zero Trust",
    category: "Security",
    description:
      "Zero-trust DevOps pipelines featuring automatic dependency scanning, vulnerability patching, and secure key vaults.",
    upvotes: 75,
    views: 610,
    author: { name: "Kenji Sato", avatarInitials: "KS" },
    color: "from-rose-600 to-red-600",
  },
];

export function TopPitches({ eyebrow, title }: TopPitchesProps) {
  return (
    <section className="py-16">
      {/* Title — contained */}
      <div className="container flex flex-col items-center">
        {eyebrow && <Tag>{eyebrow}</Tag>}
        <h2 className="my-6 text-center text-6xl font-medium">
          {title ?? (
            <>
              Top Pitches on the <span className="text-pink-400">Rise</span>
            </>
          )}
        </h2>
      </div>

      <Carousel opts={{ align: "start" }} className="mt-6 w-full">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-16" />

          <CarouselContent
            className="ml-0 py-1"
            style={{
              paddingLeft: "max(1rem, calc((100vw - 80rem) / 2 + 1rem))",
            }}
          >
            {MOCK_PROJECTS.map((project) => (
              <CarouselItem
                key={project.id}
                className="basis-4/5 pl-4 sm:basis-[46%] lg:basis-[31%] 2xl:basis-[28%]"
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200/80 transition duration-300 hover:ring-pink-300/60 hover:shadow-lg hover:shadow-pink-500/5 dark:bg-neutral-900 dark:ring-white/10 dark:hover:ring-pink-500/30 dark:hover:shadow-pink-500/10">
                  <div className="flex h-full flex-col">
                    {/* Visual Cover Header */}
                    <div
                      className={`relative aspect-video w-full overflow-hidden bg-gradient-to-br ${project.color} flex items-center justify-center p-6`}
                    >
                      <span className="text-2xl font-bold text-white drop-shadow-md text-center">
                        {project.title}
                      </span>

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                      {/* Category badge */}
                      <span className="absolute top-3 left-3 rounded-full bg-pink-500/90 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
                        {project.category}
                      </span>

                      {/* Stats row on image */}
                      <div className="absolute top-3 right-3 flex items-center gap-2">
                        <span className="flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                          <Flame className="size-3" fill="currentColor" />
                          {project.upvotes}
                        </span>
                        <span className="flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                          <Eye className="size-3" />
                          {project.views}
                        </span>
                      </div>

                      {/* Hover action indicator */}
                      <div className="absolute right-4 bottom-4 size-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="size-4" />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col px-4 pt-4 pb-4">
                      {/* Title & Description */}
                      <h3 className="text-lg font-bold leading-snug tracking-tight text-neutral-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="line-clamp-3 text-sm leading-relaxed text-neutral-500 dark:text-white/50">
                        {project.description}
                      </p>

                      {/* Author row */}
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="size-6 shrink-0 overflow-hidden rounded-full ring-1 ring-neutral-200 dark:ring-white/10 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-neutral-700 dark:text-neutral-300">
                            {project.author.avatarInitials}
                          </div>
                          <span className="text-xs font-medium text-neutral-600 dark:text-white/60">
                            {project.author.name}
                          </span>
                        </div>
                        <span className="text-xs text-neutral-400 dark:text-white/30">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        <div className="container mt-8 flex items-center justify-end gap-2">
          <CarouselPrevious className="static translate-x-0 translate-y-0 size-10 border-neutral-200/60 dark:border-white/10 bg-neutral-50 shadow-sm dark:bg-neutral-900 dark:shadow-none hover:bg-neutral-100 hover:shadow-md dark:hover:bg-neutral-800 dark:hover:shadow-none" />
          <CarouselNext className="static translate-x-0 translate-y-0 size-10 border-neutral-200/60 dark:border-white/10 bg-neutral-50 shadow-sm dark:bg-neutral-900 dark:shadow-none hover:bg-neutral-100 hover:shadow-md dark:hover:bg-neutral-800 dark:hover:shadow-none" />
        </div>
      </Carousel>
    </section>
  );
}
