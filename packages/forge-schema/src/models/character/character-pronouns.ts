import { z } from "zod/v4";

export const characterPronouns = z.object({
	_type: z.literal("characterPronouns"),
	subject: z.string(), // she, he, they
	object: z.string(), // her, him, them
	possessive: z.string(), // hers, his, theirs
	reflexive: z.string(), // herself, himself, themselves
});

export type CharacterPronouns = z.infer<typeof characterPronouns>;
