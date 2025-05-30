// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.dh-forge.com",
	server: {
		port: 4322,
	},
	integrations: [
		starlight({
			title: "DHFS Docs",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/DH-Forge/system",
				},
			],
			sidebar: [
				{
					label: "Overview",
					items: [
						{
							label: "Introduction",
							slug: "introduction",
						},
						{
							label: "Getting Started",
							slug: "getting-started",
						},
						{
							label: "JSON Schema",
							slug: "schema",
						},
					],
				},
				{
					label: "Specification",
					autogenerate: { directory: "specification" },
					// badge: "New",
				},
				{
					label: "Libraries",
					autogenerate: { directory: "libraries" },
					collapsed: false,
				},
				{
					label: "Resources",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "GitHub Repository",
							link: "https://github.com/DH-Forge/system",
						},
					],
					collapsed: false,
				},
			],
		}),
	],
});
