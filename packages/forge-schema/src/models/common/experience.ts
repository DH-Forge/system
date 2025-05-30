import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";

export const experience = z
	.object({
		_type: z.literal("experience").default("experience"),
		name: z.string(),
		description: z.string().nullable().default(null),
	})
	.register(jsonCollection, {
		id: "CharacterExperience",
		description: "Experience represents a character specialization.",
		examples: [
			{
				_type: "experience",
				name: "Catch Me If You Can",
				description: null,
			},
			{
				_type: "experience",
				name: "Sticky Fingers",
				description: "Background as a con artist",
			},
		],
	});
