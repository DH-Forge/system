import { z } from "zod/v4";
import { roleClassReference } from "../artifact/role-class.js";
import { roleSubclassReference } from "../artifact/role-subclass.js";

export const characterRole = z
	.object({
		_type: z.literal("characterRole").default("characterRole"),
		class: roleClassReference,
		subclass: roleSubclassReference,
	})
	.meta({
		id: "CharacterRole",
		title: "Character Role",
		description: "Ruleset references to the class and subclass of a character",
	});
