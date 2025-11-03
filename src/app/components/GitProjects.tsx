"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchFrontendRepos, GitHubRepo } from "../lib/github";
import ProjectCard from "./ProjectCard";
import LoadingSkeleton from "./LoadingSkeleton";
import { fadeInUp, staggerChildren } from "../lib/animations";

export default function GitProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchFrontendRepos("ferdie213")
      .then(setRepos)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const filtered = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(query.toLowerCase()) ||
      repo.topics?.some((topic) =>
        topic.toLowerCase().includes(query.toLowerCase())
      )
  );

  return (
    <motion.section
      id="github-projects"
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
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12 space-y-4"
        >
          <h2
            className="
              text-4xl font-bold tracking-tight transition-colors duration-500
              text-[var(--accent)] dark:text-[#8AFFC1]
            "
          >
            Featured GitHub Projects
          </h2>

          <p
            className="max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-500"
            style={{ color: "var(--muted)" }}
          >
            A curated selection of my open-source frontend experiments and
            developer tools — blending performance, creativity, and modern UI
            design.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search GitHub projects or tech..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-2/3 lg:w-1/2 px-4 py-3 rounded-xl border outline-none transition-colors duration-300
                       border-[var(--muted)] bg-[var(--background)] text-[var(--foreground)]
                       focus:border-[var(--accent)]"
          />
        </motion.div>

        {/* States */}
        {loading && <LoadingSkeleton count={6} />}
        {error && (
          <p className="text-center" style={{ color: "var(--accent)" }}>
            Failed to load projects. Please try again later.
          </p>
        )}
        {!loading && !error && filtered.length === 0 && (
          <p className="text-center" style={{ color: "var(--muted)" }}>
            No projects match your search.
          </p>
        )}

        {/* Grid */}
        <motion.div
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((repo, i) => (
            <ProjectCard key={repo.id} repo={repo} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="text-center mt-14">
          <a
            href="https://github.com/ferdie213"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300
                       border-[var(--accent)] text-[var(--accent)] hover:opacity-80"
          >
            View All on GitHub →
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
