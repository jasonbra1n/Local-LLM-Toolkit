# Local LLM Toolkit

A suite of privacy-focused, local AI tools designed to run entirely in your browser using [LM Studio](https://lmstudio.ai/).

## 🌟 Features

- **Local & Private**: No data leaves your machine. Connects directly to `localhost`. API Keys (if used for external providers) are stored in your browser's **Local Storage**, not cookies, and are never sent to a backend server.
- **Modular Tools**:
  - **Prompt Generator**: Create robust system prompts using meta-prompting.
  - **Story Architect**: Generate comprehensive story bibles and outlines.
  - **Agent Builder**: Define AI personas and export to `AGENT.md`.
  - **Skill Builder**: Define reusable capabilities and export to `SKILLS.md`.
- **Advanced UI**:
  - Real-time streaming responses.
  - "Thinking Process" visualization for reasoning models.
  - **Multi-Provider Support**: Switch between LM Studio, Ollama, and Google Gemini (WIP).
  - **Control**: Stop generation at any time.
  - **Persistence**: Save generated Agents and Skills directly to `.md` files.

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