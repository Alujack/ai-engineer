# Stage 11 — Real-world Use Cases

> **Goal:** See how Claude is deployed in legal, finance, healthcare, education, sales, support, marketing, and operations — with concrete templates, pitfalls, and compliance considerations.

**Time:** ~5 days · **Difficulty:** Intermediate · **Prereqs:** Stages 3–6, 8

---

## How to use this stage

This is a **reference catalog**, not a tutorial. Read the section for your domain in depth; skim the others to steal patterns. Each section has: the value, the prompts that work, the pitfalls, and the compliance notes.

---

## 1. Legal

**What works:**
- Contract review (red-flag clauses, missing protections, deviations from your template)
- Due-diligence document summarization
- Drafting first-pass NDAs, MSAs, SOWs
- Legal research (paired with citation databases, not as a substitute)
- Discovery-document triage

**Sample prompt — contract review:**
```
You are a contracts attorney for [SIDE]. Review the agreement in <contract>.
Output:
- Red flags (severity: deal-breaker | major | minor)
- Missing standard protections we'd expect
- Clauses that deviate from market norms
- Suggested redlines with rationale
Cite section numbers from the contract for every finding.
```

**Pitfalls:** Claude can hallucinate case law and statute numbers. Never cite without verification. Don't use for jurisdiction-specific filings without an attorney.

**Compliance:** privilege questions, BAA-equivalent for confidential client data, retention policies.

---

## 2. Finance & Accounting

**What works:**
- Earnings-report summarization with structured extraction (revenue, guidance, segments)
- Reconciliation explanations (why does this number not match?)
- Variance analysis (what drove the $X gap?)
- Investment thesis drafting from primary sources
- Tax research first-pass

**Sample prompt — variance analysis:**
```
Below is budget vs actual for Q3.
Identify the three accounts with the largest unfavorable variances.
For each:
- Quantify the variance ($ and %)
- Propose 3 hypotheses for the driver, ranked by likelihood
- Suggest the next data pull needed to confirm
```

**Pitfalls:** never let an LLM produce final numbers unverified. Sum every list it gives you. Cross-check totals against your source.

**Compliance:** SOX implications if AI participates in controls; document the human-in-the-loop.

---

## 3. Healthcare

**What works (with appropriate guardrails):**
- Medical-literature summarization
- Patient-letter drafting
- Clinical-note structuring
- Insurance/coding workflow assistance
- Patient-education materials

**Pitfalls:** absolutely **no** unsupervised clinical decisions, dosing, or diagnoses. Even drafts should be reviewed by a clinician.

**Compliance:** HIPAA in the US — sign Anthropic's BAA before sending PHI; equivalent in other jurisdictions (GDPR/HDS in EU, etc.). De-identify when in doubt.

---

## 4. Education

**What works:**
- Personalized practice questions
- Adaptive explanations (re-explain at lower/higher level)
- Lesson planning
- Grading rubrics + first-pass grading on open-ended work
- Translating teacher materials for ESL students

**Sample prompt — Socratic tutor:**
```
You are a Socratic tutor for a [GRADE] student on [TOPIC].
Rules:
- Never give the final answer. Ask one question at a time.
- After 3 questions, if the student is stuck, give a hint not an answer.
- After 5 questions, check whether they can explain back.
Tone: warm, patient, encouraging.
```

**Pitfalls:** student dependency on AI ("AI homework"). Use Claude as a tutor that asks questions, not an answer machine.

**Compliance:** FERPA (US), age-appropriate use, parental consent for under-13s.

---

## 5. Sales

**What works:**
- Prospect research (combine LinkedIn, company website, news → ICP fit + talking points)
- Personalized outreach drafts (one-to-one, not blast)
- Discovery-call note transcription → CRM updates
- Proposal drafting
- Objection-handling cheat sheets

**Sample prompt — outreach:**
```
You are an SDR writing a first-touch email.
Target: [name, title, company, 3 facts you know about them]
My offer: [product, who it's for, one specific outcome]
Constraints:
- Under 90 words
- No "I hope this email finds you well"
- Reference one specific detail about them
- Ask one question they'd want to answer
- Personalize the subject line for them
```

**Pitfalls:** mass-generated outreach destroys deliverability and brand. Always 1:1 review.

---

## 6. Customer Support

**What works:**
- Ticket triage (category, priority, sentiment)
- Draft replies for agents to review
- Macro suggestions
- Knowledge-base search & answer synthesis (RAG)
- Post-call summaries for CRM

**Pitfalls:** autonomous reply bots are fragile and frustrate users when they fail. Pair with strong fallbacks to humans.

---

## 7. Marketing

Covered in depth in [Stage 5](../stage-05-content-creation/). Additional production patterns:
- Persona generation from interview transcripts.
- Ad-copy variation testing (use sparingly — most variants are noise).
- SEO-cluster planning from a seed topic.
- Brand-voice guardrails as a Project system prompt.

---

## 8. Operations / Internal tools

**What works:**
- Policy document Q&A (RAG)
- SOP generation from interviews with the person who does it
- Meeting → action items → ticket creation
- New-hire onboarding chatbot per department
- IT helpdesk first-line triage

---

## 9. Software / Product (eng)

Covered in [Stage 7](../stage-07-coding-with-claude/) and [Stage 13](../stage-13-ai-tools-ecosystem/). Patterns specific to PM:
- Spec drafts from a recorded user interview.
- "Devil's advocate" review of your PRD.
- Release-notes generation from PR titles + descriptions.
- Competitive teardown of a rival's docs.

---

## 10. Research / Academia

Covered in [Stage 6](../stage-06-research-summarization/). Additional academic-specific patterns:
- IRB / ethics application drafting (review by humans!).
- Reviewer-2 simulation — pre-flight your paper.
- Citation chasing (verify every citation manually).

---

## Cross-cutting principles for ANY domain

1. **Human-in-the-loop** for anything client-facing, irreversible, regulated, or expensive.
2. **Evaluate on real domain data** — generic benchmarks lie.
3. **Document the AI's role** — what it did, what the human reviewed, what was signed off.
4. **Bias and fairness audits** — especially in hiring, lending, healthcare, education.
5. **Versioning** — track which prompt version generated which output. You'll need this for audits.
6. **Cost monitoring** — domain workflows scale, costs scale.
7. **Privacy & retention** — what's in the prompt may be stored. Know your contract.

---

## Checklist

- [ ] I can name 3 use cases in my own industry where Claude is high-leverage.
- [ ] I've drafted one production prompt for a real workflow in my domain.
- [ ] I know my industry's main compliance constraints.
- [ ] I've identified where human review is mandatory in my workflow.

## Capstone Exercise

Pick **your industry** (or the one you want to work in). Build a **mini playbook**:

1. List the top 5 use cases for Claude in this domain.
2. For each: who's the user, what's the input, what's the output, what's the risk.
3. Write the production prompt for the highest-ROI one.
4. List the compliance + bias considerations.
5. Sketch the human-review process.

Save as `/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-11-real-world-use-cases/my-domain-playbook.md`.

## Further reading

- Anthropic customer case studies (claude.com/customers)
- Stanford's "AI Index" report (annual industry usage data)
- Your industry's regulator guidance on AI use
