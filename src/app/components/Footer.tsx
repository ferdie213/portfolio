"use client";

export default function Footer() {
  return (
    <footer
      className="mt-12 py-6 text-center text-sm transition-colors duration-500 border-t"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--muted)",
        borderColor: "var(--muted)",
      }}
    >
      © {new Date().getFullYear()}{" "}
      <span style={{ color: "var(--foreground)" }}>Ferdinand L. Gege</span> — Built
      with ❤️ using <span style={{ color: "var(--accent)" }}>Next.js + Tailwind</span>
    </footer>
  );
}
