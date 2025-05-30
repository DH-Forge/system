import { z } from "zod/v4";

export const referenceVersion = z.string().regex(/^\d+\.\d+\.\d+$/);
export type ReferenceVersion = `${number}.${number}.${number}`;

export const referenceValue = z
	.string()
	.regex(/^[A-Za-z]+\/[A-Za-z]+:[A-Za-z]+$/);
export type ReferenceValue<
	K extends `${string}/${string}` = `${string}/${string}`,
	ID extends string = string,
> = `${K}:${ID}`;

export const referenceRegistry = z.object({
	_type: z.literal("documentRegistry"),
	url: z.url(),
	usedVersion: referenceVersion,
});

export type ReferenceRegistry = z.infer<typeof referenceRegistry>;
