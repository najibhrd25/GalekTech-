"use client";

import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { TEAM_MEMBERS } from "@/app/about/team-section";
import { PROJECTS } from "@/app/project/project-list";
import type { PagebuilderType } from "@/types";

type LogoTickerProps = PagebuilderType<"logoTickerSection">;

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let elapsed = 0;
      const spinDuration = 1200; // Durasi putaran cepat (1.2 detik)
      const intervalTime = 50; // Kecepatan acak angka berganti
      let activeControls: any = null;

      const spinInterval = setInterval(() => {
        elapsed += intervalTime;
        if (elapsed < spinDuration) {
          // Menampilkan angka acak ratusan agar terkesan spin cepat
          setDisplayValue(Math.floor(Math.random() * 900) + 100);
        } else {
          clearInterval(spinInterval);
          // Deselerasi (melambat) halus dari angka acak puluhan ke nilai target asli
          const startDeceleration = Math.floor(Math.random() * 150) + 50;
          activeControls = animate(startDeceleration, value, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate(v) {
              setDisplayValue(Math.round(v));
            },
          });
        }
      }, intervalTime);

      return () => {
        clearInterval(spinInterval);
        if (activeControls) activeControls.stop();
      };
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="flex items-baseline gap-1 text-5xl md:text-6xl font-bold text-white mb-2">
        {displayValue}
        <span className="text-pink-500">{suffix}</span>
      </div>
      <p className="text-neutral-400 text-sm md:text-base uppercase tracking-widest font-medium">
        {label}
      </p>
    </div>
  );
}

export function LogoTicker(props: LogoTickerProps) {
  // Hitung selisih bulan dari Maret 2026 (Bulan ke-2, karena index mulai dari 0)
  const startDate = new Date(2026, 2, 1); // 1 Maret 2026
  const currentDate = new Date();
  const monthsExperience = Math.max(
    0,
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      currentDate.getMonth() -
      startDate.getMonth()
  );

  const stats = [
    { value: monthsExperience, suffix: "+", label: "Month Experience" },
    { value: TEAM_MEMBERS.length, suffix: "+", label: "Members" },
    { value: 3, suffix: "", label: "Blogs" },
    { value: PROJECTS.length, suffix: "", label: "Projects" },
  ];

  return (
    <section className="pt-2 pb-16">
      <div className="container">
        {/* Garis atas dan bawah untuk membungkus stats */}
        <div className="border-y border-white/10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, idx) => (
              <StatItem
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
