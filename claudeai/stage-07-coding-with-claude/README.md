# Stage 7 — Coding with Claude

> **Goal:** Use Claude as a daily engineering teammate: pair-programmer, code reviewer, debugger, refactoring partner. Move from "Claude writes a function" to "Claude works on my actual repo."

**Time:** ~7 days · **Difficulty:** Intermediate · **Prereqs:** Stages 1–4, basic terminal & a programming language

---

## 1. The three surfaces for coding

| Surface | When |
|---|---|
| **Claude web chat / Projects** | Snippets, design discussion, one-off problems |
| **Claude Code (CLI)** | Working in a real repo, multi-file edits, tests, git |
| **API + your own tooling** | Custom dev assistants, code transforms at scale |

Most engineers should live in **Claude Code** day-to-day, with the web for whiteboarding.

## 2. Claude Code (the CLI) in 5 minutes

Install:

```bash
npm install -g @anthropic-ai/claude-code
claude        # launch in the current repo
```

In a Claude Code session you can:

- **Ask questions about the codebase** ("where is auth handled?")
- **Make edits across files** ("rename `User` to `Account` everywhere safely")
- **Run commands** (tests, linters, build) and react to output
- **Manage git** (branches, commits, PRs)
- **Run sub-agents** for parallel work

Key concepts:

- **`CLAUDE.md`** at repo root — persistent instructions Claude reads every session (style guide, build commands, what NOT to touch).
- **`.claude/` directory** — project settings, custom slash commands, hooks.
- **Slash commands** — `/review`, `/plan`, `/init`, plus any you define in `.claude/commands/*.md`.
- **Hooks** — shell scripts that run before/after tool calls (auto-format on edit, deny dangerous commands).
- **Plan mode** — Claude proposes a multi-step plan, you approve before any edits happen. Use this for anything non-trivial.

## 3. Writing a great `CLAUDE.md`

This single file determines whether Claude is helpful or hallucinates conventions.

Minimum sections:

```markdown
# Project: [name]

## What this is
2–3 sentences. Domain, users, scale.

## Stack
Languages, frameworks, key libs, runtime versions.

## How to run
- Install: `pnpm install`
- Dev: `pnpm dev`
- Test: `pnpm test`
- Lint: `pnpm lint`

## Conventions
- Style guide / formatter
- Naming (PascalCase components, camelCase functions, etc.)
- Where types live, where tests live

## Don'ts
- Never edit `src/generated/`
- Never bypass migrations
- Never commit secrets
```

## 4. The plan → review → apply loop

For any task above ~5 lines of change:

1. Ask Claude to **enter plan mode**: `"Plan how you'd implement X. Don't write code yet."`
2. Read the plan. Push back on anything wrong.
3. Approve.
4. Claude executes. You **review the diff**, not the prose.
5. Run tests. Iterate.

Skipping the plan step is the #1 way to get bad multi-file edits.

## 5. Debugging with Claude

Effective bug prompts include:

- **What you expected** vs **what happened**
- **The exact error** (paste it, don't paraphrase)
- **The reproduction** (smallest failing case)
- **What you've already tried** (so Claude doesn't repeat it)

Don't ask "why is my code broken?" Ask:

> "On line 47 I expect `users` to be an array of size 3, but I'm getting `undefined`. Here's the stack trace. I've already verified the database query returns rows. What three hypotheses are most likely?"

## 6. Refactoring patterns that work

| Goal | Prompt approach |
|---|---|
| Rename a symbol everywhere | Ask Claude to use grep+edit; review every hit before commit |
| Extract a function | Show the original, name the new function, specify signature |
| Migrate framework versions | Provide changelog + 1–2 files; Claude does the rest |
| Split a god-file | Have Claude propose the split first, then execute file by file |
| Add types to JS | Run on one module at a time; don't do whole-codebase in one shot |

## 7. Code review with Claude

Claude is a fast, tireless reviewer. It is **not** infallible — use it as the first pass, not the last.

Reusable review prompt:

```
You are a senior engineer reviewing this PR. Focus on:
1. Correctness bugs
2. Security (input validation, auth, secrets)
3. Performance regressions
4. Tests: missing or weak coverage
5. API design: anything that will be hard to change later

Ignore: style, formatting (the linter handles those).

For each issue: severity (critical/major/minor), file:line, what's wrong,
suggested fix in <fix> tags.
```

The built-in `/review` slash command in Claude Code does most of this for you.

## 8. Writing tests

Always have Claude write tests **alongside** code, not after.

> "Implement `parsePhoneNumber(input: string)` in `src/phone.ts`. Write unit tests in `src/phone.test.ts` covering: valid E.164, valid US national, missing country code, invalid characters, empty string. Use Vitest."

Then ask: "Are there edge cases you didn't cover? Add them."

## 9. Working with frameworks

For framework-specific work, **show Claude one canonical file** from your project. It will match your conventions far better than from the framework docs alone.

> "Here's how we structure a Next.js route in this repo: [paste]. Now create a new route for `/api/users/[id]` that does Y, following the same patterns."

## 10. Security & safety while coding

- **Never paste secrets** into prompts. Strip `.env` files first.
- **Be careful with `rm`, `migration`, `force-push`**. Claude Code in plan mode helps; permissions in `.claude/settings.json` enforce.
- **Verify external commands** before approving — Claude can suggest `curl | bash` and you should refuse.
- **Don't blindly accept dependency additions** — check `package.json` diffs.

## 11. When Claude gets stuck

Signs Claude is going in circles:
- It re-writes the same broken approach.
- It says "you're right, let me try again" twice in a row.
- Its diffs grow without progress.

What to do:
- **Stop and reset.** Start a new chat with a tighter problem statement.
- **Reduce scope.** Have Claude solve a smaller version first.
- **Take over the hard bit.** Write the tricky 20 lines yourself; let Claude do the surrounding 200.

---

## Checklist

- [ ] I've installed Claude Code and made an edit in a real repo.
- [ ] My repo has a `CLAUDE.md`.
- [ ] I use plan mode for non-trivial changes.
- [ ] I review diffs, not prose.
- [ ] I've run `/review` on one of my PRs.
- [ ] I have one custom slash command.

## Capstone Exercise

Take an **existing personal project** (or fork one). In one Claude Code session:

1. Write a `CLAUDE.md`.
2. Add one custom slash command (e.g. `/release` that runs tests, bumps version, tags).
3. Have Claude implement one real feature end-to-end (plan → code → tests → PR).
4. Have Claude `/review` its own PR; address the feedback.
5. Merge.

Document the session — what went well, where you had to intervene — in `/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-07-coding-with-claude/session-notes.md`.

## Further reading

- Claude Code docs (claude.com/claude-code)
- Anthropic blog: "Best practices for agentic coding"
- The Anthropic `engineering` blog posts on Claude Code internals
