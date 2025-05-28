import { type AppVersion, appVersions, versionMap } from "@forge/models";

export function getVersionModels(version: AppVersion) {
	return versionMap[version];
}

/**
 * Type guard to check if a string is a valid AppVersion
 * @param value - The string to check
 * @returns True if the string is a valid AppVersion, false otherwise
 */
export function isAppVersion(value: string): value is AppVersion {
	return appVersions.includes(value as AppVersion);
}

function groupMajorVersions(versions: AppVersion[]) {
	return versions.reduce(
		(acc, version) => {
			const majorVersion = version.split(".")[0];
			if (!acc[majorVersion]) {
				acc[majorVersion] = [];
			}
			acc[majorVersion].push(version);
			return acc;
		},
		{} as Record<string, AppVersion[]>,
	);
}

const majorVersions = groupMajorVersions(appVersions);
const sortedMajorVersions = Object.keys(majorVersions).sort(
	(a, b) => Number(b) - Number(a),
);

export const sortedVersions = sortedMajorVersions.map((majorVersion) => {
	return {
		majorVersion,
		versions: majorVersions[majorVersion].sort((a, b) => b.localeCompare(a)),
	};
});
