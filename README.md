# Local LLM Toolkit

A suite of privacy-focused, local-first AI tools designed to run entirely in your browser. While optimized for local inference (via [LM Studio](https://lmstudio.ai/) or [Ollama](https://ollama.com/)), it also supports cloud providers like Google Gemini for a hybrid workflow.

## 🌟 Features

- **Local & Private**: By default, no data leaves your machine. Connects directly to `localhost`.
- **Cloud Options**: Optional support for Google Gemini (API keys stored in browser Local Storage).
- **Modular Tools**:
  - **Chat Interface**: General-purpose chat with history and streaming.
  - **Prompt Generator**: Create robust system prompts using meta-prompting.
  - **Story Architect**: Generate comprehensive story bibles and outlines.
  - **Idea Generator**: Brainstorm concepts, blog topics, and plot hooks.
  - **Novel Writer**: Draft prose based on structured outlines.
  - **Agent Builder**: Define AI personas and export to `AGENT.md`.
  - **Skill Builder**: Define reusable capabilities and export to `SKILLS.md`.
  - **Code Janitor**: Refactor and clean up code.
  - **Email Polisher**: Draft professional emails with tone control.
  - **Regex Wizard**: Generate complex regex patterns from plain English.
  - **Universal Translator**: Localize JSON files while preserving keys.
  - **Summarizer**: Condense long text into executive summaries or bullet points.
  - **Meeting Notes**: Convert raw transcripts into structured minutes and action items.
- **Advanced UI**:
  - Real-time streaming responses.
  - "Thinking Process" visualization for reasoning models.
  - **Multi-Provider Support**: Switch between LM Studio, Ollama, and Google Gemini.
  - **Control**: Stop generation at any time.
  - **Persistence**: Save generated Agents and Skills directly to `.md` files.
  - **Text-to-Speech**: Listen to generated output using native browser speech synthesis.

## 🚀 Getting Started

### Prerequisites
1. Download and install **LM Studio**.
2. Load a model (e.g., Llama 3, Mistral, DeepSeek).
3. Go to the **Local Server** tab (`<->` icon).
4. **Important**: Enable **Cross-Origin Resource Sharing (CORS)** in the Server Options.
5. Start the server (Default: `http://127.0.0.1:1234`).

### Usage
1. Navigate to the `src` folder.
2. Open `index.html` in your web browser.
3. Select a tool from the dashboard.

## 📂 Project Structure

- `src/`: Contains all tool HTML files.
- `STYLE_GUIDE.md`: CSS variables and coding patterns.
- `CONTRIBUTING.md`: Guidelines for adding new tools.
- `ROADMAP.md`: Future plans and progress tracking.
- `SCRATCHPAD.md`: A temporary workspace for tracking current session goals and active thoughts.

## 🤝 Contributing

See CONTRIBUTING.md for details on how to add new tools or improve existing ones.

## 📄 License
Open Source.