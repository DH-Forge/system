import { z } from "zod/v4";

/**
 * Checks if the string matches the VersionString format
 */
export const versionStringValidator = z.custom<
	`${number}.${number}.x` | `${number}.${number}.${number}`
>((val) => {
	if (typeof val !== "string") return false;
	if (!val.includes(".")) return false;

	const [major, minor, patch] = val.split(".");
	return Number(major) >= 0 && Number(minor) >= 0 && Number(patch) >= 0;
}, 'invalid version string."');

export type VersionString = z.infer<typeof versionStringValidator>;

/**
 * Checks if the string matches the VersionRecord format
 */
export const versionRecordValidator = z.object({
	major: z.number().int().min(0),
	minor: z.number().int().min(0),
	patch: z.union([z.number().int().min(0), z.literal("x")]),
});

export type VersionRecord = z.infer<typeof versionRecordValidator>;

/**
 * Checks if a string is a valid VersionString
 * @param val - The string to check
 * @returns true if valid, false otherwise
 */
export function isVersionString(val: string): val is VersionString {
	return versionStringValidator.safeParse(val).success;
}
