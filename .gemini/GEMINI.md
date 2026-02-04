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
> 1. Use `style.css` for theming.
> 2. Include a System Prompt configuration constant.
> 3. Implement the standard 'Model Selector' and 'Generate' button.
> 4. Ensure it handles Streaming and the 'Thinking Process' UI."

### 3. API & Provider Integration
> "I need to implement support for [Provider Name, e.g., Google Gemini].
> 1. Review `settings.html` to see how we store the API key/URL.
> 2. Create an adapter function in the tool to handle the specific JSON payload for this provider.
> 3. Ensure the response parsing handles the specific delta format of this provider."

### 4. Refactoring & Cleanup
> "Review `src/[filename].html`.
> 1. Check if it complies with `STYLE_GUIDE.md`.
> 2. Ensure all CSS is using variables from `style.css`.
> 3. Verify that error handling is present for the fetch request."

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
- [ ] Testing Ollama integration.
- [ ] Implementing Google Gemini API adapter.
- [ ] Refactoring common JS logic into `utils.js`.