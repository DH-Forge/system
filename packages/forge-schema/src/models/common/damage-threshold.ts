import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";

export const damageThresholds = z
	.object({
		_type: z.literal("damageThresholds").default("damageThresholds"),
		major: z.number().int().min(0).max(100),
		severe: z.number().int().min(0).max(100),
	})
	.register(jsonCollection, {
		id: "DamageThresholds",
		description: "The damage thresholds of a character",
		examples: [{ _type: "damageThresholds", major: 5, severe: 8 }],
	});
