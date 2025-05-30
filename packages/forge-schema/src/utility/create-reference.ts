import { z } from "zod/v4";

export const createReference = <T extends string>(key: T) =>
	z.object({
		_type: z.literal("reference"),
		_key: z.literal(key),
		value: z.string(),
	} as const);
