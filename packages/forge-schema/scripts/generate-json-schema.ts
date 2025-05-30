import path from "node:path";
import { z } from "zod/v4";
import { campaign } from "../src/models/campaign/index.js";
import { character } from "../src/models/character/index.js";
import { registry } from "../src/models/registry/index.js";

const characterSchema = z.toJSONSchema(character, { reused: "ref" });
const registryCampaignSchema = z.toJSONSchema(campaign, { reused: "ref" });
const registryCoreSchema = z.toJSONSchema(registry, { reused: "ref" });

z.globalRegistry.add(character, { id: "Character" });
z.globalRegistry.add(campaign, { id: "Campaign" });
z.globalRegistry.add(registry, { id: "Registry" });

const combinedSchema = z.toJSONSchema(z.globalRegistry, { reused: "ref" });

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
		{ data: combinedSchema, filename: "schema.json" },
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
