# Stage 15 — Build Projects

> **Goal:** Cement everything you've learned into a portfolio of real, finished Claude-powered projects. By the end of this stage you'll have shipped 3–5 things you can point to in interviews, on your résumé, or for paying customers.

**Time:** ~14 days (one focused project) to several months (full portfolio) · **Difficulty:** Advanced · **Prereqs:** Stages 1–14

---

## What "finished" means

A project is finished when:
1. A stranger can use it without you sitting next to them.
2. It has a README explaining what it is and how to run it.
3. It has at least one real user (you don't count alone).
4. It has been live for ≥ 1 week with no breakage.
5. You have notes on what you'd do next.

Half-finished doesn't count. Pick smaller scopes.

---

## How to choose a project

Score candidates on four axes (1–5):

- **Personal pain it solves** (5 = I'd use it daily)
- **Demo-ability** (5 = wow in 30 seconds)
- **Technical depth** (5 = shows API/tool use/RAG/evals)
- **Achievable scope** (5 = I could ship in 2 weeks)

Pick projects scoring ≥ 14. Anything below tends to die before launch.

---

## Five capstone projects to choose from

Pick **at least one**. Strongly recommend three.

### Project 1 — "Second Brain Chat"
**What:** A web app where you upload your notes (Markdown / PDF) and chat with them. Citations to source file.
**Demonstrates:** RAG, vector DB, citation, multi-user.
**Scope:** ~5–10 days.
**Stretch:** Add a "weekly review" prompt that surfaces forgotten ideas.

### Project 2 — "Inbox Copilot"
**What:** Connects to your Gmail (OAuth), categorizes incoming mail, drafts replies, never auto-sends.
**Demonstrates:** Tool use, OAuth, structured output, human-in-the-loop.
**Scope:** ~7–10 days.
**Stretch:** Slack notification for high-priority, weekly digest of "what I ignored."

### Project 3 — "Open-PR Reviewer"
**What:** A GitHub App that runs on every PR in a repo and posts a structured review (correctness, security, perf).
**Demonstrates:** API integration, prompt engineering on code, eval suite, deployment.
**Scope:** ~10–14 days.
**Stretch:** Self-improve — store reviewer feedback (👍/👎) and use it to tune the prompt.

### Project 4 — "Domain Research Agent"
**What:** A CLI or web tool: you give it a topic, it searches the web (tool), reads papers (tool), drafts a structured 5-page report with citations.
**Demonstrates:** Multi-step agent, tool use, citations, long-context synthesis.
**Scope:** ~10–14 days.
**Stretch:** A second agent that critiques the report and forces a v2.

### Project 5 — "Voice Journal"
**What:** Mobile-friendly web app. You speak, it transcribes, Claude processes into structured entries (tasks, ideas, reflections) and posts to your tools (Notion / todo app / calendar).
**Demonstrates:** Vision/audio multimodality, classification, multi-tool integration.
**Scope:** ~7–10 days.
**Stretch:** Weekly themed retrospective generated automatically.

---

## The project lifecycle

For each project, run this lifecycle. **Do not skip steps.**

### Day 1: Define
- One-paragraph product brief: who, what, why, success metric.
- List 5 explicit non-goals — things you will NOT do in v1.
- Sketch the architecture (whiteboard or text).

### Day 2: Prompt prototype
- Build the core prompt(s) in the Anthropic Workbench.
- Test on 10 representative inputs.
- Iterate until "good enough" on 8/10.

### Day 3–5: MVP
- Stand up minimal backend + frontend.
- Wire to Claude API.
- Get the golden path working end-to-end.

### Day 6: Evals
- Build an eval set of ≥20 inputs with expected behavior.
- Make sure your CI runs it on prompt changes.

### Day 7–9: Polish
- Error handling (every code path)
- Streaming UX
- Prompt caching
- Cost & token logging
- Basic auth if multi-user

### Day 10: Deploy
- Push to Fly.io / Render / Vercel / wherever.
- Verify env vars, secrets, telemetry.
- Get one external user to try it.

### Day 11–12: Observe & fix
- Watch traces for a couple of days.
- Fix the top 3 things that broke or annoyed.
- Re-run evals.

### Day 13: Document
- README with: what, why, how to run, architecture diagram, screenshots, link.
- A short LOOM/screen recording.
- LESSONS.md — what you learned, what surprised you.

### Day 14: Share
- Post it (Twitter/X, LinkedIn, Show HN, internal Slack).
- Get 5 real users to use it.
- Note their feedback.

---

## What a great portfolio looks like

Three projects, varied:
- **One you built solo** — shows you can ship.
- **One that integrates with something real** — Gmail, GitHub, Notion, Slack, your DB.
- **One that solves a problem someone pays for** (or would).

Plus, per project:
- A short demo video (90 seconds).
- A README that's actually good.
- Code on GitHub (clean enough to read).
- A "what I learned" page.

You don't need 10 projects. Three good ones beat ten mediocre ones every time.

---

## Habits to keep after Stage 15

- **Read the Anthropic changelog weekly.** Models move; prompts move with them.
- **Re-run your evals on every model release.**
- **Keep one Claude-powered side project alive.** Atrophy is real.
- **Teach what you know.** A blog post per project doubles your retention.
- **Engage with the community.** Anthropic Discord, the MCP community, /r/ClaudeAI.
- **Audit your prompts and costs quarterly.**

---

## Checklist

- [ ] I've shipped at least one project end-to-end.
- [ ] Each project has a README, evals, observability, and a live URL.
- [ ] I have 90-second demo videos for each.
- [ ] I have 5 real users (not me) on at least one project.
- [ ] I've written a "what I learned" reflection.

## Capstone Exercise

Pick **one** of the five projects above. Run the full Day 1 → Day 14 lifecycle. Ship it.

Then write the next chapter:

`/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-15-build-projects/portfolio.md`

containing:
- Project name + one-liner
- Live URL
- Repo URL
- Demo video URL
- Architecture diagram
- Top 3 things you learned

This file is the artifact you'll send recruiters, clients, and your future self.

---

## You're done

If you finished Stage 15, you can:
- Reason about LLMs accurately
- Engineer reliable production prompts
- Build agents with tool use, MCP, and RAG
- Ship Claude-powered apps that survive real users
- Operate them with evals, observability, and cost control

That's the working definition of an **AI engineer** in 2026. Welcome.

Next steps if you want to go further:
- Contribute to an open-source MCP server.
- Take a paying client.
- Write the book / course / talk that didn't exist when you started.
- Build the harder project you didn't dare attempt at Stage 1.

Good luck.
