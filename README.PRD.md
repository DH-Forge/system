# DH Forge System - Product Requirements Document

## 1. Introduction

### 1.1. Project Overview

Daggerheart is a collaborative fantasy tabletop roleplaying game (TTRPG) focusing on heroics and shared world-building. Like other TTRPGs (e.g., Dungeons & Dragons, Pathfinder), players create and manage detailed characters. Currently, character data is often siloed within specific tools (character builders, virtual tabletops, etc.).

This project aims to create an **open, unofficial API specification** for Daggerheart player character data. The goal is to establish a common standard that allows different tools to easily create, read, and understand character information, fostering a more interconnected and user-friendly ecosystem.

This specification focuses on **defining the structure, relationships, and referencing mechanisms** for character data, primarily using JSON. It is inspired by open standards and registry models but tailored for Daggerheart's specific needs.

### 1.2. Problem Statement

- **Data Silos:** Player character data is locked into specific applications, making it difficult to move characters between tools.
- **Interoperability Challenges:** Developers wanting to build tools for Daggerheart must create bespoke solutions for handling character data, increasing development time and limiting compatibility.
- **Homebrew Complexity:** TTRPGs thrive on "homebrew." Existing systems often struggle to represent and share homebrew content in a structured, interoperable way.

### 1.3. Goals & Objectives

- **Define an Open Standard:** Create a clear, publicly available specification for Daggerheart character data structure and relationships.
- **Ensure Interoperability:** Enable different tools to _understand_ the same character data, even if their internal processing differs.
- **Support Homebrew:** Provide a robust mechanism for incorporating custom game content alongside official rules.
- **Focus on Web & JSON:** Prioritize a format suitable for modern web applications and APIs.
- **Prioritize Data Structure & Relations:** Define how character data is organized and how different elements relate, while remaining storage-agnostic.
- **Handle Game Mechanics (Modifiers):** Define a standard way to _represent_ how game elements modify core character statistics.
- **Maintain Simplicity:** Avoid unnecessary complexity, particularly in hosting and accessing core/custom data.
- **Clarification:** This specification defines _how data is stored and referenced_. It does **not** define or mandate the specific _implementation logic_ for resolving or calculating character data (like final stats). It provides the building blocks for 3rd parties to implement their own consistent resolution logic.

## 2. Core Concepts

### 2.1. Daggerheart Basics

At its core, Daggerheart involves players creating **Characters**. Each character has:

- **Core Stats:** Evasion, Armour, HP, and six Abilities (Strength, Finesse, Spirit, Instinct, Presence, Knowledge).
- **Heritage:** Ancestry and Community.
- **Class & Subclass:** Defines primary abilities and roles.
- **Domains & Domain Cards:** Specific powers and abilities.
- **Inventory:** Weapons, Armour, Items.

Many of these elements can confer bonuses or penalties (Modifiers) to Core Stats.

### 2.2. The Registry Model (Core + Campaign)

We use a **Registry Model** with two primary sources:

1.  **Core Registry:** A JSON file (or set) with standard, official Daggerheart game elements.
2.  **Campaign Registry:** An _optional_ JSON file with homebrew or campaign-specific elements, acting as an _overlay_.

A **Character Sheet** references one Core Registry and optionally one Campaign Registry. Tools should **check the Campaign Registry first**, then the Core Registry, when looking up items.

## 3. API Specification

This section details the proposed method for structuring and referencing data.

### 3.1. Registry Identification

A character sheet declares its registries via URLs in its `meta` section.

```json
{
	"characterSheet": {
		"meta": {
			"apiVersion": "0.3",
			"core": "https://daggerheart.example.com/registry/v1/core.json",
			"campaign": "https://my-game-night.com/our-campaign-homebrew.json"
		}
		// ... rest of the character data
	}
}
```

### 3.2. Registry JSON Structure

Core and Campaign JSON files share a structure: a top-level object where keys are **Data Types** and values are objects containing items keyed by their **ID**.

