import { z } from "zod/v4";

export const schemaVersion = z
	.string()
	.regex(/^\d+\.\d+\.\d+$/)
	.meta({
		id: "SchemaVersion",
		title: "Schema Version",
		description: "A version number",
		examples: ["0.0.0"],
	});

export const schemaMetadata = z
	.object({
		rulesetUrl: z.url().meta({
			id: "RulesetUrl",
			title: "Ruleset URL",
			description: "The URL of the ruleset",
			examples: [
				"https://docs.dh-forge.com/schema/0.0.0/ruleset.json",
				"https://docs.dh-forge.com/schema/1.0.0/ruleset.json",
			],
		}),
		rulesetVersion: schemaVersion,
		dateCreated: z.iso.datetime(),
		dateUpdated: z.iso.datetime(),
	})
	.meta({
		id: "SchemaMetadata",
		title: "Schema Metadata",
		description: "Metadata about a schema",
	});
