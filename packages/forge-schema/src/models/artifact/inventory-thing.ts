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
	});

export const inventoryThingReference = createReference("item/thing").meta({
	id: "ReferenceThing",
	title: "Reference to a Thing",
});
