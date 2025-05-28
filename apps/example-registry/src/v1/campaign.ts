import { schema } from "@forge/models/version-0.1";
import type { z } from "zod/v4";

type Campaign = z.infer<typeof schema.registryCampaign>;

const dataset = {
	type: "registry-campaign",
} satisfies Campaign;

export const registryCampaign = schema.registryCampaign.safeParse(dataset);
