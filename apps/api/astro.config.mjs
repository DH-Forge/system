// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://api.dh-forge.com",
	integrations: [sitemap()],

	server: {
		port: 4321,
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
