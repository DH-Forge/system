import { z } from "zod/v4";

export const characterExperience = z.object({
	_type: z.literal("characterExperience"),
	name: z.string(),
	description: z.string().optional(),
});

export type CharacterExperience = z.infer<typeof characterExperience>;
