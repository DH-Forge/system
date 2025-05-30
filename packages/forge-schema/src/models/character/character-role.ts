import { z } from "zod/v4";
import { referenceValue } from "../reference.js";

export const characterRole = z.object({
	_type: z.literal("characterRole"),
	class: referenceValue,
	subclass: referenceValue,
});

export type CharacterRole = z.infer<typeof characterRole>;
