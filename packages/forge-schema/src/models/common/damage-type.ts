import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";

export const damageType = z
	.union([z.literal("Physical"), z.literal("Magical")])
	.register(jsonCollection, {
		id: "DamageType",
		description: "The type of damage a weapon or ability deals",
		examples: ["Physical", "Magical"],
	});
