import { z } from "zod/v4";

export const characterTrait = z.object({
	_type: z.literal("characterTrait"),
	value: z.number().int().default(0),
	locked: z.boolean().default(false),
});

export type CharacterTrait = z.infer<typeof characterTrait>;

export const characterTraits = z.object({
	_type: z.literal("characterTraits"),
	agility: characterTrait,
	strength: characterTrait,
	finesse: characterTrait,
	instinct: characterTrait,
	presence: characterTrait,
	knowledge: characterTrait,
});

export type CharacterTraits = z.infer<typeof characterTraits>;
