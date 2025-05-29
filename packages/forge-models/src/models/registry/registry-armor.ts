import { z } from "zod/v4";
import { damageThreshold } from "../mechanic";

export const registryItemArmor = z.object({
	_type: z.literal("itemArmor"),
	name: z.string(),
	baseThresholds: damageThreshold,
	baseScore: z.number().int().min(0),
	features: z.array(z.string()).optional(),
});

export type RegistryItemArmor = z.infer<typeof registryItemArmor>;
