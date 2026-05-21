# Stage 12 — API & Integration

> **Goal:** Stop being a Claude *user* and start being a Claude *developer*. Call the API directly, handle streaming, tool use, prompt caching, structured output, and errors — the foundations of every production AI app.

**Time:** ~7 days · **Difficulty:** Intermediate-Advanced · **Prereqs:** Stages 3, 4, 7. Comfort with HTTP and one of Python/Node.js.

---

## 1. The mental shift

| In the chat UI | On the API |
|---|---|
| Claude remembers the chat | You build the message history every call |
| One prompt at a time | You design prompts as functions |
| Costs hidden | You see every token, every cent |
| One default model | You pick the model per call |
| One implicit user | You build multi-tenant systems |

The API is a **stateless function**: `messages → response`. Everything else is up to you.

## 2. Setup

```bash
# Python
pip install anthropic

# Node / TypeScript
npm install @anthropic-ai/sdk
```

Set `ANTHROPIC_API_KEY` in your env. Never hardcode keys. Never commit them.

Hello world (Python):

```python
import anthropic
client = anthropic.Anthropic()

resp = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello, Claude!"}],
)
print(resp.content[0].text)
```

## 3. The Messages API shape

```python
client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system="You are a helpful coding assistant.",   # the system prompt
    messages=[
        {"role": "user",      "content": "What's a closure?"},
        {"role": "assistant", "content": "A closure is..."},
        {"role": "user",      "content": "Show me one in Python."},
    ],
    temperature=0.2,
    stop_sequences=["\n\nUser:"],
)
```

Key points:
- `system` is separate from `messages` — use it for role/instructions, not data.
- `messages` strictly alternate `user` / `assistant`.
- `max_tokens` is the **output** cap. The model stops there.
- `temperature` 0–1. Use 0–0.2 for structured tasks, higher for creative.

## 4. Streaming

For UX (typing effect) and faster time-to-first-token:

```python
with client.messages.stream(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Write a haiku."}],
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

In a real app you pipe `text_stream` to a websocket or SSE channel.

## 5. Tool use (the foundation of agents)

You define tools as JSON schemas; Claude decides when to call them; you execute and feed results back. This is the **agent loop**.

```python
tools = [{
    "name": "get_weather",
    "description": "Get current weather for a city",
    "input_schema": {
        "type": "object",
        "properties": {"city": {"type": "string"}},
        "required": ["city"]
    }
}]

resp = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    tools=tools,
    messages=[{"role": "user", "content": "Is it raining in Tokyo?"}],
)

# If resp.stop_reason == "tool_use":
#   find the tool_use block, run YOUR get_weather(), then
#   call the API again with a tool_result message.
```

The full loop (pseudo-code):

```
while True:
    response = call_api(messages, tools)
    if response.stop_reason == "end_turn":
        break
    for tool_call in response.tool_uses:
        result = run(tool_call.name, tool_call.input)
        messages.append(assistant_with_tool_use(tool_call))
        messages.append(user_with_tool_result(tool_call.id, result))
```

This is how you build agents: a loop that lets Claude call tools until it's done.

## 6. Structured output

Force JSON via:
- Strong prompt + format example
- **Prefill** the assistant turn with `{`
- Or use the `tool_choice` trick: define a tool that *is* your schema and force it.

```python
# tool_choice = {"type": "tool", "name": "save_extraction"}
# Define `save_extraction` with your schema. Claude must call it.
```

This is the most reliable way to get strict JSON.

## 7. Prompt caching — the most important optimization

If you reuse the same long context (a system prompt, a doc, a codebase) across many calls, **cache it**. Costs drop ~90% and latency drops on cache hits.

```python
client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system=[
        {
            "type": "text",
            "text": LONG_SYSTEM_PROMPT,
            "cache_control": {"type": "ephemeral"},
        }
    ],
    messages=[...],
)
```

Cache TTL is 5 minutes by default; refresh on each call. Set up your build so the **biggest static block comes first** — caching is order-sensitive.

**Build every production app with caching from day one.** Retrofitting is annoying.

## 8. Vision

```python
client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": [
            {"type": "image", "source": {"type": "base64", "media_type": "image/png", "data": IMG_B64}},
            {"type": "text", "text": "What's broken in this UI?"}
        ]
    }],
)
```

## 9. Extended thinking

For hard reasoning, enable extended thinking on supported models. You get a longer internal reasoning block; final answer comes after. Costs more, but accuracy on multi-step problems jumps.

## 10. Error handling

The errors you actually hit in production:

| Error | What to do |
|---|---|
| 429 rate limit | Exponential backoff, respect `retry-after` |
| 529 overloaded | Backoff with jitter |
| 400 invalid request | Bug — log and fail |
| 401 auth | Bug — fail fast, alert |
| Output truncated | Increase `max_tokens` or chain the call |
| Bad JSON | Re-prompt with the parse error included |
| Refusal | Re-prompt with clarification or accept |

Use the SDK's built-in retry logic; don't write your own from scratch.

## 11. Cost control

- Pick the **smallest model that works**. Test Haiku before Sonnet, Sonnet before Opus.
- **Cap `max_tokens`** at what you actually need.
- **Cache** aggressively (§7).
- **Truncate** message history beyond what's needed.
- **Batch** non-urgent work via the Message Batches API for ~50% discount.
- Add per-environment **spend caps** in the Anthropic console.

## 12. Observability

Log every call:
- request ID, model, input tokens, output tokens, cache hit/miss, cost
- prompt version, user/tenant ID
- latency
- final stop reason

Build a dashboard. You will need it. Anthropic returns most of these in response headers and the `usage` field.

## 13. Anthropic Console & Workbench

- **Workbench** — UI for experimenting with prompts and saving versions.
- **Evals** — run your prompt against a dataset and grade with another model.
- **Logs** — recent API calls (depending on your plan).

Use the Workbench to iterate on the prompt, then copy it into code.

## 14. Multi-tenant patterns

Real apps have many users. Patterns:
- Pass `metadata.user_id` to Anthropic — helps abuse handling.
- **Never** share message history between users.
- Track per-tenant spend.
- Apply per-tenant rate limits in your own code, not just Anthropic's.

## 15. Other providers (AWS Bedrock, GCP Vertex)

The same models are also available on **Amazon Bedrock** and **Google Vertex**. Use them when:
- You already have committed AWS/GCP spend.
- Data-residency requirements demand it.
- Your security team needs the cloud's controls.

API differs slightly. The Anthropic SDK has Bedrock/Vertex modes.

---

## Checklist

- [ ] I've made a real API call from code.
- [ ] I've implemented streaming.
- [ ] I've built a tool-use loop with at least one tool.
- [ ] I've enabled prompt caching on a long system prompt.
- [ ] I'm logging input/output tokens and cost per call.
- [ ] I have error handling for 429 and 529.
- [ ] I've used the Anthropic Workbench.

## Capstone Exercise

Build a **mini Claude-powered CLI app** of your choice. Suggestions:

- Inbox triage that reads your email and labels it
- A coding assistant for your favorite language
- A research helper that calls a search tool + Claude

Requirements:
- Uses the Anthropic SDK directly (not via a wrapper framework yet)
- Implements at least one tool
- Streams the response
- Uses prompt caching
- Logs tokens and cost per run
- Handles 429/529 with retries

Save the code to `/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-12-api-integration/cli-project/`.

## Further reading

- Anthropic API docs (docs.claude.com)
- Anthropic Cookbook on GitHub
- "Building Effective Agents" — Anthropic engineering blog
