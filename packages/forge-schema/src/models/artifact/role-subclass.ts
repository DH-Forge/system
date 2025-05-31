import { z } from "zod/v4";
import { createReference } from "../../utility/create-reference.js";
import { feature } from "../common/feature.js";
import { traitName } from "../common/trait.js";

export const roleSubclass = z
	.object({
		_type: z.literal("subclass"),
		name: z.string(),
		description: z.string(),
		spellTrait: traitName.nullable().default(null),

		foundationFeatures: z.array(feature),
		specializationFeatures: z.array(feature),
		masteryFeatures: z.array(feature),
	})
	.meta({
		id: "Subclass",
		title: "Subclass",
		description: "A subclass of a class",
		examples: [
			{
				_type: "subclass",
				name: "Troubadour",
				description:
					"Play the Troubadour if you want to play music to bolster your allies.",
				spellTrait: "Presence",

				foundationFeatures: [
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
				specializationFeatures: [
					{
						_type: "feature",
						name: "Maestro",
						description:
							"Your rallying songs steel the courage of those who listen. When you give a Rally Die to an ally, they can gain a Hope or clear a Stress.",
						notes: null,
						modifiers: null,
					},
				],
				masteryFeatures: [
					{
						_type: "feature",
						name: "Virtuoso",
						description:
							"You are among the greatest of your craft and your skill is boundless. You can perform each of your “Gifted Performer” feature’s songs twice per long rest.",
						notes: null,
						modifiers: null,
					},
				],
			},
		],
	});

export const roleSubclassReference = createReference("role/subclass").meta({
	id: "ReferenceSubclass",
	title: "Reference to a Subclass",
	examples: [
		{
			_type: "reference",
			_key: "role/subclass",
			value: "troubadour",
		},
	],
});
