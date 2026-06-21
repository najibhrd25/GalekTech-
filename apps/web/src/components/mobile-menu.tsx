"use client";

import { Button } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const STATIC_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Project", href: "/project" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Menu className="size-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:max-w-sm flex flex-col px-0"
        showCloseButton={false}
      >
        <SheetHeader className="flex-row items-center px-6 justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <SheetTitle>GalekTech</SheetTitle>
          <SheetClose className="rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="size-5" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>

        {/* Navigation items */}
        <nav className="flex-1 overflow-y-auto pt-4 grid px-6 gap-1 content-start">
          {STATIC_LINKS.map((link, idx) => (
            <Link
              key={idx}
              className="flex items-center py-3 font-medium text-sm transition-colors hover:text-pink-500"
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <SheetFooter className="border-t border-neutral-200 dark:border-neutral-800 p-6">
          <Link
            href="/work-with-us"
            onClick={closeMenu}
            className="w-full bg-neutral-900 text-white dark:bg-white dark:text-black py-3 rounded-xl font-bold flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            Work with us
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
