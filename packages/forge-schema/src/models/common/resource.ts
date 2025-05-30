import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";

export const dynamicResource = z
	.object({
		_type: z.literal("dynamicResource"),
		max: z.number().int().min(0),
		current: z.number().int().min(0),
	})
	.register(jsonCollection, {
		id: "DynamicResource",
		description: "A dynamic resource used by a character",
		examples: [
			{ _type: "dynamicResource", max: 10, current: 0 },
			{ _type: "dynamicResource", max: 5, current: 3 },
		],
	});
