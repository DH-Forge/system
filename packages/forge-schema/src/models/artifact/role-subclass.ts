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
	});

export const roleSubclassReference = createReference("role/subclass").meta({
	id: "ReferenceSubclass",
	title: "Reference to a Subclass",
});
