import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/core.json", (c) => {
	const fileName = c.req.param("fileName");

	c.header("Server", "dhfs.localhost");
	c.header("Last-Modified", new Date().toUTCString());
	c.header("Content-Disposition", `inline; filename=${fileName}`);
	c.header("Access-Control-Allow-Origin", "*");
	c.header("Access-Control-Allow-Methods", "GET, OPTIONS");
	c.header("Access-Control-Allow-Headers", "Content-Type");
	// Consider re-enabling cache control for production:
	// c.header("Cache-Control", "public, max-age=3600, must-revalidate"); // e.g., 1 hour cache

	return c.json({
		$schema: "https://dh-forge.com/schema/0.1.x/core.json",
		type: "character",
	});
});

export default app;
