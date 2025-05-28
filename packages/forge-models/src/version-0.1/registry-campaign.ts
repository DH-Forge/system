import { z } from "zod/v4";

export const registryCampaignSchema = z.object({
	$schema: z.url(),
	type: z.literal("registry-campaign"),
});
