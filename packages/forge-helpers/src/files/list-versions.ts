import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Retrieves all directory paths within a specified directory.
 * @param directoryPath - The absolute path of the directory to scan.
 * @returns An array of absolute string paths to directories.
 */
function getDirectoryPaths(directoryPath: string): string[] {
	return fs
		.readdirSync(directoryPath, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => path.join(directoryPath, dirent.name));
}

/**
 * Retrieves all file paths with a specific extension within a specified directory.
 * @param directoryPath - The absolute path of the directory to scan.
 * @param extension - The file extension to filter by (e.g., ".json").
 * @returns An array of absolute string paths to files.
 */
function getFilePaths(
	directoryPath: string,
	extension: `.${string}`,
): string[] {
	return fs
		.readdirSync(directoryPath, { withFileTypes: true })
		.filter((dirent) => dirent.isFile() && dirent.name.endsWith(extension))
		.map((dirent) => path.join(directoryPath, dirent.name));
}

/**
 * Converts an absolute file path to a path relative to a specified directory.
 * The returned relative path will not start with './' or '/'.
 * @param directoryPath - The absolute path of the directory to make the filePath relative to.
 * @param filePath - The absolute path of the file to convert.
 * @returns A string representing the relative file path.
 */
function getRelativeFilePath(directoryPath: string, filePath: string): string {
	const relativePath = path.relative(directoryPath, filePath);
	// Remove leading './' or '/'
	return relativePath.startsWith("./")
		? relativePath.slice(2)
		: relativePath.startsWith("/")
			? relativePath.slice(1)
			: relativePath;
}

/**
 * Lists all JSON schema file paths within the 'packages/forge-schema/src/versions' directory
 * of the current monorepo, sorted in reverse alphabetical order.
 * It scans subdirectories of this specific path for JSON files.
 * @param monorepoRoot - A URL object representing the root directory of the current monorepo.
 * @returns An array of string file paths, relative to the 'packages/forge-schema/src/versions' directory, for all found JSON files.
 */
export function listSchemaFiles(monorepoRoot: URL): string[] {
	const versionsRoot = new URL(
		"./packages/forge-schema/src/versions",
		monorepoRoot,
	);
	const schemaDirectory = fileURLToPath(versionsRoot);

	const directories = getDirectoryPaths(schemaDirectory);

	const jsonFiles = directories
		.flatMap((directory) => getFilePaths(directory, ".json"))
		.map((filePath) => getRelativeFilePath(schemaDirectory, filePath));

	return jsonFiles.sort((a, b) => b.localeCompare(a));
}
