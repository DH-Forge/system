import { z } from "zod/v4";
import { jsonCollection } from "../../json-collection.js";
import { roleClassReference } from "../artifact/role-class.js";
import { roleSubclassReference } from "../artifact/role-subclass.js";

export const characterRole = z
	.object({
		_type: z.literal("characterRole").default("characterRole"),
		class: roleClassReference,
		subclass: roleSubclassReference,
	})
	.register(jsonCollection, {
		id: "CharacterRole",
		description: "Ruleset references to the class and subclass of a character",
		examples: [
			{
				_type: "characterRole",
				class: {
					_type: "reference",
					_key: "role/class",
					value: "bard",
				},
				subclass: {
					_type: "reference",
					_key: "role/subclass",
					value: "troubadour",
				},
			},
			{
				_type: "characterRole",
				class: {
					_type: "reference",
					_key: "role/class",
					value: "guardian",
				},
				subclass: {
					_type: "reference",
					_key: "role/subclass",
					value: "stalwart",
				},
			},
		],
	});
