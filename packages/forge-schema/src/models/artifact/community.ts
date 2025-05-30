import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";
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
	.register(jsonCollection, {
		id: "Community",
		description: "A community that shaped a characters backstory",
		examples: [
			{
				_type: "community",
				name: "Highborn",
				description:
					"Being part of a highborn community means you're accustomed to a life of elegance, opulence, and prestige within the upper echelons of society.",
				feature: {
					name: "Privilege",
					description:
						"You have advantage on rolls to consort with nobles, negotiate prices, or leverage your reputation to get what you want.",
				},
			},
		],
	});

export const communityReference = createReference(
	"heritage/community",
).register(jsonCollection, {
	id: "CommunityReference",
	description: "A reference to a community",
	examples: [
		{
			_type: "reference",
			_key: "heritage/community",
			value: "highborn",
		},
	],
});
