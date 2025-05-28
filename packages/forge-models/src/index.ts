import type { VersionID, VersionModelMap } from "./types";
import { schema as schemaV0_1 } from "./version-0.1";

export const versionMap = {
	"0.1.x": schemaV0_1,
} satisfies Record<VersionID, VersionModelMap>;

export type AppVersion = keyof typeof versionMap;
export const appVersions = Object.keys(versionMap) as AppVersion[];
