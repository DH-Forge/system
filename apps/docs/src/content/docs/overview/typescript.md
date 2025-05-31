---
title: First-class support for TypeScript & JavaScript
description: DHFS is an open-source system for defining, structuring, and sharing character and game data for the Daggerheart™ TTRPG. It aims to create a common language for digital tools, allowing seamless interoperability.
sidebar:
  label: "TypeScript Support"
  order: 2
---

## The Challenge:
You still need to *use* these schemas effectively in your project. This means figuring out how to validate data against the schemas, manage any references or connections between different parts of the schemas (a process often called 'resolving'), and ensure any new game data you create is correctly structured. Setting all this up is often boilerplate work that can slow you down before you even get to building the unique parts of your tool.

## Why Solve It?
We want you to hit the ground running when you're building Daggerheart™ tools with TypeScript or JavaScript! By providing ready-made solutions for common schema-related tasks, we can save you time, reduce initial setup headaches, and let you focus your energy on crafting the unique features and user experiences that will make your application stand out.

## Our Solution:
To give TypeScript and JavaScript developers this boost, DHFS offers dedicated [TypeScript](https://www.typescriptlang.org/) packages that go well beyond just providing the raw schema files. Think of them as a specialized toolkit for working with DHFS data. Inside, you'll find:

 - **Pre-generated TypeScript Types:** Jump-start your project with strong typing and autocompletion in your editor. No need to manually define interfaces to match the schemas – we've handled that, helping you catch errors early and understand data structures intuitively.
 - **Validation Tools:** Easily check if character data, homebrew content, or any other game information conforms to the DHFS schemas directly within your JavaScript or TypeScript code. This helps ensure data integrity throughout your application.
 - **Schema Resolution Utilities:** If you're working with more complex data that references other parts of the Daggerheart™ schemas (using `$ref` for example), these tools will help manage and correctly interpret those relationships.
 - **Data Creation Helpers:** Functions and utilities to simplify the creation of new, schema-compliant data instances (like new characters, items, or other game elements). This makes it easier to build data that you know will be valid.
 - **Other Handy Utilities:** A collection of smaller tools and functions to streamline common tasks when working with DHFS data.

Essentially, if you're building with TypeScript or JavaScript, these packages are designed to handle a lot of the foundational schema plumbing for you. This means a faster, more robust start, allowing you to focus on building something amazing for the Daggerheart™ community.