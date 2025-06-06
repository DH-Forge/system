# DH Forge System (DH-F)

[License](https://opensource.org/licenses/MIT)
[Docs](https://docs.dh-forge.com)

**DH-F is an open, unofficial system for defining, structuring, and sharing player character and game data for the Daggerheart™ TTRPG.**

It aims to create a common language for digital tools, allowing character builders, virtual tabletops (VTTs), streaming overlays, and other applications to seamlessly communicate and interoperate. DH-F is developed by the [DH Forge collective](https://github.com/DH-Forge) – a community initiative dedicated to building open resources for Daggerheart™ players and creators.

> [!IMPORTANT]
> **Disclaimer:** This project is an **unofficial** fan creation and is _not_ affiliated with, or endorsed by, Darrington Press LLC. It uses names and concepts related to Daggerheart™ under fair use principles for the purpose of community tool development. You can learn more at the end of this document.

## The Vision: Why DH-F?

The TTRPG community thrives on creativity, both in gameplay and in the tools we build to support it. However, a common challenge is "data silos" – character sheets locked in one app, VTTs needing manual data entry, and homebrew content being difficult to share digitally.

DH-F aims to solve these problems for the Daggerheart™ community by providing:

- **Interoperability:** A shared understanding of data structure, so you can move your character from your favorite builder to your virtual table top with ease.
- **Homebrew Support:** A robust system for integrating homebrew classes, items, and more alongside core game rules.
- **Openness:** A free and permissive (MIT licensed) standard that anyone can implement in their personal or commercial projects.
- **Flexibility:** A system designed to handle the core game data while allowing for extensions.

## What It Enables

By adopting DH-F, developers can build a richer, more connected ecosystem of tools, including:

- **Visual Character Sheets:** Web or mobile apps that can display any DH-F-compliant character.
- **Livestream Overlays:** Automatically pull player stats for streaming.
- **Virtual Tabletops:** Easy import/export of characters and game elements.
- **Digital Tools for In-Person Play:** Tablet apps for quick reference and tracking.
- **AI & Narrative Tools:** Provide structured data for AI GMs or story generators.
- ...and many more tools we haven't even imagined yet\!

## How It Works (High-Level)

DH-F defines data using JSON, structured into **Registries**. Typically, a character sheet references a **Core Registry** (for Daggerheart content found in the [SRD](https://www.daggerheart.com/srd/)) and can optionally reference a **Campaign Registry** (for homebrew/custom data).

Items within these registries (like `class/primary:warrior` or `inventory/item:healing_potion`) are referenced using a clear `category/type:id` format. The system also defines how **Modifiers** (+1 Evasion, etc.) and narrative **Effects** are represented, allowing tools to calculate character stats while preserving descriptive text.

## Key Components

To make DH-F a reality and ensure its practical success, the project focuses on delivering three core parts:

- **The DH-F Standard (JSON Schema):** This is the heart of the project – a universal, open JSON Schema that acts as the common language for defining all Daggerheart character and campaign data.
- **DH-F Server Utilities (TS/JS Package):** An official Typescript/Javascript package built to **simplify hosting** DH-F data. It will provide tools to handle the server-side merging of Core and Campaign Registries, lowering the technical barrier for sharing homebrew content.
- **DH-F Client Utilities (TS/JS Package):** An official Typescript/Javascript package designed for **tool developers**. It helps them easily fetch and use DH-F data with type safety in their character builders, VTTs, or other applications.

While official support focuses on TS/JS, the standard is platform-agnostic, and **community contributions for other languages** (like Python, Rust, or PHP) are encouraged and welcome.

## Getting Started & Using DH-F

We're excited for you to explore and use DH-F\!

- **For Developers & Implementers:** The best place to start is our **[Official Documentation Site](https://docs.dh-forge.com)**. It contains:
  - Detailed Guides & Tutorials.
  - The full Technical Specification.
  - Links to the published JSON Schemas.
  - First-class [Typescript](https://docs.dh-forge.com/libraries/typescript) support, including the official client and server utility packages (coming soon\!).
- **For Contributors:** We welcome community involvement\! Please read our [**CONTRIBUTING**](CONTRIBUTING) guide to learn how you can help.

## Project Structure (Monorepo)

This repository uses a monorepo structure to manage different parts of the DH-F project:

- `/`: Contains core project configuration and top-level documentation like this README, `LICENSE`, `GOVERNANCE.md`, and `CONTRIBUTING`.
- `/packages/forge-schema`: This is the heart\! It contains the **Zod schemas** which serve as the single source of truth for defining all DH-F data structures. Typescript types and JSON Schemas are generated from here.
- `/apps/docs`: Houses the source code for our [Documentation Website](https://docs.dh-forge.com).
- `/apps/registry`: A working demonstration of a hosted repository. Available at [Example Registry](https://registry.dh-forge.com).
- _(Other internal packages may exist but are primarily for development support)._

## Further Reading & Governance

- **[Specification](https://docs.dh-forge.com/specification):** For those who want the deep, formal technical details behind every decision and structure in DH-F.
- **[Governance](GOVERNANCE.md):** Learn about how the DH-F project is managed and how decisions are made.
- **[Code of Conduct](CODE_OF_CONDUCT.md):** Our code of conduct for the DH-F community and contributors.
- **[Contributing](CONTRIBUTING):** Find out how you can contribute to the standard, documentation, or tooling.

> [!NOTE]
> We plan to add a series of data examples, and a testing suite once we reach a stable api version.

## Community

Join the discussion and connect with other developers in [GitHub Discussions](https://github.com/DH-Forge/system/discussions). Alternatively you can file a bug or request as a [GitHub Issue](https://github.com/DH-Forge/system/issues)

## **Important Notice & License Information**

### Software License

DH Forge System (DH-F) itself is licensed under the highly permissive **[MIT License](./LICENSE)**. This means you are free to use DH-F for both personal and commercial projects, without royalties or extensive restrictions.

**Achieving DH-F Compatibility:**

While the MIT license allows for forks and modifications of the DH-F specification itself, the goal of DHForge is to foster a unified ecosystem. To signal that a tool, application, or dataset correctly implements and adheres to the official DH Forge System, we will be introducing a **"DH-F Compatible"** standard.

- **What it means:** Tools or data marked as "DH-F Compatible" will indicate to users that they align with the official DH-F specification for data structure, referencing, and core mechanics representation. This ensures maximum interoperability.
- **How it works (Future):** We plan to provide clear guidelines, potentially a test suite, and branding assets (like a logo) to help developers verify and showcase DH-F compatibility.
- **Why it matters:** This allows the community to extend DH-F for specific needs (as permitted by the MIT license) while still providing a clear benchmark for core interoperability. Users can look for "DH-F Compatible" to ensure their chosen tools will work together seamlessly.

_Further details on the DH-F Compatibility standard will be developed and shared in our [Official Documentation Site](https://docs.dh-forge.com) as the system matures._

### Daggerheart™ License

DH Forge System (DH-F) is an unofficial, community-driven project created by fans, designed to foster interoperability for tools supporting **Daggerheart™**.

- **Relationship with Darrington Press:** DH-F is **not** an official product. It is not affiliated with, sponsored by, or endorsed by Darrington Press LLC or Critical Role.
- **Use of Game Concepts:** DH-F utilizes game rules, mechanics, and names defined as "Public Game Content" by Darrington Press, primarily based on the **Daggerheart System Reference Document 1.0**. This usage is granted under the terms and conditions of the **Darrington Press Community Gaming License (CGL)**.
- **Your Responsibility:** If you create or share content using DH-F that incorporates Daggerheart's Public Game Content, **you must read, understand, and comply with the full Darrington Press CGL**. This includes requirements for attribution, logo usage (for commercial products), and adherence to content restrictions.
- **Find the CGL Here:** You can find the official Darrington Press Community Gaming License at: **[https://darringtonpress.com/license/](https://darringtonpress.com/license/)**.

_Daggerheart™ is a trademark of Darrington Press, LLC._
