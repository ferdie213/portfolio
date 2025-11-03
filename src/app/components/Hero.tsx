"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerChildren } from "../lib/animations";

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={staggerChildren}
      className="flex flex-col-reverse md:flex-row items-center justify-between pt-12 gap-12 px-6 md:px-10 transition-colors duration-500"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Left Text Section */}
      <motion.div
        variants={fadeInUp}
        className="flex-1 text-center md:text-left"
        style={{ color: "var(--foreground)" }}
      >
        <h2
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ color: "var(--accent)" }}
        >
          Full-Stack Web & Mobile Developer
        </h2>

        <p
          className="mt-4 text-lg max-w-lg leading-relaxed mx-auto md:mx-0"
          style={{ color: "var(--muted)" }}
        >
          I design and build scalable digital products — mobile apps, backend systems, and polished web experiences.{" "}
          <br />
          CEO & Founder at Spur Bay Nigeria Limited. I ship products like{" "}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>PerxNG</span>,{" "}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>SAVI</span>, and{" "}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>CineMate</span>.
        </p>

        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--foreground)",
            }}
          >
            View My Work
          </a>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="relative"
        >
          <Image
            src="/images/ferdinand.png"
            alt="Ferdinand Luter Gege"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
            style={{
              border: `2px solid var(--accent)`,
              backgroundColor: "var(--card)",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
