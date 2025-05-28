import { z } from "zod/v4";

export const registryCoreSchema = z.object({
	type: z.literal("registry-core"),
});
