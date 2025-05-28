import type { VersionID, VersionModelMap } from "./lib/types";
import { schema as schemaV0_1 } from "./version-0.1";
export type { VersionID, VersionModelMap } from "./lib/types";

export const versionMap = {
	"0.1.x": schemaV0_1,
} satisfies Record<VersionID, VersionModelMap>;

export type AppVersion = keyof typeof versionMap;
export const appVersions = Object.keys(versionMap) as AppVersion[];

/**
 * Type guard to check if a string is a valid AppVersion
 * @param value - The string to check
 * @returns True if the string is a valid AppVersion, false otherwise
 */
export function isAppVersion(value: string): value is AppVersion {
	return appVersions.includes(value as AppVersion);
}
