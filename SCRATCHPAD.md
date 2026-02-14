# 📝 Scratchpad

## 🎯 Current Focus: v0.2.0 - Orchestration & Polish

###  UI Polish
- [ ] **Syntax Highlighting**: Implement Prism.js or similar for code blocks in `chat_interface.html` and `code_janitor.html`.
- [ ] **Markdown Rendering**: Improve markdown parsing in chat bubbles (tables, lists).

### 🤖 Orchestration (The "Manager")
- [ ] **Orchestrator Tool**: Create `orchestrator.html`.
    - Goal: Chain multiple agents/tools together.
    - Input: A complex task (e.g., "Write a blog post and generate a social media caption").
    - Logic: Parse task -> Call "Idea Generator" -> Call "Novel Writer" -> Call "Summarizer".

### 🔮 Future Explorations
- [ ] **RAG (Chat with Docs)**: Investigate browser-based vector stores (e.g., Transformers.js or simple cosine similarity).
- [ ] **Voice Mode**: A hands-free, voice-only interface.

### ✅ Completed (v0.1.x)
- [x] **TTS Overhaul**: Standardized Play/Pause/Stop across all tools.
- [x] **Theme Switcher**: Light/Dark mode.
- [x] **Refactor**: All tools using centralized `utils.js`.