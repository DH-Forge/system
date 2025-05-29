import {
	type SchemaVersion,
	schemaModelVersions,
	schemaVersions,
} from "@forge/models";

export function getVersionModels(version: SchemaVersion) {
	return schemaModelVersions[version];
}

function groupMajorVersions(versions: SchemaVersion[]) {
	return versions.reduce(
		(acc, version) => {
			const majorVersion = version.split(".")[0];
			if (!acc[majorVersion]) {
				acc[majorVersion] = [];
			}
			acc[majorVersion].push(version);
			return acc;
		},
		{} as Record<string, SchemaVersion[]>,
	);
}

const majorVersions = groupMajorVersions(schemaVersions);
const sortedMajorVersions = Object.keys(majorVersions).sort(
	(a, b) => Number(b) - Number(a),
);

export const sortedVersions = sortedMajorVersions.map((majorVersion) => {
	return {
		majorVersion,
		versions: majorVersions[majorVersion].sort((a, b) => b.localeCompare(a)),
	};
});
