import { z } from "zod/v4";
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
	.meta({
		id: "Class",
		title: "Class",
		description: "A class of a character",
	});

export const roleClassReference = createReference("role/class").meta({
	id: "ReferenceClass",
	title: "Reference to a Class",
});
