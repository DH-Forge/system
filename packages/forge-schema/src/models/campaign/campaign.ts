import { z } from "zod/v4";
import { referenceRegistry } from "../reference.js";
import { registry } from "../registry/index.js";

export const campaignMeta = z.object({
	_type: z.literal("campaignMeta"),
	extends: referenceRegistry,
});

export type CampaignMeta = z.infer<typeof campaignMeta>;

export const campaign = z.object({
	_type: z.literal("campaign"),
	_meta: campaignMeta,
	homebrew: registry.omit({ _type: true, _meta: true }).partial(),
});

export type Campaign = z.infer<typeof campaign>;

export const demoData: Campaign = {
	_type: "campaign",
	_meta: {
		_type: "campaignMeta",
		extends: {
			_type: "documentRegistry",
			url: "https://forge.daggerheart.com/core-registry.json",
			version: {
				major: 0,
				minor: 1,
				patch: 0,
			},
		},
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
};
