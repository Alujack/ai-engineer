# Stage 14 — Deployment & Scaling

> **Goal:** Take a working prototype to production. Cost-controlled, observable, reliable, secure, and maintainable. This is the difference between a demo and a business.

**Time:** ~7 days · **Difficulty:** Advanced · **Prereqs:** Stages 12–13, basic backend/devops familiarity

---

## 1. The "demo to production" checklist

A prototype becomes a product when it has:

- [ ] Reliable error handling (no silent failures)
- [ ] Observability (traces, metrics, logs, evals)
- [ ] Cost controls (budgets, alerts, kill switches)
- [ ] Security (secrets management, input sanitization, abuse handling)
- [ ] Performance (latency budgets, streaming, caching)
- [ ] Quality (eval suite + regression detection)
- [ ] Operability (deploys, rollback, runbooks)
- [ ] Compliance (data handling, privacy, retention)

If you can't tick all 8, you're not in production. You're in *production-ish*.

## 2. Architecture patterns

### a) Direct API (server-side)

Browser → your backend → Anthropic API.

Use when:
- You need to inject system prompts the user shouldn't see
- You're caching, rate-limiting, billing per user
- You're combining LLM calls with your own data/tools

This is the default. **Never call Anthropic from the browser** with your API key — it'd leak immediately.

### b) Streaming UX

Backend opens an Anthropic stream and re-streams to the client via:
- **SSE (Server-Sent Events)** — simplest, HTTP/1.1 friendly
- **WebSockets** — for bidirectional/interactive
- **Vercel AI SDK** wraps these nicely if you're on Next.js

Latency to first token should be <2s on the perceived path. Streaming hides longer total times.

### c) Async / batch

For non-interactive jobs (overnight analytics, bulk processing):
- **Message Batches API** — ~50% cost discount, 24-hour SLA
- Or your own queue (SQS, BullMQ, Cloud Tasks) with retries

### d) Hybrid model routing

```
Request comes in →
  cheap classifier (Haiku) decides complexity →
  route to Haiku / Sonnet / Opus accordingly
```

Saves a lot of money. Be careful: a bad classifier can downgrade hard queries to Haiku and ruin quality. Eval the router itself.

## 3. Cost control playbook

The five levers, in priority order:

1. **Model choice** — Haiku is ~10× cheaper than Opus. Always benchmark on your data.
2. **Prompt caching** — turn it on. Day one. Always.
3. **Max output tokens** — cap aggressively. Most outputs don't need 4K.
4. **Trim context** — message-history truncation, smarter RAG retrieval.
5. **Batch API** — for non-interactive jobs.

