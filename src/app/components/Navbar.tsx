"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      // fixed so nav is always visible; use inline style for colors from CSS vars
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-md`}
      style={{
        backgroundColor: "color-mix(in srgb, var(--card) 85%, transparent)",
        borderBottom: `1px solid var(--muted)`,
        boxShadow: scrolled ? "0 6px 20px rgba(2,6,23,0.08)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Name */}
        <h1
          className="text-lg md:text-xl font-semibold select-none"
          style={{ color: "var(--foreground)" }}
        >
           <a
            href="#">
              Ferdinand
            </a>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a
            href="#projects"
            className="hover:underline"
            style={{ color: "var(--foreground)" }}
            // uses CSS var for hover color via inline style on hover is tricky, so use tailwind arbitrary on hover
          >
            <span className="hover:text-[var(--accent)] transition-colors">Projects</span>
          </a>

          <a
            href="#about"
            className="hover:underline"
            style={{ color: "var(--foreground)" }}
          >
            <span className="hover:text-[var(--accent)] transition-colors">About</span>
          </a>

          <a
            href="#contact"
            className="hover:underline"
            style={{ color: "var(--foreground)" }}
          >
            <span className="hover:text-[var(--accent)] transition-colors">Contact</span>
          </a>

          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg transition-all"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle Menu"
          style={{
            backgroundColor: "var(--card)",
            color: "var(--foreground)",
          }}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu (drop-down) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t"
            style={{ borderTop: `1px solid var(--muted)`, backgroundColor: "var(--background)" }}
          >
            <div className="flex flex-col items-center py-4 space-y-4 text-sm">
              <a
                href="#projects"
                className="w-full text-center py-2"
                style={{ color: "var(--foreground)" }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="hover:text-[var(--accent)] transition-colors">Projects</span>
              </a>
              <a
                href="#about"
                className="w-full text-center py-2"
                style={{ color: "var(--foreground)" }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="hover:text-[var(--accent)] transition-colors">About</span>
              </a>
              <a
                href="#contact"
                className="w-full text-center py-2"
                style={{ color: "var(--foreground)" }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="hover:text-[var(--accent)] transition-colors">Contact</span>
              </a>

              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
