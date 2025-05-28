import { schema } from "@forge/models/version-0.1";
import type { z } from "zod/v4";

type Core = z.infer<typeof schema.registryCore>;

const dataset = {
	type: "registry-core",
} satisfies Core;

export const registryCore = schema.registryCore.safeParse(dataset);
