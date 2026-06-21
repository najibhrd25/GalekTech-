import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | GalekTech",
  description: "Check out our latest projects for UMKM in Trenggalek.",
};

const DUMMY_PROJECTS = [
  {
    title: "Warung Bu Siti",
    category: "Food & Beverage",
    description: "Sistem menu digital interaktif dan pemesanan online untuk mempercepat pelayanan di warung makan.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600&h=400",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Kerajinan Bambu Pule",
    category: "Craft & Retail",
    description: "Website e-commerce untuk menjangkau pembeli kerajinan lokal dari seluruh Indonesia hingga mancanegara.",
    image: "https://images.unsplash.com/photo-1490226848259-7101e4a6d4eb?auto=format&fit=crop&q=80&w=600&h=400",
    color: "from-green-500 to-emerald-700",
  },
  {
    title: "Kopi Khas Trenggalek",
    category: "Food & Beverage",
    description: "Landing page elegan untuk memperkenalkan cita rasa kopi robusta lokal ke pasar nasional.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600&h=400",
    color: "from-amber-700 to-yellow-900",
  },
  {
    title: "Wisata Pantai Prigi",
    category: "Tourism",
    description: "Portal informasi dan sistem pemesanan tiket wisata terpadu untuk meningkatkan kunjungan turis.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600&h=400",
    color: "from-cyan-500 to-blue-600",
  },
];

export default function ProjectPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-24 pt-32 px-4 md:px-8 bg-black text-white">
      {/* Header */}
      <section className="w-full max-w-4xl text-center space-y-6 mb-20 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our <span className="text-pink-500">Projects</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Kumpulan inisiatif digitalisasi website yang telah kami bangun bersama para pelaku UMKM di Kabupaten Trenggalek.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DUMMY_PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-[#18181b] border border-[#27272a] rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/5 transition-all duration-300 group"
            >
              <div className="w-full h-64 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 z-10 group-hover:opacity-10 transition-opacity`} />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="text-pink-500 text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
