import { z } from "zod/v4";

export const pronouns = z
	.object({
		_type: z.literal("pronouns"),
		subject: z.string(),
		object: z.string(),
		possessive: z.string(),
		reflexive: z.string(),
	})
	.meta({
		id: "Pronouns",
		title: "Pronouns",
		description: "The pronouns of a character",
		examples: [
			{
				_type: "pronouns",
				subject: "she",
				object: "her",
				possessive: "hers",
				reflexive: "herself",
			},
			{
				_type: "pronouns",
				subject: "he",
				object: "him",
				possessive: "his",
				reflexive: "himself",
			},
			{
				_type: "pronouns",
				subject: "they",
				object: "them",
				possessive: "theirs",
				reflexive: "themselves",
			},
		],
	});
