import { z } from "zod/v4";

export const registrySubclass = z.object({
	_type: z.literal("registrySubclass"),
	name: z.string(),
});

export type RegistrySubclass = z.infer<typeof registrySubclass>;

export const registryClass = z.object({
	_type: z.literal("registryClass"),
	name: z.string(),
	subclasses: z.array(registrySubclass),
});

export type RegistryClass = z.infer<typeof registryClass>;
