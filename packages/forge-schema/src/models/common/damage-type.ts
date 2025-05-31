import { z } from "zod/v4";

export const damageType = z
	.union([z.literal("Physical"), z.literal("Magical")])
	.meta({
		id: "DamageType",
		title: "Damage Type",
		description: "The type of damage a weapon or ability deals",
		examples: ["Physical", "Magical"],
	});
