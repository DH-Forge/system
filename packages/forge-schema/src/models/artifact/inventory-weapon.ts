import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";
import { createReference } from "../../utility/create-reference.js";
import { damageType } from "../common/damage-type.js";
import { diceType } from "../common/dice-type.js";
import { range } from "../common/range.js";
import { traitName } from "../common/trait.js";

export const inventoryWeapon = z
	.object({
		_type: z.literal("inventoryWeapon").default("inventoryWeapon"),
		name: z.string(),
		trait: traitName,
		range: range,
		damageDice: diceType,
		damageType: damageType,
		features: z.array(z.string()).nullable(),
		burden: z.union([z.literal("One-Handed"), z.literal("Two-Handed")]),
	})
	.register(jsonCollection, {
		id: "Weapon",
		description: "A weapon that can be equipped by a character",
		examples: [
			{
				_type: "inventoryWeapon",
				name: "Warhammer",
				trait: "Strength",
				range: "Melee",
				damageDice: "d8",
				damageType: "Physical",
				features: ["Versatile"],
				burden: "One-Handed",
			},
		],
	});

export const inventoryWeaponReference = createReference("item/weapon").register(
	jsonCollection,
	{
		id: "ItemWeaponReference",
		description: "A reference to a weapon",
		examples: [
			{
				_type: "reference",
				_key: "item/weapon",
				value: "warhammer",
			},
		],
	},
);
