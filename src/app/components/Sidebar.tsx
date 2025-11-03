"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Home, FolderKanban, User, MessageSquare } from "lucide-react";
import React from "react";

type SidebarProps = {
  hovered: boolean;
  setHovered: (v: boolean) => void;
};

export default function Sidebar({ hovered, setHovered }: SidebarProps) {
  return (
    <motion.aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ width: hovered ? 220 : 72 }}
      transition={{ duration: 0.25 }}
      className="hidden lg:flex flex-col justify-between fixed top-0 left-0 h-full bg-[#0E1B25]/80 backdrop-blur-md border-r border-slate-800 z-40"
    >
      <div className="p-4 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          {hovered ? (
            <h2 className="text-emerald-400 font-bold text-sm pl-2">Ferdinand Gege</h2>
          ) : (
            <div className="h-6 w-6 rounded-full bg-emerald-400" />
          )}
        </div>

        <nav className="space-y-2 text-sm">
          {[
            { icon: Home, label: "Home", href: "#" },
            { icon: FolderKanban, label: "Projects", href: "#projects" },
            { icon: User, label: "About", href: "#about" },
            { icon: MessageSquare, label: "Contact", href: "#contact" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 p-2 rounded-md text-slate-300 hover:text-emerald-400 hover:bg-emerald-400/10"
            >
              <Icon size={18} />
              {hovered && <span>{label}</span>}
            </a>
          ))}
        </nav>
      </div>

      <div className="p-4 flex gap-3 border-t border-slate-800 justify-center lg:justify-start">
        <a
          href="https://github.com"
          target="_blank"
          className="p-2 border border-slate-700 rounded-md text-slate-300 hover:text-white"
        >
          <Github size={16} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="p-2 border border-slate-700 rounded-md text-slate-300 hover:text-white"
        >
          <Linkedin size={16} />
        </a>
      </div>
    </motion.aside>
  );
}
