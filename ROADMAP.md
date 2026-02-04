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

## 🔌 Provider Integration (In Progress)
- **Ollama Support**:
  - [ ] Update tools to switch base URL based on settings.
- **Google Gemini Support**:
  - [ ] Implement Gemini API adapter (requires different JSON payload structure).

## 🛠️ Planned Tools

### 1. The "Code Janitor" (Refactorer)
- **Goal**: Clean up spaghetti code without sending it to the cloud.
- **Features**: Input code block -> Refactored code + Explanation (Focus on readability/PEP8).

### 2. The "Email Polisher"
- **Goal**: Draft professional communications quickly.
- **Features**: Tone Selector (Professional, Empathetic, Stern) + Grammar fix.

### 3. The "Universal Translator" (JSON Localizer)
- **Goal**: Localize app UI strings for developers.
- **Features**: Input JSON -> Translated JSON preserving keys.

### 4. The "Regex Wizard"
- **Goal**: Generate complex Regular Expressions from plain English.

## 🔮 Future Enhancements
- **Novel Writer**: A tool to take the "Chapter Outline" from the Story Architect and generate actual prose for specific chapters.
- [x] **File Persistence**: Ability to save generated `AGENT.md` and `SKILLS.md` files from the browser.
- [x] **Stop Generation**: Button to cancel streaming responses.
- **UI Polish**:
  - Add Icons to the Dashboard cards.
  - Syntax highlighting for code outputs.

## 🤖 Agentic Workflow
- **Concept**: Use the Builders to define a workforce.
- **Next Steps**:
  1. Use `agent_builder.html` to define a "Coding Agent".
  2. Use `skill_builder.html` to define a "Refactor Skill".
  3. Build a simple orchestrator that reads these markdown files to execute tasks.