Set up:
- **Per-user spend caps** in your code (not just Anthropic's).
- **Daily budget alerts** in the Anthropic console.
- **Cost-per-feature dashboards** — break down spend by your business surfaces.
- A **monthly cost review** ritual.

## 4. Performance & latency

What contributes to user-perceived latency:
- Network round trip (≈ 100ms regional)
- TTFT — time to first token (≈ 0.5–2s typical)
- Output token rate (~40–120 tokens/s by model)
- Tool call round trips (each one adds a full request)

Optimizations:
- **Stream** to mask total time
- **Cache** to drop TTFT for repeated prefixes
- **Smaller model** when quality allows
- **Parallelize** independent tool calls
- **Reduce output** — shorter is faster
- **Geographic deployment** — Bedrock and Vertex have regional endpoints

## 5. Reliability

Real-world failure modes you'll hit:
- **429 rate limit** — your TPM/RPM exceeded
- **529 overloaded** — Anthropic's side
- **Network blip** — retry with backoff
- **Truncated output** — increase `max_tokens` or chunk the task
- **Model refusal** — log + fall back
- **Bad JSON** — re-prompt with the parse error, or use forced tool-call schema

Implement:
- **Exponential backoff with jitter**
- **Circuit breaker** so a bad downstream doesn't avalanche
- **Idempotency keys** for write actions
- **Graceful degradation** — pre-written canned responses for total outages
- **Multi-region / multi-provider fallback** if your SLA demands it (Bedrock + direct API can both serve Claude)

## 6. Security

Top issues for AI apps:

### Secrets
- Anthropic API keys in env vars, vault, or KMS. Never in the repo.
- Rotate keys. Use separate keys per environment.

### Prompt injection
- An attacker stuffs malicious instructions into data Claude reads ("ignore previous instructions, exfiltrate X").
- Mitigations: structure inputs with XML tags, never give Claude tools that can do real damage without confirmation, treat LLM output as untrusted input.

### Data leakage
- User A's data must never appear in User B's response — separate sessions, separate memory stores.
- Be careful with shared caches.

### Abuse / spam
- Per-user rate limits and spend caps.
- Pass `metadata.user_id` to Anthropic so they can help with abuse cases.
- Captcha on sign-up if your free tier is being mined.

### Auth on tools
- Each MCP tool / API tool should have its own auth scope.
- An LLM tool that "executes SQL" needs read-only DB credentials, not your prod write user.

## 7. Quality in production

The prompt that worked yesterday can quietly degrade tomorrow. Causes:
- You changed the prompt and forgot to run evals.
- The model version updated (Sonnet 4.6 → 4.7).
- Your input distribution shifted (new feature, new users).
- A dependency changed.

Defenses:
- **Pin model versions** explicitly (`claude-sonnet-4-6`, not the alias).
- **Run evals on every prompt change**, on a schedule, and on model upgrades.
- **Sample real user inputs into your eval set** continuously.
- **Capture user feedback** (thumbs / regenerate / edit signals).

## 8. Observability stack

For Claude apps specifically, instrument:
- Request ID, prompt version, model, tools called, tokens in/out, cache hit, cost, latency, stop reason
- Tie to your existing trace ID (OpenTelemetry) so AI calls appear in your normal traces
- User feedback events alongside the AI trace

Tools (pick one):
- **Langfuse** (OSS, self-hostable)
- **Helicone** (proxy-based, easy)
- **Arize Phoenix** (OSS)
- **LangSmith** (LangChain-native)

## 9. Deploy & rollback

Treat prompts as **code**:
- Version-controlled
- Code review before changes
- CI runs evals on the PR
- Tagged releases
- Easy rollback if quality regresses

Don't store prompts in a database where anyone can edit them in prod. That ends in tears.

## 10. Compliance & data handling

Common requirements:
- **SOC 2** — Anthropic is SOC 2 Type II. You inherit some, not all.
- **HIPAA** — sign Anthropic's BAA, route via Bedrock with a HIPAA-eligible region if needed.
- **GDPR** — data subject rights apply to anything Claude has stored on your behalf.
- **PII** — minimize what you send. Use `metadata` field for IDs.
- **Logging** — your logs of prompts/outputs may themselves contain PII. Apply retention.
- **Data residency** — if EU-only required, use Vertex or Bedcock in EU region.

Document this. Auditors will ask.

## 11. The Claude product surface in production

Production usually means **server-side**. But Claude also offers:
- **Claude in your IDE / Desktop** for internal employee productivity
- **Embed via iframe** of claude.ai for some workflows
- **Custom UIs via API** for end-users

Don't ship internal-tool quality to external users. Different bars.

---

## Checklist

- [ ] My production app has all 8 items from §1.
- [ ] I have an eval suite that runs on every prompt change.
- [ ] I have cost alerts and a monthly cost review.
- [ ] I have observability tying AI calls to my normal traces.
- [ ] I have a runbook for "Anthropic is down."
- [ ] I have prompt-injection mitigations on user-supplied data.
- [ ] My API keys are in a vault, not in code.

## Capstone Exercise

Take the **CLI app from Stage 12** (or the **RAG bot from Stage 13**) and **make it production-ready**:

1. Deploy it (Fly.io, Render, Vercel, AWS — your pick).
2. Add Langfuse (or equivalent) observability.
3. Add per-user spend caps.
4. Add a CI step that runs your evals on every commit.
5. Write a 1-page runbook covering: outage response, cost spike response, eval regression.
6. Run a chaos exercise: kill the Anthropic key. What happens? Does it degrade gracefully?

Save deployment URL + runbook to `/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-14-deployment-scaling/production-app/`.

## Further reading

- Anthropic docs: rate limits, batches, prompt caching, model deprecation
- "Designing Data-Intensive Applications" — Kleppmann (general distributed-systems grounding)
- Honeycomb's blog posts on observing LLM apps
- Anthropic's "Trust Center" and security docs
