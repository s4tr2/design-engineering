import { Phase } from "./types";

export const foundation: Phase = {
  slug: "foundation",
  title: "Foundation",
  number: "01",
  description:
    "Build a rock-solid foundation in both design and front-end development.",
  exercises: [
    // ── 1. Semantic HTML Structure ──────────────────────────────────────
    {
      slug: "semantic-html",
      title: "Semantic HTML Structure",
      difficulty: "beginner",
      estimatedMinutes: 10,
      language: "html",
      instructions: [
        "You've been given a blog article built entirely with <code>&lt;div&gt;</code> tags. Your job is to replace those divs with the correct <strong>semantic HTML elements</strong> so that the document is meaningful and accessible.",
        "Semantic elements like <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;footer&gt;</code> give the browser (and assistive technologies) important information about the role each section plays.",
        "Replace every generic <code>&lt;div&gt;</code> with the most appropriate semantic tag. The content should stay the same &mdash; only the tags change.",
      ],
      requirements: [
        "Use <article> as the root wrapper for the blog post",
        "Use <header> for the article's title area",
        "Use <nav> for the navigation links",
        "Use <section> for each content section",
        "Use <footer> for the bottom area",
        "Use <figure> and <figcaption> for the image and its caption",
        "Use <time> for the publication date",
        "Use <aside> for the sidebar/callout content",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blog Article</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #1a1a2e; background: #f8f9fa; padding: 2rem; max-width: 720px; margin: 0 auto; }
    .article { background: #fff; border-radius: 12px; padding: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .header { border-bottom: 2px solid #e9ecef; padding-bottom: 1rem; margin-bottom: 1.5rem; }
    .header h1 { font-size: 1.75rem; }
    .nav { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
    .nav a { color: #4361ee; text-decoration: none; font-weight: 500; }
    .section { margin-bottom: 1.5rem; }
    .section h2 { font-size: 1.25rem; margin-bottom: 0.5rem; }
    .image-block { background: #e9ecef; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; text-align: center; }
    .image-block img { max-width: 100%; border-radius: 4px; }
    .image-block .caption { font-size: 0.875rem; color: #6c757d; margin-top: 0.5rem; }
    .sidebar { background: #f1f3f5; border-left: 4px solid #4361ee; padding: 1rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem; }
    .footer { border-top: 2px solid #e9ecef; padding-top: 1rem; font-size: 0.875rem; color: #6c757d; }
  </style>
</head>
<body>
  <!-- TODO: Replace every <div> below with the correct semantic HTML element -->

  <div class="article">
    <div class="header">
      <h1>Understanding Semantic HTML</h1>
      <p>Published on <span>2025-06-15</span> by Jane Doe</p>
    </div>

    <div class="nav">
      <a href="#intro">Introduction</a>
      <a href="#why">Why It Matters</a>
      <a href="#examples">Examples</a>
    </div>

    <div class="section" id="intro">
      <h2>Introduction</h2>
      <p>Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer. Instead of using generic containers, we use tags that convey purpose.</p>
    </div>

    <div class="image-block">
      <img src="https://placehold.co/600x300/e9ecef/495057?text=Semantic+HTML+Diagram" alt="Diagram showing semantic HTML elements" />
      <div class="caption">A visual overview of common semantic elements</div>
    </div>

    <div class="section" id="why">
      <h2>Why Semantic HTML Matters</h2>
      <p>Using semantic elements improves accessibility, SEO, and code readability. Screen readers can navigate the page more effectively when proper landmarks are in place.</p>
    </div>

    <div class="sidebar">
      <strong>Did you know?</strong>
      <p>Over 97% of homepages have detectable accessibility issues, many of which stem from non-semantic markup.</p>
    </div>

    <div class="section" id="examples">
      <h2>Common Semantic Elements</h2>
      <p>Some of the most useful semantic elements include article, section, nav, header, footer, figure, aside, and time.</p>
    </div>

    <div class="footer">
      <p>&copy; 2025 Web Fundamentals Blog. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blog Article</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #1a1a2e; background: #f8f9fa; padding: 2rem; max-width: 720px; margin: 0 auto; }
    article { background: #fff; border-radius: 12px; padding: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    header { border-bottom: 2px solid #e9ecef; padding-bottom: 1rem; margin-bottom: 1.5rem; }
    header h1 { font-size: 1.75rem; }
    nav { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
    nav a { color: #4361ee; text-decoration: none; font-weight: 500; }
    section { margin-bottom: 1.5rem; }
    section h2 { font-size: 1.25rem; margin-bottom: 0.5rem; }
    figure { background: #e9ecef; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; text-align: center; }
    figure img { max-width: 100%; border-radius: 4px; }
    figcaption { font-size: 0.875rem; color: #6c757d; margin-top: 0.5rem; }
    aside { background: #f1f3f5; border-left: 4px solid #4361ee; padding: 1rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem; }
    footer { border-top: 2px solid #e9ecef; padding-top: 1rem; font-size: 0.875rem; color: #6c757d; }
  </style>
</head>
<body>
  <article>
    <header>
      <h1>Understanding Semantic HTML</h1>
      <p>Published on <time datetime="2025-06-15">2025-06-15</time> by Jane Doe</p>
    </header>

    <nav>
      <a href="#intro">Introduction</a>
      <a href="#why">Why It Matters</a>
      <a href="#examples">Examples</a>
    </nav>

    <section id="intro">
      <h2>Introduction</h2>
      <p>Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer. Instead of using generic containers, we use tags that convey purpose.</p>
    </section>

    <figure>
      <img src="https://placehold.co/600x300/e9ecef/495057?text=Semantic+HTML+Diagram" alt="Diagram showing semantic HTML elements" />
      <figcaption>A visual overview of common semantic elements</figcaption>
    </figure>

    <section id="why">
      <h2>Why Semantic HTML Matters</h2>
      <p>Using semantic elements improves accessibility, SEO, and code readability. Screen readers can navigate the page more effectively when proper landmarks are in place.</p>
    </section>

    <aside>
      <strong>Did you know?</strong>
      <p>Over 97% of homepages have detectable accessibility issues, many of which stem from non-semantic markup.</p>
    </aside>

    <section id="examples">
      <h2>Common Semantic Elements</h2>
      <p>Some of the most useful semantic elements include article, section, nav, header, footer, figure, aside, and time.</p>
    </section>

    <footer>
      <p>&copy; 2025 Web Fundamentals Blog. All rights reserved.</p>
    </footer>
  </article>
</body>
</html>`,
      hint: "Look at each <div> and ask: what is the purpose of this section? A blog post is an <article>, navigation links go in <nav>, an image with a caption is a <figure> with <figcaption>, and a callout box is an <aside>.",
      references: [
        {
          title: "MDN: <article> element",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article",
        },
        {
          title: "MDN: Content sectioning",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning",
        },
        {
          title: "MDN: <figure> element",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure",
        },
      ],
      validation: (code: string) => {
        const required = ["<article", "<header", "<nav", "<section", "<footer"];
        const missing = required.filter((tag) => !code.includes(tag));
        if (missing.length > 0) {
          return {
            passed: false,
            message: `Missing semantic elements: ${missing.join(", ")}. Replace the corresponding <div> tags.`,
          };
        }
        const bonus = ["<figure", "<figcaption", "<time", "<aside"];
        const missingBonus = bonus.filter((tag) => !code.includes(tag));
        if (missingBonus.length > 0) {
          return {
            passed: false,
            message: `Good progress! Still missing: ${missingBonus.join(", ")}. Check the image block, callout, and date.`,
          };
        }
        return {
          passed: true,
          message:
            "All semantic elements are in place. Your markup is meaningful and accessible.",
        };
      },
    },

    // ── 2. Typography Scale & Hierarchy ─────────────────────────────────
    {
      slug: "typography-scale",
      title: "Typography Scale & Hierarchy",
      difficulty: "beginner",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "A well-defined <strong>typographic scale</strong> is the backbone of any design system. You will create a modular scale using CSS custom properties so that every text size in your project is mathematically related.",
        "Use a <strong>1.25 ratio</strong> (Major Third) starting from a base of <code>1rem</code>. Each step up multiplies the previous size by 1.25. Define CSS variables for each heading level (h1&ndash;h6), body text, and small text.",
        "Set appropriate <code>line-height</code> values: tighter for headings (1.1&ndash;1.3) and looser for body text (1.5&ndash;1.7). Display a specimen page that shows each level clearly labeled.",
      ],
      requirements: [
        "Define CSS custom properties for at least 8 font-size steps (--font-size-xs through --font-size-3xl or similar)",
        "Use a 1.25 modular scale ratio",
        "Apply proper line-height values for each level",
        "Style all heading levels h1 through h6",
        "Include body text and small text examples",
        "Show each size with a visible label indicating the variable name and computed size",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Typography Scale</title>
  <style>
    /* TODO: Define your typographic scale using CSS custom properties */
    /* Use a 1.25 (Major Third) ratio starting from 1rem base */

    :root {
      /* --font-size-xs: ???; */
      /* --font-size-sm: ???; */
      /* --font-size-base: 1rem; */
      /* ... continue the scale ... */
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #f8f9fa;
      color: #1a1a2e;
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .scale-heading {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #6c757d;
      margin-bottom: 2rem;
    }

    /* TODO: Style each specimen row */
    .specimen {
      display: flex;
      align-items: baseline;
      gap: 1.5rem;
      padding: 1rem 0;
      border-bottom: 1px solid #e9ecef;
    }

    .specimen .label {
      min-width: 180px;
      font-size: 0.75rem;
      color: #868e96;
      font-family: monospace;
    }

    /* TODO: Apply your CSS variables to each heading and text style */
  </style>
</head>
<body>
  <p class="scale-heading">Typographic Scale &mdash; 1.25 Ratio (Major Third)</p>

  <!-- TODO: Create specimen rows for each level of your scale -->
  <!-- Each row should show the variable name / size and a sample text -->

  <div class="specimen">
    <span class="label">--font-size-3xl / ???</span>
    <h1>The quick brown fox</h1>
  </div>

  <div class="specimen">
    <span class="label">--font-size-2xl / ???</span>
    <h2>The quick brown fox</h2>
  </div>

  <!-- Continue for h3, h4, h5, h6, body, and small text... -->

</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Typography Scale</title>
  <style>
    :root {
      /* Base size */
      --font-size-base: 1rem;         /* 16px */

      /* Scale down */
      --font-size-xs: 0.64rem;        /* 10.24px — base / 1.25^2 */
      --font-size-sm: 0.8rem;         /* 12.8px  — base / 1.25   */

      /* Scale up (Major Third — ratio 1.25) */
      --font-size-md: 1.25rem;        /* 20px    */
      --font-size-lg: 1.563rem;       /* 25px    */
      --font-size-xl: 1.953rem;       /* 31.25px */
      --font-size-2xl: 2.441rem;      /* 39.06px */
      --font-size-3xl: 3.052rem;      /* 48.83px */

      /* Line heights */
      --line-height-tight: 1.1;
      --line-height-snug: 1.25;
      --line-height-normal: 1.5;
      --line-height-relaxed: 1.7;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: var(--font-size-base);
      line-height: var(--line-height-normal);
      background: #f8f9fa;
      color: #1a1a2e;
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .scale-heading {
      font-size: var(--font-size-xs);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #6c757d;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    .specimen {
      display: flex;
      align-items: baseline;
      gap: 1.5rem;
      padding: 1rem 0;
      border-bottom: 1px solid #e9ecef;
    }

    .specimen .label {
      min-width: 200px;
      font-size: var(--font-size-xs);
      color: #868e96;
      font-family: "SF Mono", SFMono-Regular, Consolas, monospace;
      flex-shrink: 0;
    }

    h1 { font-size: var(--font-size-3xl); line-height: var(--line-height-tight); font-weight: 800; }
    h2 { font-size: var(--font-size-2xl); line-height: var(--line-height-tight); font-weight: 700; }
    h3 { font-size: var(--font-size-xl);  line-height: var(--line-height-snug);  font-weight: 700; }
    h4 { font-size: var(--font-size-lg);  line-height: var(--line-height-snug);  font-weight: 600; }
    h5 { font-size: var(--font-size-md);  line-height: var(--line-height-snug);  font-weight: 600; }
    h6 { font-size: var(--font-size-base); line-height: var(--line-height-normal); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }

    .body-text  { font-size: var(--font-size-base); line-height: var(--line-height-relaxed); }
    .small-text { font-size: var(--font-size-sm);   line-height: var(--line-height-normal); color: #495057; }
    .xs-text    { font-size: var(--font-size-xs);   line-height: var(--line-height-normal); color: #6c757d; }
  </style>
</head>
<body>
  <p class="scale-heading">Typographic Scale &mdash; 1.25 Ratio (Major Third)</p>

  <div class="specimen">
    <span class="label">--font-size-3xl<br />3.052rem &middot; 48.8px</span>
    <h1>The quick brown fox</h1>
  </div>

  <div class="specimen">
    <span class="label">--font-size-2xl<br />2.441rem &middot; 39px</span>
    <h2>The quick brown fox</h2>
  </div>

  <div class="specimen">
    <span class="label">--font-size-xl<br />1.953rem &middot; 31.3px</span>
    <h3>The quick brown fox</h3>
  </div>

  <div class="specimen">
    <span class="label">--font-size-lg<br />1.563rem &middot; 25px</span>
    <h4>The quick brown fox</h4>
  </div>

  <div class="specimen">
    <span class="label">--font-size-md<br />1.25rem &middot; 20px</span>
    <h5>The quick brown fox</h5>
  </div>

  <div class="specimen">
    <span class="label">--font-size-base<br />1rem &middot; 16px</span>
    <h6>The quick brown fox</h6>
  </div>

  <div class="specimen">
    <span class="label">--font-size-base<br />1rem &middot; 16px</span>
    <p class="body-text">The quick brown fox jumps over the lazy dog. This is body text, the default reading size for paragraphs and long-form content.</p>
  </div>

  <div class="specimen">
    <span class="label">--font-size-sm<br />0.8rem &middot; 12.8px</span>
    <p class="small-text">The quick brown fox jumps over the lazy dog. Small text for captions, labels, and secondary information.</p>
  </div>

  <div class="specimen">
    <span class="label">--font-size-xs<br />0.64rem &middot; 10.2px</span>
    <p class="xs-text">The quick brown fox jumps over the lazy dog. Extra-small text for fine print and metadata.</p>
  </div>
</body>
</html>`,
      hint: "Start with a base size of 1rem. To go one step up, multiply by 1.25 (1.25rem). Two steps up: 1.25 x 1.25 = 1.5625rem. To go down, divide: 1 / 1.25 = 0.8rem. Store every value in a --font-size-* custom property.",
      references: [
        {
          title: "MDN: Using CSS custom properties",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
        },
        {
          title: "MDN: font-size",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-size",
        },
        {
          title: "MDN: line-height",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { test: /--font-size/.test(code), label: "--font-size custom properties" },
          { test: /<h1[\s>]/.test(code), label: "<h1> element" },
          { test: /<h2[\s>]/.test(code), label: "<h2> element" },
          { test: /<h3[\s>]/.test(code), label: "<h3> element" },
          { test: /line-height/.test(code), label: "line-height declarations" },
        ];
        const failing = checks.filter((c) => !c.test);
        if (failing.length > 0) {
          return {
            passed: false,
            message: `Missing: ${failing.map((f) => f.label).join(", ")}.`,
          };
        }
        return {
          passed: true,
          message:
            "Your typographic scale is well-defined with custom properties and proper line-heights.",
        };
      },
    },

    // ── 3. Design a Color System ────────────────────────────────────────
    {
      slug: "color-system",
      title: "Design a Color System",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "Every great design system starts with a <strong>color palette</strong>. You will build one from scratch using CSS custom properties, then display every swatch in a visual grid.",
        "Create three groups of colors: a <strong>primary</strong> scale (50, 100, 200 ... 900), a <strong>neutral/gray</strong> scale, and <strong>semantic</strong> colors (success, warning, error, info). Each swatch should render as a colored box with its variable name and hex value visible.",
        "Aim for perceptual evenness &mdash; the jump in lightness between each step should feel consistent. Use HSL for easier tweaking if you like.",
      ],
      requirements: [
        "Define a primary color with shades from 50 (lightest) to 900 (darkest)",
        "Define a neutral/gray scale with at least 5 shades",
        "Define semantic colors: success (green), warning (amber/yellow), error (red), and info (blue)",
        "Display each color as a swatch in a grid layout",
        "Show the CSS variable name and hex/hsl value on each swatch",
        "Use readable text color (dark on light swatches, light on dark swatches)",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Color System</title>
  <style>
    :root {
      /* TODO: Define your primary color scale */
      /* --primary-50:  ???; */
      /* --primary-100: ???; */
      /* ... through 900 ... */

      /* TODO: Define neutral / gray scale */

      /* TODO: Define semantic colors */
      /* --color-success: ???; */
      /* --color-warning: ???; */
      /* --color-error:   ???; */
      /* --color-info:    ???; */
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #f8f9fa;
      color: #1a1a2e;
      padding: 2rem;
      max-width: 960px;
      margin: 0 auto;
    }

    h2 {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #6c757d;
      margin-bottom: 0.75rem;
    }

    .palette {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 0.5rem;
      margin-bottom: 2rem;
    }

    .swatch {
      border-radius: 8px;
      padding: 1.5rem 0.75rem 0.75rem;
      min-height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .swatch .name {
      font-size: 0.7rem;
      font-weight: 600;
      font-family: monospace;
    }

    .swatch .value {
      font-size: 0.65rem;
      opacity: 0.8;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <h1 style="margin-bottom: 2rem; font-size: 1.5rem;">Color System</h1>

  <h2>Primary</h2>
  <div class="palette">
    <!-- TODO: Add swatch divs for each primary shade -->
    <!-- Example:
    <div class="swatch" style="background: var(--primary-50); color: #1a1a2e;">
      <span class="name">primary-50</span>
      <span class="value">#eef2ff</span>
    </div>
    -->
  </div>

  <h2>Neutral</h2>
  <div class="palette">
    <!-- TODO: Add neutral swatches -->
  </div>

  <h2>Semantic</h2>
  <div class="palette">
    <!-- TODO: Add semantic color swatches -->
  </div>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Color System</title>
  <style>
    :root {
      /* Primary — Indigo */
      --primary-50:  #eef2ff;
      --primary-100: #e0e7ff;
      --primary-200: #c7d2fe;
      --primary-300: #a5b4fc;
      --primary-400: #818cf8;
      --primary-500: #6366f1;
      --primary-600: #4f46e5;
      --primary-700: #4338ca;
      --primary-800: #3730a3;
      --primary-900: #312e81;

      /* Neutral — Slate */
      --neutral-50:  #f8fafc;
      --neutral-100: #f1f5f9;
      --neutral-200: #e2e8f0;
      --neutral-300: #cbd5e1;
      --neutral-400: #94a3b8;
      --neutral-500: #64748b;
      --neutral-600: #475569;
      --neutral-700: #334155;
      --neutral-800: #1e293b;
      --neutral-900: #0f172a;

      /* Semantic */
      --color-success:     #16a34a;
      --color-success-light: #dcfce7;
      --color-warning:     #d97706;
      --color-warning-light: #fef3c7;
      --color-error:       #dc2626;
      --color-error-light: #fee2e2;
      --color-info:        #2563eb;
      --color-info-light:  #dbeafe;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: var(--neutral-50);
      color: var(--neutral-900);
      padding: 2rem;
      max-width: 960px;
      margin: 0 auto;
    }

    h1 { margin-bottom: 2rem; font-size: 1.5rem; font-weight: 700; }

    h2 {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--neutral-500);
      margin-bottom: 0.75rem;
    }

    .palette {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 0.5rem;
      margin-bottom: 2.5rem;
    }

    .swatch {
      border-radius: 8px;
      padding: 1.5rem 0.75rem 0.75rem;
      min-height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      transition: transform 0.15s ease;
    }
    .swatch:hover { transform: scale(1.05); }

    .swatch .name {
      font-size: 0.7rem;
      font-weight: 600;
      font-family: "SF Mono", SFMono-Regular, Consolas, monospace;
    }

    .swatch .value {
      font-size: 0.65rem;
      opacity: 0.8;
      font-family: "SF Mono", SFMono-Regular, Consolas, monospace;
    }

    .light-text { color: #fff; }
    .dark-text  { color: #1e293b; }
  </style>
</head>
<body>
  <h1>Color System</h1>

  <h2>Primary &mdash; Indigo</h2>
  <div class="palette">
    <div class="swatch dark-text" style="background: var(--primary-50);">
      <span class="name">primary-50</span><span class="value">#eef2ff</span>
    </div>
    <div class="swatch dark-text" style="background: var(--primary-100);">
      <span class="name">primary-100</span><span class="value">#e0e7ff</span>
    </div>
    <div class="swatch dark-text" style="background: var(--primary-200);">
      <span class="name">primary-200</span><span class="value">#c7d2fe</span>
    </div>
    <div class="swatch dark-text" style="background: var(--primary-300);">
      <span class="name">primary-300</span><span class="value">#a5b4fc</span>
    </div>
    <div class="swatch light-text" style="background: var(--primary-400);">
      <span class="name">primary-400</span><span class="value">#818cf8</span>
    </div>
    <div class="swatch light-text" style="background: var(--primary-500);">
      <span class="name">primary-500</span><span class="value">#6366f1</span>
    </div>
    <div class="swatch light-text" style="background: var(--primary-600);">
      <span class="name">primary-600</span><span class="value">#4f46e5</span>
    </div>
    <div class="swatch light-text" style="background: var(--primary-700);">
      <span class="name">primary-700</span><span class="value">#4338ca</span>
    </div>
    <div class="swatch light-text" style="background: var(--primary-800);">
      <span class="name">primary-800</span><span class="value">#3730a3</span>
    </div>
    <div class="swatch light-text" style="background: var(--primary-900);">
      <span class="name">primary-900</span><span class="value">#312e81</span>
    </div>
  </div>

  <h2>Neutral &mdash; Slate</h2>
  <div class="palette">
    <div class="swatch dark-text" style="background: var(--neutral-50);">
      <span class="name">neutral-50</span><span class="value">#f8fafc</span>
    </div>
    <div class="swatch dark-text" style="background: var(--neutral-100);">
      <span class="name">neutral-100</span><span class="value">#f1f5f9</span>
    </div>
    <div class="swatch dark-text" style="background: var(--neutral-200);">
      <span class="name">neutral-200</span><span class="value">#e2e8f0</span>
    </div>
    <div class="swatch dark-text" style="background: var(--neutral-300);">
      <span class="name">neutral-300</span><span class="value">#cbd5e1</span>
    </div>
    <div class="swatch light-text" style="background: var(--neutral-400);">
      <span class="name">neutral-400</span><span class="value">#94a3b8</span>
    </div>
    <div class="swatch light-text" style="background: var(--neutral-500);">
      <span class="name">neutral-500</span><span class="value">#64748b</span>
    </div>
    <div class="swatch light-text" style="background: var(--neutral-600);">
      <span class="name">neutral-600</span><span class="value">#475569</span>
    </div>
    <div class="swatch light-text" style="background: var(--neutral-700);">
      <span class="name">neutral-700</span><span class="value">#334155</span>
    </div>
    <div class="swatch light-text" style="background: var(--neutral-800);">
      <span class="name">neutral-800</span><span class="value">#1e293b</span>
    </div>
    <div class="swatch light-text" style="background: var(--neutral-900);">
      <span class="name">neutral-900</span><span class="value">#0f172a</span>
    </div>
  </div>

  <h2>Semantic</h2>
  <div class="palette">
    <div class="swatch dark-text" style="background: var(--color-success-light);">
      <span class="name">success-light</span><span class="value">#dcfce7</span>
    </div>
    <div class="swatch light-text" style="background: var(--color-success);">
      <span class="name">success</span><span class="value">#16a34a</span>
    </div>
    <div class="swatch dark-text" style="background: var(--color-warning-light);">
      <span class="name">warning-light</span><span class="value">#fef3c7</span>
    </div>
    <div class="swatch light-text" style="background: var(--color-warning);">
      <span class="name">warning</span><span class="value">#d97706</span>
    </div>
    <div class="swatch dark-text" style="background: var(--color-error-light);">
      <span class="name">error-light</span><span class="value">#fee2e2</span>
    </div>
    <div class="swatch light-text" style="background: var(--color-error);">
      <span class="name">error</span><span class="value">#dc2626</span>
    </div>
    <div class="swatch dark-text" style="background: var(--color-info-light);">
      <span class="name">info-light</span><span class="value">#dbeafe</span>
    </div>
    <div class="swatch light-text" style="background: var(--color-info);">
      <span class="name">info</span><span class="value">#2563eb</span>
    </div>
  </div>
</body>
</html>`,
      hint: "Define your primary color at the 500 level first, then create lighter shades (lower numbers) and darker shades (higher numbers). HSL makes this easier: keep hue constant, increase lightness for light shades and decrease it for dark shades.",
      references: [
        {
          title: "MDN: Using CSS custom properties",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
        },
        {
          title: "MDN: CSS color values",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value",
        },
      ],
      validation: (code: string) => {
        const hasColorVars =
          /--color|--primary/.test(code);
        const hasMultipleColors =
          (code.match(/--primary-\d{2,3}|--neutral-\d{2,3}/g) || []).length >= 5;
        const hasSemanticColors =
          /--color-success|success/.test(code) &&
          /--color-error|error/.test(code) &&
          /--color-warning|warning/.test(code);

        if (!hasColorVars) {
          return {
            passed: false,
            message:
              "Define CSS custom properties for your colors (e.g. --primary-500, --color-success).",
          };
        }
        if (!hasMultipleColors) {
          return {
            passed: false,
            message:
              "Your primary or neutral scale needs more shades. Aim for at least 5 steps (e.g. 50, 100, 200, ...).",
          };
        }
        if (!hasSemanticColors) {
          return {
            passed: false,
            message:
              "Add semantic colors for success, warning, and error states.",
          };
        }
        return {
          passed: true,
          message:
            "Excellent color system! You have a full primary scale, neutrals, and semantic colors.",
        };
      },
    },

    // ── 4. Flexbox Dashboard Layout ─────────────────────────────────────
    {
      slug: "flexbox-layout",
      title: "Flexbox Dashboard Layout",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "Use <strong>CSS Flexbox</strong> to build a classic dashboard layout. The page should have a fixed-width sidebar on the left, and a main content area on the right containing a header, a row of stat cards, and a footer.",
        "The three stat cards in the main area should be evenly distributed using flexbox. The entire layout should fill the viewport height, with the sidebar stretching from top to bottom.",
        "Focus on the <em>layout</em>, not the visual polish. Get the structural flexbox properties right: <code>display: flex</code>, <code>flex-direction</code>, <code>flex: 1</code>, <code>gap</code>, and so on.",
      ],
      requirements: [
        "Create a full-height layout with a sidebar and main content area using display: flex",
        "The sidebar should have a fixed width (e.g. 240px) and span the full height",
        "Main content area should grow to fill remaining space (flex: 1)",
        "Include a header bar at the top of the main content",
        "Display 3 stat cards in an evenly-spaced flex row",
        "Include a footer at the bottom of the main content",
        "Use gap for spacing between flex children",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Flexbox Dashboard</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      color: #1a1a2e;
      background: #f1f3f5;
      /* TODO: Make body a full-height flex container */
      height: 100vh;
    }

    /* TODO: Style the layout wrapper as a flex row */
    .layout {
      height: 100%;
    }

    /* TODO: Style the sidebar */
    .sidebar {
      background: #1a1a2e;
      color: #fff;
      padding: 1.5rem;
    }

    .sidebar h2 {
      font-size: 1.125rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }

    .sidebar nav a {
      display: block;
      color: #a0aec0;
      text-decoration: none;
      padding: 0.5rem 0;
      font-size: 0.9rem;
    }

    /* TODO: Style the main content area */
    .main {
      padding: 1.5rem;
    }

    .main-header {
      background: #fff;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-weight: 600;
      font-size: 1.125rem;
    }

    /* TODO: Style the cards container as a flex row */
    .cards {
      margin-bottom: 1.5rem;
    }

    .card {
      background: #fff;
      border-radius: 8px;
      padding: 1.5rem;
    }

    .card h3 {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #6c757d;
      margin-bottom: 0.5rem;
    }

    .card .value {
      font-size: 1.75rem;
      font-weight: 700;
    }

    .main-footer {
      background: #fff;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-size: 0.85rem;
      color: #6c757d;
    }
  </style>
</head>
<body>
  <div class="layout">
    <aside class="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <a href="#">Overview</a>
        <a href="#">Analytics</a>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
      </nav>
    </aside>

    <main class="main">
      <div class="main-header">Welcome back, Designer</div>

      <div class="cards">
        <div class="card">
          <h3>Total Users</h3>
          <div class="value">12,847</div>
        </div>
        <div class="card">
          <h3>Revenue</h3>
          <div class="value">$48,290</div>
        </div>
        <div class="card">
          <h3>Conversion</h3>
          <div class="value">3.24%</div>
        </div>
      </div>

      <div class="main-footer">&copy; 2025 Dashboard Inc.</div>
    </main>
  </div>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Flexbox Dashboard</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      color: #1a1a2e;
      background: #f1f3f5;
      height: 100vh;
    }

    .layout {
      display: flex;
      height: 100%;
    }

    .sidebar {
      width: 240px;
      flex-shrink: 0;
      background: #1a1a2e;
      color: #fff;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
    }

    .sidebar h2 {
      font-size: 1.125rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }

    .sidebar nav {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .sidebar nav a {
      display: block;
      color: #a0aec0;
      text-decoration: none;
      padding: 0.5rem 0.75rem;
      font-size: 0.9rem;
      border-radius: 6px;
      transition: background 0.15s ease, color 0.15s ease;
    }

    .sidebar nav a:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
    }

    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      gap: 1.5rem;
      overflow-y: auto;
    }

    .main-header {
      background: #fff;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1.125rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    }

    .cards {
      display: flex;
      gap: 1.5rem;
    }

    .card {
      flex: 1;
      background: #fff;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    }

    .card h3 {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #6c757d;
      margin-bottom: 0.5rem;
    }

    .card .value {
      font-size: 1.75rem;
      font-weight: 700;
    }

    .main-footer {
      background: #fff;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-size: 0.85rem;
      color: #6c757d;
      margin-top: auto;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    }
  </style>
</head>
<body>
  <div class="layout">
    <aside class="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <a href="#">Overview</a>
        <a href="#">Analytics</a>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
      </nav>
    </aside>

    <main class="main">
      <div class="main-header">Welcome back, Designer</div>

      <div class="cards">
        <div class="card">
          <h3>Total Users</h3>
          <div class="value">12,847</div>
        </div>
        <div class="card">
          <h3>Revenue</h3>
          <div class="value">$48,290</div>
        </div>
        <div class="card">
          <h3>Conversion</h3>
          <div class="value">3.24%</div>
        </div>
      </div>

      <div class="main-footer">&copy; 2025 Dashboard Inc.</div>
    </main>
  </div>
</body>
</html>`,
      hint: "The outer .layout needs display: flex (row direction) so the sidebar and main sit side-by-side. The .main area needs display: flex with flex-direction: column so the header, cards, and footer stack vertically. Give .main flex: 1 so it fills remaining width. The .cards container is another flex row with gap.",
      references: [
        {
          title: "MDN: CSS Flexible Box Layout",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
        },
        {
          title: "MDN: flex property",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/flex",
        },
        {
          title: "CSS-Tricks: A Complete Guide to Flexbox",
          url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { test: /display:\s*flex/.test(code), label: "display: flex" },
          { test: /flex-direction/.test(code), label: "flex-direction" },
          { test: /gap/.test(code), label: "gap spacing" },
        ];
        const failing = checks.filter((c) => !c.test);
        if (failing.length > 0) {
          return {
            passed: false,
            message: `Missing key flexbox properties: ${failing.map((f) => f.label).join(", ")}.`,
          };
        }
        if (!/flex:\s*1/.test(code) && !/flex-grow/.test(code)) {
          return {
            passed: false,
            message:
              "The main content area should use flex: 1 (or flex-grow) to fill the remaining space.",
          };
        }
        return {
          passed: true,
          message:
            "Solid flexbox layout! Sidebar, header, cards, and footer are all correctly positioned.",
        };
      },
    },

    // ── 5. CSS Grid Image Gallery ───────────────────────────────────────
    {
      slug: "css-grid-gallery",
      title: "CSS Grid Image Gallery",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "Build a visually interesting <strong>image gallery</strong> using CSS Grid. Instead of a boring uniform grid, some items should span multiple columns or rows to create a magazine-style masonry effect.",
        "Use <code>grid-template-columns</code> to define a repeating column pattern, then use <code>grid-column</code> and <code>grid-row</code> on individual items to make certain images span 2 columns or 2 rows.",
        "Use colored <code>&lt;div&gt;</code> elements as image placeholders. Each should have a label (e.g. &ldquo;Photo 1&rdquo;). Include at least 8 items with at least 2 spanning items.",
      ],
      requirements: [
        "Use display: grid on the gallery container",
        "Define columns with grid-template-columns (at least 3 columns)",
        "Use grid-auto-rows or grid-template-rows to control row sizing",
        "At least 2 items should span multiple columns using grid-column: span 2",
        "At least 1 item should span multiple rows using grid-row: span 2",
        "Include at least 8 gallery items",
        "Use gap for gutters between items",
        "Each item should have a visible background color and label",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CSS Grid Gallery</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #1a1a2e;
      color: #fff;
      padding: 2rem;
    }

    h1 {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    /* TODO: Set up the grid container */
    .gallery {
      /* display: ???; */
      /* grid-template-columns: ???; */
      /* grid-auto-rows: ???; */
      /* gap: ???; */
    }

    .gallery-item {
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 0.9rem;
      min-height: 150px;
    }

    /* TODO: Add classes for items that span multiple columns or rows */
    /* .wide { grid-column: span 2; } */
    /* .tall { grid-row: span 2; } */
  </style>
</head>
<body>
  <h1>Gallery</h1>

  <div class="gallery">
    <!-- TODO: Add at least 8 gallery items -->
    <!-- Use different background colors and add .wide or .tall classes to some -->
    <div class="gallery-item" style="background: #4361ee;">Photo 1</div>
    <div class="gallery-item" style="background: #3a0ca3;">Photo 2</div>
    <div class="gallery-item" style="background: #7209b7;">Photo 3</div>
    <!-- Add more items... -->
  </div>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CSS Grid Gallery</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #1a1a2e;
      color: #fff;
      padding: 2rem;
    }

    h1 {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 160px;
      gap: 0.75rem;
    }

    .gallery-item {
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 0.9rem;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      cursor: pointer;
    }

    .gallery-item:hover {
      transform: scale(1.02);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      z-index: 1;
    }

    .wide { grid-column: span 2; }
    .tall { grid-row: span 2; }
    .wide.tall { grid-column: span 2; grid-row: span 2; }
  </style>
</head>
<body>
  <h1>Gallery</h1>

  <div class="gallery">
    <div class="gallery-item wide" style="background: linear-gradient(135deg, #4361ee, #3a0ca3);">Photo 1</div>
    <div class="gallery-item" style="background: #7209b7;">Photo 2</div>
    <div class="gallery-item tall" style="background: linear-gradient(180deg, #f72585, #b5179e);">Photo 3</div>
    <div class="gallery-item" style="background: #4cc9f0;">Photo 4</div>
    <div class="gallery-item" style="background: #4895ef;">Photo 5</div>
    <div class="gallery-item wide" style="background: linear-gradient(135deg, #560bad, #480ca8);">Photo 6</div>
    <div class="gallery-item" style="background: #3f37c9;">Photo 7</div>
    <div class="gallery-item" style="background: #4361ee;">Photo 8</div>
    <div class="gallery-item" style="background: #4895ef;">Photo 9</div>
    <div class="gallery-item wide tall" style="background: linear-gradient(135deg, #f72585, #4361ee);">Photo 10</div>
    <div class="gallery-item" style="background: #7209b7;">Photo 11</div>
    <div class="gallery-item" style="background: #3a0ca3;">Photo 12</div>
  </div>
</body>
</html>`,
      hint: "Set up the container with display: grid, then use grid-template-columns: repeat(4, 1fr) for four equal columns. Use grid-auto-rows to give each row a fixed height. Then add a .wide class with grid-column: span 2 and a .tall class with grid-row: span 2 to feature items.",
      references: [
        {
          title: "MDN: CSS Grid Layout",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
        },
        {
          title: "MDN: grid-template-columns",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns",
        },
        {
          title: "MDN: grid-column",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column",
        },
        {
          title: "CSS-Tricks: A Complete Guide to CSS Grid",
          url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { test: /display:\s*grid/.test(code), label: "display: grid" },
          {
            test: /grid-template-columns/.test(code),
            label: "grid-template-columns",
          },
          { test: /grid-column/.test(code), label: "grid-column (spanning items)" },
          { test: /grid-row/.test(code), label: "grid-row (spanning items)" },
        ];
        const failing = checks.filter((c) => !c.test);
        if (failing.length > 0) {
          return {
            passed: false,
            message: `Missing CSS Grid properties: ${failing.map((f) => f.label).join(", ")}.`,
          };
        }
        const itemCount = (code.match(/gallery-item/g) || []).length;
        if (itemCount < 16) {
          // each item appears at least twice (class + element), so 8 items = ~16 matches
          return {
            passed: false,
            message: `You need at least 8 gallery items. Found roughly ${Math.floor(itemCount / 2)}.`,
          };
        }
        return {
          passed: true,
          message:
            "Great CSS Grid gallery! Multiple spanning items create a dynamic, magazine-style layout.",
        };
      },
    },

    // ── 6. Responsive Card Component ────────────────────────────────────
    {
      slug: "responsive-card",
      title: "Responsive Card Component",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "Build a polished, production-quality <strong>product card</strong> component. This is the kind of component you would ship in a real design system &mdash; every detail matters.",
        "The card should include an image placeholder, a product title, a short description, a price, and a call-to-action button. Focus on the micro-interactions: smooth <code>:hover</code> states on the card and button, proper spacing rhythm, and subtle shadows.",
        "Use <code>border-radius</code>, <code>box-shadow</code>, and <code>transition</code> to make the card feel tactile and interactive. The goal is a standalone component that looks great centered on the page.",
      ],
      requirements: [
        "Include an image placeholder area (colored div or img tag)",
        "Display a product title, description text, and a price",
        "Include a CTA button styled with background, padding, and border-radius",
        "Add a box-shadow to the card that deepens on hover",
        "Use border-radius on the card and button",
        "Add smooth CSS transitions for hover effects (at least on the card and button)",
        "The button should have its own distinct :hover state",
        "Maintain consistent spacing using padding and margin",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Product Card</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #f1f3f5;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem;
    }

    .card {
      background: #fff;
      width: 320px;
      /* TODO: Add border-radius */
      /* TODO: Add box-shadow */
      /* TODO: Add transition for hover effect */
      overflow: hidden;
    }

    /* TODO: Add .card:hover styles (e.g. deeper shadow, slight lift) */

    .card-image {
      width: 100%;
      height: 200px;
      background: #dee2e6;
      /* This is the image placeholder */
    }

    .card-body {
      padding: 1.25rem;
    }

    .card-title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .card-description {
      font-size: 0.875rem;
      color: #6c757d;
      margin-bottom: 1rem;
    }

    .card-price {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .card-button {
      display: inline-block;
      padding: 0.625rem 1.25rem;
      background: #4361ee;
      color: #fff;
      border: none;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 600;
      /* TODO: Add border-radius */
      /* TODO: Add transition */
      width: 100%;
      text-align: center;
    }

    /* TODO: Add .card-button:hover styles */
  </style>
</head>
<body>
  <div class="card">
    <div class="card-image"></div>
    <div class="card-body">
      <h2 class="card-title">Wireless Headphones</h2>
      <p class="card-description">Premium noise-cancelling headphones with 30-hour battery life and studio-quality sound.</p>
      <div class="card-price">$249.00</div>
      <button class="card-button">Add to Cart</button>
    </div>
  </div>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Product Card</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #f1f3f5;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem;
    }

    .card {
      background: #fff;
      width: 320px;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04);
      overflow: hidden;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 12px 32px rgba(0, 0, 0, 0.08);
    }

    .card-image {
      width: 100%;
      height: 200px;
      background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 50%, #ced4da 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #adb5bd;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.05em;
    }

    .card-body {
      padding: 1.25rem;
    }

    .card-category {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #4361ee;
      font-weight: 600;
      margin-bottom: 0.375rem;
    }

    .card-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: #1a1a2e;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }

    .card-description {
      font-size: 0.875rem;
      color: #6c757d;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .card-price {
      font-size: 1.25rem;
      font-weight: 800;
      color: #1a1a2e;
    }

    .card-price .original {
      font-size: 0.8rem;
      color: #adb5bd;
      text-decoration: line-through;
      font-weight: 500;
      margin-left: 0.375rem;
    }

    .card-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.625rem 1.5rem;
      background: #4361ee;
      color: #fff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 600;
      transition: background 0.2s ease, transform 0.15s ease;
      flex-shrink: 0;
    }

    .card-button:hover {
      background: #3a56d4;
      transform: scale(1.03);
    }

    .card-button:active {
      transform: scale(0.98);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-image">320 &times; 200</div>
    <div class="card-body">
      <div class="card-category">Audio</div>
      <h2 class="card-title">Wireless Headphones</h2>
      <p class="card-description">Premium noise-cancelling headphones with 30-hour battery life and studio-quality sound.</p>
      <div class="card-footer">
        <div class="card-price">$249 <span class="original">$329</span></div>
        <button class="card-button">Add to Cart</button>
      </div>
    </div>
  </div>
</body>
</html>`,
      hint: "Add border-radius: 12px and a subtle box-shadow to .card. For the hover effect, use transform: translateY(-4px) combined with a deeper box-shadow, and wrap both changes in a transition. The button should transition its background-color on hover.",
      references: [
        {
          title: "MDN: box-shadow",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow",
        },
        {
          title: "MDN: transition",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition",
        },
        {
          title: "MDN: border-radius",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius",
        },
        {
          title: "MDN: :hover pseudo-class",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:hover",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { test: /border-radius/.test(code), label: "border-radius" },
          { test: /box-shadow/.test(code), label: "box-shadow" },
          { test: /transition/.test(code), label: "transition" },
          { test: /:hover/.test(code), label: ":hover state" },
        ];
        const failing = checks.filter((c) => !c.test);
        if (failing.length > 0) {
          return {
            passed: false,
            message: `Missing: ${failing.map((f) => f.label).join(", ")}. These are essential for a polished card.`,
          };
        }
        if (
          !/\.card:hover|\.card\[/.test(code) &&
          !/\.card-button:hover/.test(code)
        ) {
          return {
            passed: false,
            message:
              "Add :hover states to both the card and the button for interactivity.",
          };
        }
        return {
          passed: true,
          message:
            "Beautiful card component! Smooth hover transitions, proper shadows, and clean spacing.",
        };
      },
    },
  ],
};
