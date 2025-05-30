import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";

export const feature = z
	.object({
		_type: z.literal("feature"),
		name: z.string(),
		description: z.string(),
		notes: z.array(z.string()).nullable().default(null),
		modifiers: z.null().default(null),
	})
	.register(jsonCollection, {
		id: "Feature",
		description: "A feature for a character to use",
		examples: [
			{
				_type: "feature",
				name: "Gifted Performer",
				description:
					"You can play three different types of songs, once each per long rest; describe how you perform for others to gain the listed benefit:",
				notes: [
					"Relaxing Song: You and all allies within Close range clear a Hit Point.",
					"Epic Song: Make a target within Close range temporarily Vulnerable.",
					"Heartbreaking Song: You and all allies within Close range gain a Hope.",
				],
				modifiers: null,
			},
		],
	});
