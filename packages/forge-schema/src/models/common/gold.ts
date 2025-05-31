import { z } from "zod/v4";

export const gold = z
	.object({
		_type: z.literal("gold"),
		handfuls: z.number().int().default(0),
		bags: z.number().int().default(0),
		chests: z.number().int().default(0),
	})
	.meta({
		id: "Gold",
		title: "Gold",
		description: "The amount of gold held by a character",
	});
