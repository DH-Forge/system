import groupBy from "just-group-by";

type SchemaData = {
	version: string;
	majorVersion: string;
	minorVersion: string;
	patchVersion: string;
	model: string;
	extension: string;
};

/**
 * Parses a schema file path into its constituent parts: version (full, major, minor, patch), model, and extension.
 * Assumes the path is in the format "version/model.extension".
 * @param versionPath - The schema file path string (e.g., "1.2.3/MyModel.json").
 * @returns A {@link SchemaData} object containing the parsed components.
 */
function formatVersionPath(versionPath: string): SchemaData {
	const [version, filename] = versionPath.split("/");
	const [model, extension] = filename.split(".");

	const [majorVersion, minorVersion, patchVersion] = version.split(".");

	return {
		version,
		majorVersion,
		minorVersion,
		patchVersion,
		model,
		extension,
	};
}

type SchemaGroup = {
	version: string;
	schemas: SchemaData[];
};

/**
 * Groups an array of {@link SchemaData} objects by a specified key.
 *
 * @template K - The key of {@link SchemaData} to group by.
 * @param schemas - The array of {@link SchemaData} objects to group.
 * @param key - The key from {@link SchemaData} to use for grouping (e.g., "majorVersion", "model").
 * @returns An array of {@link SchemaGroup} objects. Each object contains a `version` property (the value of the group key)
 * and a `schemas` property (an array of {@link SchemaData} objects belonging to that group).
 */
function groupByKey<K extends keyof SchemaData>(
	schemas: SchemaData[],
	key: K,
): SchemaGroup[] {
	const grouped = groupBy(schemas, (schema) => schema[key]);
	const groups = Object.entries<SchemaData[]>(grouped);

	return groups.map(([version, groupedSchemas]) => ({
		version,
		schemas: groupedSchemas,
	}));
}

/**
 * Comparator function to sort an array of {@link SchemaGroup} objects by their `version` property in descending order.
 * @param a - The first {@link SchemaGroup} object for comparison.
 * @param b - The second {@link SchemaGroup} object for comparison.
 * @returns A number indicating the sort order. Negative if `b.version` comes before `a.version`, positive if `a.version` comes before `b.version`, zero if equal.
 */
function sortGroup(a: SchemaGroup, b: SchemaGroup): number {
	const aVersion = a.version;
	const bVersion = b.version;
	return bVersion.localeCompare(aVersion);
}

/**
 * Comparator function to sort an array of {@link SchemaData} objects by their `model` property in ascending alphabetical order.
 * @param a - The first {@link SchemaData} object for comparison.
 * @param b - The second {@link SchemaData} object for comparison.
 * @returns A number indicating the sort order. Negative if `a.model` comes before `b.model`, positive if `b.model` comes before `a.model`, zero if equal.
 */
function sortData(a: SchemaData, b: SchemaData): number {
	const aVersion = a.model;
	const bVersion = b.model;
	return aVersion.localeCompare(bVersion);
}

/**
 * Takes a flat list of schema file paths and groups them hierarchically by major, minor, and patch versions.
 * Schemas within each patch version are sorted by model name.
 * Minor and patch version groups are sorted in descending order.
 * @param schemaFiles - An array of schema file path strings (e.g., ["1.0.0/User.json", "1.0.1/Order.json"]).
 * @returns An array of objects, where each object represents a major version group. These groups contain nested minor version groups,
 * which in turn contain nested patch version groups. Each patch version group lists its {@link SchemaData} objects.
 */
export function getGroupedSchemaVersions(schemaFiles: string[]) {
	const schemas = schemaFiles.map(formatVersionPath);

	const majorVersions = groupByKey(schemas, "majorVersion").map((major) => {
		const majorVersion = major.version;
		const majorSchemas = groupByKey(major.schemas, "minorVersion").sort(
			sortGroup,
		);

		return {
			version: majorVersion,
			schemas: majorSchemas.map((minor) => {
				const minorVersion = `${major.version}.${minor.version}.x`;
				const minorSchemas = groupByKey(minor.schemas, "patchVersion").sort(
					sortGroup,
				);

				return {
					version: minorVersion,
					schemas: minorSchemas.map((patch) => {
						const patchVersion = `${major.version}.${minor.version}.${patch.version}`;

						return {
							version: patchVersion,
							schemas: patch.schemas.sort(sortData),
						};
					}),
				};
			}),
		};
	});

	return majorVersions;
}
