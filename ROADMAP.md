# Local LLM Toolkit Roadmap

## 🚀 Current Status
**Focus: v0.2.0 - Orchestration & Polish**

> 📜 **Archive**: See docs/ROADMAP_ARCHIVE_v0.1.md for completed v0.1.x features.

### 🚧 In Progress (v0.2.0)
- [ ] **UI Polish**: Syntax highlighting for code outputs (Prism.js or lightweight alternative).
- [ ] **Orchestration**: Simple workflow to chain tools together.

### 🔌 Provider Expansion
Prioritized list of providers to add to `src/utils.js`:
1. [ ] **Anthropic** (Claude 3.5 Sonnet)
2. [ ] **Hugging Face** (Inference API)
3. [ ] **xAI** (Grok)

### 📚 Documentation
- [ ] **Developer Guide**: How to build plugins or extensions.

## 🤖 Agentic Workflow
- **Concept**: Use the Builders to define a workforce.
- **Next Steps**:
  1. Use `agent_builder.html` to define a "Coding Agent".
  2. Use `skill_builder.html` to define a "Refactor Skill".
  3. Build a simple orchestrator that reads these markdown files to execute tasks.