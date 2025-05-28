import type { VersionModelMap } from "../lib/types";
import { registryCampaignSchema } from "./campaign";
import { characterSchema } from "./character";
import { registryCoreSchema } from "./core";

export const schema = {
	character: characterSchema,
	registryCore: registryCoreSchema,
	registryCampaign: registryCampaignSchema,
} satisfies VersionModelMap;
