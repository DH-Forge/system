import { z } from "zod/v4";

export const characterName = z.object({
	_type: z.literal("characterName"),
	nickname: z.string().optional(),
	fullName: z.string(),
});

export type CharacterName = z.infer<typeof characterName>;
