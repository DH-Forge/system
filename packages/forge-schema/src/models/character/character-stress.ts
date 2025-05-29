import { z } from "zod/v4";

export const characterStress = z.object({
	_type: z.literal("characterStress"),
	max: z.number().int().min(0),
	current: z.number().int().min(0),
});

export type CharacterStress = z.infer<typeof characterStress>;
