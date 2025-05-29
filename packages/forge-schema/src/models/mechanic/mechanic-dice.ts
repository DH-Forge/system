import { z } from "zod/v4";

export const diceType = z.union([
	z.literal("d4"),
	z.literal("d6"),
	z.literal("d8"),
	z.literal("d10"),
	z.literal("d12"),
	z.literal("d20"),
]);

export type DiceType = z.infer<typeof diceType>;
