import { z } from "zod/v4";

export const registryItemSpecial = z.object({
	_type: z.literal("itemSpecial"),
	name: z.string(),
});

export type RegistryItemSpecial = z.infer<typeof registryItemSpecial>;
