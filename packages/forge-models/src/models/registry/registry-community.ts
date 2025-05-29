import { z } from "zod/v4";

export const registryCommunity = z.object({
	_type: z.literal("community"),
	name: z.string(),
	description: z.string().optional(),
	feature: z.string(),
});

export type RegistryCommunity = z.infer<typeof registryCommunity>;
