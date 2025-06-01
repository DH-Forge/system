# DH Forge Documentation Website

This directory contains the source code for the official DH Forge System (DHFS) documentation website, hosted at [docs.dh-forge.com](https://docs.dh-forge.com).

The documentation site provides comprehensive guides, the full technical specification, links to JSON schemas, and information on the official Typescript libraries for DHFS.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Built with Starlight

Check out [Starlight's docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).


## DH-Forge Writing Style Guide

**Introduction**

This guide outlines the writing style for Daggerheart™ Forge (DH-Forge) documentation. Our aim is to create documentation that is informative, friendly, clear, and empowering for everyone in the Daggerheart™ community looking to build or understand our tools. We want our docs to feel helpful and enabling.

A note on the project name:
 - The project is called DH-Forge.
 - You can shorten DH-Forge to DH-F.
 - Do not use "DHFS" or "DHF"
 - Never expand "DH" to "Daggerheart".

### 1. Core Principles: The Pillars of Our Prose

These foundational ideas should underpin all DH-Forge documentation:

- **Be Friendly & Informal, Yet Professional:**
    - **Write in an approachable manner.** Imagine explaining something to a technically savvy friend.
    - **Avoid overly formal, dry, or academic language.** Keep the language engaging.
    - **Maintain professionalism.** Your writing must be accurate, trustworthy, and well-structured.
    - **Genuine enthusiasm is welcome, but keep it grounded.** Avoid excessive or childish superlatives.

- **Clarity is Your Key Objective:** (Thematic heading like "The Adventuring Party" – generally okay if used sparingly for major sections)
    - **Prioritize clear, direct language above all else,** especially for technical concepts. If a playful or thematic phrase obscures the meaning, simplify it.
        - *Example:* Instead of technical jargon like "...ensures character information can be consistently shared and accurately interpreted by different applications," use plain language like "...this means your Daggerheart character information can move between different apps without details getting lost or mixed up."
    - **Explain the "why," not just the "what."** Help readers understand purpose and benefits.
    - **Define necessary jargon simply on its first use.** If "JSON Schema" is unavoidable, explain it plainly.
    - **Use simple analogies and examples** where they genuinely aid understanding of complex ideas, but ensure the analogy itself is clear and not overly elaborate.
    - **Focus on practical meaning and direct benefits.**
    - **Avoid ambiguity:** Steer clear of excessive word-play, puns, or overly clever phrasing if they could lead to misinterpretation, make the text harder to understand (especially for non-native English speakers), or obscure the core message. When in doubt, choose explicitness.

- **Write for New Developers (and the Curious):**
    - **Assume some technical literacy** (e.g., readers know what JSON is).
    - **Don't assume deep expertise** in all areas.
    - **Guide the reader.** Help them apply the information.

- **Keep it Concise & Scannable:**
    - **Use short sentences and paragraphs.**
    - **Employ headings, subheadings, bullet points, and lists.**
    - **Get to the point,** especially in introductions. Avoid verbose explanations for obvious details.

- **Structure Around Problem/Solution:**
    - When explaining a tool or feature, briefly cover:
        - **The Challenge:** What problem does this address?
        - **Why It Matters:** Why is this important to solve?
        - **The Solution:** How does DH-Forge help?

- **Embrace RPG Flavor (Wisely and Sparingly):**
    - **Thematic language or phrases** (like section titles such as "Our Audience: The Adventuring Party" or calls to action like "Ready to Forge?") can make docs engaging if used judiciously.
    - **However, this is a delicate balance.** Thematic language must *support* understanding or engagement, not become a puzzle in itself or make the writing feel "silly."
    - **Crucially, never let flavor text compromise clarity or directness in technical explanations.** If thematic language feels forced, decorative, or risks making the core message unclear, *always* opt for straightforward language. Too much "floral" or "word-play" language can detract from a professional impression and alienate readers looking for quick, clear answers.
    - **When in doubt, err on the side of clarity and directness.**

### 2. Our Audience: The Adventuring Party

(This thematic title is an example of an acceptable, engaging touch if used for high-level sections).

Understanding who we're writing for is key:

- **Primary Audience: Developers.** (Hobbyists, those new to Daggerheart/TTRPG dev, and more experienced devs).
- **Secondary Audience: Technically Curious Players.**
- **The "Typical Reader" Test:** Core explanations and value propositions must be understandable to a reader who may not have deep technical expertise.

---

### 3. Voice & Tone: How We Sound

- **Our Voice Is:**
    - Knowledgeable
    - A Friendly Guide
    - An Enthusiastic Community Member
    - A Clear Communicator
- **Our Tone Should Be:**
    - Helpful & Welcoming
    - Encouraging & Empowering
    - Direct & Unambiguous
    - Confident (but not arrogant)
- **Avoid Tones That Are:**
    - Condescending, overly academic, bureaucratic, dry, childish, hyperbolic, vague.

---

### 4. Practical Guidelines: The Nitty-Gritty

- **Active Voice:** Prefer active over passive.
- **Direct Address:** Use "you" and "we."
- **Code Examples:** Clear, minimal, correct, with concise, explanatory comments (focus on the *what* and *why* of the example, not basic language syntax). Specify language for highlighting.
- **Links:** Relevant internal and authoritative external links.
- **Acronyms:** Define on first use (e.g., "Large Language Model (LLM)").
- **Key Things to Avoid (Recap & Reinforcement):**
    - Over-explaining obvious concepts.
    - Using technical jargon to explain benefits to a general audience when plain language is clearer.
    - **Letting thematic or "fun" language obscure the core message or make critical explanations ambiguous.** (This is a key point from recent feedback).
    - Unnecessary superlatives.
    - **Excessive word-play, puns, or "silly" phrasing.** While a light touch of humor or theme can be good, it shouldn't become a dominant feature or make the text harder to parse, especially for a global audience.

---

### 5. Formatting: Structuring for Readability

- **Structure:** Markdown.
- **Headings:** H2, H3, H4 for clear hierarchy.
- **Emphasis:*- **Bold** for strong emphasis/key terms; *italics* for subtle emphasis/new conceptual terms.
- **Code:** `inline_code` and triple-backtick blocks with language specified.
- **Lists:** Bulleted or numbered.
- **Callouts:** Blockquotes or Astro aside blocks; `:::tip`, `:::caution`, `:::note`.
- **LaTeX:** Not for regular prose. Only for complex math/science notation if essential (unlikely for DH-Forge).