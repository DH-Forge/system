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
		examples: [
			{
				_type: "domain",
				name: "Arcana",
				description:
					"Arcana is the domain of innate and instinctual magic. Those who choose this path tap into the raw, enigmatic forces of the realms to manipulate both their own energy and the elements. Arcana offers wielders a volatile power, but it is incredibly potent when correctly channeled. The Arcana domain can be accessed by the Druid and Sorcerer classes.",
			},
		],
	});

export const domainReference = createReference("role/domain").meta({
	id: "ReferenceDomain",
	title: "Reference to a Domain",
	examples: [
		{
			_type: "reference",
			_key: "role/domain",
			value: "arcana",
		},
	],
});
