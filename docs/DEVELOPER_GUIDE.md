# Local LLM Toolkit - Developer Guide

Welcome! This guide outlines how to build new tools and plugins for the Local LLM Toolkit. 

Because we follow a strictly **Vanilla Web Architecture**, building a new tool is as simple as creating a single HTML file and leveraging our shared utilities. No build steps, no package managers.

## System Architecture

1.  **`src/utils.js`**: Contains the core logic for API connections (`generateText()`), model fetching (`loadModels()`), and Text-to-Speech (`speakText()`, `TTSController`). 
2.  **`src/layout.js`**: Automatically injects our standard Navigation Bar, Footer, and globally loads Prism.js for syntax highlighting seamlessly across all pages.
3.  **`src/style.css`**: The centralized design system containing CSS variables (`--bg-color`, `--accent-color`), responsive layouts, and standard UI classes.
4.  **`src/settings.html`**: Handles storing global state (API Keys, Preferred Models, Base URLs) in `localStorage`. 

## How To Build a New Tool

To create a new tool, follow these 3 steps:

### 1. Create the HTML File
Create a new file in the `src/` directory (e.g., `src/my_new_tool.html`).

Include the shared CSS and JS files in your `<head>`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My New Tool</title>
    <!-- Core Toolkit Assets -->
    <link rel="stylesheet" href="style.css">
    <script src="utils.js"></script>
    <script src="layout.js"></script>
</head>
<body>
    <div class="container">
        <h1>🛠️ My New Tool</h1>
        
        <div class="input-group">
            <label>Model:</label>
            <select id="model-select"><option>Loading...</option></select>
        </div>

        <div class="input-group">
            <label>Prompt:</label>
            <textarea id="user-input" rows="4"></textarea>
        </div>

        <button id="generate-btn" onclick="runTool()">Generate</button>
        <button id="stop-btn" class="stop-btn" onclick="stopGeneration()">Stop</button>

        <div class="output-area">
            <h3>Output:</h3>
            <div id="output-box"></div>
        </div>
    </div>
```

### 2. Connect the Logic
Connect your tool to the shared `getConfig`, `loadModels`, and `generateText` functions.

```javascript
<script>
    let abortController = null;

    // Initialization: Load config and populate the model dropdown
    window.onload = async () => {
        const config = getConfig(); // Fetches all preferences from Settings
        await loadModels(config);   // Connects to local server
    };

    async function runTool() {
        const input = document.getElementById('user-input').value;
        const outputBox = document.getElementById('output-box');
        
        outputBox.innerHTML = "";
        abortController = new AbortController();

        // Standard OpenAI message format
        const messages = [
            { role: 'system', content: 'You are an expert helper.' },
            { role: 'user', content: input }
        ];

        let fullResponse = "";

        await generateText(
            messages,
            getConfig(),
            (chunk) => {
                // Streaming chunk callback
                fullResponse += chunk;
                // Use parseMarkdown to handle inline code & paragraphs instantly
                outputBox.innerHTML = parseMarkdown(fullResponse);
            },
            () => {
                // Formatting is done! Let's highlight any code blocks generated.
                if (window.Prism) Prism.highlightAllUnder(outputBox);
            },
            (error) => {
                outputBox.innerText += `\nError: ${error.message}`;
            },
            abortController.signal
        );
    }

    function stopGeneration() {
        if (abortController) abortController.abort();
    }
</script>
</body>
</html>
```

### 3. Add to Application Config
To make your tool visible in the Dashboard and Navigation Bar, edit `src/layout.js`.

Locate the `APP_CONFIG` object at the top of `layout.js` and add your tool to the array:

```javascript
{ name: "My New Tool", link: "my_new_tool.html", icon: "🛠️", desc: "A brief description of my tool." }
```

You're done! Your tool will now automatically inherit the global theme, support light/dark modes, and connect to whichever Local or Cloud API provider the user has configured in Settings.

## Best Practices

*   **Streaming**: Always use the streaming callbacks in `generateText` rather than wait for the full response. Users are impatient and local models can be slow.
*   **Error Handling**: Let `utils.js` handle the core errors, but ensure your UI gracefully handles disconnected servers or offline modes.
*   **TTS Support**: If your tool outputs natural language, consider adding a "Listen" button and wiring it to our `TTSController` class found in `utils.js`.
