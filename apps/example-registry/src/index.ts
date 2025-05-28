import { Hono } from "hono";
import { registryCampaign } from "src/v1/campaign";
import { registryCore } from "src/v1/core";
import type { z } from "zod/v4";

const app = new Hono();

const modelToFilename = {
	"core.json": registryCore,
	"campaign.json": registryCampaign,
} satisfies Record<string, z.ZodSafeParseResult<unknown>>;

const isFilename = (name: string): name is keyof typeof modelToFilename => {
	return Object.keys(modelToFilename).includes(name);
};

app.get("/v1/:fileName", (c) => {
	const fileName = c.req.param("fileName");

	if (!fileName.endsWith(".json")) {
		c.status(400);
		return c.json({
			error: "Bad Request",
			message: "File name must end with .json",
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

	const model = modelToFilename[fileName];

	if (!model.success) {
		c.status(500);
		return c.json({
			error: "Internal Server Error",
			message: `Invalid schema data for '${fileName}'.`,
		});
	}

	return c.json(model.data);
});

export default app;
