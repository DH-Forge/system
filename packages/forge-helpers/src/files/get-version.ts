import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Retrieves the JSON content of a schema file.
 * @param relativeFilePath - The relative path to the JSON schema file (e.g., "0.0.0/core.json").
 * @returns The parsed JSON content of the file.
 * @throws Will throw an error if the file cannot be read or parsed.
 */
export function useGetSchemaJson(monorepoRoot: URL) {
	// Determine the absolute path to the 'schema' directory, assuming this file is within it.
	const schemaDirectory = fileURLToPath(
		new URL("./packages/forge-schema/src/versions", monorepoRoot),
	);

	return (relativeFilePath: string): string => {
		// Construct the absolute path to the target JSON file.
		const absoluteJsonPath = path.join(schemaDirectory, relativeFilePath);

		// Read the file content.
		const fileContent = fs.readFileSync(absoluteJsonPath, "utf-8");

		// Return the raw JSON content.
		return fileContent;
	};
}
