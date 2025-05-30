import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";
import { createReference } from "../../utility/create-reference.js";

export const inventoryThing = z
	.object({
		_type: z.literal("inventoryThing").default("inventoryThing"),
		name: z.string(),
		description: z.string().nullable(),
	})
	.register(jsonCollection, {
		id: "Thing",
		description: "A thing that can be added to a character's inventory",
		examples: [
			{
				_type: "inventoryThing",
				name: "Suspicious looking potion",
				description: "The label is written in a language you don't recognize.",
			},
		],
	});

export const inventoryThingReference = createReference("item/special").register(
	jsonCollection,
	{
		id: "ItemSpecialReference",
		description: "A reference to a special item",
		examples: [
			{
				_type: "reference",
				_key: "item/special",
				value: "suspicious-looking-potion",
			},
		],
	},
);
