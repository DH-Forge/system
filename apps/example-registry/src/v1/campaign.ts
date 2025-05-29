import { schema } from "@forge/models/version-0.1";
import type { z } from "zod/v4";

type Campaign = z.infer<typeof schema.campaign>;

const dataset = {
	$schema: "https://dh-forge.com/schema/0.1.x/campaign",
	type: "registry-campaign",
} satisfies Campaign;

export const registryCampaign = schema.campaign.safeParse(dataset);
