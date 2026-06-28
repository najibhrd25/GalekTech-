"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Kunci scroll body saat splash screen sedang berjalan
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2000);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            exit={{
              x: 180,
              opacity: 0,
              transition: { duration: 0.5, ease: "easeIn" },
            }}
            className="flex items-center justify-center p-6"
          >
            <img
              src="/galektech.png"
              alt="GalekTech Logo"
              style={{ height: "140px", width: "auto" }}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
