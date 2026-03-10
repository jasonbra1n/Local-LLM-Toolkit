# Local LLM Toolkit Roadmap

## 🚀 Current Status
**Focus: v0.2.0 - Orchestration & Polish**
*Latest Release: v0.1.4 (TTS Overhaul & Theme Switcher)*

> 📜 **Archive**: See docs/ROADMAP_ARCHIVE_v0.1.md for completed v0.1.x features.

### 🚧 In Progress (v0.2.0)
- [x] **UI Polish**: Syntax highlighting for code outputs (Prism.js or lightweight alternative).
- [ ] **Network Scanner**: Add a utility in the Settings page to ping local subnet IPs and auto-discover running LM Studio/Ollama instances.
- [ ] **Orchestration**: Simple workflow to chain tools together.

### 🚀 Upcoming Features (v0.3.0+)
- [ ] **Model Arena**: A side-by-side battle interface to run the same prompt against two different models (local vs local, or local vs cloud) to compare speed and quality.
- [ ] **Prompt Library**: A manager to save, tag, and organize favorite system prompts. (Initial data stored via `localStorage`).
- [ ] **Backend Integration**: Transition from purely static HTML/JS to a PHP/SQL backend hosted on cPanel to support user accounts, persistent Prompt library storage, and shared setups.

### 🔌 Provider Expansion
Prioritized list of providers to add to `src/utils.js`:
1. [ ] **Anthropic** (Claude 3.5 Sonnet)
2. [ ] **Hugging Face** (Inference API)
3. [ ] **xAI** (Grok)

### 📚 Documentation
- [x] **Developer Guide**: How to build plugins or extensions.

## 💡 Future Tool Concepts (Backlog)
- **📄 Document Chatter (RAG)**: Upload a PDF/Text file and chat with it using local embeddings.
- **🗣️ Voice Mode**: A dedicated hands-free interface for voice-to-voice conversation.
- **⛏️ Data Extractor**: Paste unstructured text and a JSON schema to extract structured data.

## 🤖 Agentic Workflow
- **Concept**: Use the Builders to define a workforce.
- **Next Steps**:
  1. Use `agent_builder.html` to define a "Coding Agent".
  2. Use `skill_builder.html` to define a "Refactor Skill".
  3. Build a simple orchestrator that reads these markdown files to execute tasks.

## 🌌 Long Term Vision: The Living Database
Once the v0.3.0 PHP/SQL backend is established, the toolkit will transition from a "Stateless Calculator" to a "Living Organism".
- **Self-Improving Libraries**: Background agents will evaluate, refine, and grade prompts stored in the Prompt Library, automatically creating `v2` and `v3` versions based on empirical testing against local LLMs.
- **Global Agent & Skill Roster**: All imported Agents and Skills will be stored centrally. Tools like the Chat Interface will query the database to dynamically load the best persona/skill combination for the user's task.
- **Multiplayer / Sharing**: Built-in functionality for users to "Publish" their Mega-Prompts, Agents, and Skills to a community table for others to clone and upvote.
- **Automated Knowledge Building (RAG)**: The Data Extractor will dump structured JSON directly into SQL. Chat models will retrieve and synthesize this stored context to provide hyper-accurate, project-specific answers.