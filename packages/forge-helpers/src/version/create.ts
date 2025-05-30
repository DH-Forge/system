import type { VersionRecord, VersionString } from "./validate.js";

/**
 * Converts a VersionRecord to a VersionString
 * @param version - The version record to convert
 * @returns The corresponding VersionString
 */
export function createVersionString(version: VersionRecord): VersionString {
	const patch = version.patch === undefined ? "x" : version.patch;
	return `${version.major}.${version.minor}.${patch}`;
}

/**
 * Converts a VersionString to a VersionRecord
 * @param version - The version string to convert
 * @returns The corresponding VersionRecord
 * @throws If the input is not a valid VersionString
 */
export const createVersionRecord = (version: VersionString): VersionRecord => {
	const [major, minor, patch] = version.split(".");

	return {
		major: Number(major),
		minor: Number(minor),
		patch: patch === "x" ? "x" : Number(patch),
	};
};
