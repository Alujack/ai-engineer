# Stage 2 — Claude Interface & Features

> **Goal:** Master every surface where Claude lives — the web chat, Projects, Artifacts, file uploads, Computer Use, mobile app — so you instinctively reach for the right one.

**Time:** ~3 days · **Difficulty:** Beginner · **Prereqs:** Stage 1

---

## 1. The web chat (claude.ai)

The starting point. Things you must know:

- **New chat vs. continued chat** — each new chat starts with zero memory.
- **Model picker** — top of the page, switch between Opus/Sonnet/Haiku.
- **Style picker** — "Normal", "Concise", "Explanatory", "Formal" or a custom style you save.
- **Stop button** — interrupt long responses (saves tokens).
- **Edit message** — re-roll an earlier turn; everything after is discarded. Cleaner than asking it to "try again".
- **Copy / regenerate / branch** on each assistant message.

## 2. Projects

A **Project** is a workspace with:

- A persistent **system prompt** ("Custom instructions")
- A **knowledge base** of uploaded files (~200K tokens of source material)
- Chats scoped to that project

Use Projects when you have **recurring context** — a codebase, a book you're writing, a company's brand voice, a legal case. Don't use Projects for one-off tasks; the overhead isn't worth it.

**Anti-pattern:** dumping unrelated files into one Project. The model will conflate them. One Project = one purpose.

## 3. Artifacts

When Claude generates code, a doc, an SVG, or an HTML page, it ships it as an **Artifact** — a side-panel preview that updates as you iterate. Artifacts support:

- **Live preview** for HTML, React, Mermaid diagrams, SVG
- **Versioning** — every edit creates a new version; you can roll back
- **Publish** — share a public URL
- **Run** — for some artifact types

Triggers for an artifact: substantial code (>15 lines), self-contained docs, anything the user will reuse. Short snippets stay inline.

## 4. File uploads & vision

Drag-and-drop or paste:

- **PDFs** — up to 100 pages, text + images extracted
- **Images** (PNG/JPG/WEBP) — Claude can describe, OCR, compare
- **CSVs, TXT, code files** — read as text
- **Spreadsheets (.xlsx)** — Claude parses sheets

Practical patterns:
- Screenshot a UI bug → "What's broken about this layout?"
- Photograph a whiteboard → "Transcribe this and turn it into a Notion doc."
- Upload a contract PDF → "Summarize obligations and red-flag clauses."

## 5. Computer Use & Claude as an agent

Claude can take **screenshots, click, type, and scroll** in a sandboxed virtual computer (via the API, or through Claude Desktop). Use cases:

- Filling out web forms
- Scraping non-API sites
- Doing QA on your own web app

Computer Use is powerful but slow and expensive. Reach for it only when no API exists.

## 6. Claude Desktop & Mobile

- **Claude Desktop (Mac/Windows)** — installs MCP servers, integrates with local tools.
- **Mobile (iOS/Android)** — voice input, camera capture, on-the-go drafting.
- **VS Code / JetBrains extension** — Claude Code inside the IDE.

## 7. Settings worth knowing

- **Custom Instructions** (global) — set your role, preferred tone, naming conventions.
- **Memory** — Claude can store facts across conversations (opt-in).
- **Data controls** — opt out of training, export your data, delete it.

---

## Checklist

- [ ] I've created at least one Project and uploaded knowledge.
- [ ] I've generated an Artifact and iterated on it.
- [ ] I've uploaded a PDF and queried it.
- [ ] I've uploaded an image and asked Claude about it.
- [ ] I've configured Custom Instructions to my role.
- [ ] I know when to start a new chat vs. continue one.

## Capstone Exercise

Build a **personal Project** called "My Coach":

1. Custom instructions: who you are, what you're learning, how you want feedback.
2. Upload 3–5 reference docs (your résumé, current goals, a book you're reading).
3. Have a 20-message conversation with it about your career or learning plan.
4. At the end, ask it to generate an Artifact: a 90-day plan you can publish and share.

Save the artifact URL in your notes. You'll reuse this Project throughout the roadmap.

## Further reading

- Anthropic Help Center → "Projects" and "Artifacts"
- Claude Desktop release notes
- Computer Use demo videos on Anthropic's YouTube
