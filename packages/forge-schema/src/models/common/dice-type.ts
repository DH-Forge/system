import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";

export const diceType = z
	.union([
		z.literal("d4"),
		z.literal("d6"),
		z.literal("d8"),
		z.literal("d10"),
		z.literal("d12"),
		z.literal("d20"),
	])
	.register(jsonCollection, {
		id: "DiceType",
		description: "The type of dice to roll",
		examples: ["d4", "d6", "d8", "d10", "d12", "d20"],
	});
