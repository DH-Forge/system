import { type AppVersion, isAppVersion } from "@forge/models";
import type { APIContext, APIRoute } from "astro";
import { z } from "zod/v4";
import { getVersionModels } from "./versions";

// Infer the type from the return type of getVersionModels
type VersionModels = ReturnType<typeof getVersionModels>;

/**
 * @typedef {keyof VersionModels} ModelName
 */

/**
 * Creates an API route that returns the JSON schema for a given model.
 *
 * @param getModel - A function that takes the version models and returns the specific model.
 * @returns An APIRoute function.
 */
export const createSchemaRoute =
	(
		getModel: (models: VersionModels) => z.ZodTypeAny,
		filename = "schema.json",
	): APIRoute =>
	async ({ params }: APIContext): Promise<Response> => {
		const isDev = import.meta.env.DEV;
		const serverHost = isDev ? "api.localhost" : "api.dhfs.dev";

		const version = params.version ?? "0.0.0";

		if (!isAppVersion(version)) {
			return new Response(`API Version "${version}" not found`, {
				status: 404,
			});
		}

		const model = getModel(getVersionModels(version as AppVersion));
		const schema = z.toJSONSchema(model);

		return new Response(JSON.stringify(schema), {
			headers: {
				"Access-Control-Allow-Headers": "Content-Type",
				"Access-Control-Allow-Methods": "GET",
				"Access-Control-Allow-Origin": "*",
				"Cache-Control": "public, max-age=0, must-revalidate",
				"Content-Disposition": `inline; filename=${filename}`,
				"Content-Type": "application/json",
				"Last-Modified": new Date().toUTCString(),
				Server: serverHost,
			},
		});
	};
