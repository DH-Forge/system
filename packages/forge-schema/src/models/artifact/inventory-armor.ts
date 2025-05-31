import { z } from "zod/v4";
import { createReference } from "../../utility/create-reference.js";
import { damageThresholds } from "../common/damage-threshold.js";

export const inventoryArmor = z
	.object({
		_type: z.literal("inventoryArmor").default("inventoryArmor"),
		name: z.string(),
		description: z.string().nullable(),
		baseThresholds: damageThresholds,
		baseScore: z.number().int().min(0),
		features: z.array(z.string()).nullable(),
	})
	.meta({
		id: "Armor",
		title: "Armor",
		description: "A set of armor that can be equipped by a character",
	});

export const inventoryArmorReference = createReference("item/armor").meta({
	id: "ReferenceArmor",
	title: "Reference to a piece of Armor",
});
