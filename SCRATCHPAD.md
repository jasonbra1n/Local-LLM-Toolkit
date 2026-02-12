# 📝 Scratchpad

## 🎯 Current Focus: Refactoring Remaining Tools

### 🏗️ Architecture Refactor (Centralized Router)
The following tools have been updated to use `generateText()` and `getConfig()`:
- [ ] `meeting_notes.html` (New)
- [x] `prompt_generator.html`
- [x] `summarizer.html`
- [x] `story_architect.html`
- [x] `agent_builder.html`
- [x] `skill_builder.html`
- [x] `chat_interface.html`

### ⏳ Pending Refactor & Cleanup
- [x] `novel_writer.html`
- [x] `code_janitor.html`
- [x] `email_polisher.html`
- [x] `regex_wizard.html`
- [x] `universal_translator.html`
- [x] **Bug Fix**: Centralized `Target: Loading...` update in `utils.js` so all tools display the correct IP.
- [ ] **HTML Cleanup**: Remove hardcoded `<div class="status-bar">` from:
    - [x] `prompt_generator.html`
    - [x] `idea_generator.html`
    - [x] `summarizer.html`
    - [x] `story_architect.html`
    - [x] `chat_interface.html`
    - [x] `markdown_converter.html`
    - [x] `novel_writer.html`
    - [x] `email_polisher.html`
    - [x] `code_janitor.html`
    - [x] `regex_wizard.html`
    - [x] `universal_translator.html`
    - [x] `agent_builder.html`
    - [x] `skill_builder.html`
    - [x] `meeting_notes.html`
    - [x] `visual_prompter.html`
    - [x] `project_prompt_builder.html`
    - [x] `youtube_script_writer.html`
    - [x] `quiz_generator.html`
    - [x] `persona_chat.html`

### 🔊 Audio Features
- [x] **Text-to-Speech**: Implement `speakText()` in `utils.js` using the Web Speech API.