# Stage 13 — AI Tools Ecosystem

> **Goal:** Master the surrounding stack that makes Claude useful in production — MCP, agent frameworks, RAG, vector databases, evals, observability. Know what to use and what to avoid.

**Time:** ~7 days · **Difficulty:** Advanced · **Prereqs:** Stage 12

---

## 1. MCP — Model Context Protocol

**MCP** is Anthropic's open standard for connecting Claude to tools and data sources. It is the **USB-C of AI tools**: any Claude client can talk to any MCP server.

**Mental model:**
- **MCP server** = a process exposing tools/resources/prompts (e.g., a "GitHub MCP", a "Filesystem MCP").
- **MCP client** = Claude Desktop, Claude Code, or any app that supports MCP.
- The client connects to one or more servers. Claude can now call those tools.

### Why MCP matters

Before MCP, every app that wanted Claude to "talk to GitHub" had to build a custom integration. With MCP, you wire up an off-the-shelf server once and any client uses it. It collapses N×M integrations into N+M.

### Using existing MCP servers

Popular servers (community + official):
- **filesystem** — read/write files in a sandboxed dir
- **github** — issues, PRs, files
- **slack** — messages, channels
- **notion**, **linear**, **asana**, **gdrive**
- **postgres** / **sqlite** — query databases
- **playwright** / **puppeteer** — browse the web
- **memory** — persistent key/value store for agents

Install in Claude Desktop or Claude Code by editing the config file (`~/.claude/settings.json` or `~/Library/Application Support/Claude/claude_desktop_config.json`).

### Building your own MCP server

The SDK supports Python and TypeScript. A minimum viable server exposes:

- `tools/list` → "what can you do?"
- `tools/call` → execute a tool
- (Optionally) `resources/list`, `prompts/list`

Use it when you have an **internal API** you want Claude to call across many sessions.

## 2. Agent frameworks

When tool use gets complex, you'll consider a framework. Honest opinion: most apps shouldn't use one. Start with raw API + tool loop. Reach for a framework only when you have:
- multi-step planning
- multiple agents collaborating
- complex memory/state

Worth knowing:

| Framework | Strength | Notes |
|---|---|---|
| **Claude Agent SDK** | Anthropic-native, mirrors Claude Code's design | Best if you're building Claude-first agents |
| **LangChain / LangGraph** | Mature, lots of integrations | Heavy abstraction; debugging is harder |
| **LlamaIndex** | RAG-focused | Excellent if your problem is "answer questions over my docs" |
| **AutoGen / CrewAI** | Multi-agent | Use only when you genuinely need multiple agents |
| **Vercel AI SDK** | Frontend streaming UX | Good if you're shipping a web app |
| **DSPy** | Programmatic prompt optimization | Research-y but powerful |

A common path: prototype with raw SDK → realize you need 1-2 framework features → cherry-pick the smallest framework that gives them.

## 3. RAG — Retrieval Augmented Generation

The pattern for letting Claude answer over your private knowledge:

```
Query → retrieve top-K relevant chunks from your data → stuff into prompt → Claude answers
```

The hard parts are **retrieval quality**, not prompting:

- **Chunking** — how you split source docs into searchable pieces. 200–800 tokens, with overlap.
- **Embedding model** — turns text into vectors. Options: OpenAI text-embedding-3, Cohere, Voyage AI, open-source models.
- **Vector database** — stores vectors with metadata. Options below.
- **Hybrid retrieval** — combine vector similarity with keyword (BM25) for best recall.
- **Reranking** — a second model reorders top-K by relevance (Cohere Rerank, Voyage Rerank).
- **Citation** — always have the answer point back to which chunks it used.

### Vector databases

| DB | Strength | When |
|---|---|---|
| **pgvector** (Postgres extension) | One DB to rule them all | Most teams should start here |
| **Pinecone** | Managed, fast | Don't want to run anything |
| **Weaviate** | Open source, hybrid built-in | Self-host, hybrid search |
| **Qdrant** | Fast, easy local dev | Self-host, simple |
| **Chroma** | Dead simple, embedded | Local prototyping |
| **Turbopuffer** | Cheap for cold data | Cost-sensitive at scale |

### When NOT to use RAG

- The doc fits in the context window (just paste it).
- Prompt caching makes paste-it cheaper than retrieval.
- You need exact lookups → use SQL or a search engine.

