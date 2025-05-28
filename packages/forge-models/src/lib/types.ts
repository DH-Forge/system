import type { z } from "zod/v4";

export type VersionID = `${number}.${number}.x`;

export type VersionModelMap = {
	character: z.ZodObject;
	registryCore: z.ZodObject;
	registryCampaign: z.ZodObject;
};
