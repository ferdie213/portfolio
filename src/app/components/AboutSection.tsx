"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../lib/animations";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
      className="max-w-3xl mx-auto text-center px-6 py-10 transition-colors duration-500"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <motion.h3
        variants={fadeInUp}
        className="text-3xl font-semibold mb-6"
        style={{ color: "var(--accent)" }}
      >
        About Me
      </motion.h3>

      <motion.p
        variants={fadeInUp}
        className="leading-relaxed text-lg"
        style={{ color: "var(--muted)" }}
      >
        I’m passionate about designing, building, and scaling impactful digital
        products. My work blends creativity with precision — delivering
        user-focused experiences backed by robust backend systems. I’m driven by
        problem-solving and the desire to empower people and businesses across
        Africa and beyond.
      </motion.p>
    </motion.section>
  );
}
