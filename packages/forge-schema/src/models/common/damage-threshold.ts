import { z } from "zod/v4";

export const damageThresholds = z
	.object({
		_type: z.literal("damageThresholds").default("damageThresholds"),
		major: z.number().int().min(0).max(100),
		severe: z.number().int().min(0).max(100),
	})
	.meta({
		id: "DamageThresholds",
		title: "Damage Thresholds",
		description: "The damage thresholds of a character",
		examples: [{ _type: "damageThresholds", major: 5, severe: 8 }],
	});
