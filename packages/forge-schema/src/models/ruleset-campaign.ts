import { z } from "zod/v4";
import { coreRuleset } from "./ruleset-core.js";
import { SchemaMetadata } from "./schema.js";

export const campaignRuleset = z
	.object({
		_type: z.literal("campaignRuleset"),
		_meta: SchemaMetadata,

		homebrew: coreRuleset.omit({ _type: true, _meta: true }).partial(),
	})
	.meta({
		id: "CampaignRuleset",
		title: "Campaign Ruleset",
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
					"item/thing": {},
					"role/class": {},
					"role/subclass": {},
					"heritage/ancestry": {},
					"heritage/community": {},
				},
			},
		],
	});
