import { z } from "zod/v4";
import { jsonCollection } from "../json-collection.js";

export const schemaVersion = z
	.string()
	.regex(/^\d+\.\d+\.\d+$/)
	.register(jsonCollection, {
		id: "SchemaVersion",
		description: "A version number",
		examples: ["1.0.0", "2.10.0", "3.0.19"],
	});

export const schemaMeta = z
	.object({
		rulesetUrl: z.url(),
		rulesetVersion: schemaVersion,
		dateCreated: z.iso.datetime(),
		dateUpdated: z.iso.datetime(),
	})
	.register(jsonCollection, {
		id: "SchemaMeta",
		description: "Metadata about a schema",
		examples: [
			{
				rulesetUrl: "https://dh-forge.com/schema.json",
				rulesetVersion: "1.0.0",
				dateCreated: "2025-05-30T12:00:00.000Z",
				dateUpdated: "2025-05-30T12:00:00.000Z",
			},
		],
	});
