import { Phase } from "./types";

export const motion: Phase = {
  slug: "motion",
  title: "Advanced Motion & Interaction",
  number: "03",
  description: "Bring interfaces to life with purposeful motion.",
  exercises: [
    // -------------------------------------------------------
    // 1. Mastering Easing Curves
    // -------------------------------------------------------
    {
      slug: "easing-functions",
      title: "Mastering Easing Curves",
      difficulty: "beginner",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "<p>Create a visual comparison of six different CSS easing functions.</p>",
        "<p>Display <strong>6 boxes</strong> stacked vertically, each labeled with its easing function name. When a <em>Play</em> button is clicked, all boxes should animate from left to right simultaneously.</p>",
        "<p>Use these easing values: <code>linear</code>, <code>ease</code>, <code>ease-in</code>, <code>ease-out</code>, <code>ease-in-out</code>, and a custom <code>cubic-bezier</code> curve of your choosing.</p>",
        "<p>The animation should clearly show the difference in timing between each easing function. Add a <em>Reset</em> capability so the animation can be replayed.</p>",
      ],
      requirements: [
        "Six boxes, each using a different easing function",
        "Each box is labeled with its easing name",
        "A Play button triggers all animations simultaneously",
        "One easing must use a custom cubic-bezier value",
        "Animations move boxes from the left edge to the right edge",
        "Ability to reset and replay the animation",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Easing Functions</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 2rem;
      background: #0a0a0a;
      color: #fafafa;
    }

    .controls { margin-bottom: 2rem; }

    .controls button {
      padding: 0.5rem 1.5rem;
      border: none;
      border-radius: 6px;
      background: #6366f1;
      color: white;
      font-size: 1rem;
      cursor: pointer;
    }

    .track {
      position: relative;
      height: 50px;
      margin-bottom: 1rem;
      background: #1a1a2e;
      border-radius: 8px;
      overflow: hidden;
    }

    .track .label {
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      font-size: 0.85rem;
      color: #888;
      z-index: 1;
    }

    .box {
      width: 50px;
      height: 50px;
      border-radius: 8px;
      position: absolute;
      left: 0;
      /* TODO: Add transition or animation properties */
    }

    /* TODO: Add .animate class styles to move boxes to the right */
    /* TODO: Define easing for each box */
  </style>
</head>
<body>
  <h1>Easing Function Comparison</h1>
  <div class="controls">
    <button id="playBtn">Play</button>
  </div>

  <!-- TODO: Create 6 tracks, each with a label and a colored box -->

  <script>
    const playBtn = document.getElementById('playBtn');

    playBtn.addEventListener('click', () => {
      // TODO: Toggle animation on all boxes
    });
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Easing Functions</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 2rem;
      background: #0a0a0a;
      color: #fafafa;
    }

    .controls { margin-bottom: 2rem; display: flex; gap: 0.75rem; }

    .controls button {
      padding: 0.5rem 1.5rem;
      border: none;
      border-radius: 6px;
      background: #6366f1;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }

    .controls button:hover { background: #4f46e5; }

    .track {
      position: relative;
      height: 50px;
      margin-bottom: 1rem;
      background: #1a1a2e;
      border-radius: 8px;
      overflow: hidden;
    }

    .track .label {
      position: absolute;
      top: 50%;
      left: 4.5rem;
      transform: translateY(-50%);
      font-size: 0.85rem;
      color: #888;
      z-index: 1;
      font-family: monospace;
    }

    .box {
      width: 50px;
      height: 50px;
      border-radius: 8px;
      position: absolute;
      left: 0;
      transition-property: left;
      transition-duration: 1.5s;
    }

    .box.animate {
      left: calc(100% - 50px);
    }

    .box-linear       { background: #ef4444; transition-timing-function: linear; }
    .box-ease         { background: #f97316; transition-timing-function: ease; }
    .box-ease-in      { background: #eab308; transition-timing-function: ease-in; }
    .box-ease-out     { background: #22c55e; transition-timing-function: ease-out; }
    .box-ease-in-out  { background: #3b82f6; transition-timing-function: ease-in-out; }
    .box-cubic        { background: #a855f7; transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55); }
  </style>
</head>
<body>
  <h1>Easing Function Comparison</h1>
  <div class="controls">
    <button id="playBtn">Play</button>
    <button id="resetBtn">Reset</button>
  </div>

  <div class="track">
    <span class="label">linear</span>
    <div class="box box-linear"></div>
  </div>
  <div class="track">
    <span class="label">ease</span>
    <div class="box box-ease"></div>
  </div>
  <div class="track">
    <span class="label">ease-in</span>
    <div class="box box-ease-in"></div>
  </div>
  <div class="track">
    <span class="label">ease-out</span>
    <div class="box box-ease-out"></div>
  </div>
  <div class="track">
    <span class="label">ease-in-out</span>
    <div class="box box-ease-in-out"></div>
  </div>
  <div class="track">
    <span class="label">cubic-bezier(0.68, -0.55, 0.27, 1.55)</span>
    <div class="box box-cubic"></div>
  </div>

  <script>
    const playBtn = document.getElementById('playBtn');
    const resetBtn = document.getElementById('resetBtn');
    const boxes = document.querySelectorAll('.box');

    playBtn.addEventListener('click', () => {
      boxes.forEach(box => box.classList.add('animate'));
    });

    resetBtn.addEventListener('click', () => {
      boxes.forEach(box => {
        box.style.transition = 'none';
        box.classList.remove('animate');
        // Force reflow so the reset is instant
        box.offsetHeight;
        box.style.transition = '';
      });
    });
  </script>
</body>
</html>`,
      hint: "Use CSS transition-timing-function on each box with a different value. Add an .animate class via JavaScript that changes the left position. For the custom curve, try cubic-bezier(0.68, -0.55, 0.27, 1.55) for a bouncy overshoot effect.",
      references: [
        {
          title: "CSS easing functions - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function",
        },
        {
          title: "transition-timing-function - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function",
        },
        {
          title: "cubic-bezier.com - Visual curve editor",
          url: "https://cubic-bezier.com/",
        },
      ],
      validation: (code: string) => {
        const hasCubicBezier = /cubic-bezier/.test(code);
        const hasEaseInOut = /ease-in-out/.test(code);
        const hasAnimationOrTransition =
          /animation|transition/.test(code);

        const passed =
          hasCubicBezier && hasEaseInOut && hasAnimationOrTransition;

        return {
          passed,
          message: passed
            ? "Great job! Your easing comparison includes custom cubic-bezier curves and multiple easing functions."
            : `Missing: ${[
                !hasCubicBezier && "cubic-bezier()",
                !hasEaseInOut && "ease-in-out",
                !hasAnimationOrTransition && "animation or transition property",
              ]
                .filter(Boolean)
                .join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 2. Animated SVG Logo
    // -------------------------------------------------------
    {
      slug: "svg-animation",
      title: "Animated SVG Logo",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Create an <strong>SVG logo</strong> that draws itself on page load using the <code>stroke-dasharray</code> and <code>stroke-dashoffset</code> technique.</p>",
        "<p>Design a simple geometric logo composed of overlapping shapes (circles, rectangles, or polygons). Each shape's outline should animate in sequentially, giving the illusion of being drawn by hand.</p>",
        "<p>After the stroke drawing animation completes, <strong>fade in a fill color</strong> for each shape to reveal the finished logo.</p>",
        "<p>Use CSS <code>@keyframes</code> for all animations. Stagger the draw timing so shapes appear one after another.</p>",
      ],
      requirements: [
        "An SVG element containing at least 3 geometric shapes",
        "Stroke draw-in animation using stroke-dasharray and stroke-dashoffset",
        "Shapes animate in sequentially with staggered delays",
        "Fill color fades in after the stroke animation completes",
        "All animations use CSS @keyframes",
        "Animation plays automatically on page load",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Animated SVG Logo</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #0a0a0a;
    }

    /* TODO: Define @keyframes for stroke draw and fill fade */

    svg {
      width: 300px;
      height: 300px;
    }

    /* TODO: Style each shape with stroke-dasharray, stroke-dashoffset,
       and animation properties */
  </style>
</head>
<body>
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- TODO: Add geometric shapes for your logo -->
  </svg>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Animated SVG Logo</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #0a0a0a;
    }

    svg {
      width: 300px;
      height: 300px;
    }

    @keyframes draw {
      from { stroke-dashoffset: var(--length); }
      to   { stroke-dashoffset: 0; }
    }

    @keyframes fillIn {
      from { fill-opacity: 0; }
      to   { fill-opacity: 1; }
    }

    .shape {
      fill-opacity: 0;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .circle-outer {
      --length: 502;
      stroke-dasharray: 502;
      stroke-dashoffset: 502;
      stroke: #6366f1;
      fill: #6366f1;
      animation:
        draw 1.2s ease-out 0s forwards,
        fillIn 0.6s ease 1.2s forwards;
    }

    .triangle {
      --length: 520;
      stroke-dasharray: 520;
      stroke-dashoffset: 520;
      stroke: #a855f7;
      fill: #a855f7;
      animation:
        draw 1.2s ease-out 0.4s forwards,
        fillIn 0.6s ease 1.6s forwards;
    }

    .diamond {
      --length: 340;
      stroke-dasharray: 340;
      stroke-dashoffset: 340;
      stroke: #ec4899;
      fill: #ec4899;
      animation:
        draw 1s ease-out 0.8s forwards,
        fillIn 0.6s ease 1.8s forwards;
    }

    .circle-inner {
      --length: 188;
      stroke-dasharray: 188;
      stroke-dashoffset: 188;
      stroke: #fafafa;
      fill: #fafafa;
      animation:
        draw 0.8s ease-out 1.2s forwards,
        fillIn 0.6s ease 2s forwards;
    }
  </style>
</head>
<body>
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer circle -->
    <circle class="shape circle-outer" cx="100" cy="100" r="80" />

    <!-- Triangle -->
    <polygon class="shape triangle" points="100,25 175,150 25,150" />

    <!-- Diamond -->
    <polygon class="shape diamond" points="100,40 160,100 100,160 40,100" />

    <!-- Inner circle -->
    <circle class="shape circle-inner" cx="100" cy="100" r="30" />
  </svg>
</body>
</html>`,
      hint: "Set stroke-dasharray and stroke-dashoffset to the total path length of each shape. Animate stroke-dashoffset from that length to 0 to create the drawing effect. Use getTotalLength() in the console to find exact lengths, or estimate them. Chain the fill animation with animation-delay.",
      references: [
        {
          title: "stroke-dasharray - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray",
        },
        {
          title: "stroke-dashoffset - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset",
        },
        {
          title: "CSS @keyframes - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes",
        },
      ],
      validation: (code: string) => {
        const hasDasharray = /stroke-dasharray/.test(code);
        const hasDashoffset = /stroke-dashoffset/.test(code);
        const hasSvg = /<svg/.test(code);
        const hasKeyframes = /@keyframes/.test(code);

        const passed =
          hasDasharray && hasDashoffset && hasSvg && hasKeyframes;

        return {
          passed,
          message: passed
            ? "Excellent! Your SVG logo draws itself with smooth stroke animations and fill transitions."
            : `Missing: ${[
                !hasDasharray && "stroke-dasharray",
                !hasDashoffset && "stroke-dashoffset",
                !hasSvg && "<svg> element",
                !hasKeyframes && "@keyframes animation",
              ]
                .filter(Boolean)
                .join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 3. Scroll-Triggered Reveals
    // -------------------------------------------------------
    {
      slug: "scroll-reveal",
      title: "Scroll-Triggered Reveals",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Build a long-scrolling page with multiple content sections that <strong>animate into view</strong> as the user scrolls down.</p>",
        "<p>Use the <code>Intersection Observer API</code> to detect when elements enter the viewport. Elements should <strong>fade in and slide up</strong> when they become visible.</p>",
        "<p>Include <strong>staggered animations</strong> for list items within sections -- each item should animate in slightly after the previous one.</p>",
        "<p>Add at least 3 different animation styles: fade-up, fade-left, and scale-in. Apply them to different sections using data attributes.</p>",
      ],
      requirements: [
        "At least 5 content sections with enough height to require scrolling",
        "Intersection Observer triggers animations when sections enter viewport",
        "Fade + slide-up animation as the default reveal style",
        "Staggered animation delays for list items",
        "At least 3 different reveal animation variants",
        "Animations only play once (not on every scroll in/out)",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Scroll Reveal</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
    }

    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }

    section {
      padding: 4rem 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    /* TODO: Define hidden state and reveal animations */
    /* TODO: .reveal-element base styles (opacity: 0, transformed) */
    /* TODO: .revealed state (opacity: 1, transform: none) */
    /* TODO: Variants: [data-reveal="fade-up"], [data-reveal="fade-left"], [data-reveal="scale-in"] */
  </style>
</head>
<body>
  <div class="hero">
    <p>Scroll down to reveal content</p>
  </div>

  <!-- TODO: Add multiple sections with reveal elements -->
  <!-- TODO: Add a list section with staggered items -->

  <script>
    // TODO: Set up Intersection Observer
    // TODO: Observe all .reveal-element items
    // TODO: Add .revealed class when elements enter viewport
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Scroll Reveal</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
      line-height: 1.6;
    }

    .hero {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .hero h1 { font-size: 3rem; }
    .hero p { color: #888; font-size: 1.2rem; }

    section {
      padding: 6rem 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    section h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    section p {
      color: #aaa;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .card {
      background: #1a1a2e;
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid #2a2a4a;
    }

    .card h3 { margin-bottom: 0.5rem; }
    .card p { font-size: 0.95rem; }

    .feature-list {
      list-style: none;
      padding: 0;
      margin-top: 1.5rem;
    }

    .feature-list li {
      padding: 1rem 1.5rem;
      background: #1a1a2e;
      border-radius: 8px;
      margin-bottom: 0.75rem;
      border-left: 3px solid #6366f1;
    }

    /* ---- Reveal base styles ---- */
    .reveal-element {
      opacity: 0;
      transition: opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease;
    }

    .reveal-element.revealed {
      opacity: 1;
      transform: none !important;
      filter: none !important;
    }

    /* Fade up (default) */
    [data-reveal="fade-up"] {
      transform: translateY(60px);
    }

    /* Fade from left */
    [data-reveal="fade-left"] {
      transform: translateX(-60px);
    }

    /* Scale in */
    [data-reveal="scale-in"] {
      transform: scale(0.85);
    }

    /* Stagger children */
    .stagger-item {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .stagger-item.revealed {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Scroll Reveals</h1>
    <p>Scroll down to see elements animate into view</p>
  </div>

  <section>
    <div class="reveal-element" data-reveal="fade-up">
      <h2>Fade Up Section</h2>
      <p>This content fades in and slides up as it enters the viewport. The Intersection Observer watches for visibility changes and triggers the animation once.</p>
    </div>
  </section>

  <section>
    <div class="reveal-element" data-reveal="fade-left">
      <h2>Slide From Left</h2>
      <p>Different sections can have different animation styles. This one slides in from the left side for visual variety.</p>
    </div>
  </section>

  <section>
    <div class="reveal-element" data-reveal="scale-in">
      <h2>Scale In</h2>
      <p>This section scales up from a smaller size, creating a zoom-in effect that draws attention to the content.</p>
    </div>
  </section>

  <section>
    <div class="reveal-element" data-reveal="fade-up">
      <h2>Staggered List</h2>
      <p>List items animate in one after another with increasing delays.</p>
    </div>
    <ul class="feature-list">
      <li class="stagger-item" data-reveal="fade-up">First feature with staggered timing</li>
      <li class="stagger-item" data-reveal="fade-up">Second feature appears shortly after</li>
      <li class="stagger-item" data-reveal="fade-up">Third feature continues the cascade</li>
      <li class="stagger-item" data-reveal="fade-up">Fourth feature for the final flourish</li>
    </ul>
  </section>

  <section>
    <div class="reveal-element" data-reveal="fade-up">
      <h2>Card Grid</h2>
    </div>
    <div class="card-grid">
      <div class="card stagger-item" data-reveal="scale-in">
        <h3>Design</h3>
        <p>Beautiful interfaces that delight users.</p>
      </div>
      <div class="card stagger-item" data-reveal="scale-in">
        <h3>Motion</h3>
        <p>Purposeful animation that guides attention.</p>
      </div>
      <div class="card stagger-item" data-reveal="scale-in">
        <h3>Code</h3>
        <p>Clean implementations that perform well.</p>
      </div>
    </div>
  </section>

  <section style="height: 50vh; display: flex; align-items: center; justify-content: center;">
    <div class="reveal-element" data-reveal="scale-in">
      <h2 style="text-align: center;">End of Page</h2>
    </div>
  </section>

  <script>
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe all single reveal elements
    document.querySelectorAll('.reveal-element').forEach((el) => {
      observer.observe(el);
    });

    // Staggered items get their own observer with per-item delays
    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            const siblings = Array.from(
              parent.querySelectorAll('.stagger-item')
            );
            const index = siblings.indexOf(entry.target);

            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, index * 120);

            staggerObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.stagger-item').forEach((el) => {
      staggerObserver.observe(el);
    });
  </script>
</body>
</html>`,
      hint: "Create an IntersectionObserver with a threshold (e.g., 0.15). For each observed entry, check entry.isIntersecting and add a 'revealed' class. Use unobserve() so the animation only fires once. For staggered items, use setTimeout with an index-based delay.",
      references: [
        {
          title: "Intersection Observer API - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
        },
        {
          title: "CSS transform - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
        },
        {
          title: "CSS transition - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
        },
      ],
      validation: (code: string) => {
        const hasObserver = /IntersectionObserver/.test(code);
        const hasTransform = /transform/.test(code);
        const hasOpacity = /opacity/.test(code);
        const hasTranslateY = /translateY/.test(code);

        const passed =
          hasObserver && hasTransform && hasOpacity && hasTranslateY;

        return {
          passed,
          message: passed
            ? "Well done! Your scroll reveals use Intersection Observer with smooth fade and slide animations."
            : `Missing: ${[
                !hasObserver && "IntersectionObserver",
                !hasTransform && "transform",
                !hasOpacity && "opacity",
                !hasTranslateY && "translateY",
              ]
                .filter(Boolean)
                .join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 4. Spring Animation Engine
    // -------------------------------------------------------
    {
      slug: "spring-physics",
      title: "Spring Animation Engine",
      difficulty: "advanced",
      estimatedMinutes: 25,
      language: "javascript",
      instructions: [
        "<p>Build a <strong>spring physics simulation</strong> that animates a div following the mouse cursor with realistic springy motion.</p>",
        "<p>Implement a spring function that takes parameters for <code>stiffness</code> (tension), <code>damping</code> (friction), and <code>mass</code>. The spring should calculate acceleration, velocity, and position each frame.</p>",
        "<p>The animated element should <strong>overshoot</strong> the target and <strong>oscillate</strong> before settling into place, creating a natural bouncy feel.</p>",
        "<p>Display the current <strong>velocity</strong> and <strong>position</strong> values in a debug panel so you can see the physics in real time.</p>",
      ],
      requirements: [
        "A spring physics function with configurable stiffness, damping, and mass",
        "A div element that follows the mouse cursor with spring motion",
        "The element overshoots the target and oscillates before settling",
        "Uses requestAnimationFrame for smooth 60fps animation",
        "A debug panel showing current velocity and position values",
        "Adjustable spring parameters (via sliders or inputs)",
      ],
      starterCode: `// Spring Animation Engine
// Create this as an HTML file with embedded JavaScript

/*
  Spring Physics Formula:
  force = -stiffness * displacement
  damping_force = -damping * velocity
  acceleration = (force + damping_force) / mass
  velocity += acceleration * dt
  position += velocity * dt

  TODO:
  1. Create a Spring class or function
  2. Track mouse position
  3. Use requestAnimationFrame to update spring each frame
  4. Move a div element based on spring output
  5. Display velocity and position in a debug panel
*/

class Spring {
  constructor(stiffness, damping, mass) {
    // TODO: Initialize spring properties
  }

  update(target, dt) {
    // TODO: Calculate spring physics
    // Return current position
  }
}

// TODO: Set up DOM, mouse tracking, and animation loop`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Spring Animation Engine</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
      min-height: 100vh;
      overflow: hidden;
      cursor: crosshair;
    }

    .follower {
      width: 40px;
      height: 40px;
      background: #6366f1;
      border-radius: 50%;
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 10;
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
      transform: translate(-50%, -50%);
    }

    .target-dot {
      width: 8px;
      height: 8px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 5;
      transform: translate(-50%, -50%);
    }

    .debug {
      position: fixed;
      top: 1.5rem;
      left: 1.5rem;
      background: rgba(20, 20, 40, 0.9);
      backdrop-filter: blur(10px);
      border: 1px solid #2a2a4a;
      border-radius: 12px;
      padding: 1.25rem;
      font-family: monospace;
      font-size: 0.85rem;
      z-index: 20;
      min-width: 260px;
    }

    .debug h3 {
      margin-bottom: 0.75rem;
      color: #6366f1;
      font-family: system-ui, sans-serif;
    }

    .debug-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.35rem;
      color: #aaa;
    }

    .debug-row span:last-child {
      color: #fafafa;
      font-weight: 600;
    }

    .controls {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      background: rgba(20, 20, 40, 0.9);
      backdrop-filter: blur(10px);
      border: 1px solid #2a2a4a;
      border-radius: 12px;
      padding: 1.25rem;
      z-index: 20;
      min-width: 240px;
    }

    .controls h3 {
      margin-bottom: 0.75rem;
      color: #a855f7;
      font-family: system-ui, sans-serif;
    }

    .control-group {
      margin-bottom: 0.75rem;
    }

    .control-group label {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: #aaa;
      margin-bottom: 0.25rem;
    }

    .control-group input[type="range"] {
      width: 100%;
      accent-color: #a855f7;
    }

    .hint {
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      color: #555;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="follower" id="follower"></div>
  <div class="target-dot" id="targetDot"></div>

  <div class="debug" id="debug">
    <h3>Spring Debug</h3>
    <div class="debug-row"><span>Position X:</span> <span id="posX">0</span></div>
    <div class="debug-row"><span>Position Y:</span> <span id="posY">0</span></div>
    <div class="debug-row"><span>Velocity X:</span> <span id="velX">0</span></div>
    <div class="debug-row"><span>Velocity Y:</span> <span id="velY">0</span></div>
    <div class="debug-row"><span>Speed:</span> <span id="speed">0</span></div>
  </div>

  <div class="controls">
    <h3>Parameters</h3>
    <div class="control-group">
      <label>Stiffness <span id="stiffVal">120</span></label>
      <input type="range" id="stiffness" min="10" max="400" value="120" />
    </div>
    <div class="control-group">
      <label>Damping <span id="dampVal">14</span></label>
      <input type="range" id="damping" min="1" max="60" value="14" />
    </div>
    <div class="control-group">
      <label>Mass <span id="massVal">1</span></label>
      <input type="range" id="mass" min="0.5" max="10" value="1" step="0.5" />
    </div>
  </div>

  <p class="hint">Move your mouse to see the spring follower in action</p>

  <script>
    class Spring {
      constructor(stiffness = 120, damping = 14, mass = 1) {
        this.stiffness = stiffness;
        this.damping = damping;
        this.mass = mass;
        this.position = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
      }

      update(targetX, targetY, dt) {
        // Clamp dt to avoid instability on tab switch
        const step = Math.min(dt, 0.032);

        // Spring force: F = -k * displacement
        const dx = this.position.x - targetX;
        const dy = this.position.y - targetY;

        const forceX = -this.stiffness * dx;
        const forceY = -this.stiffness * dy;

        // Damping force: F = -d * velocity
        const dampingX = -this.damping * this.velocity.x;
        const dampingY = -this.damping * this.velocity.y;

        // Acceleration: a = F / mass
        const accelX = (forceX + dampingX) / this.mass;
        const accelY = (forceY + dampingY) / this.mass;

        // Integrate velocity and position
        this.velocity.x += accelX * step;
        this.velocity.y += accelY * step;
        this.position.x += this.velocity.x * step;
        this.position.y += this.velocity.y * step;

        return { ...this.position };
      }
    }

    // DOM elements
    const follower = document.getElementById('follower');
    const targetDot = document.getElementById('targetDot');
    const posXEl = document.getElementById('posX');
    const posYEl = document.getElementById('posY');
    const velXEl = document.getElementById('velX');
    const velYEl = document.getElementById('velY');
    const speedEl = document.getElementById('speed');

    // Controls
    const stiffnessInput = document.getElementById('stiffness');
    const dampingInput = document.getElementById('damping');
    const massInput = document.getElementById('mass');
    const stiffValEl = document.getElementById('stiffVal');
    const dampValEl = document.getElementById('dampVal');
    const massValEl = document.getElementById('massVal');

    // State
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const spring = new Spring(120, 14, 1);
    spring.position.x = mouse.x;
    spring.position.y = mouse.y;
    let lastTime = performance.now();

    // Mouse tracking
    document.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      targetDot.style.left = mouse.x + 'px';
      targetDot.style.top = mouse.y + 'px';
    });

    // Control listeners
    stiffnessInput.addEventListener('input', (e) => {
      spring.stiffness = parseFloat(e.target.value);
      stiffValEl.textContent = e.target.value;
    });

    dampingInput.addEventListener('input', (e) => {
      spring.damping = parseFloat(e.target.value);
      dampValEl.textContent = e.target.value;
    });

    massInput.addEventListener('input', (e) => {
      spring.mass = parseFloat(e.target.value);
      massValEl.textContent = e.target.value;
    });

    // Animation loop
    function animate(now) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const pos = spring.update(mouse.x, mouse.y, dt);

      follower.style.left = pos.x + 'px';
      follower.style.top = pos.y + 'px';

      // Update debug
      posXEl.textContent = pos.x.toFixed(1);
      posYEl.textContent = pos.y.toFixed(1);
      velXEl.textContent = spring.velocity.x.toFixed(1);
      velYEl.textContent = spring.velocity.y.toFixed(1);
      const speed = Math.sqrt(
        spring.velocity.x ** 2 + spring.velocity.y ** 2
      ).toFixed(1);
      speedEl.textContent = speed;

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  </script>
</body>
</html>`,
      hint: "The core spring formula is: force = -stiffness * displacement, then add damping force = -damping * velocity. Divide total force by mass for acceleration. Integrate acceleration into velocity, then velocity into position each frame. Use performance.now() for accurate delta time.",
      references: [
        {
          title: "requestAnimationFrame - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame",
        },
        {
          title: "Web Animations API - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API",
        },
        {
          title: "MouseEvent - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent",
        },
      ],
      validation: (code: string) => {
        const hasTensionOrStiffness = /tension|stiffness/.test(code);
        const hasFrictionOrDamping = /friction|damping/.test(code);
        const hasRAF = /requestAnimationFrame/.test(code);
        const hasVelocity = /velocity/.test(code);

        const passed =
          hasTensionOrStiffness &&
          hasFrictionOrDamping &&
          hasRAF &&
          hasVelocity;

        return {
          passed,
          message: passed
            ? "Impressive! Your spring engine uses real physics with configurable stiffness, damping, and smooth frame updates."
            : `Missing: ${[
                !hasTensionOrStiffness && "tension/stiffness parameter",
                !hasFrictionOrDamping && "friction/damping parameter",
                !hasRAF && "requestAnimationFrame",
                !hasVelocity && "velocity tracking",
              ]
                .filter(Boolean)
                .join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 5. Staggered List Animations
    // -------------------------------------------------------
    {
      slug: "stagger-animation",
      title: "Staggered List Animations",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Create a list of items that animate in with <strong>staggered delays</strong> when a button is clicked. Build <strong>3 distinct animation variations</strong>.</p>",
        "<p><strong>Variation 1 -- Fade + Slide Up:</strong> Items fade in while sliding upward from below.</p>",
        "<p><strong>Variation 2 -- Scale from Center:</strong> Items start scaled to zero and pop in to full size.</p>",
        "<p><strong>Variation 3 -- Slide Left with Blur:</strong> Items slide in from the left while transitioning from blurry to sharp.</p>",
        "<p>Each item in a list should have an increasing <code>animation-delay</code> based on its index. Include a <em>Reset</em> button to clear all animations so they can be replayed.</p>",
      ],
      requirements: [
        "Three separate lists, each with a different animation style",
        "Items within each list have staggered (increasing) animation delays",
        "A trigger button that starts all animations",
        "A reset button to return items to their hidden state",
        "Variation 1: fade + slide up",
        "Variation 2: scale from center",
        "Variation 3: slide from left with blur effect",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Staggered Animations</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
      padding: 2rem;
    }

    .controls {
      margin-bottom: 2rem;
      display: flex;
      gap: 0.75rem;
    }

    .controls button {
      padding: 0.5rem 1.5rem;
      border: none;
      border-radius: 6px;
      background: #6366f1;
      color: white;
      font-size: 1rem;
      cursor: pointer;
    }

    .section { margin-bottom: 3rem; }
    .section h2 { margin-bottom: 1rem; color: #888; }

    .list-item {
      padding: 1rem 1.5rem;
      background: #1a1a2e;
      border-radius: 8px;
      margin-bottom: 0.5rem;
      border-left: 3px solid #6366f1;
    }

    /* TODO: Add animation keyframes */
    /* TODO: Add hidden/visible states for each variation */
    /* TODO: Use animation-delay or transition-delay for staggering */
  </style>
</head>
<body>
  <h1>Staggered Animations</h1>
  <div class="controls">
    <button id="playBtn">Animate</button>
    <button id="resetBtn">Reset</button>
  </div>

  <!-- TODO: Create three sections with different animation styles -->

  <script>
    // TODO: Wire up play and reset buttons
    // TODO: Apply staggered delays to each item
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Staggered Animations</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
      padding: 2rem;
    }

    .controls {
      margin-bottom: 2rem;
      display: flex;
      gap: 0.75rem;
    }

    .controls button {
      padding: 0.6rem 1.5rem;
      border: none;
      border-radius: 6px;
      background: #6366f1;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }

    .controls button:hover { background: #4f46e5; }

    .section {
      margin-bottom: 3rem;
    }

    .section h2 {
      margin-bottom: 1rem;
      color: #888;
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .list-item {
      padding: 1rem 1.5rem;
      background: #1a1a2e;
      border-radius: 8px;
      margin-bottom: 0.5rem;
    }

    /* --- Variation 1: Fade + Slide Up --- */
    .fade-up-list .list-item {
      border-left: 3px solid #6366f1;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .fade-up-list .list-item.animate {
      opacity: 1;
      transform: translateY(0);
    }

    /* --- Variation 2: Scale from Center --- */
    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .scale-list .list-item {
      border-left: 3px solid #a855f7;
      opacity: 0;
      transform: scale(0);
    }

    .scale-list .list-item.animate {
      animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    /* --- Variation 3: Slide Left + Blur --- */
    @keyframes slideBlur {
      from {
        opacity: 0;
        transform: translateX(-80px);
        filter: blur(10px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
        filter: blur(0px);
      }
    }

    .blur-list .list-item {
      border-left: 3px solid #ec4899;
      opacity: 0;
      transform: translateX(-80px);
      filter: blur(10px);
    }

    .blur-list .list-item.animate {
      animation: slideBlur 0.6s ease-out forwards;
    }
  </style>
</head>
<body>
  <h1>Staggered Animations</h1>
  <div class="controls">
    <button id="playBtn">Animate</button>
    <button id="resetBtn">Reset</button>
  </div>

  <div class="section">
    <h2>1. Fade + Slide Up</h2>
    <div class="fade-up-list">
      <div class="list-item">Design principles and fundamentals</div>
      <div class="list-item">Color theory and typography</div>
      <div class="list-item">Layout systems and grid design</div>
      <div class="list-item">Responsive design patterns</div>
      <div class="list-item">Accessibility best practices</div>
    </div>
  </div>

  <div class="section">
    <h2>2. Scale from Center</h2>
    <div class="scale-list">
      <div class="list-item">Component architecture</div>
      <div class="list-item">State management patterns</div>
      <div class="list-item">Performance optimization</div>
      <div class="list-item">Testing strategies</div>
      <div class="list-item">Deployment workflows</div>
    </div>
  </div>

  <div class="section">
    <h2>3. Slide Left + Blur</h2>
    <div class="blur-list">
      <div class="list-item">Spring animations</div>
      <div class="list-item">Gesture-driven interfaces</div>
      <div class="list-item">Scroll-linked animations</div>
      <div class="list-item">Micro-interactions</div>
      <div class="list-item">Page transitions</div>
    </div>
  </div>

  <script>
    const playBtn = document.getElementById('playBtn');
    const resetBtn = document.getElementById('resetBtn');
    const allItems = document.querySelectorAll('.list-item');

    playBtn.addEventListener('click', () => {
      allItems.forEach((item, index) => {
        // Stagger: each item gets an additional 80ms delay
        const delay = index % 5;

        // For transition-based (fade-up), use transition-delay
        if (item.parentElement.classList.contains('fade-up-list')) {
          item.style.transitionDelay = \`\${delay * 80}ms\`;
        }

        // For animation-based (scale, blur), use animation-delay
        if (
          item.parentElement.classList.contains('scale-list') ||
          item.parentElement.classList.contains('blur-list')
        ) {
          item.style.animationDelay = \`\${delay * 80}ms\`;
        }

        // Small timeout to ensure styles are applied before class toggle
        requestAnimationFrame(() => {
          item.classList.add('animate');
        });
      });
    });

    resetBtn.addEventListener('click', () => {
      allItems.forEach((item) => {
        item.classList.remove('animate');
        item.style.transitionDelay = '';
        item.style.animationDelay = '';
        // Reset animation state
        item.style.animation = 'none';
        item.offsetHeight; // force reflow
        item.style.animation = '';
      });
    });
  </script>
</body>
</html>`,
      hint: "Use CSS custom properties or inline styles to set animation-delay or transition-delay on each item based on its index. For blur, use the CSS filter: blur() property in a keyframe animation. Remember to reset animation state properly -- you may need to force a reflow by reading offsetHeight after removing classes.",
      references: [
        {
          title: "animation-delay - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay",
        },
        {
          title: "CSS filter: blur() - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur",
        },
        {
          title: "CSS @keyframes - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes",
        },
      ],
      validation: (code: string) => {
        const hasDelay =
          /animation-delay|transition-delay|animationDelay|transitionDelay/.test(
            code
          );
        const hasTransform = /transform/.test(code);
        const hasOpacity = /opacity/.test(code);

        const passed = hasDelay && hasTransform && hasOpacity;

        return {
          passed,
          message: passed
            ? "Nice work! Your staggered animations create a beautiful cascading effect across all three variations."
            : `Missing: ${[
                !hasDelay && "animation-delay or transition-delay",
                !hasTransform && "transform",
                !hasOpacity && "opacity",
              ]
                .filter(Boolean)
                .join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 6. Parallax Scrolling Scene
    // -------------------------------------------------------
    {
      slug: "parallax-scroll",
      title: "Parallax Scrolling Scene",
      difficulty: "advanced",
      estimatedMinutes: 25,
      language: "html",
      instructions: [
        "<p>Build a <strong>parallax scrolling scene</strong> with multiple layers that move at different speeds as the user scrolls, creating a sense of depth.</p>",
        "<p>Create at least <strong>3 layers</strong>: a background (slowest), midground, and foreground (fastest). Use mountain or hill silhouettes built from simple CSS shapes or inline SVG paths.</p>",
        "<p>Use <code>CSS transforms</code> and a JavaScript <code>scroll</code> event listener to translate each layer at a different rate. Apply <code>translateY</code> or <code>translate3d</code> for GPU-accelerated performance.</p>",
        "<p>The scene should feel smooth and natural. Include a gradient sky, layered terrain, and some foreground elements like trees or rocks.</p>",
      ],
      requirements: [
        "At least 3 parallax layers moving at different scroll speeds",
        "Mountain/hill silhouettes as the scene subject",
        "CSS transforms (translateY or translate3d) for layer movement",
        "JavaScript scroll event updates layer positions",
        "Smooth, performant animation (no jank)",
        "Gradient sky background",
        "The page must be tall enough to demonstrate the effect",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Parallax Scene</title>
  <style>
    * { margin: 0; box-sizing: border-box; }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      color: #fafafa;
      /* TODO: Make body tall enough to scroll */
    }

    .parallax-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }

    .parallax-layer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      will-change: transform;
    }

    /* TODO: Style the sky gradient background */
    /* TODO: Style each parallax layer (background, midground, foreground) */
    /* TODO: Create mountain silhouettes using clip-path, SVG, or pseudo-elements */

    .content {
      position: relative;
      z-index: 10;
      /* TODO: Add padding-top to push content below the scene */
    }
  </style>
</head>
<body>
  <div class="parallax-container">
    <!-- TODO: Add sky and parallax layers -->
  </div>

  <div class="content">
    <!-- TODO: Add some content sections -->
  </div>

  <script>
    // TODO: Listen for scroll events
    // TODO: Apply different translateY values to each layer based on scroll position
    // Hint: layer.style.transform = \`translateY(\${scrollY * speed}px)\`
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Parallax Scene</title>
  <style>
    * { margin: 0; box-sizing: border-box; }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      color: #fafafa;
      height: 400vh;
    }

    .parallax-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }

    /* Sky gradient */
    .sky {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        #0b0d17 0%,
        #1a1a3e 30%,
        #2d1b4e 50%,
        #5b2c6f 70%,
        #c0392b 85%,
        #e67e22 95%,
        #f39c12 100%
      );
    }

    /* Stars */
    .stars {
      position: absolute;
      inset: 0;
      background-image:
        radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.8), transparent),
        radial-gradient(1px 1px at 25% 8%, rgba(255,255,255,0.6), transparent),
        radial-gradient(1.5px 1.5px at 40% 22%, rgba(255,255,255,0.9), transparent),
        radial-gradient(1px 1px at 55% 5%, rgba(255,255,255,0.5), transparent),
        radial-gradient(1px 1px at 70% 18%, rgba(255,255,255,0.7), transparent),
        radial-gradient(1.5px 1.5px at 85% 12%, rgba(255,255,255,0.8), transparent),
        radial-gradient(1px 1px at 15% 35%, rgba(255,255,255,0.4), transparent),
        radial-gradient(1px 1px at 65% 30%, rgba(255,255,255,0.6), transparent);
    }

    .parallax-layer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      will-change: transform;
    }

    /* Background mountains (slowest) */
    .mountains-back {
      height: 45vh;
      z-index: 1;
    }

    .mountains-back svg { width: 100%; height: 100%; }

    /* Midground mountains */
    .mountains-mid {
      height: 35vh;
      z-index: 2;
    }

    .mountains-mid svg { width: 100%; height: 100%; }

    /* Foreground hills (fastest) */
    .mountains-front {
      height: 25vh;
      z-index: 3;
    }

    .mountains-front svg { width: 100%; height: 100%; }

    /* Foreground ground cover */
    .ground {
      height: 8vh;
      background: #0a0a0a;
      z-index: 4;
    }

    /* Content overlay */
    .content {
      position: relative;
      z-index: 10;
      padding-top: 100vh;
    }

    .content section {
      max-width: 700px;
      margin: 0 auto;
      padding: 4rem 2rem;
      background: rgba(10, 10, 10, 0.92);
      backdrop-filter: blur(12px);
      border-radius: 16px;
      margin-bottom: 3rem;
      border: 1px solid rgba(255, 255, 255, 0.06);
    }

    .content h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #a855f7, #6366f1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .content h2 {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
      color: #c084fc;
    }

    .content p {
      color: #999;
      line-height: 1.7;
      font-size: 1.05rem;
    }
  </style>
</head>
<body>
  <div class="parallax-container" id="parallaxContainer">
    <div class="sky"></div>
    <div class="stars parallax-layer" id="stars"></div>

    <!-- Background mountains -->
    <div class="parallax-layer mountains-back" id="mountainsBack">
      <svg viewBox="0 0 1440 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,400 L0,280 Q120,120 240,200 Q360,100 480,180 Q560,80 720,160 Q840,60 960,150 Q1080,80 1200,180 Q1320,120 1440,220 L1440,400 Z" fill="#1a1a3e" />
      </svg>
    </div>

    <!-- Midground mountains -->
    <div class="parallax-layer mountains-mid" id="mountainsMid">
      <svg viewBox="0 0 1440 350" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,350 L0,240 Q100,160 200,200 Q300,100 420,180 Q520,60 660,140 Q780,40 900,130 Q1000,80 1100,160 Q1200,100 1320,180 Q1400,140 1440,200 L1440,350 Z" fill="#12122a" />
      </svg>
    </div>

    <!-- Foreground hills -->
    <div class="parallax-layer mountains-front" id="mountainsFront">
      <svg viewBox="0 0 1440 250" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,250 L0,180 Q150,100 300,150 Q450,80 600,130 Q750,60 900,120 Q1050,70 1200,140 Q1350,100 1440,160 L1440,250 Z" fill="#0d0d1f" />
      </svg>
    </div>

    <!-- Ground -->
    <div class="parallax-layer ground" id="ground"></div>
  </div>

  <div class="content">
    <section>
      <h1>Parallax Mountains</h1>
      <p>Scroll down to see the parallax effect in action. Each mountain layer moves at a different speed, creating a sense of depth and dimension.</p>
    </section>

    <section>
      <h2>How It Works</h2>
      <p>The background mountains move the slowest, the midground moves slightly faster, and the foreground elements move the fastest. This mimics how distant objects appear to move more slowly than nearby ones.</p>
    </section>

    <section>
      <h2>Performance</h2>
      <p>Using CSS transforms with translate3d enables GPU acceleration. The will-change property hints to the browser to prepare for transform changes, keeping the animation smooth at 60fps.</p>
    </section>
  </div>

  <script>
    const stars = document.getElementById('stars');
    const mountainsBack = document.getElementById('mountainsBack');
    const mountainsMid = document.getElementById('mountainsMid');
    const mountainsFront = document.getElementById('mountainsFront');
    const ground = document.getElementById('ground');

    // Parallax speed multipliers (lower = slower movement)
    const layers = [
      { el: stars, speed: 0.05 },
      { el: mountainsBack, speed: 0.15 },
      { el: mountainsMid, speed: 0.3 },
      { el: mountainsFront, speed: 0.5 },
      { el: ground, speed: 0.6 },
    ];

    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY;

      layers.forEach(({ el, speed }) => {
        const yOffset = -(scrollY * speed);
        el.style.transform = \`translate3d(0, \${yOffset}px, 0)\`;
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });

    // Initial position
    updateParallax();
  </script>
</body>
</html>`,
      hint: "Create fixed-position layers and translate them on scroll at different rates. Use requestAnimationFrame with a ticking flag to throttle scroll events. The formula is: translateY = -(scrollY * speed), where speed differs per layer (e.g., 0.1 for background, 0.3 for midground, 0.5 for foreground). Use translate3d for GPU acceleration.",
      references: [
        {
          title: "scroll event - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event",
        },
        {
          title: "CSS transform: translate3d() - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d",
        },
        {
          title: "will-change - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/will-change",
        },
      ],
      validation: (code: string) => {
        const hasScroll = /scroll/.test(code);
        const hasTransform = /transform/.test(code);
        const hasTranslate = /translateY|translate3d/.test(code);
        const hasParallax = /parallax/i.test(code);

        const passed =
          hasScroll && hasTransform && hasTranslate && hasParallax;

        return {
          passed,
          message: passed
            ? "Stunning! Your parallax scene creates a beautiful depth effect with smooth, performant layer movement."
            : `Missing: ${[
                !hasScroll && "scroll event listener",
                !hasTransform && "CSS transform",
                !hasTranslate && "translateY or translate3d",
                !hasParallax && "parallax layer references",
              ]
                .filter(Boolean)
                .join(", ")}`,
        };
      },
    },
  ],
};
