---
name: vanilla_web_enforcer
description: Ensures all development strictly adheres to Vanilla web technologies without frameworks or build steps.
---

# Vanilla Web Enforcer Skill

When writing or reviewing code for this project, you must strictly enforce the Vanilla web architecture philosophy. This project intentionally avoids build tools, bundlers, and frontend frameworks to remain as simple and accessible as possible.

## Core Rules

1. **No Frameworks**: Never use or suggest using React, Vue, Angular, Svelte, or any other frontend framework.
2. **No Build Steps**: Do not use npm, Webpack, Vite, Babel, or similar build tools. All JavaScript must be executable directly in the browser as-is.
3. **Vanilla JS Only**: Write pure, modern ES6+ JavaScript. Use native browser APIs (`fetch`, `document.querySelector`, `localStorage`, `SpeechSynthesis`, etc.).
4. **No External CSS Libraries**: Do not use TailwindCSS, Bootstrap, or similar CSS frameworks. All styling must use vanilla CSS and leverage the project's centralized `style.css` design system.
5. **No Package Dependencies**: Avoid adding external libraries via CDN unless absolutely necessary and explicitly approved (e.g., Prism.js for syntax highlighting, which is on the roadmap).
6. **Local-First Architecture**: Ensure all new AI endpoint integrations point to the local server endpoint architecture by default, handling CORS and connection failures gracefully as per the project standards.
