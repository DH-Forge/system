---
title: Docs for LLMs
description: Discover how DH-Forge structures its documentation for Large Language Models (LLMs) using the llms.txt convention. This page details the specialized text files provided to improve AI data accuracy and integration.
sidebar:
  label: "AI Docs"
  order: 3
---

Just like any adventurer needs a good map, LLMs (Large Language Models) need clear directions to find the best and most accurate information on the web. Sometimes, standard websites aren't the easiest for them to read perfectly. The [`llms.txt`](https://llmstxt.org) convention is a community effort to solve this. It’s like providing a special, clearly marked trail map for LLMs, guiding them directly to high-quality, structured content tailored for them.

## How it works

We want to make sure that when you (or an AI you're using) ask about Daggerheart™ Forge Schemas, you get the best possible information. That's why DH-F supports the `llms.txt` convention by providing a few dedicated files:

 - **[`/llms.txt`](/llms.txt)**: This is the main "signpost" file. When an LLM-powered tool visits our site and looks for this file, it finds a list pointing to our specialized documentation formats designed for AI consumption.

 - **[`/llms-full.txt`](/llms-full.txt)**: Think of this as the complete spell-book! It contains our full documentation, offering a comprehensive source of information for LLMs that can process a larger volume of text. This helps them get a deep understanding of DH-F.

 - **[`/llms-small.txt`](/llms-small.txt)**: This is a more compact version of our documentation. It’s highly compressed (like a scroll with only the essential runes!) and is perfect for LLMs or applications that have smaller "context windows" (meaning they can only 'read' or remember a limited amount of text at one time).
