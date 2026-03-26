export type Category =
  | "Articles"
  | "Taste"
  | "Directories"
  | "Communities"
  | "Learning"
  | "Jobs";

export interface Resource {
  title: string;
  url: string;
  description: string;
  category: Category;
  author?: string;
}

export const categories: {
  name: Category;
  emoji: string;
  description: string;
}[] = [
  {
    name: "Articles",
    emoji: "01",
    description: "In-depth essays and blog posts defining the discipline",
  },
  {
    name: "Taste",
    emoji: "02",
    description: "Developing the eye — essays, talks, and books on building design taste",
  },
  {
    name: "Directories",
    emoji: "03",
    description: "Curated lists of people, tools, and resources",
  },
  {
    name: "Learning",
    emoji: "04",
    description: "Courses, references, and educational material",
  },
  {
    name: "Communities",
    emoji: "05",
    description: "Places to connect with other design engineers",
  },
  {
    name: "Jobs",
    emoji: "06",
    description: "Find design engineering roles at top companies",
  },
];

export const resources: Resource[] = [
  {
    title: "Using AI as a Design Engineer",
    url: "https://jakub.kr/work/using-ai-as-a-design-engineer",
    description:
      "A practitioner's guide to integrating AI tools like Cursor and Claude into a design engineering workflow while maintaining creative judgment.",
    category: "Articles",
    author: "Jakub",
  },
  {
    title: "Design Engineering at Vercel",
    url: "https://vercel.com/blog/design-engineering-at-vercel",
    description:
      "How Vercel's Design Engineering team operates — defining the role, collaborative workflows, and deliverables like the Geist font system.",
    category: "Articles",
    author: "Vercel",
  },
  {
    title: "A Collection of Design Engineers",
    url: "https://maggieappleton.com/design-engineers",
    description:
      "Profiles of ten design engineering practitioners and their work at companies like Vercel, Linear, and Replit.",
    category: "Articles",
    author: "Maggie Appleton",
  },
  {
    title: "Developing Taste",
    url: "https://emilkowal.ski/ui/developing-taste",
    description:
      "Taste as a trained instinct, not preference. Three actionable methods: immerse in great work, analyze why things resonate, and practice with critique.",
    category: "Taste",
    author: "Emil Kowalski",
  },
  {
    title: "Taste is Eating Silicon Valley",
    url: "https://www.workingtheorys.com/p/taste-is-eating-silicon-valley",
    description:
      "As software becomes commoditized, taste has emerged as the new competitive advantage in tech — the shift from technical founders to culture as a differentiator.",
    category: "Taste",
    author: "Anu Atluru",
  },
  {
    title: "On the Importance of Taste — and How to Acquire It",
    url: "https://www.itsnicethat.com/articles/elizabeth-goodspeed-column-taste-technology-art-280224",
    description:
      "As AI makes technical skills more accessible, taste is what separates great designers. Emphasizes cross-disciplinary inspiration and trusting your instincts.",
    category: "Taste",
    author: "Elizabeth Goodspeed",
  },
  {
    title: "Steve Jobs, Rick Rubin, and Taste",
    url: "https://www.readtrung.com/p/steve-jobs-rick-rubin-and-taste",
    description:
      "What two legendary tastemakers share in common — exposing yourself to the best things humans have done and bringing those into your work.",
    category: "Taste",
    author: "Trung Phan",
  },
  {
    title: "Ira Glass on The Taste Gap",
    url: "https://www.themarginalian.org/2014/01/29/ira-glass-success-daniel-sax/",
    description:
      "The canonical statement on the gap between your taste and your ability. The only way to close it is to produce a huge volume of work.",
    category: "Taste",
    author: "Ira Glass",
  },
  {
    title: "The Creative Act: A Way of Being",
    url: "https://www.penguinrandomhouse.com/books/717356/the-creative-act-by-rick-rubin/",
    description:
      "Rick Rubin's philosophy on creativity with taste as a central theme. Developing and trusting your creative instincts.",
    category: "Taste",
    author: "Rick Rubin",
  },
  {
    title: "How to Train Your Taste as a Designer",
    url: "https://blog.readymag.com/how-to-train-your-taste/",
    description:
      "Conversations with working designers about training aesthetic sensibility — analog inspiration, cross-disciplinary study, and deliberate practice.",
    category: "Taste",
    author: "Readymag",
  },
  {
    title: "Design Engineer Tools",
    url: "https://designengineer.tools/",
    description:
      "A curated directory of 100+ tools organized by category — design, AI-assisted dev, 3D, motion, and more.",
    category: "Directories",
    author: "James Warner",
  },
  {
    title: "DesEngs — Resources for Design Engineers",
    url: "https://desengs.com/",
    description:
      "The ultimate resource hub organized across Read, Watch, Listen, Browse, Use, Build, Learn, and Join categories.",
    category: "Directories",
  },
  {
    title: "Design Engineers Directory",
    url: "https://design-engineers-x.vercel.app/",
    description:
      "A curated directory of design engineers who turn ideas into beautiful, functional solutions.",
    category: "Directories",
  },
  {
    title: "Design Engineering Notes",
    url: "https://www.floguo.com/notes/design-engineering",
    description:
      "Living notes collecting definitions, learning resources, courses, and influential practitioners in the field.",
    category: "Learning",
    author: "Flo",
  },
  {
    title: "Making Software",
    url: "https://www.makingsoftware.com/",
    description:
      "A visual reference manual covering color, typography, curves, SVGs, compression, networking, and compilers.",
    category: "Learning",
  },
  {
    title: "Design Eng Club",
    url: "https://x.com/designengclub",
    description:
      "A growing community on X/Twitter for like-minded design engineers to connect and share work.",
    category: "Communities",
  },
  {
    title: "Design Engineer Jobs",
    url: "https://designengineer.io/",
    description:
      "A dedicated job board listing design engineering positions with salary ranges across top tech companies.",
    category: "Jobs",
  },
];

