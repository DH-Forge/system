import { z } from "zod/v4";
import { createReference } from "../../utility/create-reference.js";

export const inventoryThing = z
	.object({
		_type: z.literal("inventoryThing").default("inventoryThing"),
		name: z.string(),
		description: z.string().nullable(),
	})
	.meta({
		id: "Thing",
		title: "Thing",
		description: "A thing that can be added to a character's inventory",
		examples: [
			{
				_type: "inventoryThing",
				name: "Suspicious looking potion",
				description: "The label is written in a language you don't recognize.",
			},
		],
	});

export const inventoryThingReference = createReference("item/thing").meta({
	id: "ReferenceThing",
	title: "Reference to a Thing",
	examples: [
		{
			_type: "reference",
			_key: "item/thing",
			value: "suspicious-looking-potion",
		},
	],
});
