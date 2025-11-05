"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../lib/animations";
import { Mail, MessageCircle } from "lucide-react";

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
          whileHover={{
            scale: 1.03,
            rotate: [0, 0.5, -0.5, 0],
            transition: { duration: 0.25 },
          }}
          href="mailto:lutergege007@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--foreground)",
          }}
        >
          <Mail size={16} /> Email
        </motion.a>

        {/* WhatsApp (accented) */}
        <motion.a
          variants={fadeInUp}
          whileHover={{
            scale: 1.03,
            rotate: [0, 0.4, -0.4, 0],
            transition: { duration: 0.25 },
          }}
          href="https://wa.me/2347036632363?text=Hi%20Ferdinand!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium border transition-all duration-300"
          style={{
            borderColor: "var(--muted)",
            color: "var(--foreground)",
            background:
              "linear-gradient(90deg, rgba(37,211,102,0.15), rgba(37,211,102,0.05))",
            boxShadow:
              "0 0 10px rgba(37,211,102,0.1), inset 0 0 4px rgba(37,211,102,0.05)",
          }}
        >
          <MessageCircle size={16} /> WhatsApp
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
