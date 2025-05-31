---
title: DH-Forge System
description: DHFS is an open-source system for defining, structuring, and sharing character and game data for the Daggerheart™ TTRPG. It aims to create a common language for digital tools, allowing seamless interoperability.
---

DHFS is an open-source system for defining, structuring, and sharing character and game data for the Daggerheart™ TTRPG. It aims to create a common language for digital tools, allowing seamless interoperability.

## Values

The Daggerheart™ TTRPG community thrives on creativity, both in gameplay and in
the tools we build to support it. However, a common challenge is "data silos" –
character sheets locked in one app, VTTs needing manual data entry, and homebrew
content being difficult to share digitally.

**DHFS aims to solve these problems for the Daggerheart™ community by
providing:**

- **Interoperability:** A shared understanding of data structure, so you can
  move your character from your favorite builder to your virtual tabletop with
  ease.
- **Homebrew Support:** A robust system for integrating homebrew classes, items,
  and more alongside core game rules.
- **Openness:** A free and permissive (MIT licensed) standard that anyone can
  implement in their personal or commercial projects.
- **Flexibility:** A system designed to handle the core game data while allowing
  for extensions.

### What It Enables

By adopting DHFS, developers can build a richer, more connected ecosystem of
tools, including:

- **Visual Character Sheets:** Web or mobile apps that can display any DHFS-compliant character.

- **Livestream Overlays:** Automatically pull player stats for streaming.

- **Virtual Tabletops:** Easy import/export of characters and game elements.

- **Digital Tools for In-Person Play:** Tablet apps for quick reference and tracking.

- **AI & Narrative Tools:** Provide structured data for AI GMs or story generators.

- **And much more...:** The possibilities are endless with a shared data standard!

## What's inside?

### Universal Compatibility with JSON Schemas

To be truly interoperable, a system should support all developers regardless of their tech stack. [JSON Schemas](https://json-schema.org/) are a system for defining and distributing data structures. JSON, and JSON Schemas are widely supported and so make a great foundation for a shared data system.

 - Node: [ajv](https://github.com/ajv-validator/ajv)
 - Python: [jsonschema](https://github.com/python-jsonschema/jsonschema)
 - PHP: [json-schema](https://github.com/justinrainbow/json-schema)
 - Java: [json-schema-validator](https://github.com/networknt/json-schema-validator)
 - .NET: [Newtonsoft.Json.Schema](https://github.com/JamesNK/Newtonsoft.Json.Schema)
 - Go: [gojsonschema](https://github.com/invopop/gojsonschema)
 - Ruby: [json-schema](https://github.com/ruby-json-schema/json-schema)
 - Rust: [jsonschema](https://github.com/Stranger6667/jsonschema)

A shared data system makes it easier for developers to build powerful
tools for the Daggerheart™ community, ensuring efforts lead to maximum
interoperability and benefit. It is in this spirit that DHForge provides DHFS –
to offer a common foundation for a vibrant and interconnected ecosystem of
player-focused applications.

### Homebrew Friendly

It's the rules and structure that make systems like these beneficial. DHFS has been designed to strike a balance to ensure support for custom content made by game-masters can be easily supported.

This system supports core [Daggerheart™](https://www.daggerheart.com/) game elements and is designed with the flexibility to robustly incorporate **homebrew content**, fostering rich, interoperable experiences for character builders, virtual tabletops (VTTs), streaming overlays, and other community-created applications.

### First-class Typescript + Javascript Support

To complement these schemas, DHFS also offers first-class [Typescript](https://www.typescriptlang.org/) packages to simplify the integration and use of this structured data in your projects.

## Get Started

We invite you to **explore the DHFS data models** or dive into **getting started
with the JSON Schemas**!

:::caution[Disclaimer]
This project is an **unofficial** fan creation and is _not_ affiliated with, or endorsed by, Darrington Press LLC. It uses names and concepts related to [Daggerheart™]("https://www.daggerheart.com/") under fair use principles in line with their [community gaming license](https://darringtonpress.com/license/).
:::