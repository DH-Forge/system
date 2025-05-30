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
