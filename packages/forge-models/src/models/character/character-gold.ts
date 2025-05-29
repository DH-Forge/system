import { z } from "zod/v4";

export const characterGold = z.object({
	_type: z.literal("characterGold"),
	handfuls: z.number().int().default(0),
	bags: z.number().int().default(0),
	chests: z.number().int().default(0),
});

export type CharacterGold = z.infer<typeof characterGold>;
