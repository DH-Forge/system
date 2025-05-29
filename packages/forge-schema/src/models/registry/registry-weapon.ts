import { z } from "zod/v4";
import { damageType, diceType, range } from "../mechanic";

export const registryItemWeapon = z.object({
	_type: z.literal("itemWeapon"),
	name: z.string(),
	trait: z.string().optional(),
	range: range,
	damageDice: diceType,
	damageType: damageType,
	features: z.array(z.string()).optional(),
	burden: z.union([z.literal("One-Handed"), z.literal("Two-Handed")]),
});

export type RegistryItemWeapon = z.infer<typeof registryItemWeapon>;
