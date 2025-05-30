import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";

export const range = z
	.union([
		z.literal("Melee"),
		z.literal("Very Close"),
		z.literal("Close"),
		z.literal("Far"),
		z.literal("Very Far"),
	])
	.register(jsonCollection, {
		id: "Range",
		description: "The range of a weapon or ability",
		examples: ["Melee", "Very Close", "Close", "Far", "Very Far"],
	});
