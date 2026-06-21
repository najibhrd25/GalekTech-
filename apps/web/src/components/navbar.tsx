"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { VentureLogo } from "./venture-logo";
import { MobileMenu } from "./mobile-menu";

const STATIC_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Project", href: "/project" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-black/90 dark:bg-black/90 backdrop-blur-md border-b border-neutral-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex h-20 items-center justify-between">
        {/* Logo */}
        <div className="flex h-12 shrink-0 items-center">
          <VentureLogo />
        </div>

        {/* Desktop Navigation & Actions (all grouped on the right) */}
        <div className="hidden items-center gap-8 md:flex">
          {STATIC_LINKS.map((link, idx) => (
            <Link
              key={idx}
              className="text-lg font-medium text-neutral-400 dark:text-neutral-400 transition-colors hover:text-white dark:hover:text-white"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/work-with-us"
            className="rounded-sm text-base h-11 px-6 bg-pink-500 text-neutral-250 flex items-center justify-center font-semibold hover:bg-pink-600 transition-colors"
          >
            Work with us
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
