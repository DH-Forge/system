import type { VersionModelMap } from "../lib/types";
import { characterSchema } from "./character";
import { registryCampaignSchema } from "./registry-campaign";
import { registryCoreSchema } from "./registry-core";

export const schema = {
	character: characterSchema,
	registryCore: registryCoreSchema,
	registryCampaign: registryCampaignSchema,
} satisfies VersionModelMap;
