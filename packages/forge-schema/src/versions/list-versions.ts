import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * List all directories in the provided directory
 * @param directoryPath - The absolute path of the directory to scan.
 * @returns An array of absolute pathnames to directories.
 */
function getDirectories(directoryPath: string): string[] {
	return fs
		.readdirSync(directoryPath, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => path.join(directoryPath, dirent.name));
}

/**
 * List all JSON files in the provided directory
 * @param directoryPath - The absolute path of the directory to scan.
 * @returns An array of absolute pathnames to JSON files.
 */
function getJsonFiles(directoryPath: string): string[] {
	return fs
		.readdirSync(directoryPath, { withFileTypes: true })
		.filter((dirent) => dirent.isFile() && dirent.name.endsWith(".json"))
		.map((dirent) => path.join(directoryPath, dirent.name));
}

/**
 * Convert an absolute filepath to a relative filepath
 * @param directoryPath - The absolute path of the relative directory.
 * @param filePath - The absolute path of the file to convert.
 * @returns A relative filepath. The filepath should not start with a ./ or /
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
 * Get all the JSON filepaths in the schema directory
 * @returns An array of relative filepaths to JSON files.
 */
export function listSchemaFiles(): string[] {
	const currentDirectory = new URL(".", import.meta.url);
	const schemaDirectory = fileURLToPath(currentDirectory);

	const directories = getDirectories(schemaDirectory);

	const jsonFiles = directories
		.flatMap((directory) => getJsonFiles(directory))
		.map((filePath) => getRelativeFilePath(schemaDirectory, filePath));

	return jsonFiles.sort((a, b) => b.localeCompare(a));
}
