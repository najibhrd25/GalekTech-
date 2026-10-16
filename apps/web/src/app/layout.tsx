import "@workspace/ui/globals.css";

import { SanityLive } from "@workspace/sanity/live";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { Suspense } from "react";
import { preconnect, prefetchDNS } from "react-dom";

import { FooterServer, FooterSkeleton } from "@/components/layouts/footer";
import { CombinedJsonLd } from "@/components/sanity/json-ld";
import { Navbar } from "@/components/layouts/navbar";
import { PreviewBar } from "@/components/layouts/preview-bar";
import { Providers } from "@/components/layouts/providers";
import { ServiceWorkerRegister } from "@/components/layouts/sw-register";
import { SplashScreen } from "@/components/layouts/splash-screen";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const bluuNext = localFont({
  src: [
    {
      path: "../fonts/bluu-next/BluuNext-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/bluu-next/BluuNext-Bolditalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/bluu-next/BluuNext-Titling.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bluu",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  preconnect("https://cdn.sanity.io");
  prefetchDNS("https://cdn.sanity.io");
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${bluuNext.variable} font-sans antialiased`}
      >
        <Providers>
          <SplashScreen />
          <Navbar />
          {children}
          <Suspense fallback={<FooterSkeleton />}>
            <FooterServer />
          </Suspense>
          <SanityLive />
          <CombinedJsonLd includeOrganization includeWebsite />
          {(await draftMode()).isEnabled && (
            <>
              <PreviewBar />
              <VisualEditing />
            </>
          )}
          <ServiceWorkerRegister />
        </Providers>
      </body>
    </html>
  );
}
