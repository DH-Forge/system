import { z } from "zod/v4";
import { createReference } from "../../utility/create-reference.js";

export const domain = z
	.object({
		_type: z.literal("domain"),
		name: z.string(),
		description: z.string().nullable(),
	})
	.meta({
		id: "Domain",
		title: "Domain",
		description: "A domain of a character class",
	});

export const domainReference = createReference("role/domain").meta({
	id: "ReferenceDomain",
	title: "Reference to a Domain",
});