export const roadmap = [
  {
    phase: "Foundation",
    number: "01",
    skills: [
      "HTML & CSS mastery",
      "JavaScript / TypeScript fundamentals",
      "Visual design principles (typography, color, layout)",
      "Responsive design & accessibility",
    ],
    description:
      "Build a rock-solid foundation in both design and front-end development. Understand the medium you're working with.",
  },
  {
    phase: "Core Craft",
    number: "02",
    skills: [
      "React / Next.js or similar frameworks",
      "CSS animations & transitions",
      "Design systems & component libraries",
      "Figma proficiency & design-to-code workflow",
    ],
    description:
      "Master the tools and frameworks that bridge design and engineering. Learn to think in components.",
  },
  {
    phase: "Advanced Motion & Interaction",
    number: "03",
    skills: [
      "Framer Motion / GSAP / React Spring",
      "SVG animation & manipulation",
      "Scroll-driven animations",
      "Gesture-based interactions",
    ],
    description:
      "Bring interfaces to life with purposeful motion. Understand timing, easing, and the physics of natural movement.",
  },
  {
    phase: "Creative Coding & 3D",
    number: "04",
    skills: [
      "Three.js / React Three Fiber",
      "WebGL & shaders (GLSL)",
      "Canvas API & generative art",
      "Particle systems & simulations",
    ],
    description:
      "Push the boundaries of what's possible on the web. Create immersive, memorable experiences.",
  },
  {
    phase: "Polish & Craft",
    number: "05",
    skills: [
      "Performance optimization",
      "Micro-interactions & details",
      "Cross-browser & device testing",
      "AI-assisted workflows (Cursor, Claude, v0)",
    ],
    description:
      "Obsess over the details. The difference between good and great is in the final 10% of polish.",
  },
  {
    phase: "Impact & Growth",
    number: "06",
    skills: [
      "Build & ship personal projects",
      "Contribute to open source",
      "Write about your process",
      "Join design engineering communities",
    ],
    description:
      "Share your work, build in public, and connect with the community. Your portfolio is your resume.",
  },
];
