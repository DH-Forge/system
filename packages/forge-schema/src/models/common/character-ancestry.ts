import { z } from "zod/v4";
import { ancestryReference } from "../artifact/ancestry.js";

export const characterAncestry = z
	.union([
		z.object({
			_type: z.literal("singleAncestry").default("singleAncestry"),
			ancestry: ancestryReference,
		}),
		z.object({
			_type: z.literal("dualAncestry").default("dualAncestry"),
			primary: ancestryReference,
			secondary: ancestryReference,
		}),
	])
	.meta({
		id: "CharacterAncestry",
		title: "Character Ancestry",
		description: "A character's ancestry",
		examples: [
			{
				_type: "singleAncestry",
				ancestry: {
					_type: "reference",
					_key: "heritage/ancestry",
					value: "dwarf",
				},
			},
			{
				_type: "dualAncestry",
				primary: {
					_type: "reference",
					_key: "heritage/ancestry",
					value: "elf",
				},
				secondary: {
					_type: "reference",
					_key: "heritage/ancestry",
					value: "faun",
				},
			},
		],
	});
