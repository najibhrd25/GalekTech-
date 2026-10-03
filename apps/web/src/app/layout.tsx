import "@workspace/ui/globals.css";

import { SanityLive } from "@workspace/sanity/live";
import { Geist, Geist_Mono } from "next/font/google";
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

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
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
