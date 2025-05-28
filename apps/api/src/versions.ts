import { exampleSchema } from "@forge/models";
import type { ZodObject } from "zod/v4";

type VersionID = `${number}.${number}.x`;
type VersionMap = Record<VersionID, ZodObject>;

export const versions = {
	"0.1.x": exampleSchema,
} satisfies VersionMap;

export type AppVersion = keyof typeof versions;
export const appVersions = Object.keys(versions) as AppVersion[];

export function getVersionSchema(version: AppVersion) {
	return versions[version];
}

/**
 * Type guard to check if a string is a valid AppVersion
 * @param value - The string to check
 * @returns True if the string is a valid AppVersion, false otherwise
 */
export function isAppVersion(value: string): value is AppVersion {
	return appVersions.includes(value as AppVersion);
}
