---
title: DH-Forge Concepts
description: Tool compatibility and homebrew support, powered by JSON Schemas, solves key digital challenges for the community.
sidebar:
  label: "Concepts"
  order: 0
---

This framework is built upon two core conceptual pillars: fostering [Compatibility](https://www.google.com/search?q=%23compatibility) across applications and enabling extensive [Homebrew](https://www.google.com/search?q=%23homebrew) content integration.

## Compatibility

### The Challenge:
Digital tools for games often don't share data, and without common data structures, integrations are a major hurdle. This leads to data silos and forces users into manual data entry. With Daggerheart™ being new, we have the chance to build in this interoperability from the start.

### Why Solve It?
We envision a Daggerheart™ ecosystem where data moves freely between tools. **Imagine creating a character in your preferred builder and having it instantly usable in a VTT**, or seamlessly sharing your custom monster library with a friend, regardless of the specific apps you each use. Solving this "data silo" problem means less repetitive data entry for users, more powerful and interconnected tools for players, and a more vibrant development community.

### Our Solution:
Since most developers are already familiar with JSON as a lightweight data-interchange format, we've chosen [JSON Schemas](https://json-schema.org/) as the backbone for DH-F.

:::tip[what are JSON Schemas?]
If JSON is how you *write down* your data (like character stats), **JSON Schema defines the *rules* for that data.**

Think of it as a blueprint: it specifies the expected structure—field names (e.g., `name`, `health`), their data types (string, number), what's required, and how data relates.

For those familiar with strongly-typed languages, it's a bit like adding types to your JSON. Ultimately, JSON Schemas provide a clear, machine-readable specification for valid Daggerheart™ data.
:::

### Why is this a great foundation?
Because JSON is already universally understood, and JSON Schema builds on that by providing a standardized way to validate and describe JSON structures. This means developers working with almost any programming language can easily leverage these schemas, as there's widespread tooling support. For example:

- Node.js (with libraries like [ajv](https://github.com/ajv-validator/ajv))
- Python (check out [jsonschema](https://github.com/python-jsonschema/jsonschema))
- PHP (using tools like [json-schema](https://github.com/justinrainbow/json-schema))
- Java (powered by [json-schema-validator](https://github.com/networknt/json-schema-validator))
- .NET (with [Newtonsoft.Json.Schema](https://github.com/JamesNK/Newtonsoft.Json.Schema), for example)
- Go (utilizing [gojsonschema](https://github.com/invopop/gojsonschema))
- Ruby (thanks to [json-schema](https://github.com/ruby-json-schema/json-schema))
- Rust (with crates like [jsonschema](https://github.com/Stranger6667/jsonschema))
- ...and many others.

By establishing this common, schema-defined structure for Daggerheart™ data, developers can build their tools with greater confidence, knowing they'll be able to communicate effectively with other parts of the ecosystem. DH-F offers this shared foundation to foster a rich and interconnected world of player-focused applications.

## Homebrew

### The Challenge:
Daggerheart™ is all about making the game your own! But how do you make sure your custom-brewed Ancestries, Communities, or that new monster you designed can be understood by digital tools alongside the core ruleset?

### Why Solve It?
Homebrew is the lifeblood of many campaigns. Making it easy to integrate custom content digitally means more creativity, more sharing, and tools that truly reflect *your* version of Daggerheart™.

### Our Solution:
While rules and structure are what make shared systems like DH-F useful, we've designed it with a careful balance. DH-F isn't just about the core [Daggerheart™](https://www.daggerheart.com/) game elements; it’s built with the flexibility to robustly incorporate **your homebrew content**.

This means your custom classes, spells, items, and more can be defined in a way that other DH-F compatible tools can understand, opening up rich, interoperable experiences for character builders, VTTs, streaming overlays, and all sorts of community-made apps.