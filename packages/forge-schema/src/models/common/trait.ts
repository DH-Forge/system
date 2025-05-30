import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";

export const traitName = z
	.union([
		z.literal("Agility"),
		z.literal("Strength"),
		z.literal("Finesse"),
		z.literal("Instinct"),
		z.literal("Presence"),
		z.literal("Knowledge"),
	])
	.register(jsonCollection, {
		id: "TraitName",
		description: "The name of a character trait",
		examples: [
			"Agility",
			"Strength",
			"Finesse",
			"Instinct",
			"Presence",
			"Knowledge",
		],
	});

export const trait = z
	.object({
		_type: z.literal("trait").default("trait"),
		value: z.number().int().default(0),
		locked: z.boolean().default(false),
	})
	.register(jsonCollection, {
		id: "Trait",
		description: "The details of a character trait",
		examples: [
			{ _type: "trait", value: 2, locked: true },
			{ _type: "trait", value: -1, locked: false },
		],
	});
