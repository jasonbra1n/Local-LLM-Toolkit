# Project Style Guide

## 🏗️ Architecture Philosophy
- **Shared Assets**: All tools must link to `style.css` for consistent theming.
- **Vanilla Web Technologies**: Use standard HTML5, CSS3, and ES6+ JavaScript. No frameworks (React, Vue, etc.) and no build steps.
- **Local-First**: All API calls must point to the local LM Studio instance (`http://127.0.0.1:1234`).

## 🎨 CSS & Theming
All tools must link to `style.css`.

### Core Variables
```css
:root {
    --bg-color: #1e1e2e;       /* Main background */
    --card-bg: #2b2b3f;        /* Container/Card background */
    --text-color: #cdd6f4;     /* Primary text */
    --accent-color: #89b4fa;   /* Primary action color (Blue) */
    --button-hover: #b4befe;   /* Hover state */
    --input-bg: #181825;       /* Input fields */
}
```
*Note: Specialized tools may change the `--accent-color` (e.g., Story Architect uses Gold, Agent Builder uses Green).*

### Standard Classes
- `.container`: Max-width 800px-900px, centered, padded.
- `.status-bar`: Top bar showing LM Studio connection status.
- `.thinking-box`: Collapsible container for Chain-of-Thought reasoning.
- `.loader`: CSS spinner for loading states.
- `.info-box`: A subtle explanation box to guide the user on how to use the tool.

## 💻 JavaScript Patterns

### API Configuration
Always define the base URL at the top of the script:
```javascript
const API_BASE = "http://127.0.0.1:1234/v1";
```

### Initialization
Use `window.onload` to check the connection immediately:
```javascript
window.onload = async () => {
    try {
        const response = await fetch(`${API_BASE}/models`);
        // Populate dropdown & update status indicator
    } catch (e) {
        // Show offline/CORS error
    }
};
```

### Streaming Responses
We prefer streaming (`stream: true`) for better UX.
1. Use `response.body.getReader()`.
2. Decode chunks with `TextDecoder`.
3. Parse lines starting with `data: `.
4. Handle `<think>` tags separately if present.

### Error Handling
Always wrap fetch calls in `try...catch` blocks.
- **Network Errors**: Alert the user to check LM Studio/CORS.
- **Parsing Errors**: Log to console (`console.error`) rather than failing silently.

## 📝 File Naming
- **HTML Files**: `snake_case.html` (e.g., `story_architect.html`).
- **Generated Files**: `UPPERCASE.md` (e.g., `AGENT.md`, `SKILLS.md`).