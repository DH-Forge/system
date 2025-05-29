import { z } from "zod/v4";
import {
	referenceHeritageAncestry,
	referenceHeritageCommunity,
} from "../reference.js";

export const characterSingleAncestry = z.object({
	_type: z.literal("singleAncestry"),
	ancestry: referenceHeritageAncestry,
	notes: z.string().optional(),
});

export type CharacterSingleAncestry = z.infer<typeof characterSingleAncestry>;

export const characterDualAncestry = z.object({
	_type: z.literal("dualAncestry"),
	primary: referenceHeritageAncestry,
	secondary: referenceHeritageAncestry,
});

export type CharacterDualAncestry = z.infer<typeof characterDualAncestry>;

export const characterHeritage = z.object({
	_type: z.literal("characterHeritage"),
	community: referenceHeritageCommunity,
	ancestry: z.union([characterSingleAncestry, characterDualAncestry]),
});

export type CharacterHeritage = z.infer<typeof characterHeritage>;
