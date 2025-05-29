import { z } from "zod/v4";
import { campaign } from "./models/campaign";
import { character } from "./models/character";
import { registry } from "./models/registry";

export const characterSchema = z.toJSONSchema(character);
export const registryCampaignSchema = z.toJSONSchema(campaign);
export const registryCoreSchema = z.toJSONSchema(registry);
