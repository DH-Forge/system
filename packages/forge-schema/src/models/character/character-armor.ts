import { z } from "zod/v4";

export const characterArmor = z.object({
	_type: z.literal("characterArmor"),
	total: z.number().int().min(1),
	spent: z.number().int().min(0),
});

export type CharacterArmor = z.infer<typeof characterArmor>;
