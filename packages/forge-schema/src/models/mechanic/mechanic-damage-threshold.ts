import { z } from "zod/v4";

export const damageThreshold = z.object({
	_type: z.literal("damageThreshold"),
	minor: z.number().int().min(0),
	major: z.number().int().min(0),
	severe: z.number().int().min(0),
});

export type DamageThreshold = z.infer<typeof damageThreshold>;
