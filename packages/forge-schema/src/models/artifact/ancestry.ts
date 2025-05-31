import { z } from "zod/v4";
import { createReference } from "../../utility/create-reference.js";

export const ancestry = z
	.object({
		_type: z.literal("ancestry"),
		name: z.string(),
		description: z.string().optional(),
		primaryFeature: z.object({ name: z.string(), description: z.string() }),
		secondaryFeature: z.object({ name: z.string(), description: z.string() }),
	})
	.meta({
		title: "Ancestry",
		description: "The ancestry of a character",
	});

export const ancestryReference = createReference("heritage/ancestry").meta({
	id: "ReferenceAncestry",
	title: "Reference to an Ancestry",
});
