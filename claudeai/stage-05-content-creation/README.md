# Stage 5 — Content Creation

> **Goal:** Use Claude to produce high-quality blogs, scripts, social posts, newsletters, and marketing copy at 5–10× your unaided pace — without sounding like a robot.

**Time:** ~5 days · **Difficulty:** Beginner-Intermediate · **Prereqs:** Stages 3–4

---

## The honest principle

Claude writes **competent first drafts very fast**, but defaulting to its raw output is how the internet got flooded with bland "AI slop." The skill is using Claude as a **research assistant + draft generator + editor**, with you as the voice.

## 1. The content-pipeline pattern

For any piece of content, run four passes:

```
Pass 1: Research   → bullet points of facts, sources, quotes
Pass 2: Outline    → ordered structure, 1 line per section
Pass 3: Draft      → flesh out section-by-section
Pass 4: Edit       → tighten, voice-match, fact-check
```

Each pass is a separate prompt (often a separate chat). This produces **dramatically better** content than "write me a 1,000-word post on X."

## 2. Voice & style transfer

Train Claude on **your** voice by giving it 2–3 samples of your existing writing inside `<voice_samples>` tags.

```xml
<voice_samples>
<sample>[paste 200 words you wrote]</sample>
<sample>[paste another 200 words]</sample>
</voice_samples>

<task>
Write a 400-word post on [topic] that matches the voice in <voice_samples>.
Specifically match:
- Sentence rhythm (mostly short, some long)
- Lowercase chats-style or formal blog-style
- How I open and close pieces
- My vocabulary quirks
</task>
```

Save the voice block once and reuse it in a Project.

## 3. Blog posts

A reusable prompt skeleton:

```
You are a senior content editor. Write a [LENGTH]-word post for [AUDIENCE].

Title: [TITLE]
Thesis: [ONE SENTENCE]
Key points to cover: [3–5 bullets]
Voice: see <voice_samples>
Format:
- Hook in <80 words, no preamble
- 3–5 H2 sections, no H3 unless necessary
- One concrete example per section
- Close with a single actionable takeaway
Constraints:
- No "In today's fast-paced world..." or similar clichés
- No bulleted lists longer than 5 items
- No em-dash pile-ups
- One link maximum
```

## 4. Scripts (YouTube / podcast / TikTok)

Scripts ≠ blog posts. Structural rules:

- **Hook in 5 seconds** — state the payoff or the curiosity gap.
- **One idea per 30 seconds** of runtime.
- **Cuts and beats** marked in brackets: `[CUT TO whiteboard]`.
- **Read out loud** — Claude can't, you must. If you stumble, rewrite.

Prompt template:

```
Write a 90-second YouTube Shorts script on [TOPIC].
Structure:
[0-5s] Hook
[5-20s] Setup the problem
[20-60s] Show the answer with 2 examples
[60-85s] Counterintuitive twist
[85-90s] CTA: "follow for more"
Voice: conversational, direct, no jargon.
Output: script with [BRACKETED DIRECTIONS] for visuals.
```

## 5. Social posts (LinkedIn / X / Threads)

Each platform has a different feel.

| Platform | Length | Tone | Hook |
|---|---|---|---|
| LinkedIn | 150–250 words | Story → insight | Personal moment |
| X / Threads | 1–7 tweets, ≤280 each | Punchy, opinionated | Claim or contradiction |
| Instagram caption | 80–150 words | Aspirational, emoji OK | Question or list teaser |

Reusable prompt:

```
Convert this blog post into [PLATFORM] format following these rules: [PLATFORM RULES].
Generate 3 variations:
- A: story-led
- B: contrarian-take-led
- C: list-led
For each: title, body, suggested image direction.
```

## 6. SEO content

Claude is not a real-time SEO tool — pair it with one (Ahrefs, Semrush, Google Search Console).

Workflow:
1. **You** pull keywords and SERP data.
2. **You** give Claude: target keyword, search intent, top-3 competing titles, 5 "people also ask" questions.
3. Claude writes a post that **answers the question better** than the competitors.

Don't ask Claude to "rank #1" — it can't see the SERP. It can write better content if you bring the SEO data.

## 7. Newsletters

The best newsletter prompt I've seen:

```
You are writing one issue of a weekly newsletter.
Audience: [WHO]
Theme of the issue: [ONE LINE]

Structure (strict):
1. Subject line (<50 chars, curiosity gap, no clickbait)
2. Opening: one personal moment from the past week (3-4 sentences)
3. The Main Idea: 200-300 words, one insight, one example
4. Three quick links with one-sentence "why you should care"
5. A question for the reader to reply to
```

## 8. Avoiding "AI tells"

Telltale signs your content was clearly AI-written. Edit them out **every time**:

- "In today's fast-paced world..."
- "It's important to note that..."
- "Whether you're a beginner or an expert..."
- "Delve", "leverage", "robust", "seamless", "navigate the landscape"
- Three-item lists when two or four would be more natural
- Symmetric "On one hand... On the other hand..." pairs
- Em-dashes — used — like — this — everywhere

Add a final edit pass: *"Edit this draft to remove AI-tell phrases and clichés. Vary sentence rhythm. Cut 15%."*

## 9. Image and multimodal content

- For **thumbnails**: ask Claude to write 5 thumbnail-text variants (≤6 words each).
- For **slides**: have Claude output a Markdown deck (one slide per `---` separator), then convert with a tool like Marp.
- For **video b-roll**: ask Claude for a shot list keyed to the script.

---

## Checklist

- [ ] I have a saved voice-samples block I reuse.
- [ ] I always outline before drafting.
- [ ] I never publish raw first-draft output.
- [ ] I can name 5 AI-tell phrases I now reflexively cut.
- [ ] I have a content-creation Project set up.

## Capstone Exercise

Pick a topic you actually know. Produce a **mini content kit** for it:

1. One blog post (~800 words).
2. One LinkedIn post adapted from it.
3. One X thread (5–7 tweets) adapted from it.
4. One 60-second YouTube Shorts script.
5. One newsletter issue.

Save everything in `/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-05-content-creation/content-kit/`. Have one human (not Claude) read the blog post and tell you whether it reads like *you* or like *AI*.

## Further reading

- "Everybody Writes" — Ann Handley
- Tim Stoddart on AI content workflows
- Anthropic Prompt Library → writing-related prompts