Claude's 1M context window plus caching has shrunk the "must do RAG" zone considerably. Always check the alternative first.

## 4. Evaluations

You cannot ship production AI without **evals**. Evals are tests for prompts.

Anatomy:
- **Dataset**: 50–500 representative inputs with expected outputs (or grading rubric).
- **Runner**: executes the prompt against each input.
- **Grader**: scores each output (exact match, regex, "LLM-as-judge", human review).
- **Reporter**: tracks score over time as you change prompts/models.

Tools:
- **Anthropic Workbench** evals (built-in)
- **Promptfoo** (OSS, lightweight)
- **Inspect** by UK AISI (research-grade)
- **Braintrust**, **LangSmith**, **Helicone** (commercial)

Don't change a prompt without re-running the evals. The whole point.

## 5. Observability for AI apps

Beyond standard APM, you need:
- **Trace per request** — every LLM call, tool call, and retrieval in a single trace
- **Token & cost per request**
- **Prompt version** the call used
- **User feedback** (thumbs up/down or score)
- **Hallucination flags** when detected

Tools: **Langfuse** (OSS), **Helicone**, **Arize**, **LangSmith**, **Honeycomb** (general APM with AI-friendly tagging).

If you can't yet answer "which prompt version cost the most last week?" — go install one.

## 6. Guardrails & safety

For user-facing apps you'll want:
- **Input filters** — PII detection, prompt-injection detection
- **Output filters** — toxicity, PII, hallucination-risk patterns
- **Refusal handling** — when Claude refuses, fall back gracefully

Libraries: **NeMo Guardrails**, **Guardrails AI**, **LLM Guard**.

For most B2B apps, a thoughtful system prompt + a few regex filters is enough. Don't over-engineer.

## 7. Prompt management

Once you have >5 prompts in production:
- Store prompts in **version control** as plain files, not in code strings.
- Tag prompt versions in every API call.
- A/B test prompt versions with real users.
- Tools: **PromptLayer**, **Mirascope**, **Latitude**, or roll your own (often best).

## 8. Local model knowledge (worth having)

Even if you ship on Claude, knowing the local-LLM stack helps you reason about tradeoffs:
- **Ollama** / **LM Studio** — run open models locally
- **vLLM** — high-throughput serving
- **Llama**, **Mistral**, **Qwen** — leading open-weights families

Use cases for local: hard data-residency constraints, ultra-high volume, offline. Otherwise Claude is faster and better.

## 9. Putting it together — a reference stack

A production Claude app in 2026 usually looks like:

```
Frontend
  ↓ (streaming, Vercel AI SDK or websockets)
API gateway / backend
  ↓
Orchestration layer
  ├─ Claude API (Sonnet for most, Haiku for triage, Opus for hard)
  ├─ Prompt cache for big contexts
  ├─ Tool implementations (your business logic)
  ├─ MCP servers (for shared tools across apps)
  └─ RAG: embedder + vector DB + reranker (if needed)
Observability
  ├─ Langfuse / Helicone for traces
  └─ Eval suite running on a schedule
Data
  ├─ Postgres (+ pgvector if RAG)
  └─ Object storage for big files
```

You won't need all of this on day one. Build it as your problems demand.

---

## Checklist

- [ ] I've installed at least one MCP server in Claude Desktop.
- [ ] I've built at least one custom MCP tool.
- [ ] I understand when to choose RAG vs. long context.
- [ ] I've set up an eval suite for one prompt.
- [ ] I have one observability tool running on my API calls.
- [ ] I can sketch a production architecture for a Claude app.

## Capstone Exercise

Build a **RAG-powered chatbot over your own documents**:

1. Pick a corpus (your notes, a book you own, internal docs).
2. Chunk it, embed it, store in pgvector (or Chroma for simplicity).
3. Build retrieval (top-K + optional rerank).
4. Wire to Claude with citation in the response.
5. Build a 20-question eval set and measure precision of citations.
6. Compare against just-stuffing-everything-in-the-1M-context baseline. Which wins on accuracy? On cost?

Save the code + eval results to `/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-13-ai-tools-ecosystem/rag-bot/`.

## Further reading

- modelcontextprotocol.io — MCP spec & SDKs
- "Building Effective Agents" — Anthropic engineering blog
- "RAG is Dead" / "RAG is Not Dead" discourse — pick a side after experimenting
- Langfuse / Helicone docs
