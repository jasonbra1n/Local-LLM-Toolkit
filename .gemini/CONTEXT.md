# AI Project Context - Local LLM Toolkit

This file provides the deep technical context for AI assistants working on the Local LLM Toolkit. It complements the human-readable `README.md`.

## 🏗️ Architecture & Philosophy

### Core Stack
- **Frontend**: Vanilla HTML5, CSS3, ES6+ JavaScript.
- **No Build Step**: Files are run directly in the browser. No Webpack, Vite, or React.
- **Hosting**: GitHub Pages (Static).
- **Styling**: Centralized `style.css` using CSS Variables for theming.

### API Integration
- **Primary Provider**: LM Studio (Localhost).
- **Default Endpoint**: `http://127.0.0.1:1234/v1` (OpenAI-compatible).
- **Secondary Providers**: Ollama (Supported via settings), Google Gemini (Planned/WIP).
- **Data Flow**: Client-side `fetch` calls directly to the local server. **CORS** must be enabled on the local server.

## 📂 File Structure

- **Root**: Documentation (`ROADMAP.md`, `STYLE_GUIDE.md`) and config.
- **docs/**: User guides (`USER_GUIDE.md`) and tool references (`TOOLS.md`).
- **src/**: Contains all executable tool files.
  - `index.html`: The Dashboard.
  - `settings.html`: Global configuration (Provider selection, API Keys).
  - `style.css`: Shared styles.
  - `*.html`: Individual tools (e.g., `story_architect.html`, `agent_builder.html`).

## 🛠️ Development Standards

1. **Streaming First**: All text generation must use streaming responses (`stream: true`) to provide immediate feedback.
2. **Thinking Process**: UI must handle `<think>` tags (common in reasoning models like DeepSeek) and display them in a collapsible `.thinking-box`.
3. **Error Handling**: Always wrap API calls in `try/catch` to handle offline servers or CORS errors gracefully.
4. **Modularity**: New tools should be standalone HTML files but must link to `style.css` and read settings from `localStorage` (via `settings.html` logic).