import { z } from "zod/v4";

export const characterHope = z.object({
	_type: z.literal("characterHope"),
	max: z.number().int().min(0),
	current: z.number().int().min(0),
});

export type CharacterHope = z.infer<typeof characterHope>;
