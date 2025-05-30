import { z } from "zod/v4";
import { jsonCollection } from "../json-collection.js";
import { coreRuleset } from "./ruleset-core.js";
import { schemaMeta } from "./schema.js";

export const campaignRuleset = z
	.object({
		_type: z.literal("campaignRuleset"),
		_meta: schemaMeta,

		homebrew: coreRuleset.omit({ _type: true, _meta: true }).partial(),
	})
	.register(jsonCollection, {
		id: "CampaignRuleset",
		description: "A campaign extension of a core ruleset",
		examples: [
			{
				_type: "campaignRuleset",
				_meta: {
					rulesetUrl: "https://dh-forge.com/schema.json",
					rulesetVersion: "0.1.0",
					dateCreated: "2025-05-30T12:00:00.000Z",
					dateUpdated: "2025-05-30T12:00:00.000Z",
				},
				homebrew: {
					"item/armor": {},
					"item/weapon": {},
					"item/special": {},
					"role/class": {},
					"role/subclass": {},
					"heritage/ancestry": {},
					"heritage/community": {},
				},
			},
		],
	});