- **Data Type Keys:** Use `category/type` format (e.g., `class/primary`, `inventory/weapon`). Allowed characters: alphanumeric, hyphens (`-`), and underscores (`_`). **Colons (`:`) are forbidden.**
- **ID Keys:** Use alphanumeric, hyphens (`-`), and underscores (`_`). **Colons (`:`) and slashes (`/`) are forbidden.**

```json
// Example: core.json (Partial)
{
	"class/primary": {
		"warrior": { "name": "Warrior" /* ... */ }
	},
	"inventory/armour": {
		"leather_armour": {
			"name": "Leather Armour",
			"modifiers": [{ "target": "armour", "type": "set", "value": 2 }]
		}
	},
	"heritage/ancestry": {
		"elf": {
			"name": "Elf",
			"modifiers": [
				{ "target": "abilities.finesse", "type": "add", "value": 1 }
			]
		}
	}
}
```

### 3.3. Item Identification & Referencing (`type:id`)

We use a single string format for references: `category/type:id`.

- The part _before_ the **single colon** is the full Data Type key (e.g., `class/subclass`).
- The part _after_ the **single colon** is the item's ID key (e.g., `stalwart`).
- Parsing is unambiguous: split the string at the _only_ colon.

**Examples:**

- `class/primary:warrior`
- `class/subclass:stalwart`
- `inventory/weapon:long_sword`

**Important Note on Slashes (`/`):** While `/` implies hierarchy, these are **identifiers, not URL paths**. When using these references within URLs (e.g., query parameters), they **must be URL-encoded** (e.g., `inventory%2Fweapon:longsword`).

### 3.4. Character Sheet Structure (Examples)

```json
{
	"characterSheet": {
		"meta": {
			/* ... */
		},
		"name": "Kaelen Swiftblade",
		"class": "class/primary:warrior",
		"subclass": "class/subclass:stalwart",
		"heritage": {
			"ancestry": "heritage/ancestry:elf",
			"community": "heritage/community:woodland"
		},
		"baseStats": {
			/* ... */
		},
		"inventory": [
			{
				"reference": "inventory/armour:leather_armour",
				"quantity": 1,
				"equipped": true
			}
		]
		// ...
	}
}
```

### 3.5. Lookup Mechanism

Tools must:

1.  Parse `category/type:id` by splitting at the colon.
2.  Load Core and Campaign (if present) registries.
3.  Check Campaign first: `campaignJson[type][id]`.
4.  If not found, check Core: `coreJson[type][id]`.
5.  Handle errors if not found in either.

### 3.6. Defining Modifiers (Hybrid Model)

We represent how items affect stats using a hybrid model within registry items:

1.  **`modifiers` (Array of Objects):** For structured, quantifiable effects.
    - `target` (string): The stat to modify (e.g., `abilities.strength`, `evasion`). See 3.6.1.
    - `type` (string): The type of modification (`add`, `set`). See 3.6.2.
    - `value` (number): The magnitude.
    - `notes` (string, optional): Explanation.
2.  **`effects_text` (Array of Strings):** For narrative, conditional, or complex effects.

**Example Item:**

```json
{
	"id": "dragonscale_shield",
	"type": "inventory/armour",
	"name": "Dragonscale Shield",
	"modifiers": [
		{ "target": "armour", "type": "add", "value": 3 },
		{ "target": "abilities.spirit", "type": "add", "value": 1 }
	],
	"effects_text": ["You gain resistance to fire damage."]
}
```

#### 3.6.1. Standard Target Keys (Initial List)

These keys identify the specific character statistics that a modifier can affect. They use **dot notation (`.`)** to represent the structure of a character's stats (e.g., `abilities.strength` means the `strength` stat within the `abilities` group).

**Note on Notation:** We deliberately use dot notation here to distinguish these _character stat identifiers_ from the `category/type:id` format used for _registry item references_. While `category/type:id` tells a tool to "look this up in the registry," a target key like `abilities.strength` tells a tool to "find this specific field on the character sheet itself." This distinction prevents parsing ambiguity and ensures tools correctly interpret whether to perform a lookup or apply a direct modification.

