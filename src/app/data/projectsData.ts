export type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: "perxng",
    title: "PerxNG — Cashback Fintech",
    summary:
      "Location-based cashback app for Nigeria with merchant map, QR claim flow, and in-app offers. Mobile + Merchant dashboards.",
    tags: ["React Native", "Expo", "TypeScript", "Node", "MongoDB"],
    image: "/images/perxng.png",
    url: "https://nextlify-beta.vercel.app/products",
  },
  {
    id: "savi",
    title: "SAVI — Savings & Loans",
    summary:
      "Savings & credit product with card payments, webhook integrations, push notifications and savings plans.",
    tags: ["React Native", "Express", "TypeScript", "Payments"],
    image: "/images/savi.png",
    url: "https://nextlify-beta.vercel.app/products",
  },
  {
    id: "nextlify",
    title: "Powering Ideas. Building Futures.",
    summary: "Innovative digital solutions for Nigerian businesses",
    tags: ["React", "Tailwind", "Typescript", "Next.js", "UI/UX"],
    image: "/images/nextlify.png",
    url: "https://nextlify-beta.vercel.app/",
  },

  {
    id: "estyz-fitz",
    title: "Estyz-Fitz — Stay Stylish",
    summary:
      "An e-commerce website",
    tags: ["React", "Tailwind", "Typescript", "Next.js", "UI/UX", "Payments", "Vercel", ],
    image: "/images/estyz-fitz.png",
    url: "https://estyz-fitz.vercel.app/",
  },
  // {
  //   id: "cinemate",
  //   title: "CineMate — Watch Together",
  //   summary:
  //     "A synchronized movie-sharing platform for long-distance couples and communities with live chat.",
  //   tags: ["WebRTC", "Socket.IO", "Next.js", "UI/UX"],
  //   image: "/images/cinemate.jpg",
  //   url: "https://nextlify-beta.vercel.app/",
  // },
  {
    id: "indieafrique",
    title: "IndieAfrique — Community Platform",
    summary:
      "An online Radio platform for African indie creators — deployment, modern frontend stacks, and growth tooling.",
    tags: ["Next.js", "Vercel", "CI/CD"],
    image: "/images/indieafrique.png",
    url: "https://indieafrique.com/",
  },
];
