# DH Forge System - Product Requirements Document

## 1. Introduction

### 1.1. Project Overview

Daggerheart is a collaborative fantasy tabletop roleplaying game (TTRPG) focusing on heroics and shared world-building. Like other TTRPGs, players create and manage detailed characters. Currently, character data is often siloed within specific tools.

This project aims to create an **open, unofficial system** for Daggerheart player character data. The goal is to establish a common standard that allows different tools to easily read and understand character information, fostering a more interconnected and user-friendly ecosystem.

This specification focuses on **defining the structure, relationships, and referencing mechanisms** for character data, primarily using JSON. It is inspired by open standards (like [RSS](https://www.rssboard.org/rss-specification), and [Schema.org](https://schema.org/)) and registry models but tailored for Daggerheart's specific needs.

### 1.2. Problem Statement

- **Data Silos:** Player character data is locked into specific applications, making it difficult to move characters between tools.
- **Interoperability Challenges:** Developers wanting to build tools for Daggerheart must create bespoke solutions for handling character data, increasing development time and limiting compatibility.
- **Homebrew Complexity:** TTRPGs thrive on homebrew content. Existing systems often struggle to represent and share homebrew content in a structured, interoperable way.

### 1.3. Project Components & Deliverables

To address these problems effectively, the DH Forge System comprises three core components:

1.  **The DHFS Standard (JSON Schema):** This is the heart of the project – the universal, open system for defining character and campaign data tructures. It will be published as a machine-readable JSON Schema, derived from Zod definitions, acting as the common language.
2.  **DHFS Server Utilities (TS/JS Package):** An official, server-compatible Typescript/Javascript package. Its primary purpose is to **simplify osting** DHFS registries. It will provide utilities for:
    - Resolving Core Registry dependencies.
    - Implementing the **mandated server-side merge** logic for Campaign Registries.
    - Serving registry data according to the DHFS standard.
    - This directly addresses the increased complexity for Campaign Registry providers.
3.  **DHFS Client Utilities (TS/JS Package):** An official, browser- and server-compatible Typescript/Javascript package designed for **tool evelopers**. It will offer:
    - Utilities for fetching and consuming DHFS data.
    - Type-safe interfaces based on the standard.
    - Potential helpers for validation and change detection logic.

**While official support focuses on TS/JS, the DHFS standard is designed to be platform-agnostic, and community contributions for other languages (e.g., Python, Rust, PHP) are encouraged and welcome.**

### 1.4. Goals & Objectives

- **Define an Open Standard:** Create a clear, publicly available JSON Schema for Daggerheart character data.
- **Ensure Interoperability:** Enable different tools to _understand_ the same character data.
- **Support Homebrew:** Provide a robust mechanism and **tooling** for incorporating custom game content.
- **Focus on Web & JSON:** Prioritize a format suitable for modern web applications and APIs.
- **Simplify Data Consumption:** Provide client libraries to ease the integration of DHFS data into tools.
- **Simplify Data Hosting:** Provide server libraries to manage the complexities of serving merged Campaign Registries.
- **Handle Game Mechanics:** Define a standard way to _represent_ game element modifiers.
- **Clarification:** This specification defines _how data is structured, referenced, and served_. The provided libraries will offer reference implementations, but the specification remains the core standard.

## 2. Core Concepts

### 2.1. Daggerheart Basics

At its core, Daggerheart involves players creating **Characters**. Each character has: Core Stats, Heritage, Class & Subclass, Domains & Domain Cards, and Inventory. Many of these elements can confer Modifiers.

### 2.2. The Registry Model (Server-Merged)

DHFS uses a **Registry Model** with two main types:

- **Core Registry:** Provides the foundational game rules, classes, items, and other elements as defined by Daggerheart's official content (likely based on the SRD). It represents the baseline game experience.
- **Campaign Registry:** Allows Game Masters and creators to introduce _modifications_ and _additions_ for their specific games—new items, altered abilities, unique classes, or entirely custom content. It defines what makes a specific campaign unique.
  **Why Merge?** A character exists within a specific campaign's context; they need access to both the base rules _and_ any changes or additions that apply only to that game. A merge is necessary to create a single, consistent view of the _effective ruleset_ for that character in that campaign.
  **Key Decision: Server-Side Merge**
  DHFS **mandates a server-side merge model** to simplify tool development. The _server_ hosting a Campaign Registry is responsible for fetching its declared Core Registry dependency and serving a pre-merged dataset. **This specification defines _how_ this merge should behave (e.g., Campaign overrides Core), while the official DHFS Server Utilities package provides a reference TS/JS implementation. Community-provided solutions in other languages are expected to follow the same merge principles.**

### 2.3. Versioning Philosophy

DHFS uses **Semantic Versioning (SemVer)**.

- **Internal Versioning:** Every Registry file _must_ contain its full SemVer number (e.g., `1.2.9`) within its `meta`.
- **URL Versioning (`X.Y.x` Format):** Registry URLs _must_ use a `Major.Minor.x` format (e.g., `https://dh-forge.com/schema/1.2.x/core.json`). This URL _always_ serves the _latest patch version_ within that minor release, allowing automatic non-breaking updates.
- **Specification Versioning:** The DHFS specification itself follows SemVer.

## 3. API Specification

### 3.1. Registry Identification (Character Sheet)

A character sheet declares its registry via a single `registry` URL and stores the `version` it was last saved with.

```json
{
  "characterSheet": {
    "meta": {
      "registry": "https://my-game-night.com/campaigns/shadow-isles/1.0.x.json",
      "version": "1.0.3"
    }
    // ... rest of the character data
  }
}
```

- `registry`: The URL (using `X.Y.x` format) pointing to the primary registry (Core or Campaign).
- `version`: The _full_ SemVer number read from the `meta` of the registry file at the time the character sheet was last saved. Its primary purpose is **change detection**.

### 3.2. Registry JSON Structure (Core)

A Core Registry file contains its version and compatibility information.

```json
// Example: https://dh-forge.com/schema/1.2.x/core.json (serving 1.2.9)
{
  "meta": {
    "name": "Daggerheart Core Rules",
    "version": "1.2.9",
    "compatibleVersions": [
		"1.1.x",
		"1.2.x",
	]
  },
  "class/primary": {
    "warrior": { "name": "Warrior" /* ... */ }
  }
}
```

### 3.3. Registry JSON Structure (Campaign - Unmerged)

This defines the Campaign _before_ the server merges it, introducing the `homebrewContent` key for clarity.

```json
{
  "meta": {
    "name": "Shadow Isles Campaign",
    "version": "1.0.3",
    "compatibleVersions": ["1.0.x"],
    "extendsCore": "https://dh-forge.com/schema/1.2.x/core.json"
  },
  "campaignInfo": { /* Optional Campaign-specific metadata */ },
  "homebrewContent": { // ALL game data changes MUST be under this key
    "inventory/item": {
      "healing_potion": { /* Override definition */ }
    }
  }
}
```

- `extendsCore`: Specifies the Core Registry dependency.
- `homebrewContent`: This is the **key innovation** for simplifying server merges. It isolates all game data changes, making it unambiguous for the server what needs to be overlaid onto the Core Registry.

### 3.4. Registry JSON Structure (Campaign - Merged Response)

This is what a tool receives when it fetches a Campaign Registry URL. The `homebrewContent` key is gone, its contents merged in.

```json
{
  "meta": {
    "name": "Shadow Isles Campaign (DHFS Merged)",
    "version": "1.0.3", // Campaign Version
    "compatibleVersions": ["1.0.x"],
    "mergedCoreVersion": "1.0.2" // States the Core version used
  },
  "class/primary": { /* Core data */ },
  "inventory/item": { /* Merged data, Campaign overrides Core */ }
}
```

### 3.5. Item Identification & Referencing (`type:id`)

We use a single string format for references: `category/type:id`.

- The part _before_ the **single colon** is the full Data Type key (e.g., `class/subclass`).
- The part _after_ the **single colon** is the item's ID key (e.g., `stalwart`).
- Parsing is unambiguous: split the string at the _only_ colon.

* **Important:** Data Type keys and ID keys use alphanumeric, hyphens, and underscores. Colons and slashes are forbidden in IDs. `category/type` must not contain colons.

- When used in URLs, these **must be URL-encoded**.

### 3.6. Lookup Mechanism & Server Responsibility

The DHFS standard defines a clear separation of responsibilities between the server (Registry Provider) and the client (Tool) to ensure consistent data delivery and consumption, regardless of the underlying technology.
**Server Responsibilities (Universal):**
Any server hosting a Campaign Registry _must_:

- Resolve the `extendsCore` URL (found in its Campaign Registry's `meta`) to fetch the appropriate Core Registry.
- Perform a deep merge, overlaying the `homebrewContent` from the Campaign Registry onto the Core Registry data. Items with identical `category/type:id` in `homebrewContent` _must_ replace their Core counterparts.
- Serve the resulting merged JSON structure via its `X.Y.x` URL, including a `meta` section indicating both the Campaign version and the `mergedCoreVersion`.
  **Tool Responsibilities (Universal):**
  Any tool consuming DHFS data _must_:
- Fetch the single `registry` URL provided in the character sheet's `meta` section.
- Perform validation and change detection as defined in Section 3.7.
- Utilize the received (potentially merged) data to represent the character.
  **Official Libraries:**
  The official **DHFS Server Utilities** and **DHFS Client Utilities** packages provide tested, reference implementations for these responsibilities in Typescript/Javascript, simplifying adoption and ensuring adherence to the specification. However, any implementation in any language following these universal responsibilities can be considered DHFS-compliant.

### 3.7. Validation & Change Detection (Tool Responsibility)

Tools _must_ perform the URL/Version Match (Sanity Check) and Patch Update Detection. The **DHFS Client Utilities** package may provide helpers for these checks.

### 3.8. Defining Modifiers (Hybrid Model)

We represent how items affect stats using a hybrid model within registry items:

1.  **`modifiers` (Array of Objects):** For structured, quantifiable effects.
    - `target` (string): The stat to modify (e.g., `abilities.strength`, `evasion`). See 3.8.1.
    - `type` (string, literal): The type of modification (`add`, `set`). See 3.8.2.
    - `value` (number): The magnitude.
    - `notes` (string, optional): Explanation.
2.  **`effects_text` (Array of Strings):** For narrative, conditional, or complex effects.

**This 'Hybrid Model' combines two approaches: structured data and narrative text.** The `modifiers` array provides machine-readable, quantifiable effects (like +1 Strength) that tools can easily process for calculations. The `effects_text` array captures descriptive, conditional, or complex rules that are often better suited for human interpretation. **This hybrid approach is crucial because Daggerheart is a narrative-focused game; many unique abilities and item effects cannot be fully expressed as simple numerical adjustments and require descriptive text to convey their full intent and flavour.**

#### 3.8.1. Standard Target Keys (Initial List)

These keys identify character statistics, using **dot notation (`.`)**.

- `abilities.strength`, `abilities.finesse`, `abilities.spirit`, `abilities.instinct`, `abilities.presence`, `abilities.knowledge`
- `evasion`
- `armour`
- `hp.max`
- `damage.bonus`
- `speed`
  _(This list needs formal definition and maintenance)._

#### 3.8.2. Standard Modifier Types

- `add`: Adds the `value`.
- `set`: Sets the `value`.

#### 3.8.3. Processing Modifiers (Tool Responsibility)

Tools gather `modifiers` and `effects_text`. They implement their own logic to calculate final stats based on `modifiers` and display `effects_text`. **This spec defines _what_ is stored, not _how_ to calculate**.

### 3.9. Data Types (Initial List)

- `class/primary`, `class/subclass`, `class/domain`, `class/domain/card`
- `heritage/ancestry`, `heritage/community`
- `inventory/weapon`, `inventory/armour`, `inventory/item`
- `feature`
  _(This list needs formal definition and maintenance)._

### 3.10. Schema & Validation

- **Single Source of Truth:** Core data structures are defined using Zod schemas.
- **Official JSON Schemas:** JSON Schemas will be generated.
- **Availability:** JSON Schemas will be published at stable, versioned URLs.
- **Validation:** DHFS-compatible data should validate. The provided **DHFS Client/Server Utilities** will leverage these schemas.
- **Typescript Support:** Typescript types will be generated and included in the utility packages.

## 4. Use Cases & Implementation Examples

This standard enables tools like Visual Character Sheets, Livestream Overlays, VTTs, and AI Tools. The server-side merge significantly simplifies the import process for all these tools.

## 5. Recommendations & Warnings

- **ID Naming Conventions:** Homebrew creators should **prefix** their IDs to avoid unintended overrides.
- **Campaign Hosting:** While providers _must_ implement the server-side merge logic, the **official DHFS Server Utilities package is designed to make this significantly easier**.
- **Modifier Calculation Order:** A standard order is recommended.
- **URL Encoding:** References **must be URL-encoded**.

## 6. Non-Goals

- Storing Character Sheets.
- Defining Game Mechanics/Resolution Logic.
- Being a Centralized Registry Service.
- Replacing VTTs.

## 7. Future Considerations

- **Registry Discovery:** An index file or service for popular registries.
- **Modifier Calculation Order:** Formalizing a recommended sequence.
- **Campaign-Specific Metadata:** Defining standard keys for `campaignInfo`.
- **Authentication/Permissions:** How private campaigns might be handled.
