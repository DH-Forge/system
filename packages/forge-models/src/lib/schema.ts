import type { VersionString } from "@forge/helpers/version";
import type { z } from "zod/v4";
import { schema as schemaV0_1 } from "../version-0.1";

export type SchemaModelMap = {
	character: z.ZodObject;
	core: z.ZodObject;
	campaign: z.ZodObject;
};

export const schemaModelVersions = {
	"0.1.x": schemaV0_1,
} satisfies Record<VersionString, SchemaModelMap>;

export type SchemaVersion = keyof typeof schemaModelVersions;
export const schemaVersions = Object.keys(
	schemaModelVersions,
) as SchemaVersion[];

/**
 * Type guard to check if a string is a valid AppVersion
 * @param value - The string to check
 * @returns True if the string is a valid AppVersion, false otherwise
 */
export function isSchemaVersion(value: string): value is SchemaVersion {
	return schemaVersions.includes(value as SchemaVersion);
}
