import type { APIRoute } from "astro";
import { z } from "zod/v4";
import { appVersions, getVersionSchema, isAppVersion } from "../../versions";

export const GET: APIRoute = async ({ params }) => {
	const isDev = import.meta.env.DEV;
	const serverHost = isDev ? "api.localhost" : "api.dhfs.dev";

	console.log("params:: ", params);

	const version = params.version ?? "0.0.0";

	if (!isAppVersion(version)) {
		return new Response(`API Version "${version}" not found`, { status: 404 });
	}

	const model = getVersionSchema(version);
	const schema = z.toJSONSchema(model);

	return new Response(JSON.stringify(schema), {
		headers: {
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Allow-Origin": "*",
			"Cache-Control": "public, max-age=0, must-revalidate",
			"Content-Disposition": "inline; filename=schema.json",
			"Content-Type": "application/json",
			"Last-Modified": new Date().toUTCString(),
			Server: serverHost,
		},
	});
};

export function getStaticPaths() {
	return appVersions.map((version) => ({
		params: { version },
	}));
}
