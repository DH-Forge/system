import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";
import { createReference } from "../../utility/create-reference.js";
import { domainReference } from "./domain.js";
import { inventoryArmor } from "./inventory-armor.js";
import { inventoryThing } from "./inventory-thing.js";
import { inventoryWeapon } from "./inventory-weapon.js";
import { roleSubclassReference } from "./role-subclass.js";

export const roleClass = z
	.object({
		_type: z.literal("class"),
		name: z.string(),
		domain: domainReference,
		initialEvasion: z.number().int().min(0).max(100),
		initialHitPoints: z.number().int().min(0),
		initialInventory: z.array(
			z.union([inventoryThing, inventoryWeapon, inventoryArmor]),
		),

		features: z.array(
			z.object({
				name: z.string(),
				description: z.string(),
			}),
		),
		hopeFeature: z.object({
			name: z.string(),
			description: z.string(),
		}),

		subclasses: z.array(roleSubclassReference),
	})
	.register(jsonCollection, {
		id: "Class",
		description: "A class of a character",
		examples: [
			{
				_type: "class",
				name: "Barbarian",
				domain: {
					_type: "reference",
					_key: "role/domain",
					value: "arcana",
				},
				initialEvasion: 10,
				initialHitPoints: 5,
				initialInventory: [
					{
						_type: "inventoryThing",
						name: "A romance novel or a letter never opened",
						description: null,
					},
				],
				features: [
					{
						name: "Rally",
						description:
							"Once per session, describe how you rally the party and give yourself and each of your allies a Rally Die. At level 1, your Rally Die is a d6. A PC can spend their Rally Die to roll it, adding the result to their action roll, reaction roll, damage roll, or to clear a number of Stress equal to the result. At the end of each session, clear all unspent Rally Dice. At level 5, your Rally Die increases to a d8.",
					},
				],
				hopeFeature: {
					name: "Make a Scene",
					description:
						"Spend 3 Hope to temporarily Distract a target within Close range, giving them a -2 penalty to their Difficulty.",
				},

				subclasses: [],
			},
		],
	});

export const roleClassReference = createReference("role/class").register(
	jsonCollection,
	{
		id: "RoleClassReference",
		description: "A reference to a class",
		examples: [
			{
				_type: "reference",
				_key: "role/class",
				value: "barbarian",
			},
		],
	},
);
