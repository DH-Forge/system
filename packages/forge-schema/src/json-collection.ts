import { z } from "zod/v4";

type CollectionMetadata = {
	id: string;
	description: string;
	examples: z.$output[];
};

export const jsonCollection = z.registry<CollectionMetadata>();
