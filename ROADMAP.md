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

## 🔌 Provider Integration
- **Local Providers**:
  - [x] **LM Studio**: Native support via OpenAI-compatible endpoint.
  - [x] Update tools to switch base URL based on settings.
  - [x] **Ollama**: Supported via base URL configuration.
- **Cloud Providers**:
  - [x] Implement Gemini API adapter (`src/utils.js`).
  - [x] Refactor tools to use `utils.js` and support Gemini switching.

### ☁️ Future API Expansion (Planned)
Prioritized list of providers to add to `src/utils.js`:
1. **OpenAI** (GPT-4o, o1) - *Standard Adapter*
2. **Anthropic** (Claude 3.5 Sonnet)
3. **Groq** (High-speed inference for Llama/Mixtral)
4. **DeepSeek** (Native API)
5. **Mistral AI** (La Plateforme)
6. **xAI** (Grok)
7. **Hugging Face** (Inference API)
8. **Cohere** (Command R+)
9. **Perplexity** (Online LLM)
10. **Together AI** (Serverless Open Models)

## 🛠️ Planned Tools

## 🔮 Future Enhancements
- [x] **File Persistence**: Ability to save generated `AGENT.md` and `SKILLS.md` files from the browser.
- [x] **Stop Generation**: Button to cancel streaming responses.
- **Settings Refactor**: As we add more providers, `settings.html` will need a tabbed interface or collapsible sections to manage API keys cleanly.
- **Text-to-Speech (TTS)**: Native browser integration to read generated text aloud via Web Speech API.
- **UI Polish**:
  - [x] Add Icons to the Dashboard cards.
  - Syntax highlighting for code outputs.

## 🤖 Agentic Workflow
- **Concept**: Use the Builders to define a workforce.
- **Next Steps**:
  1. Use `agent_builder.html` to define a "Coding Agent".
  2. Use `skill_builder.html` to define a "Refactor Skill".
  3. Build a simple orchestrator that reads these markdown files to execute tasks.