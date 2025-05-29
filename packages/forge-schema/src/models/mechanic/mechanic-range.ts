import { z } from "zod/v4";

export const range = z.union([
	z.literal("Melee"),
	z.literal("Very Close"),
	z.literal("Close"),
	z.literal("Far"),
	z.literal("Very Far"),
]);

export type Range = z.infer<typeof range>;
