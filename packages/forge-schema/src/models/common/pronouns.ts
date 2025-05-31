import { z } from "zod/v4";

export const pronouns = z
	.object({
		_type: z.literal("pronouns"),
		subject: z.string().meta({
			id: "PronounsSubject",
			title: "Subject Pronoun",
			description: "A pronoun form used when it performs the verb’s action.",
			examples: ["she", "he", "they"],
		}),
		object: z.string().meta({
			id: "PronounsObject",
			title: "Object Pronoun",
			description:
				"A pronoun form used when it receives the action or follows a preposition.",
			examples: ["her", "him", "them"],
		}),
		possessive: z.string().meta({
			id: "PronounsPossessive",
			title: "Possessive Pronoun",
			description:
				"A pronoun form that replaces a noun to show ownership or relationship.",
			examples: ["hers", "his", "theirs"],
		}),
		reflexive: z.string().meta({
			id: "PronounsReflexive",
			title: "Reflexive Pronoun",
			description:
				"A pronoun form ending in “-self” or “-selves” that refers back to the clause’s subject.",
			examples: ["herself", "himself", "themselves"],
		}),
	})
	.meta({
		id: "Pronouns",
		title: "Pronouns",
		description: "The pronouns of a character",
	});
