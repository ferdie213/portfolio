"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const saved = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const computedIsDark =
      saved === "dark"
        ? true
        : saved === "light"
        ? false
        : html.classList.contains("dark") || systemPrefersDark;

    // apply correct class
    if (computedIsDark) html.classList.add("dark");
    else html.classList.remove("dark");

    // ⚡ Defer state updates so React doesn’t warn
    queueMicrotask(() => {
      setIsDark(computedIsDark);
      setMounted(true);
    });
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const next = !isDark;
    if (next) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDark(next);
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--card)] text-[var(--foreground)] shadow-sm hover:shadow-md transition-all duration-300"
      whileTap={{ scale: 0.92 }}
      aria-label="Toggle dark mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.75 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.75 }}
            transition={{ duration: 0.42, ease: "easeInOut" }}
            className="absolute"
          >
            <Sun className="w-5 h-5 text-yellow-400" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.75 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.75 }}
            transition={{ duration: 0.42, ease: "easeInOut" }}
            className="absolute"
          >
            <Moon className="w-5 h-5 text-blue-400" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
