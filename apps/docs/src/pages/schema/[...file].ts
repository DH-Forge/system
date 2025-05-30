import { listSchemaFiles, useGetSchemaJson } from "@forge/helpers/files";
import type { APIRoute } from "astro";
import path from "node:path";

const monorepoRoot = new URL("../../../../../", import.meta.url);
const getSchemaJson = useGetSchemaJson(monorepoRoot);

export const GET: APIRoute = async ({ params, request }) => {
	if (!params.file) {
		return new Response("No file provided", { status: 400 });
	}

	const schema = getSchemaJson(params.file);
	const filename = path.basename(params.file);

	const isDev = import.meta.env.DEV;
	const serverHost = isDev ? "docs.localhost" : "dh-forge.com";

	return new Response(schema, {
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

export function getStaticPaths() {
	const paths = listSchemaFiles(monorepoRoot);

	return paths.map((path) => ({
		params: { file: path },
	}));
}
