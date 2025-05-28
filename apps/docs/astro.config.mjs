// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
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
					label: "Introduction",
					autogenerate: { directory: "introduction" },
				},
				{
					label: "Specification",
					autogenerate: { directory: "specification" },
					badge: "New",
				},
				{
					label: "Libraries",
					autogenerate: { directory: "libraries" },
					collapsed: true,
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
					collapsed: true,
				},
			],
		}),
	],
});
