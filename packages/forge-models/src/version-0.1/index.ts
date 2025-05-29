import type { SchemaModelMap } from "../lib/schema";
import { campaignSchema } from "./campaign";
import { characterSchema } from "./character";
import { coreSchema } from "./core";

export const schema = {
	character: characterSchema,
	core: coreSchema,
	campaign: campaignSchema,
} satisfies SchemaModelMap;
