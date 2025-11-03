"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerChildren } from "../lib/animations";
import { projects } from "../data/projectsData";

export default function ProjectsSection() {
  const [query, setQuery] = useState("");

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.join(" ").toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
      className="py-10 px-6 transition-colors duration-500"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <motion.div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12 space-y-4">
          <h2
            className="text-4xl font-bold tracking-tight"
            style={{ color: "var(--accent)" }}
          >
            Featured Projects
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg leading-relaxed"
            style={{
              color: "var(--muted)",
            }}
          >
            A handpicked showcase of my most exciting frontend projects —
            blending creativity, performance, and modern design.
          </p>
        </motion.div>

        {/* Search + Hire Me */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or tech..."
            className="w-full md:w-2/3 rounded-lg px-4 py-3 text-sm transition-colors duration-300 outline-none"
            style={{
              border: "1px solid var(--muted)",
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
            }}
          />
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-lg transition-all duration-300"
            style={{
              border: "1px solid var(--muted)",
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget.style.backgroundColor = "var(--accent)"),
              (e.currentTarget.style.color = "#fff"))
            }
            onMouseLeave={(e) =>
              ((e.currentTarget.style.backgroundColor = "transparent"),
              (e.currentTarget.style.color = "var(--foreground)"))
            }
          >
            Hire me
          </a>
        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <motion.article
              key={p.id}
              variants={fadeInUp}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border"
              style={{
                borderColor: "var(--muted)",
                backgroundColor: "var(--tint)",
              }}
            >
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={600}
                    height={400}
                    className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4
                    className="text-lg font-semibold transition-colors duration-300"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    {p.title}
                  </h4>
                  <p
                    className="mt-2 text-sm transition-colors duration-300"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {p.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md transition-all duration-300"
                        style={{
                          backgroundColor: "var(--accent-transparent)",
                          color: "var(--accent)",
                          border: "1px solid var(--accent)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
