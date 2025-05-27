import { z } from "zod/v4";

export const exampleSchema = z.object({
	name: z.string(),
	age: z.number(),
});