- `abilities.strength`, `abilities.finesse`, `abilities.spirit`, `abilities.instinct`, `abilities.presence`, `abilities.knowledge`
- `evasion`
- `armour`
- `hp.max`
- `damage.bonus`
- `speed`

_(This list needs formal definition and maintenance)._

#### 3.6.2. Standard Modifier Types

- `add`: Adds the `value`.
- `set`: Sets the `value` (often applied before `add`).

#### 3.6.3. Processing Modifiers (Tool Responsibility)

Tools should gather all `modifiers` and `effects_text`. They need to implement their own logic to calculate final stats based on `modifiers` (following a consistent order of operations) and display `effects_text` for user reference. **This spec defines _what_ is stored, not _how_ to calculate.**

### 3.7. Data Types (Initial List)

- `class/primary`, `class/subclass`, `class/domain`, `class/domain/card`
- `heritage/ancestry`, `heritage/community`
- `inventory/weapon`, `inventory/armour`, `inventory/item`
- `feature`

_(This list needs formal definition and maintenance)._

### **3.8 Schema & Validation**

To ensure consistency, enable automated validation, and support code generation, DHFS makes the following commitments:

- **Single Source of Truth:** The core data structures, types, and constraints of DHFS are defined using Zod schemas within the `DHForge` project (`/packages/forge-models`).
- **Official JSON Schemas:** For each version of the DHFS specification, official **JSON Schema** files will be generated directly from the Zod definitions. These schemas serve as the framework-agnostic, machine-readable standard.
- **Availability:** These official JSON Schemas will be published and made available at stable, versioned URLs (e.g., `https://schema.dhfs.dev`).
- **Validation:** Any data claiming DHFS compatibility should successfully validate against these official JSON Schemas.
- **Typescript Support:** Typescript type definitions will also be generated/inferred from the Zod schemas, providing first-class support for TS developers.

## 4. Use Cases & Implementation Examples

This standard enables tools like:

1.  **Visual Character Sheet Web Pages:** Load, resolve, calculate, and display character data.
2.  **Livestream Overlays:** Pull key stats (HP, Name, Class) for real-time display.
3.  **Virtual Tabletops (VTTs):** Import characters for online play.
4.  **iPad Apps for In-Person Play:** Provide mobile character sheet access.
5.  **MCP Servers / AI Tools:** Allow AI to understand character structure for narrative or GM assistance.

### 4.1. Retrieving Registry Data

Tools fetch registry data via direct HTTP GET requests to the URLs specified in `meta`.

### 4.2. Resolving References & Modifiers (Tool Responsibility)

Tools perform the fetching, lookup, and calculation based on the structures defined here.

## 5. Recommendations & Warnings

### 5.1. ID Naming Conventions

- **Recommendation:** Homebrew creators should **prefix** their IDs (e.g., `mycampaign_dragon_shield`) to prevent collisions.
- **Recommendation:** Adhere strictly to the allowed characters for `type` and `id` keys.

### 5.2. Modifier Calculation Order

- **Warning:** While this spec doesn't _mandate_ calculation logic, for interoperability of _results_, the community (or tool developers) should aim to converge on a standard order of operations (e.g., Base -> Set -> Add/Subtract).

### 5.3. URL Encoding

- **Warning:** Remember that references containing `/` (e.g., `inventory/weapon:longsword`) **must be URL-encoded** when used within URLs.

## 6. Non-Goals

- **Storing Character Sheets:** We define structure, not storage/hosting.
- **Defining Game Mechanics/Resolution Logic:** We define data structure, not the _rules engine_ or _calculation implementation_.
- **Being a Centralized Registry:** We define a _pattern_, not a single _service_.
- **Replacing VTTs:** It's a data standard, not a platform.

## 7. Future Considerations

- **Registry Discovery:** An index file for popular/official registries.
- **Versioning:** Robust versioning for registries and the API spec.
- **Schema Validation:** Providing JSON Schemas.
- **Modifier Calculation Order:** Formalizing a recommended sequence.
