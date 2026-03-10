---
name: documentation_guard
description: Strict guidelines for reading, updating, and preserving project documentation correctly.
---

# Documentation Guard Skill

When interacting with this project, you must treat documentation as a foundational element, identical in importance to source code. This involves strict rules for interacting with files like `ROADMAP.md`, `CHANGELOG.md`, `STYLE_GUIDE.md`, and others.

## Core Rules

1. **No Silent Cropping**: You must NEVER silently crop or truncate information in any documentation file. If you are modifying a file, existing content must be preserved exactly as it is unless the user explicitly requested it to be summarized or removed.
2. **Preserve Roadmap Items**: Do not arbitrarily move, remove, or alter items in `ROADMAP.md`. Any state change (e.g. from `[ ]` to `[x]`) should directly correlate to verifiable completed work. Do not delete "Archived" sections or backlog concepts unless instructed.
3. **Changelog Compliance**: When adding entries to `CHANGELOG.md`, append them under the exact right headers (e.g., `## [Unreleased]`, `### Added`, `### Changed`, `### Fixed`). Never rewrite the text of historical release sections.
4. **Verify Before Editing**: ALWAYS use the appropriate tool (e.g., `view_file`) to check the current structural state of a document before editing it. Do not guess the formatting.
5. **Use Precision Tools**: When updating an existing document, use precise string replacement tools (`replace_file_content` or `multi_replace_file_content`) to only touch the exact lines needed, avoiding the risk of whole-file overwrite data loss.
