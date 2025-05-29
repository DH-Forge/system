import { z } from "zod/v4";

export const characterEvasion = z.number().int().min(0);

export type CharacterEvasion = z.infer<typeof characterEvasion>;
