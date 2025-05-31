import { z } from "zod/v4";
import { communityReference } from "../artifact/community.js";
import { characterAncestry } from "./character-ancestry.js";

export const heritage = z
	.object({
		_type: z.literal("heritage").default("heritage"),
		community: communityReference,
		ancestry: characterAncestry,
	})
	.meta({
		id: "Heritage",
		title: "Character Heritage",
		description: "A character's heritage",
		examples: [
			{
				_type: "heritage",
				community: {
					_type: "reference",
					_key: "heritage/community",
					value: "seaborne",
				},
				ancestry: {
					_type: "singleAncestry",
					ancestry: {
						_type: "reference",
						_key: "heritage/ancestry",
						value: "dwarf",
					},
				},
			},
			{
				_type: "heritage",
				community: {
					_type: "reference",
					_key: "heritage/community",
					value: "highborn",
				},
				ancestry: {
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
			},
		],
	});
