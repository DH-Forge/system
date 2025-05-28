import { z } from "zod/v4";

export const characterSchema = z.object({
	$schema: z.url(),
	type: z.literal("character"),
});
