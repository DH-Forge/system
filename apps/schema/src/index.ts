import { exampleSchema } from "@forge/models";
import { Hono } from "hono";
import { z } from "zod/v4";

const app = new Hono();

const exampleJsonSchema = z.toJSONSchema(exampleSchema);

app.get("/example.json", (c) => {
	return c.json(exampleJsonSchema);
});

export default app;
