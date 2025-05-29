import { z } from "zod/v4";

export const campaignSchema = z.object({
	$schema: z.url(),
	type: z.literal("registry-campaign"),
});
