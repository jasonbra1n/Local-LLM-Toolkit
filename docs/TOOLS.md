# 🛠️ Tool Reference

The Local LLM Toolkit contains **18 specialized tools** organized by category.

## 💬 General

### **Chat Interface**
A standard chat UI for general conversation.
*   **Features**: History tracking, Persona configuration (via Settings), "Clear Chat" button.
*   **Best For**: General Q&A, testing models.

### **Persona Chat**
Define a specific character (e.g., "Sherlock Holmes") for a single session.
*   **Features**: Custom System Prompt injection, Greeting configuration.
*   **Best For**: Roleplay, character testing.

---

## 🎨 Creative

### **Story Architect**
Generates comprehensive "Story Bibles" from a simple premise.
*   **Output**: Title ideas, Logline, Character Profiles, Chapter Outline.
*   **Best For**: Novelists, Screenwriters.

### **Novel Writer**
Writes prose for specific chapters based on an outline.
*   **Input**: Paste your Story Bible context + Chapter focus.
*   **Best For**: Drafting fiction.

### **Idea Generator**
Brainstorming partner for various topics.
*   **Modes**: Blog Topics, YouTube Ideas, Plot Hooks, Business Startups.
*   **Best For**: Overcoming writer's block.

### **Visual Prompter**
Generates highly detailed technical prompts for AI Art generators.
*   **Supports**: Midjourney, Stable Diffusion, DALL-E 3, Runway Gen-2.
*   **Best For**: AI Artists, Video Creators.

### **YouTube Script Writer**
Creates structured video scripts designed for retention.
*   **Structure**: Hook -> Intro -> Body -> Outro.
*   **Best For**: Content Creators.

---

## 🔧 Utility

### **Summarizer**
Condenses long text into shorter formats.
*   **Modes**: Bullet Points, Executive Summary, ELI5 (Explain Like I'm 5).
*   **Best For**: Digesting reports, articles, or logs.

### **Meeting Notes**
Converts raw transcripts into structured documentation.
*   **Modes**: Minutes, Action Items, Decisions Log.
*   **Best For**: Project Managers, Secretaries.

### **Email Polisher**
Rewrites rough drafts into professional emails.
*   **Tones**: Professional, Empathetic, Stern, Concise.
*   **Best For**: Corporate communication.

### **Universal Translator**
Translates JSON localization files while preserving keys.
*   **Best For**: App Developers.

### **Quiz Generator**
Creates study materials from source text.
*   **Modes**: Multiple Choice, True/False, Flashcards.
*   **Best For**: Students, Teachers.

---

## 🤖 Agentic / Coding

### **Agent Builder**
Defines AI Agents and exports them to `AGENT.md`.
*   **Features**: Import existing agents, structured fields (Identity, Mission, Capabilities).

### **Project Architect**
Generates a "Mega-Prompt" to scaffold an entire software project in one go.
*   **Best For**: Developers starting a new app.

### **Code Janitor**
Refactors spaghetti code into clean, readable code.

### **Regex Wizard**
Generates complex Regular Expressions from plain English descriptions.

### **Skill Builder**
Defines reusable AI capabilities and exports to `SKILLS.md`.

### **Prompt Generator**
Uses meta-prompting to generate robust System Prompts for other LLMs.