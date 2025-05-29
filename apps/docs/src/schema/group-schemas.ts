import { listSchemaFiles } from "src/schema/list-schemas";

type SchemaData = {
	version: string;
	majorVersion: string;
	minorVersion: string;
	patchVersion: string;
	model: string;
	extension: string;
};

/**
 * Parses a schema file path into its version and model components.
 * @param schemaPath - The schema file path in the format "version/model/extension".
 * @returns An object containing version, majorVersion, minorVersion, patchVersion, model, and extension.
 */
function formatSchemaPath(schemaPath: string): SchemaData {
	const [version, model, extension] = schemaPath.split("/");

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
 * Groups an array of SchemaData objects by a specified key.
 *
 * @template K - The key of SchemaData to group by.
 * @param schemas - The array of SchemaData objects to group.
 * @param key - The key of SchemaData to group by (e.g., "majorVersion", "minorVersion").
 * @returns An array of SchemaGroup objects, where each group contains a unique value for the specified key as `version` and an array of SchemaData objects sharing that value as `schemas`.
 */
function groupByKey<K extends keyof SchemaData>(
	schemas: SchemaData[],
	key: K,
): SchemaGroup[] {
	const grouped = schemas.reduce(
		(acc, schema) => {
			const keyValue = schema[key];
			if (!acc[keyValue]) {
				acc[keyValue] = [];
			}
			acc[keyValue].push(schema);
			return acc;
		},
		{} as Record<string, SchemaData[]>,
	);

	return Object.entries(grouped).map(([version, groupedSchemas]) => ({
		version,
		schemas: groupedSchemas,
	}));
}

/**
 * Sorts schema group by version in descending order
 * @param schemas - The array of SchemaGroup objects to sort.
 * @returns The sorted array of SchemaGroup objects.
 */
function sortGroup(schemas: SchemaGroup[]): SchemaGroup[] {
	return schemas.sort((a, b) => {
		const aVersion = a.version;
		const bVersion = b.version;
		return bVersion.localeCompare(aVersion);
	});
}

/**
 * Sorts schema data by version in ascending order
 * @param schemas - The array of SchemaData objects to sort.
 * @returns The sorted array of SchemaData objects.
 */
function sortData(schemas: SchemaData[]): SchemaData[] {
	return schemas.sort((a, b) => {
		const aVersion = a.model;
		const bVersion = b.model;
		return aVersion.localeCompare(bVersion);
	});
}

export function getGroupedSchemaVersions() {
	const schemas = listSchemaFiles().map(formatSchemaPath);

	const majorVersions = groupByKey(schemas, "majorVersion").map((major) => {
		const majorVersion = major.version;
		const majorSchemas = sortGroup(groupByKey(major.schemas, "minorVersion"));

		return {
			version: majorVersion,
			schemas: majorSchemas.map((minor) => {
				const minorVersion = `${major.version}.${minor.version}.x`;
				const minorSchemas = sortGroup(
					groupByKey(minor.schemas, "patchVersion"),
				);

				return {
					version: minorVersion,
					schemas: minorSchemas.map((patch) => {
						const patchVersion = `${major.version}.${minor.version}.${patch.version}`;

						return { version: patchVersion, schemas: sortData(patch.schemas) };
					}),
				};
			}),
		};
	});

	return majorVersions;
}
