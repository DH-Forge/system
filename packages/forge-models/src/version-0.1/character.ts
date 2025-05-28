import { z } from "zod/v4";

export const characterSchema = z.object({
	type: z.literal("character"),
});
