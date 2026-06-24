import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us | GalekTech",
  description:
    "Hubungi tim GalekTech untuk berkolaborasi dalam digitalisasi UMKM Anda di Trenggalek.",
};

export default function WorkWithUsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-24 pt-32 px-4 md:px-8 bg-black text-white">
      <section className="w-full max-w-3xl text-center bg-gradient-to-b from-[#18181b] to-black border border-[#27272a] rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Work With Us
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Tertarik untuk mendigitalisasi UMKM Anda atau ingin berkolaborasi
          bersama tim GalekTech? Kami siap membantu membawa bisnis Anda ke level
          selanjutnya. Hubungi kami melalui kontak di bawah ini.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:hello@galektech.com"
            className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3 text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            Email Us
          </a>
          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#27272a] border border-[#3f3f46] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3f3f46] transition-colors flex items-center justify-center gap-3 text-lg"
          >
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.157-5.02-3.353-6.177-6.177l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
