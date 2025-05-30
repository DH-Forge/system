import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";
import { createReference } from "../../utility/create-reference.js";

export const ancestry = z
	.object({
		_type: z.literal("ancestry"),
		name: z.string(),
		description: z.string().optional(),
		primaryFeature: z.object({ name: z.string(), description: z.string() }),
		secondaryFeature: z.object({ name: z.string(), description: z.string() }),
	})
	.register(jsonCollection, {
		id: "Ancestry",
		description: "The ancestry of a character",
		examples: [
			{
				_type: "ancestry",
				name: "Ribbet",
				description:
					"Ribbets resemble anthropomorphic frogs with protruding eyes, and webbed hands and feet.",
				primaryFeature: {
					name: "Amphibious",
					description: "You can breathe and move naturally under water.",
				},
				secondaryFeature: {
					name: "Long Tounge",
					description:
						"You can use your long tounge to grab onto things within close range. Mark a stress to use your tounge as a finesse close weapon that deals d12 physical damage using your proficiency.",
				},
			},
		],
	});

export const ancestryReference = createReference("heritage/ancestry").register(
	jsonCollection,
	{
		id: "AncestryReference",
		description: "A reference to an ancestry",
		examples: [
			{
				_type: "reference",
				_key: "heritage/ancestry",
				value: "ribbet",
			},
		],
	},
);
