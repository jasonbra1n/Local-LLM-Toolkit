# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

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