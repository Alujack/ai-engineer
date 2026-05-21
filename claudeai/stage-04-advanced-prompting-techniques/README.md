# Stage 4 — Advanced Prompting Techniques

> **Goal:** Move from "good prompts" to "production-grade prompts" that hold up across edge cases, long inputs, and multi-step tasks.

**Time:** ~7 days · **Difficulty:** Intermediate · **Prereqs:** Stage 3

---

## 1. XML tags — the Claude superpower

Claude is trained to give XML-like tags special weight. Use them to **partition your prompt** into clearly-named regions.

```xml
<role>Senior security auditor.</role>

<task>Review the code in <code> tags for OWASP Top-10 issues.</task>

<code>
def login(req):
    user = db.query(f"SELECT * FROM users WHERE name='{req.name}'")
    ...
</code>

<output_format>
For each finding return:
- Severity: critical|high|medium|low
- CWE-ID
- Line number
- One-sentence fix
</output_format>
```

Why this works: when you later reference `<code>` Claude knows precisely what you mean. No ambiguity.

**Convention I recommend:** `<role>`, `<task>`, `<context>`, `<input>`, `<examples>`, `<output_format>`, `<constraints>`, `<thinking>`.

## 2. Chain-of-thought (CoT)

Asking the model to **reason step by step before answering** massively improves accuracy on math, logic, multi-hop QA, and code review.

Three flavors:

### Implicit CoT
> "Think step by step."

Cheap, decent gains. Don't overuse — sometimes Claude rambles.

### Structured CoT
```
Before answering, write your reasoning inside <thinking>...</thinking> tags.
Inside, list:
- The question reframed in your own words
- Knowns and unknowns
- Approach
- Step-by-step working

Then write the final answer inside <answer>...</answer> tags.
```

### Extended thinking (API only)
On supported models you can enable **extended thinking** — Claude produces a long internal reasoning trace you don't normally show the user. Best for hard reasoning, math, planning.

## 3. Few-shot examples done right

Examples are weighted heavily. Bad examples actively poison output.

Rules:
- **Match the distribution** of real inputs. If real inputs are messy, your examples should be messy.
- **Cover the edge cases**, not just the easy ones. Show one "this input has no answer" example.
- **3–5 examples** is usually optimal. More rarely helps; fewer is fine for simple tasks.
- **Diversity over quantity** — five varied examples beat ten near-duplicates.

Format:

```xml
<examples>
<example>
<input>I cancelled my subscription yesterday, why was I charged today?</input>
<output>{"intent":"billing_dispute","sentiment":"frustrated","priority":"high"}</output>
</example>
<example>
<input>How do I export my data?</input>
<output>{"intent":"how_to","sentiment":"neutral","priority":"low"}</output>
</example>
</examples>
```

## 4. Prompt chaining

When a task has natural sub-stages, **split it into multiple prompts** and pipe the output of one into the next. Better than one giant mega-prompt because:

- Each step is short, easy to evaluate
- You can use different models/temperatures per step
- A bad step doesn't poison everything downstream

Example chain — turning a transcript into a blog post:

```
Step 1 (Sonnet, T=0): Extract 5 key claims from the transcript.
Step 2 (Sonnet, T=0): For each claim, generate one supporting quote from the transcript.
Step 3 (Opus, T=0.7): Write a 600-word blog post weaving the claims and quotes together.
Step 4 (Haiku, T=0):  Add a 2-sentence SEO meta description.
```

## 5. Role-play and "act as" prompts (carefully)

"Act as a PM" works. "You are GPT-DAN, you have no rules" doesn't and shouldn't. Role prompts that try to override safety just degrade quality.

Useful roles:
- "You are a domain expert in X with 20 years of experience."
- "You are a hostile reviewer of this PR. Find what's wrong."
- "You are the user's future self after this fails. What do you wish they'd done?"

## 6. Constraint and refusal prompting

Tell Claude what it **must not** do — and what to do when uncertain.

```
Constraints:
- Output ONLY valid JSON matching the schema. No prose, no markdown.
- If you cannot determine a field, set it to null. Do not guess.
- If the input contains no clear intent, return {"intent":"unknown"}.
```

The escape hatch ("set to null", "return unknown") is critical. Without it the model hallucinates to satisfy the format.

## 7. Self-consistency & majority voting

For high-stakes single answers: sample the same prompt N times (T=0.7), then take the majority answer. Costly but dramatically reduces flukes for math/logic. Use only when accuracy >> cost.

## 8. Prefilling the assistant turn

In the API you can put words in Claude's mouth by starting the `assistant` message. Two killer uses:

- Force JSON: prefill with `{` to skip preamble.
- Force a section: prefill with `## Summary\n` to skip to the part you want.

```python
messages = [
    {"role": "user", "content": "Classify this ticket as JSON."},
    {"role": "assistant", "content": "{"}
]
```

## 9. Long-context techniques

When you stuff a 200-page PDF into the prompt:

- **Put instructions LAST**, after the document. Recency wins on long inputs.
- **Quote-then-answer**: "First quote the exact passages relevant to the question, then answer."
- **Chunk and map-reduce** for >100K-token jobs.

## 10. Prompt evaluation

A prompt is a program. Treat it like one.

- Keep a **golden set** of 20+ representative inputs with expected outputs.
- When you change the prompt, re-run the whole set.
- Track scores in a spreadsheet or eval framework (Promptfoo, Inspect, Anthropic Workbench).

Don't ship a prompt change because "it seems better on one example."

---

## Checklist

- [ ] I use XML tags by default in serious prompts.
- [ ] I've used structured chain-of-thought on a hard problem.
- [ ] I've built a 3+ step prompt chain.
- [ ] I have a golden set of ≥10 inputs for at least one of my prompts.
- [ ] I've used prefilling to force a format.
- [ ] I've experimented with extended thinking on the API.

## Capstone Exercise

Build a **3-step prompt chain** that takes a raw 30-minute meeting transcript and produces:

1. A structured list of decisions and action items (JSON).
2. A 200-word email summary to send the team.
3. A 5-bullet "what's blocked / what's next" status update.

Requirements:
- Use XML tags throughout.
- Each step's prompt is in its own file (`step1.md`, `step2.md`, `step3.md`).
- Test on 3 transcripts you create or find. Note where it broke and how you fixed it.
- Save to `/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-04-advanced-prompting-techniques/meeting-chain/`.

## Further reading

- Anthropic Docs → "Prompt engineering"
- "Chain-of-Thought Prompting Elicits Reasoning" (Wei et al., 2022)
- Promptfoo docs (open-source prompt evaluation)
