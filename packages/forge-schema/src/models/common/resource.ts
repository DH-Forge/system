import { z } from "zod/v4";

export const dynamicResource = z
	.object({
		_type: z.literal("dynamicResource"),
		max: z.number().int().min(0),
		current: z.number().int().min(0),
	})
	.meta({
		id: "DynamicResource",
		title: "Dynamic Resource",
		description: "A dynamic resource used by a character",
	});
