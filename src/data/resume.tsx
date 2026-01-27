import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Murad Yusubov",
  initials: "MY",
  url: "https://muradyusubov.com",
  location: "Baku, Azerbaijan",
  locationLink: "https://www.google.com/maps/place/Baku",
  description:
    "Full-Stack Engineer & Frontend Team Lead specializing in resilient, event-driven web systems and AI orchestration using Next.js, Node.js, and TypeScript",
  summary:
    "I design autonomous web systems with an emphasis on transactional integrity and system resiliency. I currently work as a Frontend Team Lead at Allyos.ai, where I translate complex data models into high-performance, interactive user interfaces. My engineering ideology is based on eliminating ambiguity through deterministic state machines and robust validation layers. I have experience in developing 'Trust Engines,' which are systems that incorporate asynchronous worker patterns, circuit breakers for external API calls, and type safety to achieve reliability without requiring constant human intervention. I work as a registered entrepreneur based in Azerbaijan, offering a low-friction partnership model for international engineering teams.",

  avatarUrl: "/me.png",

  skills: [
    "TypeScript",
    "Next.js 15",
    "Node.js & Express",
    "PostgreSQL & Prisma",
    "Redis (Caching & Queues)", // Combines write-through and BullMQ
    "Zod (Data Validation)", // Explains what you use Zod for
    "BullMQ (Background Jobs)", // Points to TailorCV
    "AI Integration (RAG)",
    "API Resiliency (Circuit Breakers)", // Points to SBB
    "Docker",
    "AWS (EC2/S3)",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "muradyusubovdev@icloud.com",
    tel: "+994709224340",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/biolater",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/murad-yusubov",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:muradyusubovdev@icloud.com",
        icon: Icons.email,
        navbar: true,
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
      logoUrl: "/logo-allyos.jpg",
      start: "May 2025",
      end: "Present",
      description:
        "Directing a team of 3 engineers in the architecture and delivery of an enterprise AI-CRM. I established the core frontend infrastructure using Next.js, implementing a high-performance component library featuring complex keyboard-driven navigation and dynamic drag-and-drop state management. I standardized a contract-first development workflow by integrating GraphQL Codegen, which eliminated type mismatches between services and reduced cross-team integration time by 30%. I am responsible for code reviews, database-to-UI data mapping, and ensuring system scalability for high-concurrency enterprise users.",
    },
    {
      company: "ASCND",
      href: "https://dev.ascnd.tv",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/logo.png",
      start: "February 2025",
      end: "May 2025",
      description:
        "Engineered a creator monetization platform utilizing Remix and Stripe. I architected the multi-tier subscription engine and implemented a secure video-gating system with robust permission logic for pay-per-view content. Focused on transaction reliability by managing Stripe Webhook integrations to ensure real-time access synchronization across distributed user states, while optimizing the UI for low-latency media playback.",
    },
  ],

  education: [],

  projects: [
    /*     {
      title: "TailorCV",
      href: "https://github.com/Biolater/tailorcv",
      dates: "Dec 2025 – Present",
      active: true,
      description:
        "An AI-orchestration platform for high-volume resume tailoring. I engineered an asynchronous processing pipeline using BullMQ and Redis to handle intensive LLM workloads without blocking the event loop. The system utilizes a custom heuristic compression algorithm to optimize context window usage, reducing token overhead by 40% while maintaining high-fidelity output.",
      technologies: [
        "Next.js 15",
        "Node.js",
        "BullMQ & Redis",
        "OpenAI API",
        "PostgreSQL",
        "SSE (Server-Sent Events)",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://tailorcv.com",
        },
      ],
      image: "/tailorcv-mockup.png",
      video: "",
    }, */
    {
      title: "ScopeMatter",
      href: "https://github.com/Biolater/scopematter",
      dates: "Jul 2025 – Oct 2025",
      active: true,
      description:
        "A project governance platform that enforces financial integrity via deterministic state machines. I engineered a Change-Order system that prevents orphaned revenue by restricting mutations based on project scope status. Features include SHA-256 token-hashed share links for unauthenticated access and automated PDF generation for legally-binding project documentation.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Clerk",
        "HeroUI",
        "Redis (Write-through Caching)",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://scopematter.xyz",
          // icon: <Icons.globe className="size-3" />, // Kept as placeholder for your component
        },
      ],
      image: "",
      video:
        "https://9nghnaawajmv9mqf.public.blob.vercel-storage.com/scopematter",
    },
    {
      title: "Student Budget Buddy",
      href: "https://github.com/Biolater/student-budget-buddy",
      dates: "Feb 2025 – May 2025",
      active: true,
      description:
        "A resilient multi-currency financial engine handling AZN, TRY, USD, and EUR. I implemented a Circuit Breaker pattern with static fallback matrices to ensure system availability during external exchange-rate API outages. The platform utilizes a RAG-lite pipeline (Retrieval-Augmented Generation) to provide deterministic spending advice by injecting real user transaction data into LLM context windows.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Express.js",
        "OpenAI API (RAG)",
        "Clerk",
        "Zod (Data Validation)",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://student-bugdet-buddy-lyje.vercel.app/",
          // icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/student-budget-buddy.png",
      video: "",
    },
  ],
} as const;
