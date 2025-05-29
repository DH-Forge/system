import { z } from "zod/v4";
import { referenceRoleClass, referenceRoleSubclass } from "../reference";

export const characterRole = z.object({
	_type: z.literal("characterRole"),
	class: referenceRoleClass,
	subclass: referenceRoleSubclass,
});

export type CharacterRole = z.infer<typeof characterRole>;
