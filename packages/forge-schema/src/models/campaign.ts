import { z } from "zod/v4";
import { ruleset } from "./ruleset.js";
import { schemaMetadata } from "./schema.js";

export const campaign = z
	.object({
		_type: z.literal("campaign"),
		_meta: schemaMetadata,

		homebrew: ruleset.omit({ _type: true, _meta: true }).partial(),
	})
	.meta({
		id: "Campaign",
		title: "Campaign",
		description: "A campaign configuration and homebrew ruleset",
		examples: [
			{
				_type: "campaign",
				_meta: {
					rulesetUrl: "https://dh-forge.com/schema.json",
					rulesetVersion: "0.1.0",
					dateCreated: "2025-05-30T12:00:00.000Z",
					dateUpdated: "2025-05-30T12:00:00.000Z",
				},
				homebrew: {
					"item/armor": {},
					"item/weapon": {},
					"item/thing": {},
					"role/class": {},
					"role/subclass": {},
					"heritage/ancestry": {},
					"heritage/community": {},
				},
			},
		],
	});
