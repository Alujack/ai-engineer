# Stage 9 — Data Handling & Analysis

> **Goal:** Use Claude to load, clean, transform, query, and visualize structured data — without pretending it's a calculator. Know what to do in the prompt and what to do in code.

**Time:** ~5 days · **Difficulty:** Intermediate · **Prereqs:** Stages 3–4, basic spreadsheet or Python familiarity

---

## 1. The hard truth about LLMs and data

Claude is **excellent** at:
- Understanding messy schemas
- Writing SQL / Pandas / dbt code
- Spotting outliers in small datasets
- Explaining results in plain English
- Structured extraction from unstructured text

Claude is **bad** at:
- Doing arithmetic on long lists in its head
- Counting rows precisely
- Anything requiring exact aggregation over thousands of rows

So the pattern is always: **Claude writes the code; the runtime does the math.** Either you run that code, or you give Claude a sandbox (Claude's Analysis tool, or the API's code execution tool).

## 2. The data analysis loop

```
1. INSPECT     — what's the shape of the data?
2. CLEAN       — handle nulls, types, dupes
3. TRANSFORM   — joins, aggregations, derived columns
4. ANALYZE     — answer the actual business question
5. VISUALIZE   — chart or table
6. COMMUNICATE — explain to the audience
```

Claude is helpful at every step, but you have to **show it the data first**. Don't ask "what does my CSV tell me about churn?" without pasting a sample.

## 3. Loading data — what to paste

For small datasets (<5K rows / <100K tokens) you can paste the whole CSV.

For larger data:
- Paste the **schema + first 20 rows + last 5 rows + summary stats** (count, min, max, nulls per column).
- Or use Claude's **Analysis** tool / code execution — Claude writes Python that loads the full file.

Don't truncate randomly. Show edge cases (a row with nulls, a row with the max value, a typical row).

## 4. Structured extraction

The most underrated use of Claude. Turn unstructured text into rows.

```xml
<task>
Extract every contract obligation from the agreement below into a CSV.
</task>

<columns>
party, obligation, deadline, conditions, penalty_if_missed
</columns>

<contract>
{{paste contract here}}
</contract>

<output_format>
Output as CSV with header row. Quote fields containing commas.
For unknown values use empty string. Do not invent dates.
</output_format>
```

This works for resumes, invoices, medical records, transcripts, scraped pages — anywhere structure is implicit in prose.

## 5. SQL with Claude

Reusable pattern:

```
You are a SQL analyst. Given:
<schema>
users(id, email, country, created_at)
events(id, user_id, name, props_json, ts)
</schema>

<question>
How many users from Germany triggered the "checkout_completed" event
in the last 30 days, broken down by week?
</question>

Output:
1. The SQL (PostgreSQL dialect)
2. Two assumptions you made
3. How you'd verify the result is correct
```

Always ask for assumptions and verification. That's where bad SQL hides.

## 6. Pandas / Python data work

Same pattern but ask for Python:

```
Write Pandas code that:
- Loads `sales.csv`
- Filters to 2025 only
- Computes monthly revenue by region
- Outputs a pivot table sorted by total revenue

Use vectorized operations only. Comment any non-obvious step.
```

Then run it yourself. Don't trust the answer Claude embeds in its prose; trust the code's output.

## 7. Visualizations

Claude can generate charts via:
- **Matplotlib/Plotly code** you run
- **Mermaid** diagrams for flows
- **Markdown tables** for small results
- **HTML/SVG Artifacts** for inline interactive charts

For a quick chart in chat: ask for a self-contained Plotly HTML Artifact. You'll see it live in the side panel.

For embedding in reports: ask for matplotlib code that saves a `.png`, then drop the image in.

## 8. Cleaning recipes Claude is great at

- "Identify duplicate-looking rows even when whitespace/case differs."
- "List columns whose null rate exceeds 10%."
- "For each numeric column, list values that look like outliers (>3σ)."
- "Standardize the country column to ISO-2 codes."
- "Identify rows where `created_at` is later than `updated_at` (data error)."

## 9. Comparing two datasets

```
You will see two tables: <before> and <after>.

For each row matched by primary key `user_id`:
- Mark added / removed / changed / unchanged
- For changed: list which columns changed, old → new
Output a Markdown diff table.
```

Excellent for change reviews on small/mid datasets.

## 10. Charts of arguments, not just charts of data

Once you have results, the analyst's job is **what to do about it**. Have Claude write the **so-what**:

```
You see this monthly revenue trend: [paste].
Audience: head of sales.
Write:
- A one-sentence headline of what's happening
- The two most likely explanations
- The single most important question to investigate next
- A chart recommendation (chart type, axes, what to highlight)
```

## 11. Avoiding the most common data mistakes

- **Trusting in-prompt arithmetic** — always have Claude write code.
- **Truncating without sampling** — feed representative rows, not just the first 20.
- **Ignoring data types** — strings that look like numbers will silently break joins.
- **Skipping schema** — Claude can't infer what `status_code = 4` means without context.
- **Stuffing huge CSVs into the context** when a SQL query would do.

---

## Checklist

- [ ] I've extracted structured data from a long unstructured doc.
- [ ] I've written and run Claude-generated SQL against my own database.
- [ ] I've made Claude write a Pandas script I executed.
- [ ] I've generated a chart Artifact in chat.
- [ ] I know when to paste data vs. when to use code execution.

## Capstone Exercise

Pick a dataset you actually care about (your personal expenses, your fitness data, a public dataset, your app's analytics).

1. Define **three real questions** you want answered.
2. For each: have Claude write SQL or Pandas, run it, return results.
3. Generate one chart per question (Artifact or saved PNG).
4. Write a 1-page memo with headline, evidence, recommendation, and one open question — using the "so-what" pattern from §10.

Save to `/Users/microstore/Documents/teaching/ai-engineer/claudeai/stage-09-data-handling-analysis/analysis/`.

## Further reading

- "Storytelling with Data" — Cole Nussbaumer Knaflic
- Anthropic Analysis tool docs (claude.com/data-analysis)
- DuckDB + Python for local analytics on CSV/Parquet
