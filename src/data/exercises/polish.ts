import { Phase } from "./types";

export const polish: Phase = {
  slug: "polish",
  title: "Polish & Craft",
  number: "05",
  description:
    "Obsess over the details. The difference between good and great is in the final 10%.",
  exercises: [
    // -------------------------------------------------------
    // 1. Micro-Interaction: Submit Button
    // -------------------------------------------------------
    {
      slug: "micro-interaction-button",
      title: "Micro-Interaction: Submit Button",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Create a submit button that goes through a full <strong>micro-interaction lifecycle</strong>: default &rarr; hover &rarr; click &rarr; loading &rarr; success &rarr; reset.</p>",
        "<p>In the <em>default</em> state the button says &ldquo;Submit&rdquo;. On <strong>hover</strong> it should lift slightly with a subtle shadow increase. On <strong>click / active</strong> it presses down. After clicking, the button enters a <em>loading</em> state where a CSS spinner replaces the text. After ~2&nbsp;seconds the spinner is replaced by a <strong>checkmark (&check;)</strong> and the button turns green (success). Finally it resets back to default after another second.</p>",
        "<p>Use CSS <code>transition</code> for the hover/active states and <code>@keyframes</code> for the spinner animation. JavaScript handles cycling through the states via class toggling.</p>",
      ],
      requirements: [
        "Button displays 'Submit' in its default state",
        "Hover lifts the button with transform: translateY and increases box-shadow",
        "Active/click presses the button down",
        "Loading state shows a CSS spinner and hides the text",
        "Success state shows a checkmark and green background",
        "Button resets to default after the success state",
        "Smooth transitions between every state change",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Micro-Interaction Button</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0a0a0a;
    }

    .btn {
      position: relative;
      padding: 0.875rem 2.5rem;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      border-radius: 10px;
      background: #6366f1;
      color: #fff;
      cursor: pointer;
      /* TODO: Add transitions for transform, box-shadow, background */
    }

    /* TODO: Hover state — lift up with translateY and larger shadow */
    /* TODO: Active state — press down */

    /* TODO: .btn.loading styles — hide text, show spinner */
    /* TODO: .btn.loading::after — the spinner element */
    /* TODO: @keyframes spin */

    /* TODO: .btn.success styles — green background, show checkmark */
  </style>
</head>
<body>
  <button class="btn" id="submitBtn">
    <span class="btn-text">Submit</span>
  </button>

  <script>
    const btn = document.getElementById('submitBtn');

    btn.addEventListener('click', () => {
      // TODO: Add loading class, then after ~2s switch to success,
      // then after ~1s reset to default
    });
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Micro-Interaction Button</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0a0a0a;
    }

    .btn {
      position: relative;
      padding: 0.875rem 2.5rem;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      border-radius: 10px;
      background: #6366f1;
      color: #fff;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
      min-width: 160px;
      min-height: 48px;
    }

    .btn:hover:not(.loading):not(.success) {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
    }

    .btn:active:not(.loading):not(.success) {
      transform: translateY(1px);
      box-shadow: 0 2px 6px rgba(99, 102, 241, 0.2);
    }

    .btn.loading {
      pointer-events: none;
      background: #4f46e5;
    }

    .btn.loading .btn-text {
      visibility: hidden;
    }

    .btn.loading::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin: -10px 0 0 -10px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .btn.success {
      background: #22c55e;
      pointer-events: none;
    }

    .btn.success .btn-text {
      visibility: hidden;
    }

    .btn.success::after {
      content: "\\2713";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.4rem;
      color: #fff;
    }
  </style>
</head>
<body>
  <button class="btn" id="submitBtn">
    <span class="btn-text">Submit</span>
  </button>

  <script>
    const btn = document.getElementById('submitBtn');

    btn.addEventListener('click', () => {
      if (btn.classList.contains('loading') || btn.classList.contains('success')) return;

      btn.classList.add('loading');

      setTimeout(() => {
        btn.classList.remove('loading');
        btn.classList.add('success');

        setTimeout(() => {
          btn.classList.remove('success');
        }, 1200);
      }, 2000);
    });
  </script>
</body>
</html>`,
      hint: "Use separate CSS classes for each state (.loading, .success) and toggle them with setTimeout in JavaScript. A ::after pseudo-element works great for both the spinner and the checkmark.",
      references: [
        {
          title: "CSS Transitions - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions",
        },
        {
          title: "CSS Animations - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations",
        },
        {
          title: "Micro-interactions: why, when and how to use them",
          url: "https://uxdesign.cc/micro-interactions-why-when-and-how-to-use-them-to-boost-the-ux-17094b13b028",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /transition/i, label: "CSS transition property" },
          { pattern: /transform/i, label: "CSS transform" },
          { pattern: /@keyframes/i, label: "@keyframes animation" },
          { pattern: /loading/i, label: "loading state" },
          { pattern: /success/i, label: "success state" },
        ];
        const failed = checks.filter((c) => !c.pattern.test(code));
        if (failed.length === 0) {
          return { passed: true, message: "All micro-interaction states implemented!" };
        }
        return {
          passed: false,
          message: `Missing: ${failed.map((f) => f.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 2. Polished Tooltip Component
    // -------------------------------------------------------
    {
      slug: "smooth-tooltip",
      title: "Polished Tooltip Component",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Build a <strong>tooltip component</strong> that appears on hover with a polished enter/exit animation.</p>",
        "<p>The tooltip should: fade in <em>and</em> scale up from the direction it appears (e.g. a top tooltip scales from slightly below), display an <strong>arrow/caret</strong> pointing to the trigger element using a CSS pseudo-element, and have smooth enter &amp; exit timing (faster enter, slightly slower exit).</p>",
        "<p>Support four positions: <code>top</code>, <code>bottom</code>, <code>left</code>, and <code>right</code>. Use <code>data-tooltip</code> for the text and <code>data-position</code> for placement. The tooltip must not overflow the viewport.</p>",
      ],
      requirements: [
        "Tooltip text comes from a data-tooltip attribute",
        "Supports top, bottom, left, and right positions via data-position",
        "Arrow/caret points toward the trigger element",
        "Fade + scale animation on enter",
        "Smooth exit animation with slightly different timing",
        "Tooltip is built with ::before or ::after pseudo-elements, or positioned divs",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tooltip Component</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      background: #0a0a0a;
      color: #fafafa;
    }

    .tooltip-trigger {
      position: relative;
      padding: 0.75rem 1.5rem;
      background: #1e1e2e;
      border: 1px solid #333;
      border-radius: 8px;
      cursor: default;
    }

    /* TODO: Create .tooltip-trigger::after for tooltip text */
    /* TODO: Create .tooltip-trigger::before for the arrow */
    /* TODO: Style opacity, transform, and transition for enter/exit */
    /* TODO: On hover, show tooltip with animation */
    /* TODO: Position variants — [data-position="top"], bottom, left, right */
  </style>
</head>
<body>
  <span class="tooltip-trigger" data-tooltip="Tooltip on top!" data-position="top">
    Top
  </span>
  <span class="tooltip-trigger" data-tooltip="Tooltip on bottom!" data-position="bottom">
    Bottom
  </span>
  <span class="tooltip-trigger" data-tooltip="Tooltip on left!" data-position="left">
    Left
  </span>
  <span class="tooltip-trigger" data-tooltip="Tooltip on right!" data-position="right">
    Right
  </span>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tooltip Component</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      background: #0a0a0a;
      color: #fafafa;
    }

    .tooltip-trigger {
      position: relative;
      padding: 0.75rem 1.5rem;
      background: #1e1e2e;
      border: 1px solid #333;
      border-radius: 8px;
      cursor: default;
    }

    /* Tooltip body */
    .tooltip-trigger::after {
      content: attr(data-tooltip);
      position: absolute;
      white-space: nowrap;
      padding: 0.5rem 0.85rem;
      background: #fafafa;
      color: #0a0a0a;
      font-size: 0.8rem;
      font-weight: 500;
      border-radius: 6px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s ease, transform 0.15s ease;
      z-index: 10;
    }

    /* Arrow */
    .tooltip-trigger::before {
      content: "";
      position: absolute;
      border: 6px solid transparent;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s ease, transform 0.15s ease;
      z-index: 10;
    }

    /* Show on hover */
    .tooltip-trigger:hover::after,
    .tooltip-trigger:hover::before {
      opacity: 1;
      transform: translate(-50%, 0) scale(1);
    }

    /* — Top (default) — */
    .tooltip-trigger[data-position="top"]::after {
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translate(-50%, 4px) scale(0.95);
    }
    .tooltip-trigger[data-position="top"]::before {
      bottom: calc(100% - 2px);
      left: 50%;
      transform: translate(-50%, 4px);
      border-top-color: #fafafa;
    }
    .tooltip-trigger[data-position="top"]:hover::after {
      transform: translate(-50%, 0) scale(1);
    }
    .tooltip-trigger[data-position="top"]:hover::before {
      transform: translate(-50%, 0);
    }

    /* — Bottom — */
    .tooltip-trigger[data-position="bottom"]::after {
      top: calc(100% + 10px);
      left: 50%;
      transform: translate(-50%, -4px) scale(0.95);
    }
    .tooltip-trigger[data-position="bottom"]::before {
      top: calc(100% - 2px);
      left: 50%;
      transform: translate(-50%, -4px);
      border-bottom-color: #fafafa;
    }
    .tooltip-trigger[data-position="bottom"]:hover::after {
      transform: translate(-50%, 0) scale(1);
    }
    .tooltip-trigger[data-position="bottom"]:hover::before {
      transform: translate(-50%, 0);
    }

    /* — Left — */
    .tooltip-trigger[data-position="left"]::after {
      right: calc(100% + 10px);
      top: 50%;
      transform: translate(4px, -50%) scale(0.95);
    }
    .tooltip-trigger[data-position="left"]::before {
      right: calc(100% - 2px);
      top: 50%;
      transform: translate(4px, -50%);
      border-left-color: #fafafa;
    }
    .tooltip-trigger[data-position="left"]:hover::after {
      transform: translate(0, -50%) scale(1);
    }
    .tooltip-trigger[data-position="left"]:hover::before {
      transform: translate(0, -50%);
    }

    /* — Right — */
    .tooltip-trigger[data-position="right"]::after {
      left: calc(100% + 10px);
      top: 50%;
      transform: translate(-4px, -50%) scale(0.95);
    }
    .tooltip-trigger[data-position="right"]::before {
      left: calc(100% - 2px);
      top: 50%;
      transform: translate(-4px, -50%);
      border-right-color: #fafafa;
    }
    .tooltip-trigger[data-position="right"]:hover::after {
      transform: translate(0, -50%) scale(1);
    }
    .tooltip-trigger[data-position="right"]:hover::before {
      transform: translate(0, -50%);
    }

    /* Exit transition (slightly slower) */
    .tooltip-trigger::after,
    .tooltip-trigger::before {
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    .tooltip-trigger:hover::after,
    .tooltip-trigger:hover::before {
      transition: opacity 0.12s ease, transform 0.12s ease;
    }
  </style>
</head>
<body>
  <span class="tooltip-trigger" data-tooltip="Tooltip on top!" data-position="top">
    Top
  </span>
  <span class="tooltip-trigger" data-tooltip="Tooltip on bottom!" data-position="bottom">
    Bottom
  </span>
  <span class="tooltip-trigger" data-tooltip="Tooltip on left!" data-position="left">
    Left
  </span>
  <span class="tooltip-trigger" data-tooltip="Tooltip on right!" data-position="right">
    Right
  </span>
</body>
</html>`,
      hint: "Use ::after for the tooltip text (with content: attr(data-tooltip)) and ::before for the arrow. Control the animation origin with transform: translate + scale, and use attribute selectors like [data-position='top'] for each direction.",
      references: [
        {
          title: "::before / ::after pseudo-elements - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::after",
        },
        {
          title: "attr() CSS function - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/attr",
        },
        {
          title: "CSS transform - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /tooltip/i, label: "tooltip class or attribute" },
          { pattern: /::before|::after/i, label: "::before or ::after pseudo-element" },
          { pattern: /transform/i, label: "CSS transform" },
          { pattern: /opacity/i, label: "opacity property" },
          { pattern: /transition/i, label: "CSS transition" },
        ];
        const failed = checks.filter((c) => !c.pattern.test(code));
        if (failed.length === 0) {
          return { passed: true, message: "Polished tooltip complete with all positions!" };
        }
        return {
          passed: false,
          message: `Missing: ${failed.map((f) => f.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 3. Skeleton Loading States
    // -------------------------------------------------------
    {
      slug: "skeleton-loading",
      title: "Skeleton Loading States",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "<p>Create <strong>skeleton loading placeholders</strong> for a social media post card. The skeleton should mimic the layout of the real content.</p>",
        "<p>Include: a circular <em>avatar</em> placeholder, a short <em>name</em> bar, several <em>text lines</em> of varying widths, a large rectangular <em>image</em> placeholder, and a row of <em>action button</em> placeholders.</p>",
        "<p>Add a <strong>shimmer / wave animation</strong> that sweeps a gradient highlight across all skeleton elements continuously. After <strong>3&nbsp;seconds</strong>, fade out the skeleton and reveal the real content with a smooth transition.</p>",
      ],
      requirements: [
        "Skeleton layout includes avatar, name, text lines, image, and action buttons",
        "Text line placeholders have different widths for realism",
        "A shimmer animation sweeps across all skeleton elements",
        "The shimmer uses a linear-gradient moving via @keyframes",
        "After 3 seconds, skeleton fades out and real content fades in",
        "Transition between skeleton and real content is smooth",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Skeleton Loading</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0a0a0a;
      color: #fafafa;
    }

    .card {
      width: 420px;
      background: #1a1a2e;
      border-radius: 12px;
      padding: 1.5rem;
      overflow: hidden;
    }

    .skeleton {
      background: #2a2a3e;
      border-radius: 4px;
      /* TODO: Add shimmer animation */
    }

    /* TODO: @keyframes shimmer — sweep a gradient across */

    /* TODO: Skeleton shapes — .skeleton-avatar, .skeleton-line, .skeleton-image, etc. */

    .real-content {
      /* TODO: Hidden initially, fades in */
    }
  </style>
</head>
<body>
  <div class="card">
    <!-- TODO: Skeleton placeholder structure -->

    <!-- TODO: Real content (hidden initially) -->
  </div>

  <script>
    // TODO: After 3 seconds, hide skeleton and show real content
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Skeleton Loading</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0a0a0a;
      color: #fafafa;
    }

    .card {
      width: 420px;
      background: #1a1a2e;
      border-radius: 12px;
      padding: 1.5rem;
      overflow: hidden;
    }

    /* Skeleton base */
    .skeleton {
      background: #2a2a3e;
      border-radius: 4px;
      position: relative;
      overflow: hidden;
    }

    .skeleton::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.05) 50%,
        transparent 100%
      );
      animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
      0%   { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    /* Shapes */
    .skeleton-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
    .skeleton-avatar { width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0; }
    .skeleton-name   { height: 14px; width: 120px; border-radius: 7px; }

    .skeleton-line     { height: 12px; margin-bottom: 0.6rem; border-radius: 6px; }
    .skeleton-line--full  { width: 100%; }
    .skeleton-line--long  { width: 85%; }
    .skeleton-line--short { width: 55%; }

    .skeleton-image {
      width: 100%;
      height: 200px;
      border-radius: 8px;
      margin: 1rem 0;
    }

    .skeleton-actions { display: flex; gap: 1rem; margin-top: 0.5rem; }
    .skeleton-btn     { height: 32px; width: 72px; border-radius: 6px; }

    /* Skeleton wrapper */
    .skeleton-wrapper {
      transition: opacity 0.4s ease;
    }
    .skeleton-wrapper.hidden {
      opacity: 0;
      pointer-events: none;
      position: absolute;
    }

    /* Real content */
    .real-content {
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .real-content.visible {
      opacity: 1;
    }

    .real-content .header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
    .real-content .avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #6366f1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.1rem;
    }
    .real-content .name { font-weight: 600; font-size: 0.95rem; }
    .real-content p { font-size: 0.9rem; color: #ccc; line-height: 1.6; margin-bottom: 0.5rem; }
    .real-content .image-placeholder {
      width: 100%;
      height: 200px;
      background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
      border-radius: 8px;
      margin: 1rem 0;
    }
    .real-content .actions { display: flex; gap: 1rem; margin-top: 0.5rem; }
    .real-content .actions button {
      padding: 0.4rem 1rem;
      background: transparent;
      border: 1px solid #444;
      border-radius: 6px;
      color: #ccc;
      font-size: 0.85rem;
      cursor: pointer;
      transition: border-color 0.2s;
    }
    .real-content .actions button:hover { border-color: #6366f1; color: #fff; }
  </style>
</head>
<body>
  <div class="card">
    <!-- Skeleton -->
    <div class="skeleton-wrapper" id="skeleton">
      <div class="skeleton-header">
        <div class="skeleton skeleton-avatar"></div>
        <div class="skeleton skeleton-name"></div>
      </div>
      <div class="skeleton skeleton-line skeleton-line--full"></div>
      <div class="skeleton skeleton-line skeleton-line--long"></div>
      <div class="skeleton skeleton-line skeleton-line--short"></div>
      <div class="skeleton skeleton-image"></div>
      <div class="skeleton-actions">
        <div class="skeleton skeleton-btn"></div>
        <div class="skeleton skeleton-btn"></div>
        <div class="skeleton skeleton-btn"></div>
      </div>
    </div>

    <!-- Real content -->
    <div class="real-content" id="realContent">
      <div class="header">
        <div class="avatar">A</div>
        <div class="name">Alex Rivera</div>
      </div>
      <p>Just shipped a new feature that makes the whole experience feel more polished. It is the little details that matter most.</p>
      <div class="image-placeholder"></div>
      <div class="actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  </div>

  <script>
    setTimeout(() => {
      document.getElementById('skeleton').classList.add('hidden');
      document.getElementById('realContent').classList.add('visible');
    }, 3000);
  </script>
</body>
</html>`,
      hint: "Use a ::after pseudo-element on each skeleton piece with a linear-gradient that moves via translateX in a @keyframes animation. Use setTimeout to toggle classes that cross-fade between the skeleton and real content.",
      references: [
        {
          title: "Building skeleton screens with CSS - web.dev",
          url: "https://web.dev/articles/building-skeleton-screens",
        },
        {
          title: "CSS Gradients - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient",
        },
        {
          title: "@keyframes - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /@keyframes/i, label: "@keyframes animation" },
          { pattern: /skeleton/i, label: "skeleton class" },
          { pattern: /linear-gradient/i, label: "linear-gradient for shimmer" },
          { pattern: /shimmer|wave/i, label: "shimmer or wave animation name" },
          { pattern: /animation/i, label: "CSS animation property" },
        ];
        const failed = checks.filter((c) => !c.pattern.test(code));
        if (failed.length === 0) {
          return { passed: true, message: "Skeleton loading with shimmer animation complete!" };
        }
        return {
          passed: false,
          message: `Missing: ${failed.map((f) => f.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 4. Accessible Focus States
    // -------------------------------------------------------
    {
      slug: "focus-states",
      title: "Accessible Focus States",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "<p>Design <strong>beautiful, accessible focus states</strong> for a set of form elements: text input, select dropdown, checkbox, radio button, button, and link.</p>",
        "<p>Each element must have a clearly <em>visible</em> focus indicator that works with <strong>keyboard navigation</strong> (Tab / Shift+Tab). Use <code>:focus-visible</code> so the focus ring only appears for keyboard users, not mouse clicks.</p>",
        "<p>Replace the default browser outline with a custom style using <code>outline</code> and/or <code>box-shadow</code> that matches a cohesive design aesthetic. Ensure there is sufficient contrast for accessibility.</p>",
      ],
      requirements: [
        "Custom focus styles for: input, select, checkbox, radio, button, and link",
        "Uses :focus-visible (not :focus) for keyboard-only focus rings",
        "Focus indicator is clearly visible with sufficient contrast",
        "Uses outline and/or box-shadow for the focus ring",
        "All elements are reachable via Tab key",
        "Checkbox and radio have custom focus styling",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Accessible Focus States</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0a0a0a;
      color: #fafafa;
    }

    .form-demo {
      width: 400px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    label { font-size: 0.9rem; color: #aaa; margin-bottom: 0.25rem; display: block; }

    input[type="text"], select {
      width: 100%;
      padding: 0.75rem 1rem;
      background: #1a1a2e;
      border: 1px solid #333;
      border-radius: 8px;
      color: #fafafa;
      font-size: 1rem;
    }

    button {
      padding: 0.75rem 1.5rem;
      background: #6366f1;
      border: none;
      border-radius: 8px;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
    }

    a { color: #818cf8; font-size: 1rem; }

    /* TODO: Remove default outlines */
    /* TODO: Add :focus-visible styles for each element type */
    /* TODO: Custom checkbox and radio focus styles */
  </style>
</head>
<body>
  <div class="form-demo">
    <h2>Focus State Demo</h2>
    <p style="color:#888; font-size:0.85rem;">Press Tab to navigate through elements</p>

    <div>
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name" />
    </div>

    <div>
      <label for="role">Role</label>
      <select id="role">
        <option>Designer</option>
        <option>Developer</option>
        <option>Both</option>
      </select>
    </div>

    <div style="display:flex; gap:1rem; align-items:center;">
      <input type="checkbox" id="agree" />
      <label for="agree" style="margin:0;">I agree to the terms</label>
    </div>

    <div style="display:flex; gap:1.5rem;">
      <div style="display:flex; gap:0.5rem; align-items:center;">
        <input type="radio" name="plan" id="free" />
        <label for="free" style="margin:0;">Free</label>
      </div>
      <div style="display:flex; gap:0.5rem; align-items:center;">
        <input type="radio" name="plan" id="pro" />
        <label for="pro" style="margin:0;">Pro</label>
      </div>
    </div>

    <button type="button">Submit</button>

    <a href="#0">Learn more about accessibility</a>
  </div>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Accessible Focus States</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0a0a0a;
      color: #fafafa;
    }

    .form-demo {
      width: 400px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    label { font-size: 0.9rem; color: #aaa; margin-bottom: 0.25rem; display: block; }

    /* Text input */
    input[type="text"], select {
      width: 100%;
      padding: 0.75rem 1rem;
      background: #1a1a2e;
      border: 1px solid #333;
      border-radius: 8px;
      color: #fafafa;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    input[type="text"]:focus-visible,
    select:focus-visible {
      border-color: #818cf8;
      box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.3);
    }

    /* Checkbox */
    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: #6366f1;
      outline: none;
      border-radius: 4px;
      transition: box-shadow 0.2s ease;
    }

    input[type="checkbox"]:focus-visible {
      outline: 2px solid #818cf8;
      outline-offset: 2px;
      box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.25);
    }

    /* Radio */
    input[type="radio"] {
      width: 18px;
      height: 18px;
      accent-color: #6366f1;
      outline: none;
      transition: box-shadow 0.2s ease;
    }

    input[type="radio"]:focus-visible {
      outline: 2px solid #818cf8;
      outline-offset: 2px;
      box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.25);
    }

    /* Button */
    button {
      padding: 0.75rem 1.5rem;
      background: #6366f1;
      border: none;
      border-radius: 8px;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      outline: none;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    button:hover { background: #4f46e5; }

    button:focus-visible {
      box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.5);
      outline: 2px solid #818cf8;
      outline-offset: 2px;
    }

    /* Link */
    a {
      color: #818cf8;
      font-size: 1rem;
      outline: none;
      text-decoration: underline;
      text-underline-offset: 3px;
      border-radius: 2px;
      padding: 2px 4px;
      margin: -2px -4px;
      transition: box-shadow 0.2s ease, background 0.2s ease;
    }

    a:focus-visible {
      box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.35);
      outline: 2px solid #818cf8;
      outline-offset: 2px;
      background: rgba(129, 140, 248, 0.08);
    }
  </style>
</head>
<body>
  <div class="form-demo">
    <h2>Focus State Demo</h2>
    <p style="color:#888; font-size:0.85rem;">Press Tab to navigate through elements</p>

    <div>
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name" />
    </div>

    <div>
      <label for="role">Role</label>
      <select id="role">
        <option>Designer</option>
        <option>Developer</option>
        <option>Both</option>
      </select>
    </div>

    <div style="display:flex; gap:1rem; align-items:center;">
      <input type="checkbox" id="agree" />
      <label for="agree" style="margin:0;">I agree to the terms</label>
    </div>

    <div style="display:flex; gap:1.5rem;">
      <div style="display:flex; gap:0.5rem; align-items:center;">
        <input type="radio" name="plan" id="free" />
        <label for="free" style="margin:0;">Free</label>
      </div>
      <div style="display:flex; gap:0.5rem; align-items:center;">
        <input type="radio" name="plan" id="pro" />
        <label for="pro" style="margin:0;">Pro</label>
      </div>
    </div>

    <button type="button">Submit</button>

    <a href="#0">Learn more about accessibility</a>
  </div>
</body>
</html>`,
      hint: "Use :focus-visible instead of :focus so styles only appear for keyboard navigation. Combine outline with box-shadow for a layered focus ring effect. Make sure to set outline: none on the base styles and add your custom focus styles on :focus-visible.",
      references: [
        {
          title: ":focus-visible - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
        },
        {
          title: "Focus indicators - web.dev",
          url: "https://web.dev/articles/style-focus",
        },
        {
          title: "WCAG Focus Visible (2.4.7)",
          url: "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /:focus-visible/i, label: ":focus-visible pseudo-class" },
          { pattern: /outline/i, label: "outline property" },
          { pattern: /box-shadow/i, label: "box-shadow for focus ring" },
          { pattern: /input|tabindex/i, label: "input elements or tabindex" },
        ];
        const failed = checks.filter((c) => !c.pattern.test(code));
        if (failed.length === 0) {
          return { passed: true, message: "Accessible focus states implemented for all elements!" };
        }
        return {
          passed: false,
          message: `Missing: ${failed.map((f) => f.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 5. Page Transition Effect
    // -------------------------------------------------------
    {
      slug: "page-transitions",
      title: "Page Transition Effect",
      difficulty: "advanced",
      estimatedMinutes: 25,
      language: "html",
      instructions: [
        "<p>Build a <strong>simulated page transition</strong> that feels like a native app. Create a navigation bar with 3 links representing different &ldquo;pages&rdquo; (sections of content).</p>",
        "<p>When clicking a nav link: the <em>current content</em> fades and slides out, a <strong>progress bar</strong> at the top of the page fills from left to right during the transition, and the <em>new content</em> fades and slides in from the opposite direction.</p>",
        "<p>Use CSS <code>transition</code> and <code>transform</code> for the animations, and JavaScript <code>classList</code> toggling with <code>addEventListener</code> to orchestrate the sequence. The whole transition should take about 600ms and feel smooth and intentional.</p>",
      ],
      requirements: [
        "Navigation with 3 page links, one active at a time",
        "Clicking a link triggers a fade + slide out of current content",
        "New content fades + slides in after old content exits",
        "A progress bar at the top fills during the transition",
        "Active nav link is visually highlighted",
        "Transitions use CSS transform and opacity, triggered by classList changes",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Transitions</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
      overflow: hidden;
      height: 100vh;
    }

    /* TODO: Progress bar at top */

    nav {
      display: flex;
      gap: 0.25rem;
      padding: 1rem 2rem;
      background: #111;
      border-bottom: 1px solid #222;
    }

    nav a {
      padding: 0.5rem 1.25rem;
      color: #888;
      text-decoration: none;
      border-radius: 6px;
      font-size: 0.95rem;
      cursor: pointer;
      transition: color 0.2s;
    }

    /* TODO: Active nav link style */

    .page {
      padding: 3rem 2rem;
      /* TODO: transition and transform for slide/fade */
    }

    /* TODO: .page.active, .page.exit-left, .page.enter-right, etc. */
  </style>
</head>
<body>
  <!-- TODO: Progress bar element -->

  <nav>
    <a href="#" data-page="home" class="active">Home</a>
    <a href="#" data-page="about">About</a>
    <a href="#" data-page="work">Work</a>
  </nav>

  <div id="home" class="page active">
    <h1>Home</h1>
    <p style="margin-top:1rem; color:#aaa; max-width:50ch; line-height:1.7;">Welcome to the home page. Click a link above to see the page transition effect in action.</p>
  </div>

  <div id="about" class="page">
    <h1>About</h1>
    <p style="margin-top:1rem; color:#aaa; max-width:50ch; line-height:1.7;">This is the about page. Notice how the content slides and fades between pages.</p>
  </div>

  <div id="work" class="page">
    <h1>Work</h1>
    <p style="margin-top:1rem; color:#aaa; max-width:50ch; line-height:1.7;">This is the work page. The progress bar at the top fills during each transition.</p>
  </div>

  <script>
    const links = document.querySelectorAll('nav a');
    const pages = document.querySelectorAll('.page');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        // TODO: Implement page transition logic
      });
    });
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Transitions</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0a0a0a;
      color: #fafafa;
      overflow: hidden;
      height: 100vh;
    }

    /* Progress bar */
    .progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      width: 0%;
      background: #6366f1;
      z-index: 100;
      transition: width 0.5s ease;
    }
    .progress-bar.active {
      width: 100%;
    }

    nav {
      display: flex;
      gap: 0.25rem;
      padding: 1rem 2rem;
      background: #111;
      border-bottom: 1px solid #222;
    }

    nav a {
      padding: 0.5rem 1.25rem;
      color: #888;
      text-decoration: none;
      border-radius: 6px;
      font-size: 0.95rem;
      cursor: pointer;
      transition: color 0.2s, background 0.2s;
    }

    nav a:hover { color: #ccc; }

    nav a.active {
      color: #fff;
      background: rgba(99, 102, 241, 0.15);
    }

    .page {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 6rem 2rem 3rem;
      opacity: 0;
      transform: translateX(30px);
      transition: opacity 0.35s ease, transform 0.35s ease;
      pointer-events: none;
    }

    .page.active {
      opacity: 1;
      transform: translateX(0);
      pointer-events: auto;
    }

    .page.exit-left {
      opacity: 0;
      transform: translateX(-30px);
    }

    .page.exit-right {
      opacity: 0;
      transform: translateX(30px);
    }

    .page.enter-left {
      transform: translateX(-30px);
      opacity: 0;
    }

    .page.enter-right {
      transform: translateX(30px);
      opacity: 0;
    }
  </style>
</head>
<body>
  <div class="progress-bar" id="progressBar"></div>

  <nav>
    <a href="#" data-page="home" class="active">Home</a>
    <a href="#" data-page="about">About</a>
    <a href="#" data-page="work">Work</a>
  </nav>

  <div id="home" class="page active">
    <h1>Home</h1>
    <p style="margin-top:1rem; color:#aaa; max-width:50ch; line-height:1.7;">Welcome to the home page. Click a link above to see the page transition effect in action.</p>
  </div>

  <div id="about" class="page">
    <h1>About</h1>
    <p style="margin-top:1rem; color:#aaa; max-width:50ch; line-height:1.7;">This is the about page. Notice how the content slides and fades between pages.</p>
  </div>

  <div id="work" class="page">
    <h1>Work</h1>
    <p style="margin-top:1rem; color:#aaa; max-width:50ch; line-height:1.7;">This is the work page. The progress bar at the top fills during each transition.</p>
  </div>

  <script>
    const links = document.querySelectorAll('nav a');
    const pages = document.querySelectorAll('.page');
    const progressBar = document.getElementById('progressBar');
    const pageOrder = ['home', 'about', 'work'];
    let currentPage = 'home';
    let isTransitioning = false;

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.dataset.page;
        if (target === currentPage || isTransitioning) return;

        isTransitioning = true;

        const currentIdx = pageOrder.indexOf(currentPage);
        const targetIdx = pageOrder.indexOf(target);
        const goingRight = targetIdx > currentIdx;

        const currentEl = document.getElementById(currentPage);
        const targetEl = document.getElementById(target);

        // Start progress bar
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        requestAnimationFrame(() => {
          progressBar.style.transition = 'width 0.5s ease';
          progressBar.classList.add('active');
        });

        // Update nav
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Exit current page
        currentEl.classList.remove('active');
        currentEl.classList.add(goingRight ? 'exit-left' : 'exit-right');

        // Prepare incoming page at the opposite side
        targetEl.classList.remove('exit-left', 'exit-right', 'enter-left', 'enter-right');
        targetEl.style.transition = 'none';
        targetEl.classList.add(goingRight ? 'enter-right' : 'enter-left');

        // After a short delay, animate in
        setTimeout(() => {
          targetEl.style.transition = '';
          targetEl.classList.remove('enter-left', 'enter-right');
          targetEl.classList.add('active');
        }, 250);

        // Cleanup
        setTimeout(() => {
          currentEl.classList.remove('exit-left', 'exit-right');
          progressBar.classList.remove('active');
          progressBar.style.transition = 'none';
          progressBar.style.width = '0%';
          currentPage = target;
          isTransitioning = false;
        }, 600);
      });
    });
  </script>
</body>
</html>`,
      hint: "Orchestrate the transition in stages: (1) add an exit class to the current page, (2) after a short delay, add the active class to the new page from its entrance position. Use CSS transition on opacity and transform. The progress bar can be a fixed div whose width transitions from 0% to 100%.",
      references: [
        {
          title: "CSS Transitions - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions",
        },
        {
          title: "Element.classList - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList",
        },
        {
          title: "View Transitions API - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /transition/i, label: "CSS transition" },
          { pattern: /transform/i, label: "CSS transform" },
          { pattern: /opacity/i, label: "opacity property" },
          { pattern: /addEventListener/i, label: "addEventListener" },
          { pattern: /classList/i, label: "classList toggling" },
        ];
        const failed = checks.filter((c) => !c.pattern.test(code));
        if (failed.length === 0) {
          return { passed: true, message: "Page transitions with progress bar working!" };
        }
        return {
          passed: false,
          message: `Missing: ${failed.map((f) => f.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 6. The Details: Text & Spacing
    // -------------------------------------------------------
    {
      slug: "detail-polish",
      title: "The Details: Text & Spacing",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Take a rough, unstyled blog post and <strong>polish it to perfection</strong>. The difference between &ldquo;meh&rdquo; and &ldquo;wow&rdquo; is in the typographic details.</p>",
        "<p>Apply: proper <strong>font pairing</strong> (system font stack), optimal <code>line-height</code> (1.6&ndash;1.8 for body), a comfortable reading <strong>measure</strong> using <code>ch</code> units (55&ndash;75ch), consistent paragraph spacing, beautifully styled <code>&lt;blockquote&gt;</code> elements, inline <code>&lt;code&gt;</code> styling, clean list styling, and responsive images with captions.</p>",
        "<p>Add a <strong>reading progress bar</strong> at the top of the page that fills as the user scrolls down. Every detail contributes to a polished reading experience.</p>",
      ],
      requirements: [
        "System font stack with a clear hierarchy (headings vs body)",
        "Line-height between 1.6 and 1.8 for body text",
        "Content width constrained with ch or rem units (55-75ch)",
        "Styled blockquote with a left border or background treatment",
        "Inline code has distinct background and font styling",
        "Reading progress bar that fills on scroll",
        "Responsive images with styled figcaption",
        "Consistent vertical rhythm and spacing",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blog Post — Polish Exercise</title>
  <style>
    /* TODO: Reset and base styles */
    /* TODO: Font stack and typography scale */
    /* TODO: Reading progress bar */
    /* TODO: Article container with proper measure */
    /* TODO: Heading styles */
    /* TODO: Paragraph and body text styles */
    /* TODO: Blockquote styling */
    /* TODO: Inline code styling */
    /* TODO: List styling */
    /* TODO: Figure and figcaption styling */
  </style>
</head>
<body>
  <!-- TODO: Reading progress bar -->

  <article>
    <h1>The Art of Paying Attention to Details</h1>
    <p>Published on March 15, 2025</p>

    <p>Great design is not about grand gestures. It is about the hundreds of small decisions that accumulate into something that feels effortless. The spacing between a heading and its paragraph. The weight of a border. The timing of a transition.</p>

    <p>These micro-decisions are what separate competent work from exceptional craft. Users may not consciously notice them, but they feel the difference.</p>

    <h2>Typography Matters</h2>

    <p>The single most impactful thing you can do for readability is to set a proper line-height and measure. Text that is too wide forces the eye to travel too far; text that is too narrow creates a choppy reading rhythm.</p>

    <blockquote>
      <p>The reader should be able to read the ideal measure effortlessly, without any awareness of the fact that they are reading at all.</p>
    </blockquote>

    <p>A comfortable measure falls between 55 and 75 characters per line. Combined with a line-height of around 1.6 to 1.7, your text will breathe naturally.</p>

    <h2>The Small Things</h2>

    <p>Consider these details that make a difference:</p>

    <ul>
      <li>Consistent spacing that follows a clear vertical rhythm</li>
      <li>Properly styled <code>inline code</code> that stands out without shouting</li>
      <li>Blockquotes that feel distinct but remain part of the flow</li>
      <li>Images with captions that provide context</li>
    </ul>

    <figure>
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' fill='%231a1a2e'%3E%3Crect width='800' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23555' font-family='system-ui' font-size='18'%3EImage placeholder%3C/text%3E%3C/svg%3E" alt="Placeholder image" />
      <figcaption>A well-crafted interface showing attention to typographic detail.</figcaption>
    </figure>

    <p>When you combine all these small refinements, the result is a reading experience that feels premium. Not because of any single element, but because every element has been considered.</p>

    <h2>Conclusion</h2>

    <p>Polish is not a phase; it is a mindset. Start caring about the details early, and they will compound into something remarkable. The last 10% of effort creates 90% of the impression.</p>
  </article>

  <script>
    // TODO: Reading progress bar logic (scroll event)
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blog Post — Polish Exercise</title>
  <style>
    * { margin: 0; box-sizing: border-box; }

    body {
      font-family: "Georgia", "Times New Roman", serif;
      background: #fafaf8;
      color: #1a1a1a;
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
    }

    /* Reading progress bar */
    .progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      width: 0%;
      background: linear-gradient(90deg, #6366f1, #a855f7);
      z-index: 100;
      transition: width 0.1s linear;
    }

    /* Article container */
    article {
      max-width: 65ch;
      margin: 0 auto;
      padding: 4rem 1.5rem 6rem;
    }

    /* Headings — sans-serif for contrast */
    h1, h2, h3 {
      font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
      font-weight: 700;
      color: #111;
      letter-spacing: -0.02em;
    }

    h1 {
      font-size: 2.25rem;
      line-height: 1.2;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.5rem;
      line-height: 1.3;
      margin-top: 2.5rem;
      margin-bottom: 1rem;
    }

    /* Date / meta */
    article > p:first-of-type {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 0.85rem;
      color: #888;
      margin-bottom: 2rem;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    /* Body text */
    p {
      margin-bottom: 1.25rem;
      font-size: 1.1rem;
    }

    /* Blockquote */
    blockquote {
      border-left: 3px solid #6366f1;
      padding: 1rem 1.5rem;
      margin: 1.75rem 0;
      background: rgba(99, 102, 241, 0.04);
      border-radius: 0 8px 8px 0;
    }

    blockquote p {
      font-style: italic;
      color: #444;
      margin-bottom: 0;
      font-size: 1.05rem;
    }

    /* Inline code */
    code {
      font-family: "SF Mono", "Fira Code", "Consolas", monospace;
      font-size: 0.88em;
      background: #f0eeeb;
      padding: 0.15em 0.4em;
      border-radius: 4px;
      color: #c7254e;
    }

    /* Lists */
    ul {
      padding-left: 1.25rem;
      margin-bottom: 1.5rem;
    }

    li {
      margin-bottom: 0.5rem;
      font-size: 1.05rem;
      padding-left: 0.25rem;
    }

    li::marker {
      color: #6366f1;
    }

    /* Figure and image */
    figure {
      margin: 2rem -1rem;
    }

    figure img {
      width: 100%;
      border-radius: 8px;
      display: block;
    }

    figcaption {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 0.85rem;
      color: #888;
      text-align: center;
      margin-top: 0.75rem;
      font-style: italic;
    }

    /* Responsive */
    @media (max-width: 600px) {
      article { padding: 2rem 1rem 4rem; }
      h1 { font-size: 1.75rem; }
      figure { margin: 1.5rem -0.5rem; }
    }
  </style>
</head>
<body>
  <div class="progress-bar" id="progressBar"></div>

  <article>
    <h1>The Art of Paying Attention to Details</h1>
    <p>Published on March 15, 2025</p>

    <p>Great design is not about grand gestures. It is about the hundreds of small decisions that accumulate into something that feels effortless. The spacing between a heading and its paragraph. The weight of a border. The timing of a transition.</p>

    <p>These micro-decisions are what separate competent work from exceptional craft. Users may not consciously notice them, but they feel the difference.</p>

    <h2>Typography Matters</h2>

    <p>The single most impactful thing you can do for readability is to set a proper line-height and measure. Text that is too wide forces the eye to travel too far; text that is too narrow creates a choppy reading rhythm.</p>

    <blockquote>
      <p>The reader should be able to read the ideal measure effortlessly, without any awareness of the fact that they are reading at all.</p>
    </blockquote>

    <p>A comfortable measure falls between 55 and 75 characters per line. Combined with a line-height of around 1.6 to 1.7, your text will breathe naturally.</p>

    <h2>The Small Things</h2>

    <p>Consider these details that make a difference:</p>

    <ul>
      <li>Consistent spacing that follows a clear vertical rhythm</li>
      <li>Properly styled <code>inline code</code> that stands out without shouting</li>
      <li>Blockquotes that feel distinct but remain part of the flow</li>
      <li>Images with captions that provide context</li>
    </ul>

    <figure>
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' fill='%231a1a2e'%3E%3Crect width='800' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23555' font-family='system-ui' font-size='18'%3EImage placeholder%3C/text%3E%3C/svg%3E" alt="Placeholder image" />
      <figcaption>A well-crafted interface showing attention to typographic detail.</figcaption>
    </figure>

    <p>When you combine all these small refinements, the result is a reading experience that feels premium. Not because of any single element, but because every element has been considered.</p>

    <h2>Conclusion</h2>

    <p>Polish is not a phase; it is a mindset. Start caring about the details early, and they will compound into something remarkable. The last 10% of effort creates 90% of the impression.</p>
  </article>

  <script>
    const progressBar = document.getElementById('progressBar');

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    });
  </script>
</body>
</html>`,
      hint: "Use a serif font for body and a sans-serif for headings to create contrast. Set max-width with ch units on the article element. Style the blockquote with a left border and subtle background. For the progress bar, listen to the scroll event and calculate percentage based on scrollHeight.",
      references: [
        {
          title: "Fundamental text and font styling - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals",
        },
        {
          title: "CSS values and units (ch, rem) - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units",
        },
        {
          title: "Typography for the web - web.dev",
          url: "https://web.dev/learn/design/typography",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /line-height/i, label: "line-height property" },
          { pattern: /max-width/i, label: "max-width for reading measure" },
          { pattern: /ch|rem/i, label: "ch or rem units" },
          { pattern: /blockquote/i, label: "blockquote styling" },
          { pattern: /font-family/i, label: "font-family declaration" },
        ];
        const failed = checks.filter((c) => !c.pattern.test(code));
        if (failed.length === 0) {
          return { passed: true, message: "Beautifully polished typography and layout!" };
        }
        return {
          passed: false,
          message: `Missing: ${failed.map((f) => f.label).join(", ")}`,
        };
      },
    },
  ],
};
