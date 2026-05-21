# Stage 6 — Research & Summarization

> **Goal:** Turn Claude into a research analyst that reads what you can't, extracts what matters, and gives you defensible, cited answers.

**Time:** ~5 days · **Difficulty:** Intermediate · **Prereqs:** Stages 1–4

---

## 1. Three types of summary — and why "summarize this" fails

When users say "summarize" they actually want one of these, and Claude can't read your mind:

| Type | Audience question it answers |
|---|---|
| **TL;DR** | "What is this in 3 sentences?" |
| **Executive summary** | "What changes for the decision-maker?" |
| **Structured extraction** | "What are the entities/dates/numbers/decisions?" |
| **Comparative synthesis** | "How does this differ from X?" |
| **Argument map** | "What are the claims and evidence?" |

Always tell Claude which one and for whom.

```
Produce an executive summary for a CFO who has not read this report.
- Length: ≤250 words.
- Cover: key finding, $-impact, risks, recommendation.
- No background — assume they know the company.
```

## 2. The "quote-then-claim" pattern (anti-hallucination)

For factual research, force Claude to ground every claim in the source:

```
For each claim in your summary, immediately follow it with a verbatim
quote from the source in <quote>...</quote> tags. If you cannot find
a quote that supports the claim, do not include the claim.
```

This single instruction eliminates the vast majority of hallucinated summaries.

## 3. Long-document analysis

For documents in the 50K–1M token range:

1. **Paste/attach the document first**, instructions last.
2. Use **section headers**: `<document title="Q3 Earnings">...</document>`.
3. Ask Claude to **enumerate sections first**, then ask follow-ups by section.
4. For very large inputs, use the **map-reduce** chain:
   - Map: summarize each chunk independently.
   - Reduce: merge the chunk summaries into a single answer.
5. Enable **prompt caching** (Stage 12) if you'll query the same doc many times — it saves ~90% on re-reads.

## 4. Comparative research

You have 5 reports / 5 PDFs / 5 transcripts. Don't dump them all in at once — accuracy collapses.

Better workflow:

```
Step 1: For each doc, extract a fixed schema:
{title, author, date, thesis, top_3_claims, methodology, weaknesses}
Step 2: Provide all 5 schemas to Claude.
Step 3: Ask comparative questions ("Which has the strongest evidence for X?")
```

Schema normalization makes documents comparable. This is the single biggest unlock for multi-source research.

## 5. Citation-aware research

If you need defensible citations:

- Number every paragraph of the source.
- Tell Claude: "Cite the paragraph number(s) for every claim, like [¶12]."
- Have a final review pass: "Re-check each citation. If the cited paragraph does not support the claim, flag it."

For web-sourced research, you must verify the URL exists. Claude can hallucinate plausible-looking URLs.

## 6. Working with PDFs

- **Text PDFs** (born digital): Claude reads cleanly.
- **Scanned PDFs**: Claude's vision handles short scans; for hundreds of pages, OCR first (Adobe, Tesseract, Mistral OCR) then feed text.
- **Tables in PDFs**: ask Claude to "extract Table 3 as a Markdown table; preserve all values; if a value is unclear, mark it `??`."
- **Footnotes**: ask explicitly — Claude can ignore them otherwise.

## 7. Literature reviews

```
You are conducting a literature review on [TOPIC].

I will paste 10 abstracts. For each:
1. Author / year
2. One-sentence finding
3. Methodology (RCT / observational / meta-analysis / theory)
4. Sample size (n=?)
5. Limitation worth noting

Then write a 300-word synthesis that:
- Groups papers by stance
- Flags where they agree vs disagree
- Identifies the biggest gap in the literature
```

## 8. Interview & transcript analysis

For qualitative research:

```
You are a qualitative researcher coding interviews.

I will paste a transcript. Do the following:
1. Identify recurring themes (use 5–8 short labels).
2. For each theme, list verbatim quotes (≥3) with line numbers.
3. Flag any moment where the interviewee contradicted themselves.
4. Suggest 2 follow-up questions for the next interview.
```

## 9. Avoiding common research failures

- **"Summarize" without role/audience** → generic mush.
- **No anchoring to source** → confident hallucinations.
- **Too many documents at once** → Claude cherry-picks early ones.
- **Asking opinion questions of factual sources** → loaded answers.
- **Not asking for what's missing** — "What questions remain unanswered after reading this?" is gold.

## 10. The "devil's advocate" pass

After any summary or recommendation:

```
Now critique your own summary as a skeptical reviewer:
- What did you overstate?
- What evidence is weakest?
- What alternative interpretation is plausible?
```

You'll be amazed how often this catches real problems.

---

## Checklist

- [ ] I never write "summarize this" without specifying type and audience.
- [ ] I use quote-then-claim for factual research.
- [ ] I've run a map-reduce summary on a 100K+ token doc.
- [ ] I've done a comparative analysis using a normalized schema.
- [ ] I always run a devil's-advocate pass on important outputs.

## Capstone Exercise

Pick **three long PDFs on the same topic** (research papers, industry reports, or competitor whitepapers).

1. Extract a normalized schema from each.
2. Produce a 500-word comparative synthesis with quote-anchored claims and paragraph citations.
3. Generate a 1-page decision memo for an executive who must choose between the three approaches.
4. Run a devil's-advocate pass and revise.

Save to `/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-06-research-summarization/synthesis/`.

## Further reading

- Anthropic blog on long-context retrieval evaluation
- "How to Read a Book" — Adler & Van Doren (still relevant)
- Elicit.com, Consensus.app for AI research workflows you can study
