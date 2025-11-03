"use client";

import { motion } from "framer-motion";
import { GitHubRepo } from "../lib/github";
import { ExternalLink, Star, GitFork } from "lucide-react";

interface Props {
  repo: GitHubRepo;
  index: number;
}

export default function ProjectCard({ repo, index }: Props) {
  return (
    <motion.a
      href={repo.homepage || repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative block rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        border: "1px solid var(--muted)",
      }}
    >
      {/* Hover Accent Line */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          backgroundColor: "var(--accent)",
        }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <h3
            className="text-lg md:text-xl font-semibold transition-colors"
            style={{ color: "var(--accent)" }}
          >
            {repo.name.replace(/-/g, " ")}
          </h3>
          <ExternalLink
            className="w-5 h-5 transition-colors"
            style={{ color: "var(--muted)" }}
          />
        </div>

        {/* Description */}
        <p
          className="text-sm mb-4 line-clamp-2 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {repo.description || "No description provided."}
        </p>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 text-xs rounded-full font-medium transition-colors"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--background)",
                }}
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Repo Stats */}
        <div
          className="flex items-center flex-wrap gap-4 text-sm"
          style={{ color: "var(--accent)" }}
        >
          {repo.language && (
            <span className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor:
                    repo.language === "TypeScript"
                      ? "#3178c6"
                      : repo.language === "JavaScript"
                      ? "#f7df1e"
                      : repo.language === "Python"
                      ? "#3572A5"
                      : repo.language === "HTML"
                      ? "#e34c26"
                      : repo.language === "CSS"
                      ? "#563d7c"
                      : "var(--accent)",
                }}
              />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4" style={{ color: "var(--accent)" }} />{" "}
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="w-4 h-4" style={{ color: "var(--accent)" }} />{" "}
            {repo.forks_count}
          </span>
        </div>
      </div>
    </motion.a>
  );
}
