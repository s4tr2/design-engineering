import { Phase } from "./types";

export const creativeCoding: Phase = {
  slug: "creative-coding",
  title: "Creative Coding & 3D",
  number: "04",
  description: "Push the boundaries of what's possible on the web.",
  exercises: [
    // -------------------------------------------------------
    // 1. Canvas Drawing Fundamentals
    // -------------------------------------------------------
    {
      slug: "canvas-basics",
      title: "Canvas Drawing Fundamentals",
      difficulty: "beginner",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "<p>Create a <strong>night sky scene</strong> using the HTML Canvas 2D API.</p>",
        "<p>Your canvas should fill most of the viewport and render: a <em>dark background</em> (deep navy or black), a glowing <strong>moon</strong> using <code>arc()</code>, scattered <strong>stars</strong> as small filled circles at varied positions, and a <strong>mountain silhouette</strong> along the bottom using <code>beginPath()</code>, <code>lineTo()</code>, and <code>fill()</code>.</p>",
        "<p>Use the Canvas 2D context methods: <code>fillRect</code> for the sky, <code>arc</code> for the moon and stars, and path commands for the mountains. Add a subtle glow to the moon using <code>shadowBlur</code>.</p>",
      ],
      requirements: [
        "Canvas element sized to at least 800x600",
        "Dark background drawn with fillRect",
        "A moon drawn with arc() and a glow effect",
        "At least 50 stars at random positions",
        "Mountain silhouette using beginPath/lineTo/fill",
        "Use at least 3 different colors",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Night Sky Canvas</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #000;
    }
    canvas {
      border-radius: 12px;
      box-shadow: 0 0 40px rgba(0,0,0,0.5);
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="800" height="600"></canvas>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // TODO: Draw the night sky background using fillRect

    // TODO: Draw a moon using arc()
    // Hint: Use ctx.shadowBlur and ctx.shadowColor for glow

    // TODO: Draw 50+ stars as small circles at random positions
    // Hint: Use a loop with Math.random() for x, y positions

    // TODO: Draw mountain silhouettes using beginPath, lineTo, fill
    // Hint: Start from bottom-left, create peaks, end at bottom-right

  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Night Sky Canvas</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #000;
    }
    canvas {
      border-radius: 12px;
      box-shadow: 0 0 40px rgba(0,0,0,0.5);
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="800" height="600"></canvas>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    // Sky gradient background
    const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
    skyGrad.addColorStop(0, '#0b0d21');
    skyGrad.addColorStop(0.5, '#111638');
    skyGrad.addColorStop(1, '#1a1a3e');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, W, H);

    // Stars
    for (let i = 0; i < 120; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H * 0.7;
      const r = Math.random() * 1.5 + 0.3;
      const opacity = Math.random() * 0.7 + 0.3;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = \`rgba(255, 255, 255, \${opacity})\`;
      ctx.fill();
    }

    // A few bright stars with glow
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H * 0.5;
      ctx.save();
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#aaccff';
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#ddeeff';
      ctx.fill();
      ctx.restore();
    }

    // Moon with glow
    ctx.save();
    ctx.shadowBlur = 60;
    ctx.shadowColor = '#ffe4a0';
    ctx.beginPath();
    ctx.arc(620, 120, 50, 0, Math.PI * 2);
    ctx.fillStyle = '#fff8e7';
    ctx.fill();
    ctx.restore();

    // Moon inner shadow (crescent effect)
    ctx.beginPath();
    ctx.arc(640, 110, 45, 0, Math.PI * 2);
    ctx.fillStyle = '#0b0d21';
    ctx.globalAlpha = 0.3;
    ctx.fill();
    ctx.globalAlpha = 1;

    // Far mountains
    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(0, 450);
    ctx.lineTo(100, 380);
    ctx.lineTo(200, 420);
    ctx.lineTo(320, 340);
    ctx.lineTo(420, 400);
    ctx.lineTo(500, 350);
    ctx.lineTo(600, 390);
    ctx.lineTo(700, 330);
    ctx.lineTo(800, 380);
    ctx.lineTo(W, 420);
    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fillStyle = '#12143a';
    ctx.fill();

    // Near mountains
    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(0, 480);
    ctx.lineTo(150, 420);
    ctx.lineTo(250, 470);
    ctx.lineTo(380, 390);
    ctx.lineTo(500, 450);
    ctx.lineTo(650, 400);
    ctx.lineTo(750, 460);
    ctx.lineTo(W, 430);
    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fillStyle = '#0a0c2a';
    ctx.fill();

    // Closest mountain layer
    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(0, 520);
    ctx.lineTo(120, 480);
    ctx.lineTo(280, 510);
    ctx.lineTo(400, 460);
    ctx.lineTo(550, 500);
    ctx.lineTo(700, 470);
    ctx.lineTo(W, 510);
    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fillStyle = '#060818';
    ctx.fill();
  </script>
</body>
</html>`,
      hint: "Start with fillRect for the background, then layer elements: stars first, then the moon with shadowBlur for glow, and finally mountains using path commands from left to right along the bottom.",
      references: [
        {
          title: "Canvas API - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
        },
        {
          title: "CanvasRenderingContext2D.arc() - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc",
        },
        {
          title: "Canvas Tutorial: Drawing Shapes - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /getContext/i, label: "getContext('2d')" },
          { pattern: /fillRect/i, label: "fillRect" },
          { pattern: /\.arc\s*\(/i, label: "arc()" },
          { pattern: /beginPath/i, label: "beginPath()" },
          { pattern: /lineTo/i, label: "lineTo()" },
        ];
        const missing = checks.filter((c) => !c.pattern.test(code));
        if (missing.length === 0) {
          return { passed: true, message: "All canvas drawing methods detected." };
        }
        return {
          passed: false,
          message: `Missing: ${missing.map((m) => m.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 2. Generative Grid Art
    // -------------------------------------------------------
    {
      slug: "generative-art",
      title: "Generative Grid Art",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Create a <strong>generative art piece</strong> inspired by Sol LeWitt and computational art.</p>",
        "<p>Divide a canvas into a <strong>grid of cells</strong>. For each cell, randomly draw one of several patterns: a <em>diagonal line</em>, a <em>circle</em>, a <em>quarter arc</em>, or a <em>cross</em>. Use colors from a curated palette.</p>",
        "<p>The artwork should <strong>regenerate on click</strong>, producing a new unique composition each time. Add a subtle background and ensure the overall aesthetic is cohesive and visually striking.</p>",
      ],
      requirements: [
        "Canvas with a grid of at least 8x8 cells",
        "At least 4 different pattern types per cell",
        "Colors chosen from a curated palette (5+ colors)",
        "Artwork regenerates with new randomization on click",
        "Clean, visually cohesive aesthetic",
        "Smooth rendering without visual artifacts",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Generative Grid Art</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #1a1a2e;
      font-family: system-ui, sans-serif;
    }
    canvas {
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }
    p {
      color: #666;
      margin-top: 1rem;
      font-size: 0.85rem;
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="600" height="600"></canvas>
  <p>Click to regenerate</p>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const SIZE = 600;
    const COLS = 10;
    const CELL = SIZE / COLS;

    // TODO: Define a color palette array (5-6 colors)
    const palette = [];

    // TODO: Create pattern drawing functions
    // Each function takes (ctx, x, y, size, color)

    function drawDiagonal(ctx, x, y, size, color) {
      // TODO: Draw a diagonal line across the cell
    }

    function drawCircle(ctx, x, y, size, color) {
      // TODO: Draw a circle centered in the cell
    }

    function drawQuarterArc(ctx, x, y, size, color) {
      // TODO: Draw a quarter arc from a random corner
    }

    function drawCross(ctx, x, y, size, color) {
      // TODO: Draw a cross/plus shape in the cell
    }

    // TODO: Create a generate() function that:
    // 1. Clears the canvas
    // 2. Loops through the grid
    // 3. Picks a random pattern and color for each cell
    // 4. Draws the pattern

    function generate() {
      // TODO: Implement generation logic
    }

    // TODO: Add click event listener to regenerate
    canvas.addEventListener('click', generate);

    generate();
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Generative Grid Art</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #1a1a2e;
      font-family: system-ui, sans-serif;
    }
    canvas {
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }
    p {
      color: #666;
      margin-top: 1rem;
      font-size: 0.85rem;
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="600" height="600"></canvas>
  <p>Click to regenerate</p>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const SIZE = 600;
    const COLS = 10;
    const CELL = SIZE / COLS;

    const palette = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a855f7', '#06b6d4', '#f97316'];

    function randomColor() {
      return palette[Math.floor(Math.random() * palette.length)];
    }

    function drawDiagonal(x, y, size, color) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      if (Math.random() > 0.5) {
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y + size);
      } else {
        ctx.moveTo(x + size, y);
        ctx.lineTo(x, y + size);
      }
      ctx.stroke();
    }

    function drawCircle(x, y, size, color) {
      const r = size * 0.35;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(x + size / 2, y + size / 2, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    function drawQuarterArc(x, y, size, color) {
      const corner = Math.floor(Math.random() * 4);
      const origins = [
        [x, y, 0, Math.PI / 2],
        [x + size, y, Math.PI / 2, Math.PI],
        [x + size, y + size, Math.PI, Math.PI * 1.5],
        [x, y + size, Math.PI * 1.5, Math.PI * 2],
      ];
      const [ox, oy, startAngle, endAngle] = origins[corner];
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(ox, oy, size, startAngle, endAngle);
      ctx.stroke();
    }

    function drawCross(x, y, size, color) {
      const pad = size * 0.25;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x + size / 2, y + pad);
      ctx.lineTo(x + size / 2, y + size - pad);
      ctx.moveTo(x + pad, y + size / 2);
      ctx.lineTo(x + size - pad, y + size / 2);
      ctx.stroke();
    }

    function drawDots(x, y, size, color) {
      ctx.fillStyle = color;
      const count = 4;
      const gap = size / (count + 1);
      for (let r = 1; r <= count; r++) {
        for (let c = 1; c <= count; c++) {
          ctx.beginPath();
          ctx.arc(x + c * gap, y + r * gap, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function drawTriangle(x, y, size, color) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.lineJoin = 'round';
      const rotation = Math.floor(Math.random() * 4);
      const triangles = [
        [[x, y + size], [x + size / 2, y], [x + size, y + size]],
        [[x, y], [x + size, y], [x + size, y + size]],
        [[x, y], [x + size, y + size / 2], [x, y + size]],
        [[x + size, y], [x, y + size / 2], [x + size, y + size]],
      ];
      const pts = triangles[rotation];
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      ctx.lineTo(pts[1][0], pts[1][1]);
      ctx.lineTo(pts[2][0], pts[2][1]);
      ctx.closePath();
      ctx.stroke();
    }

    const patterns = [drawDiagonal, drawCircle, drawQuarterArc, drawCross, drawDots, drawTriangle];

    function generate() {
      // Background
      ctx.fillStyle = '#16132b';
      ctx.fillRect(0, 0, SIZE, SIZE);

      // Subtle grid lines
      ctx.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= COLS; i++) {
        ctx.beginPath();
        ctx.moveTo(i * CELL, 0);
        ctx.lineTo(i * CELL, SIZE);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * CELL);
        ctx.lineTo(SIZE, i * CELL);
        ctx.stroke();
      }

      // Draw patterns
      for (let row = 0; row < COLS; row++) {
        for (let col = 0; col < COLS; col++) {
          const x = col * CELL;
          const y = row * CELL;
          const pattern = patterns[Math.floor(Math.random() * patterns.length)];
          const color = randomColor();
          pattern(x, y, CELL, color);
        }
      }
    }

    canvas.addEventListener('click', generate);
    generate();
  </script>
</body>
</html>`,
      hint: "Define an array of drawing functions, then in generate() loop through each grid cell and randomly pick a function and a color. Use beginPath/stroke for line-based patterns and arc for curves.",
      references: [
        {
          title: "Canvas API - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
        },
        {
          title: "CanvasRenderingContext2D.beginPath() - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /canvas/i, label: "canvas element" },
          { pattern: /Math\.random/i, label: "Math.random()" },
          { pattern: /getContext/i, label: "getContext('2d')" },
          { pattern: /addEventListener/i, label: "addEventListener" },
        ];
        const missing = checks.filter((c) => !c.pattern.test(code));
        if (missing.length === 0) {
          return { passed: true, message: "Generative art setup detected." };
        }
        return {
          passed: false,
          message: `Missing: ${missing.map((m) => m.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 3. Particle System
    // -------------------------------------------------------
    {
      slug: "particle-system",
      title: "Particle System",
      difficulty: "advanced",
      estimatedMinutes: 25,
      language: "html",
      instructions: [
        "<p>Build an interactive <strong>particle system</strong> on a full-screen canvas.</p>",
        "<p>Particles should <strong>spawn from the mouse position</strong> as it moves, each with a random velocity, color, and size. Apply <em>gravity</em> to pull particles downward and reduce their <em>opacity over time</em> so they fade out.</p>",
        "<p>Create a <strong>trail effect</strong> by drawing a semi-transparent rectangle over the canvas each frame instead of fully clearing it. Use <code>requestAnimationFrame</code> for smooth 60fps animation. The effect should feel like sparks or embers.</p>",
      ],
      requirements: [
        "Full-screen canvas that resizes with the window",
        "Particles spawn at mouse position on mousemove",
        "Each particle has random velocity, size, and color",
        "Gravity affects particle movement",
        "Particles fade out over their lifetime",
        "Trail effect using semi-transparent background overlay",
        "Smooth animation using requestAnimationFrame",
        "Dead particles are removed to maintain performance",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Particle System</title>
  <style>
    * { margin: 0; }
    body { overflow: hidden; background: #000; cursor: crosshair; }
    canvas { display: block; }
  </style>
</head>
<body>
  <canvas id="canvas"></canvas>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Resize canvas to fill window
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking
    let mouse = { x: 0, y: 0 };
    // TODO: Add mousemove event listener to update mouse position

    // Particle array
    const particles = [];

    // Color palette for particles
    const colors = ['#ff6b6b', '#ffa500', '#ffe66d', '#ff4757', '#ff6348'];

    // TODO: Create a Particle class or factory function
    // Each particle needs: x, y, vx, vy, size, color, life, maxLife
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        // TODO: Set random velocity (vx, vy)
        // TODO: Set random size
        // TODO: Pick a random color
        // TODO: Set life and maxLife
      }

      update() {
        // TODO: Apply velocity to position
        // TODO: Apply gravity to vy
        // TODO: Decrease life
      }

      draw() {
        // TODO: Calculate opacity from life/maxLife
        // TODO: Draw circle with current opacity
      }

      get isDead() {
        // TODO: Return true when particle should be removed
      }
    }

    // TODO: Create the animation loop
    function animate() {
      // TODO: Draw semi-transparent background for trail effect

      // TODO: Spawn new particles at mouse position

      // TODO: Update and draw each particle

      // TODO: Remove dead particles

      requestAnimationFrame(animate);
    }

    animate();
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Particle System</title>
  <style>
    * { margin: 0; }
    body { overflow: hidden; background: #000; cursor: crosshair; }
    canvas { display: block; }
  </style>
</head>
<body>
  <canvas id="canvas"></canvas>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    let mouse = { x: 0, y: 0, active: false };
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    });
    window.addEventListener('mouseleave', () => {
      mouse.active = false;
    });

    const particles = [];
    const colors = ['#ff6b6b', '#ffa500', '#ffe66d', '#ff4757', '#ff6348', '#ee5a24', '#f8c291'];
    const GRAVITY = 0.12;
    const MAX_PARTICLES = 800;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed - 2;
        this.size = Math.random() * 4 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.maxLife = Math.random() * 60 + 40;
        this.life = this.maxLife;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += GRAVITY;
        this.vx *= 0.99;
        this.life--;
        this.size *= 0.995;
      }

      draw() {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      get isDead() {
        return this.life <= 0 || this.size < 0.3;
      }
    }

    function spawnParticles() {
      if (!mouse.active) return;
      const count = 3;
      for (let i = 0; i < count; i++) {
        if (particles.length < MAX_PARTICLES) {
          particles.push(new Particle(
            mouse.x + (Math.random() - 0.5) * 10,
            mouse.y + (Math.random() - 0.5) * 10
          ));
        }
      }
    }

    function animate() {
      // Trail effect: semi-transparent overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      spawnParticles();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();
        if (p.isDead) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    }

    // Fill initial background
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animate();
  </script>
</body>
</html>`,
      hint: "The trail effect comes from drawing a semi-transparent black rectangle (rgba(0,0,0,0.08)) each frame instead of clearing the canvas. Spawn 2-4 particles per frame at the mouse position, and iterate backwards when removing dead particles from the array.",
      references: [
        {
          title: "window.requestAnimationFrame() - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame",
        },
        {
          title: "Canvas API - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /requestAnimationFrame/i, label: "requestAnimationFrame" },
          { pattern: /particle/i, label: "Particle class/object" },
          { pattern: /v(x|y|elocity)/i, label: "velocity" },
          { pattern: /canvas/i, label: "canvas" },
        ];
        const missing = checks.filter((c) => !c.pattern.test(code));
        if (missing.length === 0) {
          return { passed: true, message: "Particle system structure detected." };
        }
        return {
          passed: false,
          message: `Missing: ${missing.map((m) => m.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 4. Animated Gradient with CSS
    // -------------------------------------------------------
    {
      slug: "shader-gradient",
      title: "Animated Gradient with CSS",
      difficulty: "intermediate",
      estimatedMinutes: 15,
      language: "html",
      instructions: [
        "<p>Create a <strong>full-screen animated gradient background</strong> that smoothly shifts colors, layered with floating orbs.</p>",
        "<p>Use CSS <code>@property</code> to animate custom properties (like hue values) for smooth gradient transitions. Layer <strong>multiple gradients</strong> using <code>linear-gradient</code> and <code>radial-gradient</code> on top of each other.</p>",
        "<p>Add several <strong>floating orbs</strong> (divs) with <code>filter: blur()</code> that drift around the screen using CSS <code>@keyframes</code> animations. The overall effect should feel ambient, calming, and mesmerizing.</p>",
      ],
      requirements: [
        "Full-screen animated gradient background",
        "Use @property or CSS custom properties for smooth color animation",
        "At least 2 layered gradients",
        "4+ floating orbs with blur effect",
        "CSS @keyframes for orb movement",
        "Smooth, ambient visual feel",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ambient Gradient</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      overflow: hidden;
      font-family: system-ui, sans-serif;
    }

    /* TODO: Define @property for animatable custom properties */
    /* Example:
    @property --hue-1 {
      syntax: '<number>';
      initial-value: 0;
      inherits: false;
    }
    */

    .gradient-bg {
      position: fixed;
      inset: 0;
      /* TODO: Set animated gradient background */
      /* Hint: Use multiple layered gradients */
    }

    /* TODO: Add @keyframes for hue rotation */

    .orb {
      position: absolute;
      border-radius: 50%;
      /* TODO: Add blur filter */
      /* TODO: Add animation */
    }

    /* TODO: Create @keyframes for orb floating movement */
    /* Hint: Use translate and scale transforms */

    /* TODO: Style individual orbs with different sizes, colors, positions */
  </style>
</head>
<body>
  <div class="gradient-bg">
    <!-- TODO: Add 4+ orb divs with different classes -->
  </div>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ambient Gradient</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      overflow: hidden;
    }

    @property --hue-1 {
      syntax: '<number>';
      initial-value: 0;
      inherits: false;
    }

    @property --hue-2 {
      syntax: '<number>';
      initial-value: 120;
      inherits: false;
    }

    @property --hue-3 {
      syntax: '<number>';
      initial-value: 240;
      inherits: false;
    }

    .gradient-bg {
      position: fixed;
      inset: 0;
      background:
        linear-gradient(
          135deg,
          hsl(var(--hue-1), 70%, 15%) 0%,
          hsl(var(--hue-2), 60%, 12%) 50%,
          hsl(var(--hue-3), 80%, 10%) 100%
        );
      animation: shiftHues 12s ease-in-out infinite;
    }

    @keyframes shiftHues {
      0%, 100% {
        --hue-1: 240;
        --hue-2: 280;
        --hue-3: 320;
      }
      33% {
        --hue-1: 200;
        --hue-2: 260;
        --hue-3: 300;
      }
      66% {
        --hue-1: 260;
        --hue-2: 310;
        --hue-3: 340;
      }
    }

    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.5;
      will-change: transform;
    }

    .orb-1 {
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, hsl(280, 80%, 50%), transparent 70%);
      top: -10%;
      left: -5%;
      animation: float1 18s ease-in-out infinite;
    }

    .orb-2 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, hsl(200, 80%, 50%), transparent 70%);
      top: 50%;
      right: -5%;
      animation: float2 22s ease-in-out infinite;
    }

    .orb-3 {
      width: 350px;
      height: 350px;
      background: radial-gradient(circle, hsl(330, 70%, 50%), transparent 70%);
      bottom: -5%;
      left: 30%;
      animation: float3 20s ease-in-out infinite;
    }

    .orb-4 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, hsl(160, 70%, 40%), transparent 70%);
      top: 30%;
      left: 20%;
      animation: float4 25s ease-in-out infinite;
    }

    .orb-5 {
      width: 250px;
      height: 250px;
      background: radial-gradient(circle, hsl(50, 80%, 50%), transparent 70%);
      top: 10%;
      right: 20%;
      animation: float5 16s ease-in-out infinite;
    }

    @keyframes float1 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(100px, 80px) scale(1.1); }
      50% { transform: translate(50px, 150px) scale(0.9); }
      75% { transform: translate(-50px, 60px) scale(1.05); }
    }

    @keyframes float2 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(-80px, -60px) scale(1.15); }
      50% { transform: translate(-120px, 40px) scale(0.95); }
      75% { transform: translate(-30px, -80px) scale(1.05); }
    }

    @keyframes float3 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(60px, -80px) scale(1.1); }
      50% { transform: translate(-40px, -120px) scale(1.05); }
      75% { transform: translate(80px, -40px) scale(0.95); }
    }

    @keyframes float4 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(120px, -60px) scale(1.2); }
      66% { transform: translate(-60px, 80px) scale(0.9); }
    }

    @keyframes float5 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(-80px, 100px) scale(1.1); }
      66% { transform: translate(60px, 40px) scale(0.95); }
    }
  </style>
</head>
<body>
  <div class="gradient-bg">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    <div class="orb orb-4"></div>
    <div class="orb orb-5"></div>
  </div>
</body>
</html>`,
      hint: "Use @property to register custom properties with <number> syntax so CSS can interpolate them smoothly. Layer gradients using hsl() with these animated custom properties. For orbs, use large divs with radial-gradient backgrounds and filter: blur(80px).",
      references: [
        {
          title: "CSS @property - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@property",
        },
        {
          title: "CSS Gradients - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/gradient",
        },
        {
          title: "CSS Animations - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /@property|linear-gradient/i, label: "@property or linear-gradient" },
          { pattern: /animation/i, label: "animation" },
          { pattern: /filter:\s*blur/i, label: "filter: blur" },
          { pattern: /@keyframes/i, label: "@keyframes" },
        ];
        const missing = checks.filter((c) => !c.pattern.test(code));
        if (missing.length === 0) {
          return { passed: true, message: "Animated gradient setup detected." };
        }
        return {
          passed: false,
          message: `Missing: ${missing.map((m) => m.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 5. Flow Field Visualization
    // -------------------------------------------------------
    {
      slug: "noise-field",
      title: "Flow Field Visualization",
      difficulty: "advanced",
      estimatedMinutes: 30,
      language: "html",
      instructions: [
        "<p>Build a <strong>flow field visualization</strong> on canvas that simulates wind or current patterns.</p>",
        "<p>Create a grid of <strong>angle values</strong> using <code>Math.sin</code> and <code>Math.cos</code> combinations to generate a noise-like vector field. Spawn hundreds of <strong>particles</strong> that read the angle at their grid position and move in that direction.</p>",
        "<p>Particles should leave <strong>trails</strong> that slowly fade (semi-transparent background overlay each frame). When a particle exits the canvas, respawn it at a random position. Animate the field slowly over time for organic movement. The result should look like wind or ocean currents.</p>",
      ],
      requirements: [
        "Full-screen canvas with proper resize handling",
        "Grid of angles generated with sin/cos math",
        "200+ particles following the flow field",
        "Particles leave fading trails",
        "Particles respawn when leaving the canvas",
        "Field animates over time for organic movement",
        "Smooth 60fps rendering with requestAnimationFrame",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Flow Field</title>
  <style>
    * { margin: 0; }
    body { overflow: hidden; background: #0a0a0a; }
    canvas { display: block; }
  </style>
</head>
<body>
  <canvas id="canvas"></canvas>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const CELL_SIZE = 20;
    const cols = Math.ceil(canvas.width / CELL_SIZE);
    const rows = Math.ceil(canvas.height / CELL_SIZE);
    let time = 0;

    // TODO: Create a function to get the flow angle at a grid position
    // Use a combination of Math.sin and Math.cos for a noise-like effect
    function getAngle(col, row, t) {
      // TODO: Return an angle based on col, row, and time
      // Hint: Math.sin(col * 0.1 + t) + Math.cos(row * 0.1 + t)
      return 0;
    }

    // TODO: Create a Particle class
    // Properties: x, y, speed, color
    const particles = [];
    const PARTICLE_COUNT = 300;

    class Particle {
      constructor() {
        // TODO: Initialize with random position
        // TODO: Set speed and color
      }

      update() {
        // TODO: Find which grid cell the particle is in
        // TODO: Get the angle from the flow field
        // TODO: Move in the direction of the angle
        // TODO: Reset if out of bounds
      }

      draw() {
        // TODO: Draw the particle as a small circle or line segment
      }
    }

    // TODO: Initialize particles
    // for (let i = 0; i < PARTICLE_COUNT; i++) { ... }

    function animate() {
      // TODO: Semi-transparent overlay for trail effect
      // TODO: Update and draw all particles
      // TODO: Increment time
      requestAnimationFrame(animate);
    }

    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    animate();
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Flow Field</title>
  <style>
    * { margin: 0; }
    body { overflow: hidden; background: #0a0a0a; }
    canvas { display: block; }
  </style>
</head>
<body>
  <canvas id="canvas"></canvas>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, W, H);
    });

    const CELL_SIZE = 20;
    let time = 0;
    const PARTICLE_COUNT = 500;

    const palette = [
      [100, 180, 255],
      [80, 200, 200],
      [120, 160, 240],
      [60, 220, 180],
      [140, 140, 255],
      [80, 240, 220],
    ];

    function getAngle(x, y, t) {
      const col = x / CELL_SIZE;
      const row = y / CELL_SIZE;
      return (
        Math.sin(col * 0.06 + t * 0.4) *
        Math.cos(row * 0.08 + t * 0.3) *
        Math.PI * 2 +
        Math.sin((col + row) * 0.05 + t * 0.2) * Math.PI
      );
    }

    class Particle {
      constructor() {
        this.reset();
        this.color = palette[Math.floor(Math.random() * palette.length)];
        this.speed = Math.random() * 1.5 + 0.5;
        this.size = Math.random() * 1.2 + 0.4;
      }

      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.prevX = this.x;
        this.prevY = this.y;
      }

      update() {
        this.prevX = this.x;
        this.prevY = this.y;

        const angle = getAngle(this.x, this.y, time);
        this.x += Math.cos(angle) * this.speed;
        this.y += Math.sin(angle) * this.speed;

        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
          this.reset();
        }
      }

      draw() {
        const [r, g, b] = this.color;
        ctx.strokeStyle = \`rgba(\${r}, \${g}, \${b}, 0.4)\`;
        ctx.lineWidth = this.size;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(this.prevX, this.prevY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
      }
    }

    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);

    function animate() {
      // Fading trail
      ctx.fillStyle = 'rgba(10, 10, 10, 0.012)';
      ctx.fillRect(0, 0, W, H);

      for (const p of particles) {
        p.update();
        p.draw();
      }

      time += 0.005;
      requestAnimationFrame(animate);
    }

    animate();
  </script>
</body>
</html>`,
      hint: "The flow field angle function is the key: combine Math.sin and Math.cos with scaled col/row values and a time variable. Each particle reads the angle at its position, then moves using cos(angle) for x and sin(angle) for y. Draw line segments from previous to current position for smooth trails.",
      references: [
        {
          title: "Canvas API - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
        },
        {
          title: "Math.sin() - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin",
        },
        {
          title: "window.requestAnimationFrame() - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /Math\.sin/i, label: "Math.sin" },
          { pattern: /Math\.cos/i, label: "Math.cos" },
          { pattern: /canvas/i, label: "canvas" },
          { pattern: /requestAnimationFrame/i, label: "requestAnimationFrame" },
          { pattern: /particle/i, label: "Particle" },
        ];
        const missing = checks.filter((c) => !c.pattern.test(code));
        if (missing.length === 0) {
          return { passed: true, message: "Flow field structure detected." };
        }
        return {
          passed: false,
          message: `Missing: ${missing.map((m) => m.label).join(", ")}`,
        };
      },
    },

    // -------------------------------------------------------
    // 6. 3D CSS Card with Perspective
    // -------------------------------------------------------
    {
      slug: "3d-css-card",
      title: "3D CSS Card with Perspective",
      difficulty: "intermediate",
      estimatedMinutes: 20,
      language: "html",
      instructions: [
        "<p>Create a premium <strong>3D interactive card</strong> that tilts to follow the mouse using CSS perspective and transforms.</p>",
        "<p>The card should <strong>rotate in 3D</strong> based on the mouse position relative to its center, using <code>rotateX</code> and <code>rotateY</code> transforms within a <code>perspective</code> container. Add a <em>holographic/iridescent gradient</em> overlay that shifts based on the tilt angle.</p>",
        "<p>Include a <strong>glow effect</strong> that follows the mouse position on the card, and <strong>smooth transitions</strong> so the card eases back to flat when the mouse leaves. The result should feel tactile and premium, like a collectible trading card.</p>",
      ],
      requirements: [
        "Card container with CSS perspective",
        "Card rotates using rotateX and rotateY based on mouse position",
        "Holographic/iridescent gradient overlay that shifts with tilt",
        "Glow/light effect that follows the mouse",
        "Smooth transition back to flat when mouse leaves",
        "The card should contain some content (image or text)",
        "Premium, polished visual design",
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>3D Card</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #0a0a0a;
      font-family: system-ui, sans-serif;
    }

    .card-container {
      /* TODO: Add perspective */
      width: 350px;
      height: 480px;
    }

    .card {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      position: relative;
      /* TODO: Add transform-style: preserve-3d */
      /* TODO: Add transition for smooth return */
      overflow: hidden;
      cursor: pointer;
      background: linear-gradient(135deg, #1a1a2e, #16213e);
    }

    /* TODO: Add a .card-glare overlay for the holographic effect */
    /* Hint: Use position absolute, mix-blend-mode, gradient */

    /* TODO: Add a .card-glow for the mouse-following light */

    .card-content {
      position: relative;
      z-index: 2;
      padding: 2rem;
      color: white;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .card-content h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .card-content p {
      color: rgba(255,255,255,0.6);
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="card-container">
    <div class="card" id="card">
      <!-- TODO: Add glare/holographic overlay div -->
      <!-- TODO: Add glow div -->
      <div class="card-content">
        <h2>Holographic Card</h2>
        <p>Move your mouse over the card</p>
      </div>
    </div>
  </div>

  <script>
    const card = document.getElementById('card');

    // TODO: Add mousemove listener to the card
    // 1. Calculate mouse position relative to card center
    // 2. Convert to rotation angles (rotateX, rotateY)
    // 3. Apply transform to card
    // 4. Update glare/glow position

    // TODO: Add mouseleave listener to reset the card
  </script>
</body>
</html>`,
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>3D Card</title>
  <style>
    * { margin: 0; box-sizing: border-box; }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #0a0a0a;
      font-family: system-ui, sans-serif;
    }

    .card-container {
      perspective: 800px;
      width: 350px;
      height: 480px;
    }

    .card {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      overflow: hidden;
      cursor: pointer;
      background:
        linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow:
        0 20px 60px rgba(0,0,0,0.5),
        0 0 0 1px rgba(255,255,255,0.05);
    }

    .card:hover {
      box-shadow:
        0 30px 80px rgba(0,0,0,0.6),
        0 0 40px rgba(99, 102, 241, 0.15),
        0 0 0 1px rgba(255,255,255,0.1);
    }

    .card-glare {
      position: absolute;
      inset: 0;
      z-index: 3;
      border-radius: 16px;
      background: linear-gradient(
        125deg,
        rgba(255, 100, 200, 0.15) 0%,
        rgba(100, 200, 255, 0.1) 25%,
        rgba(200, 100, 255, 0.15) 50%,
        rgba(100, 255, 200, 0.1) 75%,
        rgba(255, 200, 100, 0.15) 100%
      );
      background-size: 200% 200%;
      mix-blend-mode: overlay;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .card:hover .card-glare {
      opacity: 1;
    }

    .card-glow {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.05) 40%,
        transparent 70%
      );
      pointer-events: none;
      z-index: 4;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .card:hover .card-glow {
      opacity: 1;
    }

    .card-shine {
      position: absolute;
      inset: 0;
      z-index: 2;
      background: linear-gradient(
        135deg,
        transparent 0%,
        rgba(255,255,255,0.03) 40%,
        rgba(255,255,255,0.08) 50%,
        rgba(255,255,255,0.03) 60%,
        transparent 100%
      );
      pointer-events: none;
    }

    .card-image {
      position: absolute;
      inset: 0;
      z-index: 1;
      background:
        radial-gradient(ellipse at 70% 30%, rgba(99, 102, 241, 0.3), transparent 60%),
        radial-gradient(ellipse at 30% 70%, rgba(236, 72, 153, 0.2), transparent 60%);
    }

    .card-content {
      position: relative;
      z-index: 5;
      padding: 2rem;
      color: white;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .card-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: rgba(99, 102, 241, 0.3);
      border: 1px solid rgba(99, 102, 241, 0.4);
      border-radius: 20px;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #a5b4fc;
      margin-bottom: 1rem;
      width: fit-content;
    }

    .card-content h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, #fff, #a5b4fc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .card-content p {
      color: rgba(255,255,255,0.5);
      font-size: 0.85rem;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="card-container">
    <div class="card" id="card">
      <div class="card-image"></div>
      <div class="card-shine"></div>
      <div class="card-glare" id="glare"></div>
      <div class="card-glow" id="glow"></div>
      <div class="card-content">
        <div class="card-badge">Holographic</div>
        <h2>Prismatic Card</h2>
        <p>Hover and move your mouse to see the 3D tilt effect with holographic reflections.</p>
      </div>
    </div>
  </div>

  <script>
    const card = document.getElementById('card');
    const glare = document.getElementById('glare');
    const glow = document.getElementById('glow');

    const MAX_ROTATION = 15;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -MAX_ROTATION;
      const rotateY = ((x - centerX) / centerX) * MAX_ROTATION;

      card.style.transition = 'transform 0.1s ease-out';
      card.style.transform = \`rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale3d(1.02, 1.02, 1.02)\`;

      // Move the holographic glare
      const bgX = (x / rect.width) * 100;
      const bgY = (y / rect.height) * 100;
      glare.style.backgroundPosition = \`\${bgX}% \${bgY}%\`;

      // Position the glow
      glow.style.left = x + 'px';
      glow.style.top = y + 'px';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  </script>
</body>
</html>`,
      hint: "Calculate the mouse position relative to the card center, then map it to rotateX and rotateY values (invert Y for natural feel). Use perspective on the container and transform-style: preserve-3d on the card. The holographic effect is a gradient overlay with mix-blend-mode: overlay whose background-position follows the mouse.",
      references: [
        {
          title: "CSS perspective - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/perspective",
        },
        {
          title: "CSS transform - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform",
        },
        {
          title: "CSS transform-style - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style",
        },
        {
          title: "MouseEvent.clientX - MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX",
        },
      ],
      validation: (code: string) => {
        const checks = [
          { pattern: /perspective/i, label: "perspective" },
          { pattern: /rotateX/i, label: "rotateX" },
          { pattern: /rotateY/i, label: "rotateY" },
          { pattern: /transform/i, label: "transform" },
          { pattern: /mousemove/i, label: "mousemove" },
        ];
        const missing = checks.filter((c) => !c.pattern.test(code));
        if (missing.length === 0) {
          return { passed: true, message: "3D card setup detected." };
        }
        return {
          passed: false,
          message: `Missing: ${missing.map((m) => m.label).join(", ")}`,
        };
      },
    },
  ],
};
