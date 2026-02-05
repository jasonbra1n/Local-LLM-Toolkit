# 🤖 Local LLM Toolkit - Command Center

This file contains the "Magic Spells" (Prompts) to guide Gemini through the development of the Local LLM Toolkit.

## 🏁 How to Use This Guide
1.  **Copy** the "Context Setter" below.
2.  **Paste** it at the start of every new chat session.
3.  **Select** the specific prompt for the task you are working on.

---

## ⚡ Quick Sync & Workflow

### 1. Start of Session (The "Quick Sync")
*Use this to instantly load the project context. Note: Adjust paths if necessary.*
> "Please read the project context files (`.gemini/CONTEXT.md`, `.gemini/PERSONA.md`, `ROADMAP.md`, `STYLE_GUIDE.md`, and `CHANGELOG.md`) to get in sync with the current state of the Local LLM Toolkit."

### 2. Scaffold a New Tool
> "I want to create a new tool called '[Tool Name]'. It should be a standalone HTML file in `src/`.
> 1. Use `style.css` for theming and `layout.js` for navigation.
> 2. Import `utils.js` for the API router.
> 3. Include a System Prompt configuration constant.
> 4. Implement `loadModels(getConfig())` on load.
> 5. Use `generateText()` for the API call."

### 3. API & Provider Integration
> "I need to add support for [Provider Name].
> 1. Update `settings.html` to add the configuration fields (API Key/URL).
> 2. Update `src/utils.js`:
>    - Add the provider to `getConfig()`.
>    - Add the provider logic to `loadModels()` (if applicable).
>    - Add the specific adapter function (or reuse `generateOpenAI`)."

### 4. Refactoring & Cleanup
> "Review `src/[filename].html`.
> 1. Check if it complies with `STYLE_GUIDE.md`.
> 2. Ensure all CSS is using variables from `style.css`.
> 3. Verify that error handling is present for the fetch request."

### 5. Release Management
> "I want to prepare for release [Version, e.g., v0.1.0].
> 1. Update the version number in `src/layout.js` (APP_CONFIG).
> 2. Update `README.md` if necessary.
> 3. Finalize `CHANGELOG.md` by moving 'Unreleased' to the new version header.
> 4. Generate a summary of changes for the GitHub Release description."

---

## 🧠 Manual Context Setter (Fallback)
*If the Quick Sync doesn't work, paste this:*
> "You are an expert Software Engineer building the 'Local LLM Toolkit'.
> **Stack:** Vanilla JS, HTML5, CSS3. No frameworks.
> **Objective:** Build privacy-focused AI tools that run in the browser and connect to local APIs (LM Studio, Ollama).
> **Key Features:** Streaming responses, Chain-of-Thought visualization, and modular file structure."

---

## 📝 Playground Notes

### Current Focus
- [ ] Creating 'Meeting Notes' tool.
- [ ] Creating 'YouTube Script Writer' tool.
- [ ] Preparing for Release v0.1.0.