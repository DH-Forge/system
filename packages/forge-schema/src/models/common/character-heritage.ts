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
	});
