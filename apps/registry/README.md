# DH Forge Registry Example

This directory contains a simple example implementation of a [DHFS](https://github.com/DH-Forge/system) Registry server using [Hono.js](https://hono.dev/) in a TypeScript environment.

## What is a DHFS Registry?

In the DH Forge System, a **Registry** is a server-hosted collection of JSON files that define game data for Daggerheart™. This includes elements like classes, ancestries, items, and spells.

There are two main types of registries:
*   **Core Registry:** Provides the foundational game rules and content (e.g., from the Daggerheart SRD).
*   **Campaign Registry:** Allows for custom modifications, additions, or homebrew content for a specific game or campaign. A key responsibility of a Campaign Registry server is to merge its custom content with a specified Core Registry.

This system allows digital tools (character builders, VTTs, etc.) to fetch comprehensive game data from a single, reliable source.

## Purpose of This Example App

This application (`apps/registry`) serves as a basic demonstration of:
*   How to structure and serve DHFS Core and Campaign registry files.
*   An example of the server-side logic required to merge a Campaign Registry with its corresponding Core Registry, a key requirement of the DHFS standard.
*   Using Hono.js for routing and serving JSON data in a TypeScript project.

It is intended as a starting point or reference for developers looking to host their own DHFS registries.

For more detailed information on the DHFS standard, registry structure, and server responsibilities, please refer to the [official DH Forge System documentation](https://docs.dh-forge.com).
