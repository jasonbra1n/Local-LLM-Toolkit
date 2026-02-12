# Local LLM Toolkit Roadmap

## 🚀 Current Status
The project has evolved from a single HTML file into a suite of local, privacy-focused AI tools running on top of LM Studio.

### ✅ Completed
- **Core Architecture**:
  - [x] Dashboard (`index.html`) as the central launchpad.
  - [x] Modular HTML file structure for individual tools.
  - [x] Connection to Local LM Studio Server (IPv4 `127.0.0.1`).
  - [x] Dynamic Model Selection dropdown.
  - [x] Global Settings page for Multi-Provider configuration.
  - [x] **Shared Assets**: Extracted common CSS (`style.css`) and JS (`utils.js`) to reduce code duplication.
  - [x] **Unified Layout**: Implemented `layout.js` for consistent Navigation Bar and Footer across all pages.
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

## 🔌 Provider Integration
- **Local Providers**:
  - [x] **LM Studio**: Native support via OpenAI-compatible endpoint.
  - [x] Update tools to switch base URL based on settings.
  - [x] **Ollama**: Supported via base URL configuration.
- **Cloud Providers**:
  - [x] Implement Gemini API adapter (`src/utils.js`).
  - [x] Refactor tools to use `utils.js` and support Gemini switching.

### 🔌 Provider Expansion
- [ ] **Anthropic**: Support for Claude 3.5 Sonnet.
- [ ] **Hugging Face**: Support for Inference API.
- [ ] **xAI**: Support for Grok.

### 📚 Documentation
- [ ] **Developer Guide**: How to build plugins or extensions.

## 📜 History
- **v0.1.x**: Archived Roadmap - The Foundation (Tools, TTS, Settings).