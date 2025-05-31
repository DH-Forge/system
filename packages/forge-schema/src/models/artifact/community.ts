import { z } from "zod/v4";
import { createReference } from "../../utility/create-reference.js";

export const community = z
	.object({
		_type: z.literal("community"),
		name: z.string(),
		description: z.string().optional(),
		feature: z.object({
			name: z.string(),
			description: z.string(),
		}),
	})
	.meta({
		id: "Community",
		title: "Community",
		description: "A community that shaped a characters backstory",
	});

export const communityReference = createReference("heritage/community").meta({
	id: "ReferenceCommunity",
	title: "Reference to a Community",
});
