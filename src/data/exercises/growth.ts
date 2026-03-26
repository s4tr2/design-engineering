import { Phase } from "./types";

export const growth: Phase = {
  slug: "growth",
  title: "Impact & Growth",
  number: "06",
  description:
    "Share your work, build in public, and connect with the community.",
  exercises: [
    // -------------------------------------------------------
    // 1. Portfolio Hero Section
    // -------------------------------------------------------
    {
      slug: "portfolio-hero",
      title: "Portfolio Hero Section",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Build a stunning <strong>portfolio hero section</strong> that serves as the first impression of your personal site.</p>",
        "<p>Display your name in large, bold type with a one-line role description beneath it (e.g. \"Design Engineer\"). The text should <em>animate in</em> word-by-word or character-by-character using CSS keyframe animations.</p>",
        "<p>Add a subtle background effect such as an animated gradient or a repeating pattern. Include a <strong>scroll indicator</strong> at the bottom (an animated down-arrow or \"scroll\" label) to invite visitors to explore further.</p>",
        "<p>Focus on typography, spacing, and a polished entrance animation. This is the hero \u2014 make it count.</p>",
      ],
      requirements: [
        "Name displayed in large, prominent type",
        "One-line role/title description below the name",
        "Animated text entrance (word-by-word or character-by-character)",
        "Subtle background effect (gradient animation or pattern)",
        "Scroll indicator at the bottom of the viewport",
        "Full viewport height hero section",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio Hero</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
    }

    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    /* TODO: Add animated background gradient */
    /* .hero::before { } */

    .hero-name {
      /* TODO: Large font-size, bold weight */
      font-size: 1rem;
    }

    .hero-role {
      /* TODO: Style the role description */
      font-size: 1rem;
      color: #888;
    }

    /* TODO: Create @keyframes for text reveal animation */
    /* @keyframes revealWord { } */

    .word {
      display: inline-block;
      opacity: 0;
      /* TODO: Add animation properties */
    }

    /* TODO: Stagger animation delay for each word */
    /* .word:nth-child(1) { animation-delay: 0s; } */

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      /* TODO: Style and animate the scroll indicator */
    }

    /* TODO: Create @keyframes for scroll indicator bounce */
    /* @keyframes bounce { } */
  </style>
</head>
<body>
  <section class="hero">
    <!-- TODO: Add background effect element if needed -->

    <h1 class="hero-name">
      <!-- TODO: Wrap each word in a span.word for animation -->
      Your Name
    </h1>
    <p class="hero-role">
      <!-- TODO: Add your role description -->
      Design Engineer
    </p>

    <div class="scroll-indicator">
      <!-- TODO: Add scroll indicator (arrow or text) -->
    </div>
  </section>

  <script>
    // Optional: Use JS to split text into word spans dynamically
    // function splitWords(element) { ... }
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio Hero</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: "Inter", system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
    }

    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0a0a0a 100%);
      background-size: 400% 400%;
      animation: gradientShift 12s ease infinite;
      z-index: 0;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      padding: 0 2rem;
    }

    .hero-name {
      font-size: clamp(3rem, 8vw, 7rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin-bottom: 1rem;
    }

    .hero-role {
      font-size: clamp(1.1rem, 2.5vw, 1.5rem);
      color: #888;
      font-weight: 400;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    @keyframes revealWord {
      0% {
        opacity: 0;
        transform: translateY(20px) rotateX(-20deg);
        filter: blur(4px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg);
        filter: blur(0);
      }
    }

    .word {
      display: inline-block;
      opacity: 0;
      animation: revealWord 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }

    .hero-name .word:nth-child(1) { animation-delay: 0.2s; }
    .hero-name .word:nth-child(2) { animation-delay: 0.4s; }
    .hero-name .word:nth-child(3) { animation-delay: 0.6s; }

    .hero-role .word {
      animation-delay: 0.9s;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: #555;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      animation: fadeInUp 0.6s ease 1.5s forwards;
      opacity: 0;
    }

    @keyframes fadeInUp {
      to { opacity: 1; }
    }

    .scroll-arrow {
      width: 20px;
      height: 20px;
      border-right: 2px solid #555;
      border-bottom: 2px solid #555;
      transform: rotate(45deg);
      animation: bounce 2s ease infinite;
    }

    @keyframes bounce {
      0%, 100% { transform: rotate(45deg) translateY(0); }
      50% { transform: rotate(45deg) translateY(6px); }
    }
  </style>
</head>
<body>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-name">
        <span class="word">Your</span>&nbsp;
        <span class="word">Name</span>
      </h1>
      <p class="hero-role">
        <span class="word">Design Engineer</span>
      </p>
    </div>

    <div class="scroll-indicator">
      <span>Scroll</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
</body>
</html>`,
      hint: "Use @keyframes with opacity and transform to reveal words one at a time. Apply animation-delay on each .word span to stagger the entrance. For the background, animate background-position on a large gradient.",
      references: [
        {
          title: "Design Engineer Portfolio Examples",
          url: "https://desengs.com/",
        },
        {
          title: "Design Engineer Tools & Resources",
          url: "https://designengineer.tools/",
        },
        {
          title: "CSS Animations \u2013 MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /@keyframes/i, label: "@keyframes animation" },
          { pattern: /animation/i, label: "animation property" },
          { pattern: /font-size/i, label: "font-size styling" },
          { pattern: /transform/i, label: "transform property" },
        ];
        const missing = checks.filter((c) => !c.pattern.test(code));
        if (missing.length === 0) {
          return { passed: true, message: "Portfolio hero looks great!" };
        }
        return {
          passed: false,
          message: `Missing: ${missing.map((m) => m.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 2. Project Case Study Card
    // -------------------------------------------------------
    {
      slug: "project-showcase",
      title: "Project Case Study Card",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Create a <strong>project showcase card</strong> that works as a reusable template in a portfolio.</p>",
        "<p>The card should include a project thumbnail image area that <em>zooms subtly on hover</em>, a project title, a short description paragraph, and a row of <strong>tech stack tags</strong> (small pills listing technologies used).</p>",
        "<p>Add a \"View Project\" link styled as a button or underlined link. Optionally include a before/after or multi-screenshot view to show different states of the project.</p>",
        "<p>The card should have smooth transitions, rounded corners, and feel like a polished portfolio piece.</p>",
      ],
      requirements: [
        "Project thumbnail with hover zoom effect",
        "Project title and short description",
        "Tech stack displayed as tags/pills",
        "View Project link or button",
        "Smooth hover transitions on card and image",
        "Rounded corners and clean card layout",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Project Showcase Card</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
      padding: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .project-card {
      max-width: 420px;
      background: #141414;
      /* TODO: Add border-radius, overflow, transition */
    }

    .project-thumbnail {
      width: 100%;
      height: 240px;
      background: #1a1a2e;
      /* TODO: Add overflow hidden for zoom effect */
    }

    .project-thumbnail img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* TODO: Add transition and :hover transform scale */
    }

    /* TODO: Style .project-card:hover .project-thumbnail img for zoom */

    .project-info {
      padding: 1.5rem;
    }

    .project-title {
      /* TODO: Style the title */
    }

    .project-description {
      /* TODO: Style the description */
      color: #888;
    }

    .tech-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      /* TODO: Add margin */
    }

    .tech-tag {
      /* TODO: Style as a pill/badge */
      padding: 0.25rem 0.75rem;
      font-size: 0.8rem;
    }

    .view-link {
      /* TODO: Style the View Project link */
      color: #6366f1;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <article class="project-card">
    <div class="project-thumbnail">
      <!-- TODO: Add an img or placeholder for the project screenshot -->
    </div>
    <div class="project-info">
      <h2 class="project-title"><!-- TODO: Project name --></h2>
      <p class="project-description">
        <!-- TODO: Short project description -->
      </p>
      <div class="tech-tags">
        <!-- TODO: Add tech stack tags -->
      </div>
      <a href="#" class="view-link"><!-- TODO: View Project link --></a>
    </div>
  </article>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Project Showcase Card</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: "Inter", system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
      padding: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .project-card {
      max-width: 420px;
      background: #141414;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #222;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      border-color: #333;
    }

    .project-thumbnail {
      width: 100%;
      height: 240px;
      overflow: hidden;
      position: relative;
      background: linear-gradient(135deg, #1a1a2e, #16213e);
    }

    .project-thumbnail img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .project-card:hover .project-thumbnail img {
      transform: scale(1.05);
    }

    .thumbnail-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      opacity: 0.3;
    }

    .project-info {
      padding: 1.5rem;
    }

    .project-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      letter-spacing: -0.02em;
    }

    .project-description {
      font-size: 0.9rem;
      color: #888;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .tech-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 1.25rem;
    }

    .tech-tag {
      padding: 0.25rem 0.75rem;
      font-size: 0.75rem;
      background: rgba(99, 102, 241, 0.1);
      color: #818cf8;
      border-radius: 100px;
      border: 1px solid rgba(99, 102, 241, 0.2);
      font-weight: 500;
    }

    .view-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      color: #fafafa;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: color 0.2s ease;
    }

    .view-link:hover {
      color: #818cf8;
    }

    .view-link .arrow {
      transition: transform 0.2s ease;
      font-size: 1.1rem;
    }

    .view-link:hover .arrow {
      transform: translateX(3px);
    }

    .screenshots {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
      margin-top: 1rem;
      padding: 0 1.5rem 1.5rem;
    }

    .screenshots .thumb {
      height: 60px;
      background: #1a1a2e;
      border-radius: 8px;
      border: 1px solid #222;
      transition: border-color 0.2s ease;
      cursor: pointer;
    }

    .screenshots .thumb:hover {
      border-color: #444;
    }
  </style>
</head>
<body>
  <article class="project-card">
    <div class="project-thumbnail">
      <div class="thumbnail-placeholder">\u25B3</div>
    </div>
    <div class="project-info">
      <h2 class="project-title">Motion Design System</h2>
      <p class="project-description">
        A comprehensive animation library for React, featuring spring physics, gesture support, and accessible motion preferences.
      </p>
      <div class="tech-tags">
        <span class="tech-tag">React</span>
        <span class="tech-tag">TypeScript</span>
        <span class="tech-tag">Framer Motion</span>
        <span class="tech-tag">Storybook</span>
      </div>
      <a href="#" class="view-link">
        View Project <span class="arrow">\u2192</span>
      </a>
    </div>
    <div class="screenshots">
      <div class="thumb"></div>
      <div class="thumb"></div>
    </div>
  </article>
</body>
</html>`,
      hint: "Use overflow: hidden on the thumbnail container, then transform: scale(1.05) on the image during :hover. Add transition on the image for smooth zooming. Style tech tags as small rounded pills with a subtle background color.",
      references: [
        {
          title: "Design Engineer Portfolio Examples",
          url: "https://desengs.com/",
        },
        {
          title: "Design Engineer Tools & Resources",
          url: "https://designengineer.tools/",
        },
        {
          title: "CSS Transitions \u2013 MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /transition/i, label: "transition property" },
          { pattern: /transform/i, label: "transform property" },
          { pattern: /:hover/i, label: ":hover pseudo-class" },
          { pattern: /border-radius/i, label: "border-radius" },
          { pattern: /overflow/i, label: "overflow property" },
        ];
        const missing = checks.filter((c) => !c.pattern.test(code));
        if (missing.length === 0) {
          return { passed: true, message: "Project card looks polished!" };
        }
        return {
          passed: false,
          message: `Missing: ${missing.map((m) => m.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 3. Personal About Section
    // -------------------------------------------------------
    {
      slug: "about-section",
      title: "Personal About Section",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "<p>Design a personal <strong>About section</strong> for a portfolio site that feels warm and approachable.</p>",
        "<p>Create a <strong>two-column layout</strong> with a photo or avatar placeholder on one side and a bio text block on the other. Use CSS Grid or Flexbox for the layout.</p>",
        "<p>Below the bio, display your <strong>skills as visual tags or pills</strong>. Add <strong>social links</strong> using Unicode characters or CSS shapes as icons. Include a fun personal detail section (e.g. favorite tools, hobbies, or a short fun-fact list).</p>",
        "<p>The section should be responsive and visually balanced. Make it feel like a real portfolio piece.</p>",
      ],
      requirements: [
        "Two-column layout (photo + bio) using Grid or Flexbox",
        "Photo or avatar placeholder with rounded styling",
        "Bio paragraph text",
        "Skills displayed as visual tags/pills",
        "Social links with icon indicators",
        "A fun personal detail area",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Section</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
      padding: 3rem;
    }

    .about {
      max-width: 900px;
      margin: 0 auto;
      /* TODO: Use display: grid or display: flex for two-column layout */
      /* TODO: Add gap between columns */
    }

    .about-photo {
      /* TODO: Style the avatar/photo area */
      width: 200px;
      height: 200px;
      background: #1a1a2e;
      /* TODO: Add border-radius for rounded shape */
    }

    .about-content {
      /* TODO: Style the text column */
    }

    .about-bio {
      /* TODO: Style the bio paragraph */
      color: #aaa;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      /* TODO: Add gap */
    }

    .skill-tag {
      /* TODO: Style as a rounded pill */
      padding: 0.3rem 0.8rem;
      font-size: 0.8rem;
    }

    .social-links {
      display: flex;
      /* TODO: Add gap and styling */
    }

    .social-link {
      /* TODO: Style social links */
      color: #888;
      text-decoration: none;
    }

    .fun-facts {
      /* TODO: Style the fun facts section */
    }
  </style>
</head>
<body>
  <section class="about">
    <div class="about-photo">
      <!-- TODO: Add avatar placeholder -->
    </div>
    <div class="about-content">
      <h2><!-- TODO: About heading --></h2>
      <p class="about-bio">
        <!-- TODO: Write a bio paragraph -->
      </p>
      <div class="skills">
        <!-- TODO: Add skill tags -->
      </div>
      <div class="social-links">
        <!-- TODO: Add social links with icons -->
      </div>
      <div class="fun-facts">
        <!-- TODO: Add fun personal details -->
      </div>
    </div>
  </section>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Section</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: "Inter", system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
      padding: 4rem 2rem;
    }

    .about {
      max-width: 900px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 260px 1fr;
      gap: 3rem;
      align-items: start;
    }

    .about-photo-wrapper {
      position: sticky;
      top: 2rem;
    }

    .about-photo {
      width: 220px;
      height: 220px;
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      border: 2px solid #222;
    }

    .about-location {
      margin-top: 1rem;
      font-size: 0.85rem;
      color: #666;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .about-content h2 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 1rem;
    }

    .about-bio {
      font-size: 1rem;
      line-height: 1.75;
      color: #aaa;
      margin-bottom: 1.5rem;
    }

    .section-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #555;
      margin-bottom: 0.75rem;
      font-weight: 600;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }

    .skill-tag {
      padding: 0.35rem 0.85rem;
      font-size: 0.8rem;
      background: #141414;
      border: 1px solid #222;
      border-radius: 100px;
      color: #ccc;
      font-weight: 500;
      transition: border-color 0.2s ease, color 0.2s ease;
    }

    .skill-tag:hover {
      border-color: #444;
      color: #fff;
    }

    .social-links {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: #141414;
      border: 1px solid #222;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #888;
      text-decoration: none;
      font-size: 1.1rem;
      transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    }

    .social-link:hover {
      background: #1a1a2e;
      color: #fafafa;
      border-color: #444;
    }

    .fun-facts {
      background: #141414;
      border: 1px solid #222;
      border-radius: 16px;
      padding: 1.25rem;
    }

    .fun-facts h3 {
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #ccc;
    }

    .fun-fact-list {
      list-style: none;
      padding: 0;
    }

    .fun-fact-list li {
      font-size: 0.85rem;
      color: #888;
      padding: 0.4rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .fun-fact-list li span {
      font-size: 1rem;
    }

    @media (max-width: 700px) {
      .about {
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
      }
      .skills, .social-links {
        justify-content: center;
      }
    }
  </style>
</head>
<body>
  <section class="about">
    <div class="about-photo-wrapper">
      <div class="about-photo">\uD83D\uDC64</div>
      <p class="about-location">\u25CB San Francisco, CA</p>
    </div>
    <div class="about-content">
      <h2>About Me</h2>
      <p class="about-bio">
        Design engineer who bridges the gap between design and code. I build
        polished, interactive interfaces with a focus on motion, accessibility,
        and developer experience. Currently crafting design systems and tools
        that help teams ship better products.
      </p>

      <p class="section-label">Skills</p>
      <div class="skills">
        <span class="skill-tag">React</span>
        <span class="skill-tag">TypeScript</span>
        <span class="skill-tag">CSS</span>
        <span class="skill-tag">Figma</span>
        <span class="skill-tag">Motion Design</span>
        <span class="skill-tag">Design Systems</span>
        <span class="skill-tag">Accessibility</span>
        <span class="skill-tag">Node.js</span>
      </div>

      <p class="section-label">Connect</p>
      <div class="social-links">
        <a href="#" class="social-link" title="GitHub">\u2699</a>
        <a href="#" class="social-link" title="Twitter">\u2709</a>
        <a href="#" class="social-link" title="LinkedIn">\u26C1</a>
        <a href="#" class="social-link" title="Dribbble">\u25CE</a>
      </div>

      <div class="fun-facts">
        <h3>Quick Facts</h3>
        <ul class="fun-fact-list">
          <li><span>\u2328</span> Keyboard: HHKB Professional</li>
          <li><span>\u2615</span> Fuel: Oat milk cortado</li>
          <li><span>\uD83C\uDFB5</span> Coding music: Lo-fi hip hop</li>
          <li><span>\uD83D\uDCDA</span> Reading: Refactoring UI</li>
        </ul>
      </div>
    </div>
  </section>
</body>
</html>`,
      hint: "Use display: grid with grid-template-columns to create the two-column layout. Apply border-radius: 50% for a circular avatar or a large border-radius for rounded squares. Use gap to space out skill tags.",
      references: [
        {
          title: "Design Engineer Portfolio Examples",
          url: "https://desengs.com/",
        },
        {
          title: "CSS Grid Layout \u2013 MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
        },
        {
          title: "Design Engineer Tools & Resources",
          url: "https://designengineer.tools/",
        },
      ],
      validation: (code: string) => {
        const hasGrid = /display:\s*grid/i.test(code);
        const hasFlex = /display:\s*flex/i.test(code);
        const hasLayout = hasGrid || hasFlex;
        const checks = [
          {
            pattern: hasLayout,
            label: "display: grid or display: flex for layout",
          },
          { pattern: /border-radius/i.test(code), label: "border-radius" },
          { pattern: /gap/i.test(code), label: "gap spacing" },
        ];
        const missing = checks.filter((c) => !c.pattern);
        if (missing.length === 0) {
          return {
            passed: true,
            message: "About section feels warm and polished!",
          };
        }
        return {
          passed: false,
          message: `Missing: ${missing.map((m) => m.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 4. Blog Post Template
    // -------------------------------------------------------
    {
      slug: "blog-post-layout",
      title: "Blog Post Template",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Design a beautiful <strong>blog post template</strong> focused on readability and typographic polish.</p>",
        "<p>Include a post title with reading time estimate, author info block (avatar, name, date), and a hero image area. The body content should demonstrate styled <code>paragraphs</code>, <code>headings</code>, <code>code blocks</code>, <code>blockquotes</code>, and <code>lists</code>.</p>",
        "<p>Add a footer area with share links and a related posts section. Use a constrained <code>max-width</code> for the content column and generous <code>line-height</code> for comfortable reading.</p>",
        "<p>Choose a font pairing that balances personality with legibility. The template should feel like a premium blogging platform.</p>",
      ],
      requirements: [
        "Post title with reading time indicator",
        "Author info with avatar, name, and publish date",
        "Hero image area",
        "Styled body content: paragraphs, headings, code, blockquotes, lists",
        "Constrained max-width content column with good line-height",
        "Footer with share links and related posts",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blog Post Template</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #e0e0e0;
    }

    article {
      /* TODO: Add max-width and center the article */
      padding: 2rem;
    }

    .post-header {
      /* TODO: Style the post header area */
    }

    .post-title {
      /* TODO: Large, bold title with tight letter-spacing */
      font-size: 1.5rem;
    }

    .reading-time {
      /* TODO: Subtle reading time indicator */
      color: #888;
    }

    .author-info {
      /* TODO: Layout for avatar + author name + date */
    }

    .author-avatar {
      width: 40px;
      height: 40px;
      /* TODO: Make circular */
      background: #1a1a2e;
    }

    .hero-image {
      width: 100%;
      height: 300px;
      background: #1a1a2e;
      /* TODO: Style the hero image area */
    }

    .post-body {
      /* TODO: Set line-height for readability */
      /* TODO: Set font-family for body text */
    }

    .post-body h2 {
      /* TODO: Style subheadings */
    }

    .post-body p {
      /* TODO: Style paragraphs with spacing */
    }

    .post-body blockquote {
      /* TODO: Style blockquotes with a left border */
    }

    .post-body pre {
      /* TODO: Style code blocks */
      background: #141414;
    }

    .post-body code {
      /* TODO: Inline code styling */
    }

    .post-body ul, .post-body ol {
      /* TODO: Style lists */
    }

    .post-footer {
      /* TODO: Style the footer with share links */
    }

    .related-posts {
      /* TODO: Style related posts section */
    }
  </style>
</head>
<body>
  <article>
    <header class="post-header">
      <h1 class="post-title"><!-- TODO: Post title --></h1>
      <span class="reading-time"><!-- TODO: Reading time --></span>
      <div class="author-info">
        <div class="author-avatar"></div>
        <!-- TODO: Author name and date -->
      </div>
    </header>

    <div class="hero-image">
      <!-- TODO: Hero image placeholder -->
    </div>

    <div class="post-body">
      <!-- TODO: Add sample content with paragraphs, headings, blockquote, code block, list -->
    </div>

    <footer class="post-footer">
      <!-- TODO: Share links and related posts -->
    </footer>
  </article>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blog Post Template</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: "Georgia", "Times New Roman", serif;
      background: #0a0a0a;
      color: #d4d4d4;
      line-height: 1.8;
    }

    article {
      max-width: 720px;
      margin: 0 auto;
      padding: 3rem 1.5rem 4rem;
    }

    .post-header {
      margin-bottom: 2.5rem;
    }

    .post-title {
      font-family: "Inter", system-ui, -apple-system, sans-serif;
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.15;
      color: #fafafa;
      margin-bottom: 0.75rem;
    }

    .post-meta {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }

    .reading-time {
      font-family: system-ui, sans-serif;
      font-size: 0.85rem;
      color: #666;
      background: #141414;
      padding: 0.25rem 0.75rem;
      border-radius: 100px;
    }

    .publish-date {
      font-family: system-ui, sans-serif;
      font-size: 0.85rem;
      color: #666;
    }

    .author-info {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 0;
      border-top: 1px solid #1a1a1a;
      border-bottom: 1px solid #1a1a1a;
      margin-bottom: 2rem;
    }

    .author-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    .author-name {
      font-family: system-ui, sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
      color: #e0e0e0;
    }

    .author-handle {
      font-family: system-ui, sans-serif;
      font-size: 0.8rem;
      color: #666;
    }

    .hero-image {
      width: 100%;
      height: 360px;
      background: linear-gradient(135deg, #1a1a2e, #16213e, #0a2540);
      border-radius: 12px;
      margin-bottom: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      opacity: 0.6;
    }

    .post-body h2 {
      font-family: "Inter", system-ui, -apple-system, sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fafafa;
      margin: 2.5rem 0 1rem;
      letter-spacing: -0.02em;
    }

    .post-body p {
      margin-bottom: 1.5rem;
      font-size: 1.05rem;
    }

    .post-body blockquote {
      border-left: 3px solid #6366f1;
      margin: 2rem 0;
      padding: 1rem 1.5rem;
      background: #0f0f1a;
      border-radius: 0 8px 8px 0;
      font-style: italic;
      color: #aaa;
    }

    .post-body pre {
      background: #111;
      border: 1px solid #222;
      border-radius: 10px;
      padding: 1.25rem;
      margin: 1.5rem 0;
      overflow-x: auto;
      font-size: 0.9rem;
      line-height: 1.6;
    }

    .post-body code {
      font-family: "SF Mono", "Fira Code", "Cascadia Code", monospace;
      font-size: 0.88em;
    }

    .post-body p code {
      background: #1a1a2e;
      padding: 0.15em 0.45em;
      border-radius: 4px;
      color: #c4b5fd;
    }

    .post-body ul, .post-body ol {
      margin: 1rem 0 1.5rem 1.5rem;
      font-size: 1.05rem;
    }

    .post-body li {
      margin-bottom: 0.5rem;
    }

    .post-footer {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid #1a1a1a;
    }

    .share-section {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 2.5rem;
    }

    .share-label {
      font-family: system-ui, sans-serif;
      font-size: 0.8rem;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .share-btn {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: #141414;
      border: 1px solid #222;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #888;
      text-decoration: none;
      font-size: 0.85rem;
      transition: background 0.2s, color 0.2s;
    }

    .share-btn:hover {
      background: #1a1a2e;
      color: #fafafa;
    }

    .related-posts h3 {
      font-family: "Inter", system-ui, sans-serif;
      font-size: 1rem;
      font-weight: 600;
      color: #888;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .related-post-card {
      display: block;
      padding: 1rem;
      background: #111;
      border: 1px solid #1a1a1a;
      border-radius: 10px;
      text-decoration: none;
      margin-bottom: 0.75rem;
      transition: border-color 0.2s;
    }

    .related-post-card:hover {
      border-color: #333;
    }

    .related-post-card h4 {
      font-family: system-ui, sans-serif;
      font-size: 0.95rem;
      color: #e0e0e0;
      margin-bottom: 0.25rem;
    }

    .related-post-card p {
      font-family: system-ui, sans-serif;
      font-size: 0.8rem;
      color: #666;
    }
  </style>
</head>
<body>
  <article class="post">
    <header class="post-header">
      <h1 class="post-title">Building a Design Engineering Portfolio That Gets Noticed</h1>
      <div class="post-meta">
        <span class="reading-time">6 min read</span>
        <span class="publish-date">March 15, 2025</span>
      </div>
      <div class="author-info">
        <div class="author-avatar">\uD83D\uDC64</div>
        <div>
          <div class="author-name">Your Name</div>
          <div class="author-handle">@yourhandle</div>
        </div>
      </div>
    </header>

    <div class="hero-image">\u25B3</div>

    <div class="post-body">
      <p>
        The best design engineering portfolios do not just list projects. They
        tell stories about problems solved, decisions made, and craft invested.
        Here is how to build one that stands out.
      </p>

      <h2>Start With the Story</h2>
      <p>
        Every project in your portfolio should answer three questions: What was
        the problem? What did you build? What was the impact? Frame your work
        as a narrative, not a feature list.
      </p>

      <blockquote>
        Show the craft, not just the result. Recruiters and hiring managers
        want to see how you think, not just what you shipped.
      </blockquote>

      <h2>Technical Writing Matters</h2>
      <p>
        Use semantic HTML like <code>&lt;article&gt;</code> and
        <code>&lt;blockquote&gt;</code> to structure your content. Here is
        an example of a component setup:
      </p>

      <pre><code>function ProjectCard({ title, tags, href }) {
  return (
    &lt;article className="card"&gt;
      &lt;h3&gt;{title}&lt;/h3&gt;
      &lt;Tags items={tags} /&gt;
      &lt;a href={href}&gt;View Project&lt;/a&gt;
    &lt;/article&gt;
  );
}</code></pre>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Lead with your best and most recent work</li>
        <li>Show the process, not just the polish</li>
        <li>Include real metrics and outcomes where possible</li>
        <li>Keep it fast \u2014 performance is part of the craft</li>
      </ul>

      <p>
        Your portfolio is a living document. Ship it, share it, and iterate
        based on the conversations it starts.
      </p>
    </div>

    <footer class="post-footer">
      <div class="share-section">
        <span class="share-label">Share</span>
        <a href="#" class="share-btn" title="Twitter">\u2709</a>
        <a href="#" class="share-btn" title="LinkedIn">\u26C1</a>
        <a href="#" class="share-btn" title="Copy link">\u272F</a>
      </div>

      <div class="related-posts">
        <h3>Related Posts</h3>
        <a href="#" class="related-post-card">
          <h4>CSS Animation Patterns for UI Engineers</h4>
          <p>4 min read</p>
        </a>
        <a href="#" class="related-post-card">
          <h4>Design Tokens: Bridging Design and Code</h4>
          <p>5 min read</p>
        </a>
      </div>
    </footer>
  </article>
</body>
</html>`,
      hint: "Set a max-width of around 700px on the article and center it with margin: 0 auto. Use a serif or clean sans-serif font-family for body text with line-height around 1.7-1.8. Style blockquotes with a colored left border and subtle background.",
      references: [
        {
          title: "Practical Typography",
          url: "https://practicaltypography.com/",
        },
        {
          title: "Design Engineer Tools & Resources",
          url: "https://designengineer.tools/",
        },
        {
          title: "Design Engineer Portfolio Examples",
          url: "https://desengs.com/",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /max-width/i, label: "max-width for content column" },
          { pattern: /line-height/i, label: "line-height for readability" },
          { pattern: /blockquote/i, label: "blockquote element" },
          { pattern: /font-family/i, label: "font-family declaration" },
          {
            pattern: /article|\.post/i,
            label: "article element or .post class",
          },
        ];
        const missing = checks.filter((c) => !c.pattern.test(code));
        if (missing.length === 0) {
          return { passed: true, message: "Blog template reads beautifully!" };
        }
        return {
          passed: false,
          message: `Missing: ${missing.map((m) => m.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 5. Open Graph Social Card
    // -------------------------------------------------------
    {
      slug: "social-card",
      title: "Open Graph Social Card",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "<p>Design an <strong>OG image / social share card</strong> at the standard <code>1200\u00D7630</code> pixel dimensions.</p>",
        "<p>This is the preview image that appears when your portfolio or blog post is shared on Twitter, LinkedIn, or Slack. Design it as an <strong>HTML template</strong> that could be screenshotted or rendered to an image.</p>",
        "<p>Include your name or brand, a title (post or page name), a brief description, and a subtle pattern or gradient background. Use bold typography and clear hierarchy so the card is legible at small sizes.</p>",
        "<p>Think of this as a miniature poster \u2014 it needs to communicate at a glance and look professional across platforms.</p>",
      ],
      requirements: [
        "Card dimensions: 1200px wide by 630px tall",
        "Your name or brand/logo area",
        "A title with prominent typography",
        "A short description or tagline",
        "Background gradient or subtle pattern",
        "Clear visual hierarchy legible at small sizes",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Social Card</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 2rem;
    }

    .og-card {
      /* TODO: Set width to 1200px and height to 630px */
      width: 600px;
      height: 315px;
      background: #0a0a0a;
      /* TODO: Add a gradient or pattern background */
      /* TODO: Add padding and flex layout */
      position: relative;
      overflow: hidden;
    }

    /* TODO: Add a decorative background pattern or gradient overlay */
    /* .og-card::before { } */

    .og-brand {
      /* TODO: Style your name/brand - small, top area */
      font-size: 0.8rem;
      color: #888;
    }

    .og-title {
      /* TODO: Large, bold title - this is the main focus */
      font-size: 1.5rem;
      font-weight: 700;
    }

    .og-description {
      /* TODO: Brief description text */
      color: #888;
    }

    .og-url {
      /* TODO: Optional URL or domain display */
      font-size: 0.7rem;
      color: #555;
    }
  </style>
</head>
<body>
  <div class="og-card">
    <!-- TODO: Add decorative elements -->
    <div class="og-brand"><!-- TODO: Your name --></div>
    <h1 class="og-title"><!-- TODO: Card title --></h1>
    <p class="og-description"><!-- TODO: Short description --></p>
    <span class="og-url"><!-- TODO: Your domain --></span>
  </div>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Social Card</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: "Inter", system-ui, -apple-system, sans-serif;
      background: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 2rem;
    }

    .og-card {
      width: 1200px;
      height: 630px;
      background: #08080a;
      border-radius: 0;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 4rem 5rem;
    }

    .og-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 80% 60% at 70% 0%, rgba(99, 102, 241, 0.12), transparent),
        radial-gradient(ellipse 60% 50% at 0% 100%, rgba(139, 92, 246, 0.08), transparent);
      z-index: 0;
    }

    .og-card::after {
      content: "";
      position: absolute;
      inset: 0;
      background-image:
        radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0);
      background-size: 32px 32px;
      z-index: 0;
    }

    .og-top {
      position: relative;
      z-index: 1;
    }

    .og-brand {
      font-size: 1rem;
      font-weight: 600;
      color: #888;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .og-main {
      position: relative;
      z-index: 1;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .og-title {
      font-size: 3.5rem;
      font-weight: 800;
      color: #fafafa;
      letter-spacing: -0.03em;
      line-height: 1.15;
      margin-bottom: 1rem;
      max-width: 80%;
    }

    .og-description {
      font-size: 1.35rem;
      color: #777;
      line-height: 1.5;
      max-width: 70%;
      font-weight: 400;
    }

    .og-bottom {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .og-url {
      font-size: 0.95rem;
      color: #555;
      font-weight: 500;
      letter-spacing: 0.02em;
    }

    .og-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
    }

    .accent-line {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1);
      z-index: 1;
    }
  </style>
</head>
<body>
  <div class="og-card">
    <div class="og-top">
      <div class="og-brand">Your Name</div>
    </div>

    <div class="og-main">
      <h1 class="og-title">Building Interfaces That Feel Alive</h1>
      <p class="og-description">
        Thoughts on design engineering, motion, and the craft of building for the web.
      </p>
    </div>

    <div class="og-bottom">
      <span class="og-url">yourname.dev</span>
      <div class="og-avatar"></div>
    </div>

    <div class="accent-line"></div>
  </div>
</body>
</html>`,
      hint: "Set the card to exactly 1200px wide and 630px tall. Use large font-size and bold font-weight for the title so it is legible at small preview sizes. Add a gradient or pattern as a background using ::before or a direct background property.",
      references: [
        {
          title: "Open Graph Protocol",
          url: "https://ogp.me/",
        },
        {
          title: "Design Engineer Tools & Resources",
          url: "https://designengineer.tools/",
        },
        {
          title: "Design Engineer Portfolio Examples",
          url: "https://desengs.com/",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /1200/i, label: "1200px width" },
          { pattern: /630/i, label: "630px height" },
          { pattern: /background/i, label: "background styling" },
          { pattern: /font-size/i, label: "font-size for typography" },
          { pattern: /font-weight/i, label: "font-weight for emphasis" },
        ];
        const missing = checks.filter((c) => !c.pattern.test(code));
        if (missing.length === 0) {
          return {
            passed: true,
            message: "Social card is ready for sharing!",
          };
        }
        return {
          passed: false,
          message: `Missing: ${missing.map((m) => m.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 6. Contact & CTA Section
    // -------------------------------------------------------
    {
      slug: "contact-section",
      title: "Contact & CTA Section",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "<p>Build a <strong>contact and call-to-action section</strong> for the bottom of a portfolio site.</p>",
        "<p>Include a bold headline in the style of \"Let's work together\", a brief invitation paragraph, and your email as a clickable <code>mailto:</code> link with a copy-to-clipboard button beside it.</p>",
        "<p>Add <strong>social links</strong> for your key platforms and optionally include a simple <strong>contact form</strong> (name, email, message). Use a subtle background pattern or gradient to set this section apart from the rest of the page.</p>",
        "<p>The section should feel inviting, professional, and make it effortless for someone to reach out.</p>",
      ],
      requirements: [
        "Bold CTA headline",
        "Invitation paragraph text",
        "Email link (mailto:) with copy-to-clipboard button",
        "Social media links",
        "Optional simple contact form",
        "Subtle background pattern or gradient",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Section</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
    }

    .contact-section {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem 2rem;
      text-align: center;
      /* TODO: Add a background gradient or pattern */
    }

    .cta-headline {
      /* TODO: Bold, large headline */
      font-size: 1.5rem;
    }

    .cta-text {
      /* TODO: Invitation paragraph styling */
      color: #888;
    }

    .email-row {
      display: flex;
      align-items: center;
      /* TODO: Add gap and center */
    }

    .email-link {
      /* TODO: Style the mailto link */
      color: #6366f1;
      text-decoration: none;
    }

    .copy-btn {
      /* TODO: Style the copy button */
      border: none;
      cursor: pointer;
      border-radius: 8px;
    }

    .social-links {
      display: flex;
      /* TODO: Add gap and styling */
    }

    .social-link {
      /* TODO: Style social link buttons */
      text-decoration: none;
      color: #888;
    }

    /* TODO: Optional - style a simple contact form */
    /* .contact-form { } */
    /* .contact-form input, .contact-form textarea { } */
    /* .contact-form button { } */
  </style>
</head>
<body>
  <section class="contact-section">
    <h2 class="cta-headline"><!-- TODO: CTA headline --></h2>
    <p class="cta-text">
      <!-- TODO: Invitation text -->
    </p>

    <div class="email-row">
      <a href="mailto:you@example.com" class="email-link">
        <!-- TODO: Your email -->
      </a>
      <button class="copy-btn"><!-- TODO: Copy button --></button>
    </div>

    <div class="social-links">
      <!-- TODO: Social links -->
    </div>

    <!-- TODO: Optional simple contact form -->
  </section>

  <script>
    // TODO: Implement copy-to-clipboard functionality
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Section</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: "Inter", system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
    }

    .contact-section {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 6rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .contact-section::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99, 102, 241, 0.08), transparent),
        radial-gradient(ellipse 50% 40% at 50% 100%, rgba(139, 92, 246, 0.06), transparent);
    }

    .contact-section > * {
      position: relative;
      z-index: 1;
    }

    .cta-headline {
      font-size: clamp(2.5rem, 6vw, 4rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin-bottom: 1rem;
    }

    .cta-highlight {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .cta-text {
      font-size: 1.15rem;
      color: #777;
      max-width: 480px;
      line-height: 1.7;
      margin-bottom: 2.5rem;
    }

    .email-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 2rem;
      background: #111;
      border: 1px solid #222;
      border-radius: 12px;
      padding: 0.75rem 1rem 0.75rem 1.5rem;
      transition: border-color 0.2s ease;
    }

    .email-row:hover {
      border-color: #333;
    }

    .email-link {
      color: #e0e0e0;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 500;
      letter-spacing: -0.01em;
    }

    .email-link:hover {
      color: #fff;
    }

    .copy-btn {
      padding: 0.5rem 1rem;
      border: 1px solid #333;
      border-radius: 8px;
      background: #1a1a1a;
      color: #aaa;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .copy-btn:hover {
      background: #222;
      color: #fff;
      border-color: #444;
    }

    .copy-btn.copied {
      background: rgba(99, 102, 241, 0.15);
      color: #818cf8;
      border-color: rgba(99, 102, 241, 0.3);
    }

    .divider {
      width: 48px;
      height: 1px;
      background: #222;
      margin: 1rem 0 2rem;
    }

    .social-links {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 3rem;
    }

    .social-link {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: #111;
      border: 1px solid #222;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      text-decoration: none;
      font-size: 1.1rem;
      transition: all 0.2s ease;
    }

    .social-link:hover {
      background: #1a1a2e;
      color: #fafafa;
      border-color: #444;
      transform: translateY(-2px);
    }

    .contact-form {
      width: 100%;
      max-width: 440px;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .form-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #555;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    .contact-form input,
    .contact-form textarea {
      width: 100%;
      padding: 0.85rem 1rem;
      background: #111;
      border: 1px solid #222;
      border-radius: 10px;
      color: #e0e0e0;
      font-family: inherit;
      font-size: 0.95rem;
      transition: border-color 0.2s ease;
      outline: none;
    }

    .contact-form input:focus,
    .contact-form textarea:focus {
      border-color: #6366f1;
    }

    .contact-form input::placeholder,
    .contact-form textarea::placeholder {
      color: #444;
    }

    .contact-form textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      padding: 0.85rem 2rem;
      background: #fafafa;
      color: #0a0a0a;
      border: none;
      border-radius: 10px;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s ease, transform 0.2s ease;
      font-family: inherit;
    }

    .submit-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  </style>
</head>
<body>
  <section class="contact-section">
    <h2 class="cta-headline">
      Let's <span class="cta-highlight">build</span> something<br>together.
    </h2>
    <p class="cta-text">
      I'm always open to new projects, collaborations, and conversations.
      Whether you have an idea or just want to say hello \u2014 my inbox is open.
    </p>

    <div class="email-row">
      <a href="mailto:hello@yourname.dev" class="email-link">hello@yourname.dev</a>
      <button class="copy-btn" id="copyBtn">Copy</button>
    </div>

    <div class="divider"></div>

    <div class="social-links">
      <a href="#" class="social-link" title="GitHub">\u2699</a>
      <a href="#" class="social-link" title="Twitter">\u2709</a>
      <a href="#" class="social-link" title="LinkedIn">\u26C1</a>
      <a href="#" class="social-link" title="Dribbble">\u25CE</a>
    </div>

    <form class="contact-form" onsubmit="return false;">
      <span class="form-label">Or send a message</span>
      <input type="text" placeholder="Your name" required />
      <input type="email" placeholder="Your email" required />
      <textarea placeholder="What's on your mind?" required></textarea>
      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </section>

  <script>
    const copyBtn = document.getElementById('copyBtn');
    const email = 'hello@yourname.dev';

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      } catch {
        /* Fallback for older browsers */
        const ta = document.createElement('textarea');
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      }
    });
  </script>
</body>
</html>`,
      hint: "Use a mailto: link for the email and navigator.clipboard.writeText() for the copy button. For the background, add a radial-gradient or repeating pattern using ::before. Style form inputs with a dark background and subtle border that highlights on focus.",
      references: [
        {
          title: "Design Engineer Portfolio Examples",
          url: "https://desengs.com/",
        },
        {
          title: "Design Engineer Tools & Resources",
          url: "https://designengineer.tools/",
        },
        {
          title: "Clipboard API \u2013 MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API",
        },
      ],
      validation: (code: string) => {
        const hasMailto = /mailto:/i.test(code);
        const hasHref = /href/i.test(code);
        const hasFormOrButton = /form|button/i.test(code);
        const hasBackground = /background/i.test(code);
        const hasBorderRadius = /border-radius/i.test(code);
        const checks = [
          { passed: hasMailto || hasHref, label: "mailto: or href link" },
          { passed: hasFormOrButton, label: "form or button element" },
          { passed: hasBackground, label: "background styling" },
          { passed: hasBorderRadius, label: "border-radius" },
        ];
        const missing = checks.filter((c) => !c.passed);
        if (missing.length === 0) {
          return {
            passed: true,
            message: "Contact section is inviting and professional!",
          };
        }
        return {
          passed: false,
          message: `Missing: ${missing.map((m) => m.label).join(", ")}`,
        };
      },
    },
  ],
};
