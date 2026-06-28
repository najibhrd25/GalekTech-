import Link from "next/link";

/**
 * GalekTech brand logo.
 */
export function VentureLogo() {
  return (
    // PANDUAN GESER KANAN-KIRI: Ubah class 'ml-8' (HP) dan 'md:ml-10' (Desktop) di bawah ini.
    // Skala Tailwind: ml-4 = 16px, ml-6 = 24px, ml-8 = 32px, ml-10 = 40px, ml-12 = 48px.
    <Link href="/" className="flex items-center ml-8 md:ml-10">
      <img
        src="/galektech.png"
        alt="GalekTech Logo"
        // PANDUAN UKURAN LOGO: Ubah nilai 'height' di bawah (contoh: "50px", "45px", "60px")
        style={{ height: "50px", width: "auto", display: "block" }}
        className="object-contain"
      />
    </Link>
  );
}

