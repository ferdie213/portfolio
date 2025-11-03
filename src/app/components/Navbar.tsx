"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";



export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-lg bg-[white/70] dark:bg-[#08121A]/70 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
      <h1 className="text-lg font-semibold">Ferdinand Luter Gege</h1>
      <div className="flex items-center gap-3">
        <a href="#contact" className="text-sm hover:text-emerald-400">
          Contact
        </a>
        
        <ThemeToggle />
      </div>
    </header>
  );
}
