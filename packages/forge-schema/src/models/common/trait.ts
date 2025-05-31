import { z } from "zod/v4";

export const traitName = z
	.union([
		z.literal("Agility"),
		z.literal("Strength"),
		z.literal("Finesse"),
		z.literal("Instinct"),
		z.literal("Presence"),
		z.literal("Knowledge"),
	])
	.meta({
		id: "TraitName",
		title: "Trait Name",
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
	.meta({
		id: "Trait",
		title: "Trait",
		description: "The details of a character trait",
		examples: [
			{ _type: "trait", value: 2, locked: true },
			{ _type: "trait", value: -1, locked: false },
		],
	});
