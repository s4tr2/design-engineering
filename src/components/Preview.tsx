"use client";

import { useEffect, useRef, useState } from "react";

interface PreviewProps {
  code: string;
  language?: "html" | "css" | "javascript";
}

function buildSrcdoc(code: string, language: string): string {
  if (language === "html") {
    // If code already has full HTML structure, use as-is
    if (code.includes("<!DOCTYPE") || code.includes("<html")) {
      return code;
    }
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: system-ui, -apple-system, sans-serif; background: #0a0a0a; color: #ededed; padding: 24px; min-height: 100vh; }
  body.light { background: #ffffff; color: #171717; }
</style>
</head>
<body>
${code}
</body>
</html>`;
  }

  if (language === "css") {
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: system-ui, -apple-system, sans-serif; background: #0a0a0a; color: #ededed; padding: 24px; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
</style>
<style>
${code}
</style>
</head>
<body>
<div id="preview"></div>
</body>
</html>`;
  }

  if (language === "javascript") {
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: system-ui, -apple-system, sans-serif; background: #0a0a0a; color: #ededed; padding: 24px; min-height: 100vh; }
  .output { font-family: monospace; font-size: 14px; line-height: 1.8; }
  .output .log { color: #e6e6e6; }
  .output .error { color: #ff5f57; }
</style>
</head>
<body>
<div class="output" id="output"></div>
<script>
const output = document.getElementById('output');
const origLog = console.log;
console.log = function(...args) {
  const div = document.createElement('div');
  div.className = 'log';
  div.textContent = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
  output.appendChild(div);
  origLog.apply(console, args);
};
console.error = function(...args) {
  const div = document.createElement('div');
  div.className = 'error';
  div.textContent = args.map(a => String(a)).join(' ');
  output.appendChild(div);
};
try {
${code}
} catch(e) { console.error(e.message); }
</script>
</body>
</html>`;
  }

  return code;
}

export default function Preview({ code, language = "html" }: PreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [srcdoc, setSrcdoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcdoc(buildSrcdoc(code, language));
    }, 300);
    return () => clearTimeout(timeout);
  }, [code, language]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center px-4 py-2 bg-[#1a1a1a] border-b border-card-border">
        <span className="text-xs font-mono text-muted uppercase tracking-wider">
          Preview
        </span>
      </div>
      <div className="flex-1 bg-[#0a0a0a] overflow-hidden">
        <iframe
          ref={iframeRef}
          srcDoc={srcdoc}
          sandbox="allow-scripts"
          className="w-full h-full border-0"
          title="Preview"
        />
      </div>
    </div>
  );
}
