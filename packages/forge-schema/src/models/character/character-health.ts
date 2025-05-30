import { z } from "zod/v4";
import { damageThreshold } from "../mechanic/index.js";

export const characterHealth = z.object({
	_type: z.literal("characterHealth"),
	max: z.number().int().min(0),
	current: z.number().int().min(0),
	damageThreshold: damageThreshold,
});

export type CharacterHealth = z.infer<typeof characterHealth>;
