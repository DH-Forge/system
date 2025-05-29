import { z } from "zod/v4";

export const damageType = z.union([
	z.literal("Physical"),
	z.literal("Magical"),
]);

export type DamageType = z.infer<typeof damageType>;
