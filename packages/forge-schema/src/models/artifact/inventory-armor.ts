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
		examples: [
			{
				_type: "inventoryArmor",
				name: "Full Plate Armor",
				description: null,
				baseThresholds: {
					_type: "damageThresholds",
					major: 8,
					severe: 17,
				},
				baseScore: 4,
				features: ["Very Heavy: -2 to Evasion"],
			},
		],
	});

export const inventoryArmorReference = createReference("item/armor").meta({
	id: "ReferenceArmor",
	title: "Reference to a piece of Armor",
	examples: [
		{
			_type: "reference",
			_key: "item/armor",
			value: "full-plate-armor",
		},
	],
});
