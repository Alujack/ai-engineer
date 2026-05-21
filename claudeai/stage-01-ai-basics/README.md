# Stage 1 — AI Basics

> **Goal:** Build accurate mental models of what an LLM is, what it can do well, and what it can't. Without this foundation every later stage is cargo-culting.

**Time:** ~3 days · **Difficulty:** Beginner · **Prereqs:** None

---

## 1. What is an LLM?

A Large Language Model is a neural network trained on huge amounts of text to predict the next **token** (a chunk of text, roughly ¾ of a word in English). That single mechanism — next-token prediction — is the engine behind everything Claude does: answering questions, writing code, summarizing PDFs, planning tasks.

Key implications:
- **It does not "know" facts** the way a database does. It has learned statistical patterns about which words follow which.
- **It cannot browse the web** or run code unless explicitly given those tools.
- **It has a training cutoff** — events after that date are unknown to it.
- **It has no persistent memory** between conversations unless you (or the app) give it one.

## 2. Tokens, context window, and why it matters

- A **token** ≈ 4 characters of English text.
- The **context window** is the maximum number of tokens Claude can "see" at once (prompt + response).
- Claude Opus/Sonnet currently support **up to 1M tokens** (about 750,000 words — an entire book series).
- If you go over the limit, the oldest tokens are dropped or compacted.

**Practical effect:** for short tasks you don't care. For RAG, long documents, or agent loops, context budget is your most important resource.

## 3. Temperature, sampling, and determinism

- **Temperature 0** → most likely token every time. Closer to deterministic, good for code and structured output.
- **Temperature 1** → more diverse, creative, less reliable. Good for brainstorming.
- Same prompt + same temperature ≠ same output. LLMs are not deterministic in practice.

## 4. Hallucinations: what they are and why they happen

A hallucination is when the model produces a confident, well-written falsehood. Causes:
- The model has no source for the fact and "fills in" what likely follows.
- The prompt asks for something specific the model has weak data on (e.g., niche citations).
- Pressure to keep answering when "I don't know" would be the honest response.

**Mitigations:**
1. Tell the model it can say "I don't know."
2. Provide the source material in the prompt (this is RAG in miniature).
3. Ask for citations and verify them yourself.
4. Lower temperature for factual tasks.

## 5. Capabilities map (where Claude excels)

| Strong | Weak |
|---|---|
| Summarization | Math beyond simple arithmetic (without tools) |
| Rewriting & translation | Counting characters/words exactly |
| Code generation & review | Real-time data |
| Reasoning about provided text | Exact recall of obscure facts |
| Following structured instructions | Tasks needing perception (use Vision/Computer Use) |
| Long-context analysis | Long multi-step planning without scaffolding |

## 6. The Claude family (as of 2026)

- **Claude Opus 4.7** — flagship, most capable, slowest, priciest. Use for hardest reasoning.
- **Claude Sonnet 4.6** — balanced cost/quality. The default for most production.
- **Claude Haiku 4.5** — fastest and cheapest. Use for high-volume, lower-complexity tasks.

Rule of thumb: prototype on Opus, ship on Sonnet, scale on Haiku.

---

## Checklist

- [ ] I can explain what a token is to a non-technical friend.
- [ ] I know the difference between training-time and inference-time.
- [ ] I can describe one cause of hallucinations and one mitigation.
- [ ] I understand what temperature does.
- [ ] I can name and pick between Opus / Sonnet / Haiku.

## Capstone Exercise

Open Claude. Ask it three questions:

1. A factual question you already know the answer to.
2. A factual question past its training cutoff (e.g., "Who won the most recent F1 race?").
3. A reasoning question with no factual answer ("If a hen and a half lays an egg and a half in a day and a half, how many eggs do six hens lay in six days?").

For each, note: did it hallucinate? Was it confident? Did it offer to use tools? Write a one-page reflection — this is your "what I now believe about LLMs" baseline.

## Further reading

- Anthropic's "Introduction to Claude" docs
- Karpathy's "Intro to Large Language Models" (YouTube)
- The Anthropic blog post on Constitutional AI
