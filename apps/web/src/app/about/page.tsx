import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GalekTech",
  description:
    "Learn more about GalekTech and our mission to digitalize UMKM in Trenggalek.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-24 bg-black text-white overflow-x-hidden">
      {/* Header Section with Background Image - FULL WIDTH */}
      <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000&h=1000"
            alt="Team Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center space-y-6 px-4 animate-fade-in w-full max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            About <span className="text-pink-500">GalekTech</span>
          </h1>
          <p className="text-lg md:text-2xl text-neutral-200 leading-snug mx-auto line-clamp-3">
            GalekTech didirikan dari kepedulian kami melihat banyak UMKM di
            Trenggalek yang masih mengandalkan cara-cara tradisional. Sulitnya
            UMKM untuk dikenal lebih luas memotivasi kami hadir sebagai solusi
            digitalisasi website.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section (Reference 1) */}
      <section className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mb-24 space-y-6">
        {/* Vision Card */}
        <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 md:p-8 shadow-lg text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#2e1f47] text-[#a78bfa] rounded-xl flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Vision</h2>
          </div>
          <p className="text-neutral-300 text-base md:text-lg max-w-5xl leading-relaxed">
            Menjadi ekosistem teknologi terbesar di Trenggalek yang
            mendefinisikan masa depan industri lokal melalui digitalisasi UMKM
            secara inklusif, inovasi kreatif, dan kolaborasi berkelanjutan.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 md:p-8 shadow-lg flex flex-col items-center">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-[#2e1f47] text-[#a78bfa] rounded-xl flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-1.961a2.25 2.25 0 1 1 2.167 3.015L18 19m-4.5-1.5h-3m-3 1.5h3.75M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Mission</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-t border-[#27272a] w-full">
            {/* Empower */}
            <div className="pt-8 md:pt-8 md:pb-0 pb-8 md:pr-8 md:border-r border-[#27272a] border-b md:border-b-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#a78bfa] shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.053 5.394-1.52m-7.886 4.573L10.14 11.4m0 0l-4.652 4.652m4.653-4.653l1.52-5.394L13.7 3.75m-3.56 7.65L5.487 19.53a2.652 2.652 0 01-3.75-3.75l8.136-4.653z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white">Empower</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Menyediakan platform website yang mudah diakses dan dikelola
                untuk meningkatkan keterampilan UMKM.
              </p>
            </div>

            {/* Connect */}
            <div className="py-8 md:py-0 md:pt-8 md:px-8 md:border-r border-[#27272a] border-b md:border-b-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#a78bfa] shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white">Connect</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Membangun ekosistem kuat yang menghubungkan produk lokal
                langsung dengan pasar yang lebih luas.
              </p>
            </div>

            {/* Innovate */}
            <div className="pt-8 md:pt-8 md:pl-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#a78bfa] shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-1.961a2.25 2.25 0 1 1 2.167 3.015L18 19m-4.5-1.5h-3m-3 1.5h3.75M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-white">Innovate</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Mendorong lingkungan kolaboratif di mana inisiatif desain web
                modern memacu pertumbuhan UMKM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section (Reference 2) */}
      <section className="w-full max-w-7xl px-4 sm:px-6 md:px-8 text-center mb-32 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-2 text-white">Our Values</h2>
        <p className="text-neutral-400 text-sm mb-12">
          The principles that guide everything we do
        </p>

        <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
          {["T", "E", "C", "H"].map((letter, idx) => (
            <div
              key={idx}
              className="w-16 h-16 md:w-24 md:h-24 bg-[#18181b] border border-[#27272a] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            >
              <span className="text-2xl md:text-4xl font-bold text-[#a78bfa]">
                {letter}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section (Reference 3) */}
      <section className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mb-24">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          People Behind GalekTech
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Nanda",
              role: "Frontend Engineer",
              image:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400&h=400",
            },
            {
              name: "Reza",
              role: "Backend Engineer",
              image:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=400&h=400",
            },
            {
              name: "Luvian",
              role: "Product Designer",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
            },
          ].map((person, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="w-full aspect-[4/5] bg-neutral-900 overflow-hidden mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out"
                />
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight mb-1">
                {person.name}
              </h3>
              <p className="text-pink-500 text-base font-medium">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
