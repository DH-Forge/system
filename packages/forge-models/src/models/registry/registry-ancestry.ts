import { z } from "zod/v4";

export const registryAncestryFeatures = z.object({
	_type: z.literal("ancestryFeatures"),
	primary: z.string(),
	secondary: z.string(),
});

export type RegistryAncestryFeatures = z.infer<typeof registryAncestryFeatures>;

export const registryAncestry = z.object({
	_type: z.literal("ancestry"),
	name: z.string(),
	description: z.string().optional(),
	traits: z.array(z.string()),
	features: registryAncestryFeatures,
});

export type RegistryAncestry = z.infer<typeof registryAncestry>;
