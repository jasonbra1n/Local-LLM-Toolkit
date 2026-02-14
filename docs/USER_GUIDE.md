# 📘 Local LLM Toolkit - User Guide

Welcome to the **Local LLM Toolkit**, a privacy-focused suite of AI tools designed to run entirely in your browser while connecting to local AI servers (like LM Studio) or cloud providers.

## 🚀 Getting Started

### Prerequisites
1.  **LM Studio**: Download from [lmstudio.ai](https://lmstudio.ai/).
2.  **Web Browser**: Chrome, Brave, Edge, or Firefox.

### Installation
1.  Clone or download this repository.
2.  Navigate to the `src/` folder.
3.  Open `index.html` in your browser.

### Connecting to Local AI
1.  Open **LM Studio**.
2.  Load a model (e.g., *Llama 3*, *Mistral*, *DeepSeek*).
3.  Go to the **Local Server** tab (`<->` icon).
4.  **Crucial Step**: Enable **Cross-Origin Resource Sharing (CORS)** in the Server Options (right sidebar).
5.  Click **Start Server**.
6.  Refresh the Toolkit Dashboard. The status dot should turn **Green**.

---

## ⚙️ Configuration & Settings

Access the **Settings** page via the Navigation Bar to configure your AI providers.

### 🔌 Providers Tab
The toolkit supports a hybrid workflow. You can switch providers instantly without reloading.

*   **Local (Privacy Focused)**:
    *   **LM Studio**: Default. Connects to `http://127.0.0.1:1234`.
    *   **Ollama**: Connects to `http://127.0.0.1:11434`.
*   **Cloud (Requires API Key)**:
    *   **Google Gemini**: Requires a free API key from Google AI Studio.
    *   **OpenAI / Groq / DeepSeek / Mistral**: Enter your API keys here. Keys are stored locally in your browser's `localStorage`.

### ⚙️ General Tab
*   **Temperature**: Controls creativity (0.0 = Logical, 1.0 = Creative).
*   **Default System Prompt**: Sets the default persona for the Chat Interface.
*   **Text-to-Speech Voice**: Select your preferred browser voice for reading responses.

---

## ✨ Global Features

These features are available across most tools in the suite.

### 1. Real-Time Streaming
Responses are streamed character-by-character, allowing you to read the output as it is generated.

### 2. "Thinking" Visualization
For reasoning models (like *DeepSeek-R1*), the toolkit detects `<think>` tags and hides the raw reasoning chain inside a collapsible **"Reasoning Process"** box. Click to expand and see how the AI arrived at its answer.

### 3. Text-to-Speech (TTS) 🔊
Click the **Listen** button on text-heavy tools (like Novel Writer or Meeting Notes) to hear the output read aloud.
*   **Control**: Click "Stop" to silence the audio immediately.
*   **Configuration**: Go to **Settings > General** to choose your provider:
    *   **Browser Native**: Free, offline, uses your OS voices.
    *   **OpenAI**: High-quality neural voices (requires API Key).
    *   **Local Server**: Connect to local TTS engines like AllTalk or Piper.

### 4. File Persistence
*   **Save to File**: Many tools (Agent Builder, Story Architect) allow you to save the output directly as a Markdown (`.md`) file.
*   **Import**: The Agent Builder allows you to re-upload an existing `AGENT.md` file to edit it.

### 5. Stop Generation
Made a mistake in your prompt? Click the red **Stop Generation** button to cancel the stream immediately.