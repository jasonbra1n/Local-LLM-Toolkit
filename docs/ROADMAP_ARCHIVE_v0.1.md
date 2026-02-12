# Local LLM Toolkit Roadmap (v0.1.x Archive)

## 🚀 v0.1.x Achievements
The project evolved from a single HTML file into a suite of local, privacy-focused AI tools running on top of LM Studio.

### ✅ Completed Features
- **Core Architecture**:
  - [x] Dashboard (`index.html`) as the central launchpad.
  - [x] Modular HTML file structure for individual tools.
  - [x] Connection to Local LM Studio Server (IPv4 `127.0.0.1`).
  - [x] Dynamic Model Selection dropdown.
  - [x] Global Settings page for Multi-Provider configuration.
  - [x] **Shared Assets**: Extracted common CSS (`style.css`) and JS (`utils.js`) to reduce code duplication.
  - [x] **Unified Layout**: Implemented `layout.js` for consistent Navigation Bar and Footer across all pages.
  - [x] **Status Bar Refactor**: Centralized connection status and Target IP display logic in `layout.js`.
- **System Prompt Generator**:
  - [x] Meta-Prompting logic to generate robust system instructions.
  - [x] Real-time Streaming support.
  - [x] "Thinking Process" visualization for reasoning models (collapsible).
- **Story Architect**:
  - [x] Specialized prompt for generating Story Bibles.
  - [x] Inputs for Genre, Word Count, and Premise.
  - [x] Streaming and Reasoning support.
- **Agent & Skill Builders**:
  - [x] `agent_builder.html`: Tool to generate `AGENT.md` definitions.
  - [x] `skill_builder.html`: Tool to generate `SKILLS.md` definitions.
  - [x] `code_janitor.html`: Tool to refactor code.
  - [x] `email_polisher.html`: Tool to draft emails with tone selection.
  - [x] `universal_translator.html`: Tool to localize JSON files.
  - [x] `regex_wizard.html`: Tool to generate Regular Expressions.
  - [x] `novel_writer.html`: Tool to generate prose from outlines.
  - [x] `chat_interface.html`: General purpose chat tool.
  - [x] `meeting_notes.html`: Tool to structure transcripts into minutes.
  - [x] `visual_prompter.html`: Tool to generate image/video prompts.
  - [x] `project_prompt_builder.html`: Tool to generate "Mega-Prompts" for full project builds.
  - [x] `youtube_script_writer.html`: Tool to generate video scripts.
  - [x] `quiz_generator.html`: Tool to generate quizzes and flashcards.
  - [x] `persona_chat.html`: Tool to define and chat with specific characters.
  - [x] `markdown_converter.html`: Tool to convert Markdown to HTML.

### 🔌 Provider Integration (v0.1)
- **Local Providers**:
  - [x] **LM Studio**: Native support via OpenAI-compatible endpoint.
  - [x] Update tools to switch base URL based on settings.
  - [x] **Ollama**: Supported via base URL configuration.
- **Cloud Providers**:
  - [x] Implement Gemini API adapter (`src/utils.js`).
  - [x] Refactor tools to use `utils.js` and support Gemini switching.

### 📚 Documentation (v0.1)
- [x] `STYLE_GUIDE.md`
- [x] `CONTRIBUTING.md`
- [x] `docs/USER_GUIDE.md`
- [x] `docs/TOOLS.md`

### 🔮 Enhancements Delivered
- [x] **File Persistence**: Ability to save generated `AGENT.md` and `SKILLS.md` files from the browser.
- [x] **Stop Generation**: Button to cancel streaming responses.
- [x] **Text-to-Speech (TTS)**: Native browser integration to read generated text aloud via Web Speech API.
- **UI Polish**:
  - [x] Add Icons to the Dashboard cards.
  - [x] Dashboard Grid Optimization.

## 📜 History
- **v0.1.0 - v0.1.2**: Foundation, Tools, TTS, Settings, Documentation.