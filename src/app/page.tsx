"use client";

import React from "react";
import Head from "next/head";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GitProjects from "./components/GitProjects";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function PortfolioPage() {
  const [sidebarHovered, setSidebarHovered] = React.useState(false);

  return (
    <>
     <Head>
        <title>Ferdinand Gege - Fullstack Dev</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
      className="min-h-screen flex transition-colors duration-500 relative overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Sidebar */}
      <Sidebar hovered={sidebarHovered} setHovered={setSidebarHovered} />

      {/* Main content */}
      <div className="flex-1 ml-0 lg:ml-[72px] relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Content sections */}
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
          <Hero />
          <ProjectsSection />
          <GitProjects />
          <AboutSection />
          <ContactSection />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
    </> 
  );
}
