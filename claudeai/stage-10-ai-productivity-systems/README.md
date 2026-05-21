# Stage 10 — AI Productivity Systems

> **Goal:** Build a personal operating system with Claude at its center — capture, plan, reflect, and execute, all amplified. Move from "I use Claude sometimes" to "Claude is wired into how I work."

**Time:** ~4 days · **Difficulty:** Intermediate · **Prereqs:** Stages 2–4, 8

---

## 1. The framework: Capture → Process → Plan → Execute → Reflect

Claude can plug into every loop:

| Loop | Without AI | With Claude |
|---|---|---|
| Capture | Voice memos, notes app | Voice → transcript → structured note |
| Process | Manual inbox triage | Auto-tagging, draft replies, summaries |
| Plan | Weekly review, calendar blocking | Brief generation, conflict spotting |
| Execute | Pomodoros, focus sessions | Context-switch coach, draft helper |
| Reflect | Journal, retros | Themed weekly retros from your notes |

## 2. The personal Project structure

Inside Claude, create one Project per "context" — not per task. Suggested set:

1. **Me** — biography, goals, values, current quarter focus. Reused everywhere.
2. **Career** — résumé, portfolio, current role description, networking notes.
3. **Health** — workout history, dietary preferences, symptoms log (if comfortable storing).
4. **Learning** — current courses/books, notes, recall questions.
5. **Projects** (the active ones) — one per real project of yours.

Each gets:
- A custom instructions block with the persona Claude should adopt.
- 3–10 reference docs in knowledge.
- An ongoing chat for that context.

## 3. The second brain pattern

Combine Claude with a notes app (Obsidian / Notion / Apple Notes).

Pattern:

```
1. You capture quickly (voice, text, screenshots) — no structure.
2. Daily/weekly: Claude processes the inbox folder into:
   - Atomic notes (one idea each)
   - Backlinks to existing notes
   - Tags
3. Claude surfaces weekly: "These three ideas have grown — consider writing them up."
```

This is **PKM (Personal Knowledge Management) + AI**. The trick is keeping the raw notes in *plain text* in *your* storage. Claude is the processor, not the system of record.

## 4. The daily review prompt

The single most useful productivity prompt I've found:

```xml
<role>You are my personal chief of staff.</role>

<context>
- My quarterly goals: [paste]
- Today's calendar: [paste]
- Yesterday's wins / losses: [paste from yesterday]
- Currently blocked on: [list]
</context>

<task>
For today, produce:
1. A 3-bullet priority list, ranked.
2. Time-block proposal that fits my calendar.
3. One thing I should say NO to today, with the reason.
4. The single most uncomfortable conversation I should not avoid.
5. A 1-line evening reflection prompt to ask me tonight.
</task>
```

Run it every morning. Within a week you'll have a feel for which sections you actually use and you'll trim it.

## 5. The weekly review prompt

```
You have my notes from the past 7 days in <notes>.
Generate:
- 3 themes that emerged
- 3 questions I asked that I never resolved — and should
- 1 promise to myself or others I made and may have dropped
- A draft of next week's top 3 priorities, with rationale
- A retro: what worked, what didn't, what I'll experiment with
```

Pair with calendar export + journal entries.

## 6. Voice → structured note workflow

Capture loose voice memos on your phone. Pipeline:

1. Phone records → uploaded to a folder (iCloud, Dropbox).
2. Transcribed (Whisper or Apple's built-in).
3. Claude processes:
   - Extracts action items → drops in your todo app
   - Extracts ideas → drops in your idea backlog
   - Extracts decisions → logs to a decisions journal
   - Extracts emotional tone → optional, for reflection

This is the single highest-leverage automation most knowledge workers can build.

## 7. Reading & learning systems

For every book or long article you read:

```
You are my learning partner. I have read <book/article>.

Without spoiling content I haven't told you about, do this:
1. Ask me 5 retrieval-practice questions about the chapter I just read.
2. Wait for my answers; grade them.
3. Identify the gap most worth strengthening.
4. Propose one experiment to apply this in my work this week.
```

This converts passive reading into active learning. Save the chat — it becomes your study log.

## 8. Focus & context switching

A small but powerful prompt for when you re-open work after an interruption:

```
I'm coming back to a project after [N hours] away.
Here's where I left off: [paste].
- Re-orient me in 4 sentences.
- Suggest the smallest next step I can do in 25 minutes.
- Identify one thing I'd benefit from deferring.
```

## 9. Decision journaling

Once a week, log significant decisions:

```
Decision: [what you decided]
Date: [today]
Options considered: [list]
Why this choice: [reason]
What would change my mind: [trigger]
Confidence: low/medium/high
```

Then have Claude generate a quarterly "decision retrospective": which decisions paid off, which didn't, what patterns appear.

## 10. Habits & guardrails

- **Don't outsource thinking** — Claude is your thinking partner, not your replacement. Resist running every decision through it.
- **Keep your own voice in capture** — generative AI rewriting your notes erases your fingerprints. Process, don't replace.
- **Privacy boundary** — decide what you will and won't share with Claude. Write it down.
- **Quarterly purge** — review your Projects every 3 months. Delete dead ones.

---

## Checklist

- [ ] I have a "Me" Project with reference docs.
- [ ] I run a daily review prompt at least 5 days a week.
- [ ] I run a weekly review prompt.
- [ ] I have one personal automation in the capture → process flow.
- [ ] I've kept my own raw notes — Claude doesn't own my memory.

## Capstone Exercise

Design your **personal AI operating system** as a single doc:

1. List all your contexts and which Projects you'll create.
2. Define your daily, weekly, monthly review prompts.
3. Define one capture-to-structured-note pipeline.
4. Define your privacy boundary.
5. Pick one habit to install this week and run it for 7 days.

Save the doc to `/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-10-ai-productivity-systems/my-system.md`. Re-read it monthly and iterate.

## Further reading

- "Building a Second Brain" — Tiago Forte
- "Getting Things Done" — David Allen
- Andy Matuschak's evergreen notes essays
