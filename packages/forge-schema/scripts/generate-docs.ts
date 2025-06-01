import path from "node:path";
import { z } from "zod/v4";
import * as artifactSchemas from "../src/models/artifact/index.js";
import { campaign } from "../src/models/campaign.js";
import { character } from "../src/models/character.js";
import * as commonSchemas from "../src/models/common/index.js";
import { ruleset } from "../src/models/ruleset.js";

const block = {
	code: (code: string, lang = "json") => `\`\`\`${lang}\n${code}\n\`\`\``,
	heading: (title: string, level = 2) => {
		const lines = ["#".repeat(level), title.trim()].join(" ");
		return lines;
	},
};

type Metadata = {
	title: string;
	description: string;
	sidebar?: { order?: number; label?: string };
	banner?: string;
};

function createFrontmatter({
	description,
	title,
	sidebar,
	banner,
}: Metadata): string {
	const attribute = (key: string, value: string | number, indent = 0) => {
		const spaces = " ".repeat(indent);
		const prefix = [spaces, key.trim(), ":"].join("");
		return [prefix, value].join(" ");
	};

	const lines = [
		attribute("title", title),
		attribute("description", description),
	];

	if (sidebar?.label || sidebar?.order) {
		lines.push(attribute("sidebar", ""));
		if (sidebar.label) {
			lines.push(attribute("label", sidebar.label, 1));
		}
		if (sidebar.order) {
			lines.push(attribute("order", sidebar.order, 1));
		}
	}
	if (banner) {
		lines.push(attribute("banner", ""));
		lines.push(attribute("content", banner, 1));
	}

	return ["---", ...lines, "---\n"].join("\n");
}

type Section = {
	model: z.ZodType;
};

function createSection({ model }: Section): string {
	const schema = z.toJSONSchema(model);
	const { title, description, ...jsonSchema } = schema;

	if (!title) {
		console.error("\n⛔️", JSON.stringify(schema, null, 2), "\n\n");
		throw new Error("Schema must have a title");
	}

	if (!schema.id) {
		console.error("\n⛔️", JSON.stringify(schema, null, 2), "\n\n");
		throw new Error("Schema must have a id");
	}

	const lines = [block.heading(title, 2), `ID: \`${schema.id}\``];

	if (description) lines.push(description);
	if (jsonSchema) lines.push(block.code(JSON.stringify(jsonSchema, null, 2)));

	return lines.join("\n\n");
}

type Page = {
	meta: Metadata;
	sections: Section[];
};

function createPage({ meta, sections }: Page): string {
	const frontmatter = createFrontmatter(meta);
	const body = sections.map(createSection).join("\n---\n");

	return [frontmatter, body].join("\n");
}

const pages = [
	{
		filename: "character.md",
		data: createPage({
			meta: {
				title: "Character",
				description:
					"A character is a player or non-player character in a campaign.",
				sidebar: { order: 1 },
				banner: "This document is a work in progress.",
			},
			sections: [{ model: character }],
		}),
	},
	{
		filename: "campaign.md",
		data: createPage({
			meta: {
				title: "Campaign",
				description: "A campaign is a collection of characters and rulesets.",
				sidebar: { order: 2 },
				banner: "This document is a work in progress.",
			},
			sections: [{ model: campaign }],
		}),
	},
	{
		filename: "ruleset.md",
		data: createPage({
			meta: {
				title: "Ruleset",
				description: "A ruleset is a collection of rules for a campaign.",
				sidebar: { order: 3 },
				banner: "This document is a work in progress.",
			},
			sections: [{ model: ruleset }],
		}),
	},
	{
		filename: "artifact.md",
		data: createPage({
			meta: {
				title: "Artifacts",
				description: "Artifacts are items that can be used in a campaign.",
				sidebar: { order: 4 },
				banner: "This document is a work in progress.",
			},
			sections: Object.values(artifactSchemas).map((model) => ({ model })),
		}),
	},
	{
		filename: "common.md",
		data: createPage({
			meta: {
				title: "Common",
				description: "Common schemas are used in multiple models.",
				sidebar: { order: 5 },
				banner: "This document is a work in progress.",
			},
			sections: Object.values(commonSchemas).map((model) => ({ model })),
		}),
	},
];

/**
 * Returns the directory path for the docs content.
 * @returns Promise<string>
 */
const useDirectory = async (): Promise<string> => {
	// Use path.resolve with process.cwd() to get the monorepo root
	// Assumes the script is run from the 'packages/forge-schema' directory
	const directory = path.resolve(
		process.cwd(),
		"../../apps/docs/src/content/docs/dhf-data-spec/models",
	);

	/**
	 * Ensures the schema directory exists.
	 * Creates the directory if it does not exist.
	 */
	const { mkdir } = await import("node:fs/promises");
	await mkdir(directory, { recursive: true });

	return directory;
};

/**
 * Writes each imported schema as a JSON file at the monorepo root.
 * @returns Promise<void>
 */
export const generateDocs = async (): Promise<void> => {
	const directory = await useDirectory();

	// Dynamically import fs/promises for ESM compatibility
	const { writeFile } = await import("node:fs/promises");

	// Write each schema as a pretty-printed JSON file
	await Promise.all(
		pages.map(async ({ data, filename }) => {
			const dest = path.join(directory, filename);
			return writeFile(dest, data, "utf-8");
		}),
	);
};
