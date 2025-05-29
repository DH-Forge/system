import { schema } from "@forge/models/version-0.1";
import type { z } from "zod/v4";

type Core = z.infer<typeof schema.core>;

const dataset = {
	$schema: "https://dh-forge.com/schema/0.1.x/core",
	type: "registry-core",
} satisfies Core;

export const registryCore = schema.core.safeParse(dataset);
