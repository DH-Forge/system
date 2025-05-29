import { serve } from "@hono/node-server";
import { Hono } from "hono";
import type { z } from "zod/v4";
import { registryCampaign } from "./v1/campaign";
import { registryCore } from "./v1/core";

const app = new Hono();

const versions = ["v1"] as const;
type Version = (typeof versions)[number];

const modelToFilename = {
	"core.json": {
		v1: registryCore,
	},
	"campaign.json": {
		v1: registryCampaign,
	},
} satisfies Record<string, Record<Version, z.ZodSafeParseResult<unknown>>>;

const isFilename = (name: string): name is keyof typeof modelToFilename => {
	return Object.keys(modelToFilename).includes(name);
};
const isVersion = (version: string): version is Version => {
	return versions.includes(version as Version);
};

app.get("/:version/:fileName", (c) => {
	const version = c.req.param("version");
	const fileName = c.req.param("fileName");

	if (!fileName.endsWith(".json")) {
		c.status(400);
		return c.json({
			error: "Bad Request",
			message: "File name must end with .json",
		});
	}

	if (!isVersion(version)) {
		c.status(404);
		return c.json({
			error: "Not Found",
			message: `Version '${version}' not found`,
		});
	}

	if (!isFilename(fileName)) {
		c.status(404);
		return c.json({
			error: "Not Found",
			message: `Endpoint '${fileName}' not found`,
		});
	}

	c.header("Server", "dhfs.localhost");
	c.header("Last-Modified", new Date().toUTCString());
	c.header("Content-Disposition", `inline; filename=${fileName}`);
	c.header("Access-Control-Allow-Origin", "*");
	c.header("Access-Control-Allow-Methods", "GET, OPTIONS");
	c.header("Access-Control-Allow-Headers", "Content-Type");
	// Consider re-enabling cache control for production:
	// c.header("Cache-Control", "public, max-age=3600, must-revalidate"); // e.g., 1 hour cache

	const model = modelToFilename[fileName][version];

	if (!model.success) {
		c.status(500);
		return c.json({
			error: "Internal Server Error",
			message: `Invalid schema data for '${fileName}'.`,
		});
	}

	return c.json(model.data);
});

const server = serve(
	{
		fetch: app.fetch,
		port: 3000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);

// graceful shutdown
process.on("SIGINT", () => {
	server.close();
	process.exit(0);
});
process.on("SIGTERM", () => {
	server.close((err) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		process.exit(0);
	});
});
