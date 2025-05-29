import { z } from "zod/v4";

export const characterLevel = z.number().int().min(1);

export type CharacterLevel = z.infer<typeof characterLevel>;
