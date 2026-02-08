# Contributing to Local LLM Toolkit

We welcome contributions! This project is designed to be a modular suite of local AI tools.

## 🚀 Getting Started
1. **Prerequisites**:
   - Install [LM Studio](https://lmstudio.ai/).
   - Start the Local Server on port `1234`.
   - **Important**: Enable "Cross-Origin Resource Sharing (CORS)" in LM Studio Server settings.
2. **Run**:
   - Simply open `src/index.html` in your browser. No server required.

## 🛠️ How to Add a New Tool

### 1. Create the File
Copy an existing tool (like `prompt_generator.html`) to use as a template. Save it as `src/your_tool_name.html`.
Ensure it links to `<link rel="stylesheet" href="style.css">`.

### 2. Implement Features
- **System Prompt**: Define a specific `const SYSTEM_PROMPT` at the top of your script.
- **Inputs**: Create HTML inputs for the specific variables your prompt needs.
- **Logic**: Update the `generate()` function to construct the user message dynamically.

### 3. Checklist
- [ ] Does it connect to `127.0.0.1:1234`?
- [ ] Does it have a Model Selector dropdown?
- [ ] Is the "Thinking Process" (Chain of Thought) handled/displayed?
- [ ] Is there a "Listen" button (for text-heavy outputs)?
- [ ] Is there a "Save to File" button (if applicable)?
- [ ] Does it link to `style.css`?

### 4. Update the Dashboard
Add a new card to the grid in `src/index.html`:

```html
<a href="your_tool_name.html" class="card">
    <h2>Tool Name</h2>
    <p>Short description of what it does.</p>
</a>
```

### 5. Update Roadmap
Check `ROADMAP.md` to see if your tool fulfills a planned feature, or add it to the list.

## 🤖 For AI Agents
If you are an AI Agent reading this to generate code:
1. Read `STYLE_GUIDE.md` first to understand the CSS/JS patterns.
2. Ensure all new HTML files link to `style.css`.
3. Always implement error handling for the fetch API.

## 📄 License
This project is open source. Feel free to modify and distribute.