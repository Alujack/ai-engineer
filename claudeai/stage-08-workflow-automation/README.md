# Stage 8 — Workflow Automation

> **Goal:** Stop doing things by hand. Wire Claude into your everyday tools so emails get triaged, reports get drafted, and notifications get summarized while you sleep.

**Time:** ~5 days · **Difficulty:** Intermediate · **Prereqs:** Stages 3–4

---

## 1. The automation decision matrix

Before automating, ask:

| Question | If yes |
|---|---|
| Does this task repeat ≥ weekly? | Automate it |
| Does it take ≥ 10 min each time? | Automate it |
| Is it cognitively expensive to re-context? | Automate it |
| Is the cost of one bad output high? | Add human review |
| Does it involve money / sending external messages? | Add human review |

Most knowledge-work automation should follow the **draft → human approve → send** pattern, not full autonomy.

## 2. The tooling landscape

| Tool | Strength | When to use |
|---|---|---|
| **Zapier** | Huge integrations, easy | Quick wins, non-engineers |
| **Make.com (Integromat)** | Visual, scenarios, branching | Slightly more complex flows |
| **n8n** | Self-hosted, open source | Privacy, complex logic, low cost |
| **Pipedream** | Code-first, JS/Python | Engineers wanting code |
| **Claude Code + scripts + cron** | Total control, your stack | When you can host yourself |
| **MCP servers + Claude Desktop** | Direct tool access from Claude | Interactive automations |

All of these can call the Claude API. Pick by who's maintaining it, not by hype.

## 3. Anatomy of a Claude-powered workflow

A workflow is always:

```
TRIGGER → FETCH context → LLM step → DECIDE → ACT → LOG
```

Example — **inbox triage**:

```
TRIGGER: new email arrives in inbox
FETCH:   email body, sender, subject, recent thread history
LLM:     classify {category, priority, suggested action, draft reply}
DECIDE:  if category=spam → archive; if priority=high → Slack me; else → draft reply
ACT:     label, archive, send Slack, save draft
LOG:     append a row to a Google Sheet for weekly review
```

The Claude call is **one step**, not the whole pipeline. Don't try to make one prompt do everything.

## 4. Five high-ROI workflows to build first

### a) Email triage & draft replies
Gmail → Claude classifies + drafts → drafts saved (never auto-sent) → you review and send.

### b) Slack/Discord daily digest
Pull the day's messages from N channels → Claude summarizes by channel → posts to a personal channel each evening.

### c) Calendar prep brief
Each morning, fetch today's meetings + attendees → Claude pulls past notes/emails per attendee → produces a 1-page brief.

### d) Weekly report from raw data
GitHub activity + Linear tickets + calendar → Claude writes "what I shipped this week" in your voice → drops in Notion.

### e) Content repurposing pipeline
New YouTube video published → transcript fetched → Claude generates LinkedIn post, X thread, newsletter blurb → drafted for review.

## 5. Prompt patterns for automations

Automations differ from chats in important ways:

- **No follow-ups** — the prompt has to work first time.
- **Output must be parseable** — structured JSON, never prose.
- **Failure must be graceful** — return `{"action":"skip","reason":"..."}` rather than crashing.

```xml
<task>Classify this incoming email and decide an action.</task>
<email>{{email_body}}</email>
<output_format>
Return ONLY JSON matching:
{
  "category": "spam|newsletter|customer|internal|important",
  "priority": "low|medium|high",
  "suggested_action": "archive|label|draft_reply|notify_me",
  "draft": "string or null",
  "reasoning": "≤30 words"
}
Do not include markdown fences. Do not include any text outside the JSON.
</output_format>
```

Force JSON with **prefilling** (Stage 4) when calling the API.

## 6. Cost control

Automations run silently — bills creep up. Mitigations:

- Use **Haiku** for triage/classification; reserve **Sonnet/Opus** for drafting.
- Enable **prompt caching** when the system prompt is long and constant.
- Add a **monthly spend cap** in the Anthropic console.
- Log token counts per run; alert if a single run >5K tokens.

## 7. Reliability patterns

- **Retry on transient errors** (rate limits, network) with exponential backoff.
- **Validate JSON output** before acting on it. If invalid → log + skip + alert.
- **Idempotency keys** for write actions, so a retry doesn't double-send.
- **Dry-run mode** during development — log what *would* happen.
- **Kill switch** — one env var or feature flag that disables all writes.

## 8. Privacy & data handling

- Anthropic API: data is **not used for training** by default. Confirm in your settings.
- If you pipe sensitive data (medical, legal, financial), check your contract / BAA.
- Strip PII before sending if you don't need it. Use the API's `metadata` field for user IDs, not in the prompt.

## 9. MCP for desktop automations

**Model Context Protocol** lets Claude Desktop (and Claude Code) talk directly to local tools — your filesystem, GitHub, Notion, Slack — via standardized servers. Stage 13 goes deep; here's the one-liner:

> If your automation is interactive ("Hey Claude, draft me a Slack message about today's meeting"), MCP beats a scheduled Zapier flow. Use both: MCP for interactive, Zapier/cron for scheduled.

## 10. Anti-patterns

- **One-shot mega prompts** that try to do classification + drafting + sending. Split them.
- **Full autonomy on irreversible actions** (sending emails to clients). Always add review.
- **Hidden costs** — recursive agent calls without spending caps.
- **No logging** — you can't debug what you can't see.

---

## Checklist

- [ ] I've built one Zapier (or equivalent) flow that calls Claude.
- [ ] I've shipped one personal automation I actually use weekly.
- [ ] My automations log tokens and cost per run.
- [ ] I always force structured JSON output for automations.
- [ ] I have a kill switch and a dry-run mode.

## Capstone Exercise

Build a **daily personal brief** automation:

1. Trigger: 7 a.m. on a schedule.
2. Inputs: today's calendar, yesterday's email count by category, weather, top 3 GitHub notifications.
3. Claude produces a single 250-word brief in your voice.
4. Delivery: posted to your personal Slack DM (or emailed).
5. Add cost logging.
6. Run for 1 week, iterate on the prompt based on what's actually useful.

Save the prompt, the flow export, and one week of sample outputs to `/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-08-workflow-automation/daily-brief/`.

## Further reading

- n8n + Anthropic node docs
- Zapier "AI by Zapier" path templates
- Anthropic blog on prompt caching (cost relevance)
