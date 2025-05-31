import { z } from "zod/v4";

export const feature = z
	.object({
		_type: z.literal("feature"),
		name: z.string(),
		description: z.string(),
		notes: z.array(z.string()).nullable().default(null),
		modifiers: z.null().default(null),
	})
	.meta({
		id: "Feature",
		title: "Feature",
		description: "A feature for a character to use",
	});
