import path from "node:path";
import { z } from "zod/v4";
import { jsonCollection } from "../src/json-collection.js";
import { characterDocument } from "../src/models/doc-character.js";
import { campaignRuleset } from "../src/models/ruleset-campaign.js";
import { coreRuleset } from "../src/models/ruleset-core.js";

const characterSchema = z.toJSONSchema(characterDocument, { reused: "ref" });
const registryCampaignSchema = z.toJSONSchema(campaignRuleset, {
	reused: "ref",
});
const registryCoreSchema = z.toJSONSchema(coreRuleset, { reused: "ref" });

const testingSchema = z.toJSONSchema(jsonCollection, {
	target: "draft-2020-12",
	unrepresentable: "throw",
	cycles: "throw",
	reused: "ref",
});

/**
 * Returns the version value from the package.json
 * @returns Promise<string>
 */
const getVersion = async (): Promise<string> => {
	const filepath = path.resolve(process.cwd(), "package.json");
	const { readFile } = await import("node:fs/promises");
	const packageJson = JSON.parse(await readFile(filepath, "utf-8")) as {
		version: string;
	};
	return packageJson.version;
};

/**
 * Returns the directory path for the given version.
 * @param version - The version string to use for the directory path.
 * @returns Promise<string>
 */
const useDirectory = async (version: string): Promise<string> => {
	// Use path.resolve with process.cwd() to get the monorepo root
	// Assumes the script is run from the 'packages/forge-schema' directory
	const directory = path.resolve(process.cwd(), `./src/versions/${version}`);

	/**
	 * Ensures the schema directory exists.
	 * Creates the directory if it does not exist.
	 */
	const { mkdir } = await import("node:fs/promises");
	await mkdir(directory, { recursive: true });

	return directory;
};

/**
 * Writes each imported schema as a JSON file at the monorepo root.
 * @returns Promise<void>
 */
const generateSchemas = async (): Promise<void> => {
	const version = await getVersion();

	const directory = await useDirectory(version);

	// Compose schema data and filenames
	const schemas = [
		{ data: characterSchema, filename: "character.json" },
		{ data: registryCampaignSchema, filename: "campaign.json" },
		{ data: registryCoreSchema, filename: "core.json" },
		{ data: testingSchema, filename: "schema.json" },
	];

	// Dynamically import fs/promises for ESM compatibility
	const { writeFile } = await import("node:fs/promises");

	// Write each schema as a pretty-printed JSON file
	await Promise.all(
		schemas.map(async ({ data, filename }) => {
			const dest = path.join(directory, filename);
			return writeFile(dest, JSON.stringify(data), "utf-8");
		}),
	);
};

// Run the script
void generateSchemas();
