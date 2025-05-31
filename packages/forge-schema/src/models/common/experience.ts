import { z } from "zod/v4";

export const experience = z
	.object({
		_type: z.literal("experience").default("experience"),
		name: z.string(),
		description: z.string().nullable().default(null),
	})
	.meta({
		id: "Experience",
		title: "Character Experience",
		description: "Experience represents a character specialization.",
	});
