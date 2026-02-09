# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [v0.1.1] - 2026-02-04

### Added
- **Text-to-Speech (TTS)**: Integrated Web Speech API to read generated text aloud without external dependencies.
- **UI**: Added "Listen" (🔊) buttons to Chat Interface, Novel Writer, Story Architect, Email Polisher, Summarizer, Prompt Generator, and Idea Generator.
- **Utils**: Added `speakText()` and `stopSpeech()` functions to `src/utils.js`.
- **Idea Generator**: Tool to brainstorm concepts, topics, and ideas.
- **Meeting Notes**: Tool to convert raw transcripts into structured minutes and action items.
- **Visual Prompter**: Tool to generate detailed prompts for Midjourney, Stable Diffusion & Video.
- **Project Architect**: Tool to generate "Mega-Prompts" for full project builds.
- **YouTube Script Writer**: Tool to generate engaging video scripts.
- **Quiz Generator**: Tool to generate quizzes and flashcards from source text.
- **Settings**: Added ability to select and save a default local model ID.
- **TTS**: Added smart voice selection to `utils.js`. Now defaults to higher-quality browser voices (e.g., Google US English) if available.
- **Persona Chat**: Tool to define and chat with specific characters.
- **Agent Builder**: Added ability to import and edit existing `AGENT.md` files.
- **Settings**: Added "Default System Prompt" configuration for the Chat Interface.

### Changed
- **Refactor**: Centralized model loading and connection logic into `loadModels()` within `utils.js`.
- **Settings**: Replaced manual model ID input with a dynamic dropdown that fetches from LM Studio.
- **Settings**: Refactored into a tabbed interface to organize Provider and General settings.
- **Chat Interface**: Improved layout by moving the "Clear Chat" button to a dedicated row.

### Fixed
- **Reasoning UI**: Improved parsing logic for `<think>` tags to prevent text loss when tags are split across streaming chunks.
- **UI**: Fixed hamburger menu styling in `style.css` to prevent full-width stretching.
- **UI**: Fixed vertical alignment issues with the "Refresh" button in `settings.html`.

## [v0.1.0] - 2026-02-04

### Added
- **Dashboard**: Central hub (`index.html`) to launch tools.
- **System Prompt Generator**: Tool to create effective system prompts with meta-prompting.
- **Story Architect**: Tool for generating story bibles, characters, and outlines.
- **Agent Builder**: Tool to define AI agents and save as `AGENT.md`.
- **Skill Builder**: Tool to define AI skills and save as `SKILLS.md`.
- **Settings**: Global configuration page for Multi-Provider support (LM Studio, Ollama, Gemini) and global temperature.
- **Shared Assets**: Created `style.css` to centralize theming across all tools.
- **Google Gemini Support**: Full integration with Google's Gemini API (Flash/Pro) via `utils.js` adapter.
- **Code Janitor**: Tool to refactor spaghetti code into clean, readable code.
- **Email Polisher**: Tool to draft professional emails with tone selection.
- **Universal Translator**: Tool to localize JSON files while preserving keys.
- **Regex Wizard**: Tool to generate complex Regular Expressions from plain English.
- **Chat Interface**: General purpose chat with history and streaming.
- **Novel Writer**: Tool to generate prose from outlines.
- **Summarizer**: Tool to condense text into bullets or summaries.
- **Cloud Provider Expansion**: Added support for OpenAI, Groq, DeepSeek, and Mistral AI in Settings.

### Features
- **Streaming**: Real-time text generation support for all tools.
- **Reasoning UI**: Collapsible "Thinking Process" box for models that output `<think>` tags.
- **Control**: "Stop Generation" button to cancel active streams.
- **Persistence**: Ability to save generated Markdown files directly to disk.
- **Connectivity**: Dynamic model selection dropdown fetching from LM Studio.

### Documentation
- Added `STYLE_GUIDE.md` for UI/UX consistency.
- Added `CONTRIBUTING.md` for development guidelines.
- Added `ROADMAP.md` for project tracking.
- Updated documentation to reflect the new Shared CSS architecture.

### Changed
- Refactored all tools to use centralized configuration from `settings.html`.
- **Architecture**: Implemented centralized `generateText()` router in `utils.js` to handle all API calls.
- **Refactor**: Updated all 11 tools to use the centralized router, removing duplicate API logic.
- **Navigation**: Reordered tools in Dashboard and Navbar into logical groups (General, Creative, Utility, Agentic).
- Refactored all tools to use `utils.js` for shared logic and provider switching.
- Refactored all HTML tools to use the shared `style.css` file, removing redundant code.
- Added visual icons to the Dashboard cards for better UX.

### Fixed
- Resolved syntax errors in `fetch` calls for `story_architect.html`, `agent_builder.html`, and `skill_builder.html` preventing generation.