import { z } from "zod/v4";
import { referenceValue } from "../reference.js";

export const characterSingleAncestry = z.object({
	_type: z.literal("singleAncestry"),
	ancestry: referenceValue,
	notes: z.string().optional(),
});

export type CharacterSingleAncestry = z.infer<typeof characterSingleAncestry>;

export const characterDualAncestry = z.object({
	_type: z.literal("dualAncestry"),
	primary: referenceValue,
	secondary: referenceValue,
});

export type CharacterDualAncestry = z.infer<typeof characterDualAncestry>;

export const characterHeritage = z.object({
	_type: z.literal("characterHeritage"),
	community: referenceValue,
	ancestry: z.union([characterSingleAncestry, characterDualAncestry]),
});

export type CharacterHeritage = z.infer<typeof characterHeritage>;
