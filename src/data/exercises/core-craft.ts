import { Phase } from "./types";

export const coreCraft: Phase = {
  slug: "core-craft",
  title: "Core Craft",
  number: "02",
  description:
    "Master the tools and frameworks that bridge design and engineering.",
  exercises: [
    // ---------------------------------------------------------------
    // 1. CSS Keyframe Animations
    // ---------------------------------------------------------------
    {
      slug: "css-animation-basics",
      title: "CSS Keyframe Animations",
      difficulty: "beginner",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "<p>Create a <strong>loading animation</strong> consisting of three dots that bounce in sequence.</p>",
        "<p>Each dot should be a small circle (about 12px) that scales up and down while fading in and out using a <code>@keyframes</code> rule.</p>",
        "<p>Use <code>animation-delay</code> to stagger the three dots so they bounce one after another, creating a wave-like rhythm.</p>",
        "<p>Wrap the dots in a centered container so the animation sits in the middle of the page.</p>",
      ],
      requirements: [
        "Define a @keyframes rule that scales and changes opacity",
        "Create 3 dot elements styled as circles",
        "Apply animation-delay to each dot so they animate in sequence",
        "Center the loader both horizontally and vertically",
        "Use a smooth infinite animation loop",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Loading Animation</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f8f9fa;
      font-family: system-ui, sans-serif;
    }

    /* TODO: Define a @keyframes rule called "bounce" that:
       - At 0% and 100%: scale(1), opacity 0.3
       - At 50%: scale(1.5), opacity 1
    */

    .loader {
      display: flex;
      gap: 8px;
    }

    .dot {
      /* TODO: Style each dot as a 12px circle with a background color */

      /* TODO: Apply the bounce animation (0.6s, ease-in-out, infinite) */
    }

    /* TODO: Add animation-delay to .dot:nth-child(2) and .dot:nth-child(3) */

  </style>
</head>
<body>
  <div class="loader">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Loading Animation</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f8f9fa;
      font-family: system-ui, sans-serif;
    }

    @keyframes bounce {
      0%, 100% {
        transform: scale(1);
        opacity: 0.3;
      }
      50% {
        transform: scale(1.5);
        opacity: 1;
      }
    }

    .loader {
      display: flex;
      gap: 8px;
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #6366f1;
      animation: bounce 0.6s ease-in-out infinite;
    }

    .dot:nth-child(2) {
      animation-delay: 0.15s;
    }

    .dot:nth-child(3) {
      animation-delay: 0.3s;
    }
  </style>
</head>
<body>
  <div class="loader">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</body>
</html>`,
      hint: "Define a @keyframes rule with transform: scale() and opacity changes at 0%, 50%, and 100%. Apply it to each .dot with animation shorthand and stagger using animation-delay on :nth-child selectors.",
      references: [
        {
          title: "Using CSS animations - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations",
        },
        {
          title: "A Guide to CSS Animation - CSS-Tricks",
          url: "https://css-tricks.com/almanac/properties/a/animation/",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { test: /@keyframes/, label: "@keyframes rule" },
          { test: /animation-delay/, label: "animation-delay" },
          { test: /animation/, label: "animation property" },
        ];
        const failed = checks.filter((c) => !c.test.test(code));
        if (failed.length === 0) {
          return { passed: true, message: "All animation essentials are in place!" };
        }
        return {
          passed: false,
          message: `Missing: ${failed.map((f) => f.label).join(", ")}`,
        };
      },
    },

    // ---------------------------------------------------------------
    // 2. Button Transition Masterclass
    // ---------------------------------------------------------------
    {
      slug: "transition-effects",
      title: "Button Transition Masterclass",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "<p>Build <strong>four distinct button hover effects</strong>, each showcasing a different CSS transition technique.</p>",
        "<p><strong>Slide Fill</strong> &mdash; A background color slides in from the left on hover using a pseudo-element with <code>transform: scaleX()</code>.</p>",
        "<p><strong>Border Draw</strong> &mdash; Borders appear to draw themselves around the button on hover, transitioning width and height of pseudo-elements.</p>",
        "<p><strong>Shine Sweep</strong> &mdash; A diagonal glare sweeps across the button on hover using a rotated pseudo-element that translates across.</p>",
        "<p><strong>Magnetic Lift</strong> &mdash; The button lifts upward with <code>translateY</code> and gains a growing box-shadow on hover.</p>",
      ],
      requirements: [
        "Create 4 buttons, each with a unique hover effect",
        "Use CSS transitions on all animated properties",
        "Use ::before or ::after pseudo-elements for at least two effects",
        "The shine sweep must use overflow: hidden to clip the glare",
        "The magnetic lift must combine translateY with box-shadow",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Button Transitions</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      background: #f8f9fa;
      font-family: system-ui, sans-serif;
    }

    .btn {
      position: relative;
      padding: 14px 32px;
      font-size: 15px;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      overflow: hidden;
      background: transparent;
    }

    /* --- 1. Slide Fill --- */
    .btn-slide {
      color: #6366f1;
      border: 2px solid #6366f1;
      /* TODO: Style the ::before pseudo-element as a full-size
         background that scales from 0 to 1 on hover.
         Hint: use scaleX(0) -> scaleX(1), transform-origin: left */
    }

    /* --- 2. Border Draw --- */
    .btn-border {
      color: #111;
      border: 2px solid transparent;
      /* TODO: Use ::before and ::after to draw top/bottom and
         left/right borders that transition width/height on hover */
    }

    /* --- 3. Shine Sweep --- */
    .btn-shine {
      background: #6366f1;
      color: #fff;
      /* TODO: Create a diagonal white glare with ::after that
         translates from left to right on hover */
    }

    /* --- 4. Magnetic Lift --- */
    .btn-lift {
      background: #111;
      color: #fff;
      /* TODO: Transition translateY upward and add a growing
         box-shadow on hover */
    }

  </style>
</head>
<body>
  <button class="btn btn-slide">Slide Fill</button>
  <button class="btn btn-border">Border Draw</button>
  <button class="btn btn-shine">Shine Sweep</button>
  <button class="btn btn-lift">Magnetic Lift</button>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Button Transitions</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      background: #f8f9fa;
      font-family: system-ui, sans-serif;
    }

    .btn {
      position: relative;
      padding: 14px 32px;
      font-size: 15px;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      overflow: hidden;
      background: transparent;
    }

    /* --- 1. Slide Fill --- */
    .btn-slide {
      color: #6366f1;
      border: 2px solid #6366f1;
      z-index: 1;
      transition: color 0.3s ease;
    }

    .btn-slide::before {
      content: "";
      position: absolute;
      inset: 0;
      background: #6366f1;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
      z-index: -1;
    }

    .btn-slide:hover {
      color: #fff;
    }

    .btn-slide:hover::before {
      transform: scaleX(1);
    }

    /* --- 2. Border Draw --- */
    .btn-border {
      color: #111;
      border: 2px solid transparent;
    }

    .btn-border::before,
    .btn-border::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border: 2px solid transparent;
      box-sizing: border-box;
    }

    .btn-border::before {
      top: 0;
      left: 0;
      transition: width 0.15s ease, height 0.15s ease 0.15s;
    }

    .btn-border::after {
      bottom: 0;
      right: 0;
      transition: width 0.15s ease, height 0.15s ease 0.15s;
    }

    .btn-border:hover::before {
      width: 100%;
      height: 100%;
      border-color: #6366f1;
    }

    .btn-border:hover::after {
      width: 100%;
      height: 100%;
      border-color: #6366f1;
    }

    /* --- 3. Shine Sweep --- */
    .btn-shine {
      background: #6366f1;
      color: #fff;
    }

    .btn-shine::after {
      content: "";
      position: absolute;
      top: -50%;
      left: -75%;
      width: 50%;
      height: 200%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transform: skewX(-20deg);
      transition: left 0.5s ease;
    }

    .btn-shine:hover::after {
      left: 125%;
    }

    /* --- 4. Magnetic Lift --- */
    .btn-lift {
      background: #111;
      color: #fff;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .btn-lift:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
  </style>
</head>
<body>
  <button class="btn btn-slide">Slide Fill</button>
  <button class="btn btn-border">Border Draw</button>
  <button class="btn btn-shine">Shine Sweep</button>
  <button class="btn btn-lift">Magnetic Lift</button>
</body>
</html>`,
      hint: "For the slide fill, create a ::before with position absolute, inset: 0, and transform: scaleX(0) that transitions to scaleX(1) on hover. For the shine, use a skewed pseudo-element that translates across the button width.",
      references: [
        {
          title: "CSS Transitions - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions",
        },
        {
          title: "Animating with CSS Pseudo-Elements - CSS-Tricks",
          url: "https://css-tricks.com/pseudo-element-animating/",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { test: /transition/, label: "transition property" },
          { test: /transform/, label: "transform property" },
          { test: /::before|::after/, label: "pseudo-elements (::before or ::after)" },
          { test: /:hover/, label: ":hover state" },
        ];
        const failed = checks.filter((c) => !c.test.test(code));
        if (failed.length === 0) {
          return { passed: true, message: "All four button effects look great!" };
        }
        return {
          passed: false,
          message: `Missing: ${failed.map((f) => f.label).join(", ")}`,
        };
      },
    },

    // ---------------------------------------------------------------
    // 3. Design Token System
    // ---------------------------------------------------------------
    {
      slug: "design-tokens",
      title: "Design Token System",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Build a <strong>design token system</strong> using CSS custom properties that provides a consistent foundation for UI components.</p>",
        "<p>Define a <strong>spacing scale</strong> based on a 4px unit (4, 8, 12, 16, 20, 24, 32, 40, 48, 64).</p>",
        "<p>Define <strong>border-radius tokens</strong>: sm (6px), md (8px), lg (12px), xl (16px), full (9999px).</p>",
        "<p>Define <strong>box-shadow tokens</strong>: sm, md, and lg with increasing blur and spread.</p>",
        "<p>Create four UI components &mdash; a <strong>button</strong>, an <strong>input</strong>, a <strong>card</strong>, and a <strong>badge</strong> &mdash; that reference <em>only</em> design tokens for spacing, radius, and shadows.</p>",
      ],
      requirements: [
        "Define spacing tokens as CSS custom properties (--spacing-1 through --spacing-10)",
        "Define radius tokens (--radius-sm, --radius-md, etc.)",
        "Define shadow tokens (--shadow-sm, --shadow-md, --shadow-lg)",
        "Build a button, input, card, and badge using only token references via var()",
        "No magic numbers in component styles -- all values come from tokens",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Design Tokens</title>
  <style>
    /* === DESIGN TOKENS === */
    :root {
      /* Spacing scale (4px base) */
      /* TODO: Define --spacing-1 through --spacing-10 */

      /* Border radius */
      /* TODO: Define --radius-sm, --radius-md, --radius-lg, --radius-xl, --radius-full */

      /* Shadows */
      /* TODO: Define --shadow-sm, --shadow-md, --shadow-lg */

      /* Colors (provided) */
      --color-primary: #6366f1;
      --color-primary-hover: #4f46e5;
      --color-text: #111827;
      --color-text-muted: #6b7280;
      --color-bg: #ffffff;
      --color-border: #e5e7eb;
      --color-surface: #f9fafb;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      padding: 48px;
      background: var(--color-surface);
      font-family: system-ui, sans-serif;
      color: var(--color-text);
    }

    /* === COMPONENTS (use ONLY token references) === */

    /* TODO: .btn - padding, border-radius, font styles using tokens */

    /* TODO: .input - padding, border, border-radius using tokens */

    /* TODO: .card - padding, border-radius, shadow using tokens */

    /* TODO: .badge - small pill with padding and border-radius using tokens */

  </style>
</head>
<body>
  <div class="card">
    <h3>Design Token System</h3>
    <p>All spacing, radii, and shadows are driven by tokens.</p>
    <div style="display:flex; gap:12px; margin-top:16px; align-items:center;">
      <button class="btn">Primary Action</button>
      <span class="badge">New</span>
    </div>
    <input class="input" placeholder="Type something..." style="margin-top:16px;" />
  </div>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Design Tokens</title>
  <style>
    /* === DESIGN TOKENS === */
    :root {
      /* Spacing scale (4px base) */
      --spacing-1: 4px;
      --spacing-2: 8px;
      --spacing-3: 12px;
      --spacing-4: 16px;
      --spacing-5: 20px;
      --spacing-6: 24px;
      --spacing-7: 32px;
      --spacing-8: 40px;
      --spacing-9: 48px;
      --spacing-10: 64px;

      /* Border radius */
      --radius-sm: 6px;
      --radius-md: 8px;
      --radius-lg: 12px;
      --radius-xl: 16px;
      --radius-full: 9999px;

      /* Shadows */
      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
      --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.12);

      /* Colors */
      --color-primary: #6366f1;
      --color-primary-hover: #4f46e5;
      --color-text: #111827;
      --color-text-muted: #6b7280;
      --color-bg: #ffffff;
      --color-border: #e5e7eb;
      --color-surface: #f9fafb;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-7);
      padding: var(--spacing-9);
      background: var(--color-surface);
      font-family: system-ui, sans-serif;
      color: var(--color-text);
    }

    /* === BUTTON === */
    .btn {
      display: inline-flex;
      align-items: center;
      padding: var(--spacing-3) var(--spacing-6);
      background: var(--color-primary);
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      border: none;
      border-radius: var(--radius-md);
      cursor: pointer;
      box-shadow: var(--shadow-sm);
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    .btn:hover {
      background: var(--color-primary-hover);
      box-shadow: var(--shadow-md);
    }

    /* === INPUT === */
    .input {
      width: 100%;
      padding: var(--spacing-3) var(--spacing-4);
      font-size: 14px;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      background: var(--color-bg);
      color: var(--color-text);
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .input:focus {
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }

    /* === CARD === */
    .card {
      width: 100%;
      max-width: 420px;
      padding: var(--spacing-7);
      background: var(--color-bg);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
    }

    .card h3 {
      font-size: 18px;
      margin-bottom: var(--spacing-2);
    }

    .card p {
      font-size: 14px;
      color: var(--color-text-muted);
      line-height: 1.5;
    }

    /* === BADGE === */
    .badge {
      display: inline-flex;
      align-items: center;
      padding: var(--spacing-1) var(--spacing-3);
      font-size: 12px;
      font-weight: 600;
      background: rgba(99, 102, 241, 0.1);
      color: var(--color-primary);
      border-radius: var(--radius-full);
    }
  </style>
</head>
<body>
  <div class="card">
    <h3>Design Token System</h3>
    <p>All spacing, radii, and shadows are driven by tokens.</p>
    <div style="display:flex; gap:var(--spacing-3); margin-top:var(--spacing-4); align-items:center;">
      <button class="btn">Primary Action</button>
      <span class="badge">New</span>
    </div>
    <input class="input" placeholder="Type something..." style="margin-top:var(--spacing-4);" />
  </div>
</body>
</html>`,
      hint: "Start by defining your tokens in :root, then reference them everywhere with var(--token-name). For spacing, multiply the step number by 4 to get the value (--spacing-1: 4px, --spacing-2: 8px, etc.).",
      references: [
        {
          title: "A Complete Guide to Custom Properties - CSS-Tricks",
          url: "https://css-tricks.com/a-complete-guide-to-custom-properties/",
        },
        {
          title: "Using CSS custom properties - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { test: /--spacing/, label: "spacing tokens (--spacing-*)" },
          { test: /--radius/, label: "radius tokens (--radius-*)" },
          { test: /--shadow/, label: "shadow tokens (--shadow-*)" },
          { test: /var\(/, label: "var() references" },
        ];
        const failed = checks.filter((c) => !c.test.test(code));
        if (failed.length === 0) {
          return { passed: true, message: "Token system is fully wired up!" };
        }
        return {
          passed: false,
          message: `Missing: ${failed.map((f) => f.label).join(", ")}`,
        };
      },
    },

    // ---------------------------------------------------------------
    // 4. Component Variant System
    // ---------------------------------------------------------------
    {
      slug: "component-variants",
      title: "Component Variant System",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Create a <strong>button component system</strong> with multiple variants and sizes, displayed in a grid.</p>",
        "<p>Define four <strong>variants</strong>: <code>primary</code> (solid indigo), <code>secondary</code> (outlined), <code>ghost</code> (text only with subtle hover bg), and <code>destructive</code> (solid red).</p>",
        "<p>Define three <strong>sizes</strong>: <code>sm</code> (compact), <code>md</code> (default), and <code>lg</code> (large).</p>",
        "<p>Display all 12 combinations (4 variants &times; 3 sizes) in a well-organized grid with labels for each row.</p>",
        "<p>Use CSS classes and custom properties to keep the variant system maintainable.</p>",
      ],
      requirements: [
        "Create .btn-primary, .btn-secondary, .btn-ghost, and .btn-destructive classes",
        "Create .btn-sm, .btn-md, and .btn-lg size classes",
        "Use CSS custom properties for variant colors to keep styles DRY",
        "Display all 12 combinations in a grid layout",
        "Each variant should have a distinct hover state",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Component Variants</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f8f9fa;
      font-family: system-ui, sans-serif;
      padding: 48px;
    }

    .grid {
      display: grid;
      grid-template-columns: 100px repeat(3, auto);
      gap: 16px;
      align-items: center;
    }

    .label {
      font-size: 13px;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* === BASE BUTTON === */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      /* TODO: Use custom properties for variant theming
         --btn-bg, --btn-color, --btn-border, --btn-hover-bg */
    }

    /* === SIZES === */
    /* TODO: .btn-sm - smaller padding and font-size */
    /* TODO: .btn-md - default padding and font-size */
    /* TODO: .btn-lg - larger padding and font-size */

    /* === VARIANTS === */
    /* TODO: .btn-primary - solid indigo background, white text */
    /* TODO: .btn-secondary - outlined with border, transparent bg */
    /* TODO: .btn-ghost - no bg, subtle hover background */
    /* TODO: .btn-destructive - solid red background, white text */

  </style>
</head>
<body>
  <div class="grid">
    <!-- Header row -->
    <div></div>
    <span class="label">Small</span>
    <span class="label">Medium</span>
    <span class="label">Large</span>

    <!-- Primary -->
    <span class="label">Primary</span>
    <button class="btn btn-primary btn-sm">Button</button>
    <button class="btn btn-primary btn-md">Button</button>
    <button class="btn btn-primary btn-lg">Button</button>

    <!-- Secondary -->
    <span class="label">Secondary</span>
    <button class="btn btn-secondary btn-sm">Button</button>
    <button class="btn btn-secondary btn-md">Button</button>
    <button class="btn btn-secondary btn-lg">Button</button>

    <!-- Ghost -->
    <span class="label">Ghost</span>
    <button class="btn btn-ghost btn-sm">Button</button>
    <button class="btn btn-ghost btn-md">Button</button>
    <button class="btn btn-ghost btn-lg">Button</button>

    <!-- Destructive -->
    <span class="label">Destructive</span>
    <button class="btn btn-destructive btn-sm">Button</button>
    <button class="btn btn-destructive btn-md">Button</button>
    <button class="btn btn-destructive btn-lg">Button</button>
  </div>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Component Variants</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f8f9fa;
      font-family: system-ui, sans-serif;
      padding: 48px;
    }

    .grid {
      display: grid;
      grid-template-columns: 100px repeat(3, auto);
      gap: 16px;
      align-items: center;
    }

    .label {
      font-size: 13px;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    /* === BASE BUTTON === */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      border: 2px solid var(--btn-border, transparent);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      background: var(--btn-bg);
      color: var(--btn-color);
    }

    .btn:hover {
      background: var(--btn-hover-bg);
    }

    /* === SIZES === */
    .btn-sm {
      padding: 6px 14px;
      font-size: 13px;
    }

    .btn-md {
      padding: 10px 20px;
      font-size: 14px;
    }

    .btn-lg {
      padding: 14px 28px;
      font-size: 16px;
    }

    /* === VARIANTS === */
    .btn-primary {
      --btn-bg: #6366f1;
      --btn-color: #ffffff;
      --btn-hover-bg: #4f46e5;
    }

    .btn-secondary {
      --btn-bg: transparent;
      --btn-color: #374151;
      --btn-border: #d1d5db;
      --btn-hover-bg: #f3f4f6;
    }

    .btn-ghost {
      --btn-bg: transparent;
      --btn-color: #374151;
      --btn-hover-bg: #f3f4f6;
    }

    .btn-destructive {
      --btn-bg: #ef4444;
      --btn-color: #ffffff;
      --btn-hover-bg: #dc2626;
    }
  </style>
</head>
<body>
  <div class="grid">
    <!-- Header row -->
    <div></div>
    <span class="label">Small</span>
    <span class="label">Medium</span>
    <span class="label">Large</span>

    <!-- Primary -->
    <span class="label">Primary</span>
    <button class="btn btn-primary btn-sm">Button</button>
    <button class="btn btn-primary btn-md">Button</button>
    <button class="btn btn-primary btn-lg">Button</button>

    <!-- Secondary -->
    <span class="label">Secondary</span>
    <button class="btn btn-secondary btn-sm">Button</button>
    <button class="btn btn-secondary btn-md">Button</button>
    <button class="btn btn-secondary btn-lg">Button</button>

    <!-- Ghost -->
    <span class="label">Ghost</span>
    <button class="btn btn-ghost btn-sm">Button</button>
    <button class="btn btn-ghost btn-md">Button</button>
    <button class="btn btn-ghost btn-lg">Button</button>

    <!-- Destructive -->
    <span class="label">Destructive</span>
    <button class="btn btn-destructive btn-sm">Button</button>
    <button class="btn btn-destructive btn-md">Button</button>
    <button class="btn btn-destructive btn-lg">Button</button>
  </div>
</body>
</html>`,
      hint: "Define custom properties like --btn-bg, --btn-color, --btn-hover-bg in each variant class, then reference them in the base .btn class with var(). This keeps the base styles clean and lets variants override just the colors.",
      references: [
        {
          title: "Build Scalable Component Variants with CSS Variables",
          url: "https://css-tricks.com/patterns-for-style-composition-in-css/",
        },
        {
          title: "CSS Custom Properties as an API - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { test: /\.btn-primary/, label: ".btn-primary variant" },
          { test: /\.btn-secondary/, label: ".btn-secondary variant" },
          {
            test: /\.btn-sm|--btn/,
            label: "size classes (.btn-sm) or custom property variant (--btn)",
          },
        ];
        const failed = checks.filter((c) => !c.test.test(code));
        if (failed.length === 0) {
          return { passed: true, message: "Variant system is complete!" };
        }
        return {
          passed: false,
          message: `Missing: ${failed.map((f) => f.label).join(", ")}`,
        };
      },
    },

    // ---------------------------------------------------------------
    // 5. Card Layout Patterns
    // ---------------------------------------------------------------
    {
      slug: "card-layout-system",
      title: "Card Layout Patterns",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Build <strong>four distinct card layout patterns</strong>, each demonstrating a different composition approach.</p>",
        "<p><strong>Horizontal Card</strong> &mdash; Image on the left, content stacked vertically on the right. Use <code>display: flex</code> with a fixed-width image.</p>",
        "<p><strong>Vertical Card</strong> &mdash; Image on top, content below. Classic blog/product card layout with proper aspect ratio on the image.</p>",
        "<p><strong>Overlay Card</strong> &mdash; Text overlaid on the image using a gradient overlay for readability. Position the text at the bottom.</p>",
        "<p><strong>Minimal Card</strong> &mdash; Text-only card with no image. Relies on typography, spacing, and a subtle hover lift for visual interest.</p>",
      ],
      requirements: [
        "Use flexbox or grid for each card layout",
        "Apply consistent border-radius to all cards",
        "Add smooth hover transitions on every card",
        "Use proper spacing and typography hierarchy",
        "The overlay card must have a gradient for text readability",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Card Layouts</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      padding: 48px;
      background: #f1f5f9;
      font-family: system-ui, sans-serif;
      color: #1e293b;
    }

    h1 { font-size: 24px; margin-bottom: 8px; }

    .cards {
      display: grid;
      grid-template-columns: repeat(2, 400px);
      gap: 24px;
    }

    /* Use placeholder images */
    /* https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop */
    /* https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop */

    /* TODO: .card-horizontal - flex row, image left, content right */

    /* TODO: .card-vertical - flex column, image top, content bottom */

    /* TODO: .card-overlay - relative positioning, gradient overlay on image */

    /* TODO: .card-minimal - text only, subtle border, hover lift */

  </style>
</head>
<body>
  <h1>Card Layout Patterns</h1>
  <div class="cards">
    <!-- 1. Horizontal Card -->
    <div class="card-horizontal">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop" alt="Landscape" />
      <div class="card-content">
        <span class="card-tag">Travel</span>
        <h3>Mountain Vista</h3>
        <p>Explore breathtaking mountain landscapes and serene valleys.</p>
      </div>
    </div>

    <!-- 2. Vertical Card -->
    <div class="card-vertical">
      <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop" alt="Nature" />
      <div class="card-content">
        <span class="card-tag">Nature</span>
        <h3>Golden Hour</h3>
        <p>Chase the perfect light through rolling hills and open meadows.</p>
      </div>
    </div>

    <!-- 3. Overlay Card -->
    <div class="card-overlay">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop" alt="Landscape" />
      <div class="card-content">
        <span class="card-tag">Featured</span>
        <h3>Into the Wild</h3>
        <p>An immersive journey through untouched wilderness.</p>
      </div>
    </div>

    <!-- 4. Minimal Card -->
    <div class="card-minimal">
      <span class="card-tag">Thoughts</span>
      <h3>Design is in the Details</h3>
      <p>Great design emerges from the careful consideration of every element, every pixel, and every interaction.</p>
    </div>
  </div>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Card Layouts</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      padding: 48px;
      background: #f1f5f9;
      font-family: system-ui, sans-serif;
      color: #1e293b;
    }

    h1 { font-size: 24px; margin-bottom: 8px; }

    .cards {
      display: grid;
      grid-template-columns: repeat(2, 400px);
      gap: 24px;
    }

    .card-tag {
      display: inline-block;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #6366f1;
      margin-bottom: 8px;
    }

    .card-content h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 6px;
      line-height: 1.3;
    }

    .card-content p {
      font-size: 14px;
      color: #64748b;
      line-height: 1.5;
    }

    /* === 1. Horizontal Card === */
    .card-horizontal {
      display: flex;
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .card-horizontal:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    .card-horizontal img {
      width: 160px;
      object-fit: cover;
      flex-shrink: 0;
    }

    .card-horizontal .card-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    /* === 2. Vertical Card === */
    .card-vertical {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .card-vertical:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    .card-vertical img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .card-vertical .card-content {
      padding: 20px;
    }

    /* === 3. Overlay Card === */
    .card-overlay {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .card-overlay:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    .card-overlay img {
      width: 100%;
      height: 260px;
      object-fit: cover;
      display: block;
    }

    .card-overlay .card-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 24px;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, transparent 100%);
    }

    .card-overlay .card-content h3,
    .card-overlay .card-content p {
      color: #fff;
    }

    .card-overlay .card-tag {
      color: #a5b4fc;
    }

    /* === 4. Minimal Card === */
    .card-minimal {
      padding: 28px;
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .card-minimal:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      transform: translateY(-2px);
    }

    .card-minimal .card-tag {
      margin-bottom: 12px;
    }

    .card-minimal h3 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 8px;
      line-height: 1.3;
    }

    .card-minimal p {
      font-size: 14px;
      color: #64748b;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h1>Card Layout Patterns</h1>
  <div class="cards">
    <!-- 1. Horizontal Card -->
    <div class="card-horizontal">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop" alt="Landscape" />
      <div class="card-content">
        <span class="card-tag">Travel</span>
        <h3>Mountain Vista</h3>
        <p>Explore breathtaking mountain landscapes and serene valleys.</p>
      </div>
    </div>

    <!-- 2. Vertical Card -->
    <div class="card-vertical">
      <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop" alt="Nature" />
      <div class="card-content">
        <span class="card-tag">Nature</span>
        <h3>Golden Hour</h3>
        <p>Chase the perfect light through rolling hills and open meadows.</p>
      </div>
    </div>

    <!-- 3. Overlay Card -->
    <div class="card-overlay">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop" alt="Landscape" />
      <div class="card-content">
        <span class="card-tag">Featured</span>
        <h3>Into the Wild</h3>
        <p>An immersive journey through untouched wilderness.</p>
      </div>
    </div>

    <!-- 4. Minimal Card -->
    <div class="card-minimal">
      <span class="card-tag">Thoughts</span>
      <h3>Design is in the Details</h3>
      <p>Great design emerges from the careful consideration of every element, every pixel, and every interaction.</p>
    </div>
  </div>
</body>
</html>`,
      hint: "For the horizontal card, use display: flex with a fixed-width image. For the overlay, position the card-content absolutely at the bottom and use a linear-gradient background from transparent to dark for readability.",
      references: [
        {
          title: "A Complete Guide to Flexbox - CSS-Tricks",
          url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        },
        {
          title: "A Complete Guide to CSS Grid - CSS-Tricks",
          url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
        },
      ],
      validation: (code: string) => {
        const checks = [
          {
            test: /display:\s*flex|display:\s*grid/,
            label: "flexbox or grid layout",
          },
          { test: /border-radius/, label: "border-radius" },
          { test: /transition/, label: "transition effects" },
        ];
        const failed = checks.filter((c) => !c.test.test(code));
        if (failed.length === 0) {
          return { passed: true, message: "All four card patterns are solid!" };
        }
        return {
          passed: false,
          message: `Missing: ${failed.map((f) => f.label).join(", ")}`,
        };
      },
    },

    // ---------------------------------------------------------------
    // 6. Dark/Light Theme System
    // ---------------------------------------------------------------
    {
      slug: "dark-light-toggle",
      title: "Dark/Light Theme System",
      difficulty: "advanced",
      estimatedMinutes: 25,
      language: "html",
      instructions: [
        "<p>Build a complete <strong>dark/light theme toggle</strong> using CSS custom properties and a small amount of JavaScript.</p>",
        "<p>Define a <strong>light theme</strong> and <strong>dark theme</strong> using <code>[data-theme=\"light\"]</code> and <code>[data-theme=\"dark\"]</code> attribute selectors on the <code>&lt;html&gt;</code> element.</p>",
        "<p>Each theme should define tokens for: background, surface, text, text-muted, border, primary, and primary-hover colors.</p>",
        "<p>Add a <strong>toggle button</strong> with JavaScript that switches between themes by updating the <code>data-theme</code> attribute.</p>",
        "<p>Build a sample UI (card with heading, paragraph, input, and button) that uses the theme tokens. Transitions between themes should be smooth (use <code>transition</code> on background and color).</p>",
      ],
      requirements: [
        "Define theme tokens on [data-theme=\"light\"] and [data-theme=\"dark\"]",
        "Create a toggle button that switches data-theme via JavaScript",
        "All component colors must reference theme tokens with var()",
        "Add smooth transitions when switching themes",
        "Include at least a card, input, button, and paragraph in the sample UI",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Theme Toggle</title>
  <style>
    /* === THEME TOKENS === */
    /* TODO: [data-theme="light"] - define light theme custom properties */
    /* TODO: [data-theme="dark"] - define dark theme custom properties */
    /* Tokens needed: --bg, --surface, --text, --text-muted,
       --border, --primary, --primary-hover */

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: system-ui, sans-serif;
      /* TODO: Use theme tokens for background and color */
      /* TODO: Add transition for smooth theme switching */
    }

    /* TODO: Style the toggle button (fixed position, top-right) */

    /* TODO: Style a .card component using theme tokens */

    /* TODO: Style an .input using theme tokens */

    /* TODO: Style a .btn using theme tokens */

  </style>
</head>
<body>
  <button class="toggle" id="themeToggle">Toggle Theme</button>

  <div class="card">
    <h2>Theme System</h2>
    <p>This entire UI adapts to light and dark themes using CSS custom properties.</p>
    <input class="input" type="text" placeholder="Type here..." />
    <button class="btn">Primary Action</button>
  </div>

  <script>
    // TODO: Add a click listener to #themeToggle that switches
    // the data-theme attribute on <html> between "light" and "dark"
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Theme Toggle</title>
  <style>
    /* === THEME TOKENS === */
    [data-theme="light"] {
      --bg: #f8f9fa;
      --surface: #ffffff;
      --text: #111827;
      --text-muted: #6b7280;
      --border: #e5e7eb;
      --primary: #6366f1;
      --primary-hover: #4f46e5;
    }

    [data-theme="dark"] {
      --bg: #0f172a;
      --surface: #1e293b;
      --text: #f1f5f9;
      --text-muted: #94a3b8;
      --border: #334155;
      --primary: #818cf8;
      --primary-hover: #6366f1;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      transition: background 0.3s ease, color 0.3s ease;
    }

    /* === TOGGLE BUTTON === */
    .toggle {
      position: fixed;
      top: 24px;
      right: 24px;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 600;
      background: var(--surface);
      color: var(--text);
      border: 1px solid var(--border);
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      z-index: 10;
    }

    .toggle:hover {
      background: var(--primary);
      color: #fff;
      border-color: var(--primary);
    }

    /* === CARD === */
    .card {
      width: 100%;
      max-width: 420px;
      padding: 32px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      gap: 16px;
      transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .card h2 {
      font-size: 22px;
      font-weight: 700;
      color: var(--text);
      transition: color 0.3s ease;
    }

    .card p {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.6;
      transition: color 0.3s ease;
    }

    /* === INPUT === */
    .input {
      width: 100%;
      padding: 12px 16px;
      font-size: 14px;
      background: var(--bg);
      color: var(--text);
      border: 1px solid var(--border);
      border-radius: 8px;
      outline: none;
      transition: background 0.3s ease, color 0.3s ease,
        border-color 0.3s ease, box-shadow 0.2s ease;
    }

    .input::placeholder {
      color: var(--text-muted);
    }

    .input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
    }

    /* === BUTTON === */
    .btn {
      padding: 12px 24px;
      font-size: 14px;
      font-weight: 600;
      background: var(--primary);
      color: #fff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .btn:hover {
      background: var(--primary-hover);
    }
  </style>
</head>
<body>
  <button class="toggle" id="themeToggle">Toggle Theme</button>

  <div class="card">
    <h2>Theme System</h2>
    <p>This entire UI adapts to light and dark themes using CSS custom properties.</p>
    <input class="input" type="text" placeholder="Type here..." />
    <button class="btn">Primary Action</button>
  </div>

  <script>
    const toggle = document.getElementById("themeToggle");
    toggle.addEventListener("click", () => {
      const html = document.documentElement;
      const current = html.getAttribute("data-theme");
      html.setAttribute("data-theme", current === "light" ? "dark" : "light");
    });
  </script>
</body>
</html>`,
      hint: "Define all your color tokens inside [data-theme=\"light\"] and [data-theme=\"dark\"] selectors. In JavaScript, toggle the attribute with document.documentElement.setAttribute('data-theme', ...). Add transition: background 0.3s, color 0.3s to elements that should animate between themes.",
      references: [
        {
          title: "A Complete Guide to Dark Mode on the Web - CSS-Tricks",
          url: "https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/",
        },
        {
          title: "prefers-color-scheme - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { test: /data-theme/, label: "data-theme attribute" },
          {
            test: /\[data-theme=["']dark["']\]/,
            label: '[data-theme="dark"] selector',
          },
          {
            test: /\[data-theme=["']light["']\]/,
            label: '[data-theme="light"] selector',
          },
          { test: /addEventListener/, label: "addEventListener for toggle" },
        ];
        const failed = checks.filter((c) => !c.test.test(code));
        if (failed.length === 0) {
          return { passed: true, message: "Theme system is fully functional!" };
        }
        return {
          passed: false,
          message: `Missing: ${failed.map((f) => f.label).join(", ")}`,
        };
      },
    },
  ],
};
