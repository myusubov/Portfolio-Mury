import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const EMAIL_ADDRESS = "me@muradyusubov.dev";

export const LINKS = {
  github: "https://github.com/myusubov",
  linkedin: "https://linkedin.com/in/murad-yusubov",
  email: "me@muradyusubov.dev",
  googleMaps: "https://www.google.com/maps/place/Baku",
} as const;

export const DATA = {
  name: "Murad Yusubov",
  initials: "MY",
  url: "https://muradyusubov.dev",
  location: "Baku, Azerbaijan",
  locationLink: LINKS.googleMaps,
  description:
    "Full-Stack Developer | React, Next.js, TypeScript, Node.js, Express.js | Building product features for startups and SaaS teams",
  summary:
    "Full-Stack Developer working with React, Next.js, TypeScript, Node.js, and Express.js. For eleven months (June 2025 to April 2026), I worked as a remote contract developer on AllyOS, an AI-native CRM product, where I led frontend architecture for its core interfaces: complex data tables, Kanban-style pipelines, and the client-side caching strategy that kept them fast as the product grew. I also led two other frontend developers, reviewing pull requests and setting conventions. Self-taught since December 2022, I moved from small learning projects into real contract product work. Right now I'm building TailorCV, an AI-assisted resume platform for developers, centered on a GitHub Extractor that analyzes a user's repositories to generate evidence-backed resume content. I'm looking for remote full-stack roles at small startups and early-stage SaaS teams, ideally founder-led or CTO-led, where I can own product features end to end.",

  avatarUrl: "/me.png",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js & Express",
    "PostgreSQL & Prisma",
    "Redis",
    "GraphQL & GraphQL Codegen",
    "Zod (Data Validation)",
    "Auth & OAuth (Clerk)",
    "GitHub API Integration",
    "Automated Testing (Playwright, Vitest)",
    "AWS",
  ],

  // navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: LINKS.email,
    // tel: "+994709224340",
    social: {
      GitHub: {
        name: "GitHub",
        url: LINKS.github,
        icon: Icons.github,
        navbar: true,
        isResume: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: LINKS.linkedin,
        icon: Icons.linkedin,
        navbar: true,
        isResume: false,
      },
      Email: {
        name: "Send Email",
        url: `mailto:${LINKS.email}`,
        icon: Icons.email,
        navbar: true,
        isResume: false,
      },
      Resume: {
        name: "Resume",
        url: "#",
        icon: Icons.resume,
        navbar: true,
        isResume: true,
      },
    },
  },

  work: [
    {
      company: "Allyos.ai",
      href: "https://app.allyos.ai",
      badges: [],
      location: "Remote",
      title: "Frontend Team Lead",
      logoUrl: "/logo-allyos.svg",
      start: "June 2025",
      end: "April 2026",
      description:
        "Led frontend architecture as tech lead for an AI-native CRM, guiding two other frontend developers through code review and shared conventions. Built the CRM's core interactive systems: a virtualized, filterable data table and a drag-and-drop Kanban pipeline with per-column pagination and configurable fields. Diagnosed repeated loading-state issues caused by an SSR-heavy data layer, and led the move to a client-cache architecture with TanStack Query, fixing navigation responsiveness across the core workflows. Set up GraphQL Codegen to generate frontend types directly from the backend schema, catching frontend/backend mismatches at compile time.",
    },
  ],

  education: [],

  projects: [
    {
      title: "TailorCV",
      href: "https://github.com/myusubov/tailorcv",
      dates: "Dec 2025 \u2013 Present",
      active: true,
      description:
        "AI-assisted resume platform for developers, still in active development. Self-taught and project-heavy developers often have strong proof of work sitting in GitHub repos with no easy way to turn it into resume content. The current core is a GitHub-based extractor: connect your account, select up to three repositories, and a deterministic analysis pipeline detects project shape, tech stack hints, and frontend/backend areas directly from the repo tree, no AI involved at this stage. That structured evidence feeds a base resume with section editors, autosave, a live A4-style preview, and undo/redo. Auth is fully custom through Clerk, including OAuth, OTP verification, and protected routes. The next phase is the AI layer that turns the extracted evidence into resume content.",
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Express",
        "PostgreSQL & Prisma",
        "Redis",
        "Clerk",
        "TanStack Query",
        "Zod",
        "Playwright & Vitest",
      ],
      links: [
        // {
        //   type: "Live Demo",
        //   href: "https://tailorcv.xyz",
        // },
      ],
      image: "/tailorcv-repo-selection-temp.png",
      video: "",
    },
  ],
} as const;

export type Project = (typeof DATA.projects)[number];
export type Work = (typeof DATA.work)[number];
