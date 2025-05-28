import { z } from "zod/v4";

export const registryCampaignSchema = z.object({
	type: z.literal("registry-campaign"),
});
