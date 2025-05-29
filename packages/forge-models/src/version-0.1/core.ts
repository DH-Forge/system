import { z } from "zod/v4";

export const coreSchema = z.object({
	$schema: z.url(),
	type: z.literal("registry-core"),
});
