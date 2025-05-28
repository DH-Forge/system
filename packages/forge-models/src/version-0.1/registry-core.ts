import { z } from "zod/v4";

export const registryCoreSchema = z.object({
	$schema: z.url(),
	type: z.literal("registry-core"),
});
