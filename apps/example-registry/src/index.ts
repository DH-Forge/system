import { exampleSchema } from "@forge/models";
import { Hono } from "hono";
import { z } from "zod/v4";

const app = new Hono();

const exampleJsonSchema = z.toJSONSchema(exampleSchema);

app.get("/1.0.0/schema.json", (c) => {
	const filename = "schema";
	c.header("Server", "dhfs.localhost");
	c.header("Last-Modified", new Date().toUTCString());
	c.header("Content-Disposition", `inline; filename=${filename}.json`);

	c.header("Access-Control-Allow-Origin", "*");
	c.header("Access-Control-Allow-Methods", "GET, OPTIONS");
	c.header("Access-Control-Allow-Headers", "Content-Type");

	// c.header("Cache-Control", "public, max-age=0, must-revalidate");

	return c.json(exampleJsonSchema);
});

export default app;
