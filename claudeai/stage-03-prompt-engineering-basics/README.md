# Stage 3 — Prompt Engineering Basics

> **Goal:** Move from "vague request → mediocre answer" to "structured prompt → reliable answer". This is the single highest-leverage skill in the entire roadmap.

**Time:** ~5 days · **Difficulty:** Beginner-Intermediate · **Prereqs:** Stages 1–2

---

## The mental model

Treat Claude as a **very capable but literal contractor** who joined your company this morning. They will do exactly what you ask, but they don't know:

- What "good" looks like for your domain
- Which conventions, formats, or constraints apply
- What the audience expects

Every weakness in a prompt is a weakness in your **briefing**, not in the model.

## The five pillars of a clear prompt

Every strong prompt has all five. Memorize this list.

### 1. Role

Tell Claude **who it is**.

> "You are a senior tax accountant specializing in U.S. small-business filings."

This focuses vocabulary, defaults, and tone. It is not a magic spell — vague roles ("be helpful") do nothing.

### 2. Task

State **what to do**, plainly and singularly. One prompt, one task.

> Bad: "Help me with taxes."
> Good: "Identify the three deductions a Schedule-C filer most often misses."

### 3. Context

Give Claude **everything it needs** to do the task — the source material, the audience, the goal, the constraints.

> "I run a freelance video-editing business in California. 2025 revenue $86K, home-office workspace, no employees."

If the context lives in a file, attach it. Don't paraphrase what you can paste.

### 4. Examples (few-shot)

Show, don't just tell. One example often beats three paragraphs of instructions.

> "Format each deduction like this:
> **Deduction:** [name]
> **Why often missed:** [reason]
> **Estimated savings:** $X
> **Action:** [what to do this week]"

### 5. Format / Output spec

Be explicit about the output shape.

> "Return as Markdown with a `##` heading per deduction. No preamble, no closing summary."

When the output will be machine-parsed, demand JSON and specify the schema.

## Three patterns to start with

### Pattern A — The skeleton

```
You are [ROLE].

Task: [ONE SENTENCE].

Context:
- [Fact 1]
- [Fact 2]
- [Fact 3]

Examples:
[1–3 input/output pairs]

Output format:
[Exact structure]

Constraints:
- [Length, tone, what NOT to do]
```

### Pattern B — "Think before you answer"

```
Before responding, write a short <thinking> block where you list:
1. What the user actually needs
2. Which constraints apply
3. What could go wrong

Then write the final answer outside the thinking block.
```

This single trick reliably improves quality on reasoning tasks. (Stage 4 covers chain-of-thought in depth.)

### Pattern C — "Self-critique pass"

```
Draft your answer, then critique it as if you were a harsh reviewer.
Identify the two biggest weaknesses, then rewrite.
Output only the rewritten version.
```

## Common mistakes to avoid

1. **Vague verbs** — "help me", "improve", "make it better". Replace with measurable verbs: "shorten to 150 words", "rewrite for a 10th-grade reader", "convert to bullet points".
2. **Burying the ask** — put the actual question at the **end**, after context. Recency matters.
3. **Multiple tasks in one prompt** — split into separate prompts or use prompt chaining (Stage 4).
4. **Negative-only instructions** — "don't be formal" leaves Claude guessing. Say what TO do.
5. **Ignoring format drift** — if Claude doesn't follow your format, restate the format in `<format>` tags and put it last.
6. **Treating it like Google** — Claude reasons; Google searches. Don't write keyword prompts.

## Iteration loop

Prompt engineering is **iterative**, not first-shot. Real workflow:

1. Write a v1 prompt.
2. Run on **5 representative examples** (not just one).
3. Note where it failed.
4. Edit prompt: add an example, add a constraint, clarify a term.
5. Re-run on the same 5 examples + 2 new ones.
6. Repeat until ≥4/5 pass.

This is **evaluation-driven prompt development**. It's the only way to know your prompt actually got better.

---

## Checklist

- [ ] I can state the five pillars without looking.
- [ ] I've written a prompt with explicit role, task, context, examples, format.
- [ ] I've improved a prompt across 3+ iterations on a fixed test set.
- [ ] I no longer write one-line "help me with X" prompts for serious work.
- [ ] I know when to add an example vs. when to add a constraint.

## Capstone Exercise

Pick a **repeatable task in your real life** (e.g., "summarize a meeting transcript", "draft a customer email response", "write a daily standup post").

1. Write a v1 prompt.
2. Collect 5 real inputs.
3. Run the prompt on all 5. Save the outputs.
4. For each output, rate 1–5 and note what's wrong.
5. Iterate the prompt 3 times. Track the score each round.
6. Save the final prompt in `/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-03-prompt-engineering-basics/my-first-prompt.md` with a paragraph on what changed and why.

You now have your first **production prompt**.

## Further reading

- Anthropic Prompt Engineering Overview
- The Anthropic Prompt Library (claude.com/prompt-library)
- "Prompt Engineering for Developers" — DeepLearning.AI short course
