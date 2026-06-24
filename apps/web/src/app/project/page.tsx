import { Metadata } from "next";
import { ProjectList } from "./project-list";

export const metadata: Metadata = {
  title: "Projects | GalekTech",
  description: "Check out our latest projects for UMKM in Trenggalek.",
};

export default function ProjectPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-24 pt-32 px-4 md:px-8 bg-black text-white">
      {/* Header */}
      <section className="w-full max-w-4xl text-center space-y-6 mb-20 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our <span className="text-pink-500">Projects</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Kumpulan inisiatif digitalisasi website yang telah kami bangun bersama
          para pelaku UMKM di Kabupaten Trenggalek.
        </p>
      </section>

      {/* Projects List */}
      <section className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <ProjectList />
      </section>
    </main>
  );
}
