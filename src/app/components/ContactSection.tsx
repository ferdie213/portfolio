"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../lib/animations";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
      className="max-w-2xl mx-auto text-center px-6 py-10 transition-colors duration-500"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Heading */}
      <motion.h3
        variants={fadeInUp}
        className="text-3xl font-semibold mb-6"
        style={{ color: "var(--accent)" }}
      >
        Let’s Connect
      </motion.h3>

      {/* Description */}
      <motion.p
        variants={fadeInUp}
        className="mb-8 text-lg leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        Whether you’re looking to collaborate, discuss a new project, or simply
        connect — I’d love to hear from you.
      </motion.p>

      {/* Contact Buttons */}
      <motion.div
        variants={staggerChildren}
        className="flex flex-wrap justify-center gap-4"
      >
        {/* Email */}
        <motion.a
          variants={fadeInUp}
          href="mailto:lutergege007@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--foreground)",
          }}
        >
          <Mail size={16} /> Email
        </motion.a>

        {/* Phone */}
        <motion.a
          variants={fadeInUp}
          href="tel:+2347036632363"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium border transition-all duration-300"
          style={{
            borderColor: "var(--muted)",
            color: "var(--foreground)",
          }}
        >
          <Phone size={16} /> +234 703 663 2363
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
