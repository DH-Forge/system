import { characterSchema } from "./character";
import { registryCampaignSchema } from "./registry-campaign";
import { registryCoreSchema } from "./registry-core";

export default {
	character: characterSchema,
	registryCore: registryCoreSchema,
	registryCampaign: registryCampaignSchema,
} as const;
