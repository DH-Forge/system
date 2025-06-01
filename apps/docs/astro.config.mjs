// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightLlmsTxt from "starlight-llms-txt";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://dh-forge.com",

	server: {
		port: 4322,
	},

	integrations: [
		starlight({
			title: "DH-Forge",
			logo: {
				light: "./src/assets/logo-light-mode.svg",
				dark: "./src/assets/logo-dark-mode.svg",
				// src: "./src/assets/logo-icon.svg",
				replacesTitle: true,
			},
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/DH-Forge/system",
				},
			],
			sidebar: [
				{
					label: "Start Here",
					items: ["index", "overview/concepts", "overview/llms"],
				},
				{
					label: "JSON Schema",
					autogenerate: { directory: "schema" },
				},
				/*  */

				{
					label: "DH-F Data Spec",
					autogenerate: { directory: "dhf-data-spec" },
				},

				{
					label: "DH-F Dereference Spec",
					autogenerate: { directory: "dhf-dereference-spec" },
				},

				{
					label: "DH-F Typescript API",
					autogenerate: { directory: "dhf-typescript-api" },
				},
			],
			plugins: [
				starlightLlmsTxt({
					// Docs: https://delucis.github.io/starlight-llms-txt/configuration/
					projectName: "DH-Forge",
					description:
						"DH-Forge System is an open-source, community-built JSON standard with TypeScript utilities for describing every piece of Daggerheart™ character and campaign data. It exists to give character builders, VTTs, livestream overlays and other tools a common language, wiping out “data silos” so players and creators can move official rules and homebrew content anywhere with zero re-entry.",
					optionalLinks: [
						{
							label: "GitHub",
							url: "https://github.com/DH-Forge/system",
							description: "The GitHub repository for the DH-Forge project.",
						},
						{
							label: "Daggerheart™",
							url: "https://www.daggerheart.com",
							description: "The official website for the Daggerheart™ game.",
						},
					],
					promote: [
						"documentation/dhf-data-spec/overview",
						"documentation/dhf-dereference-spec/overview",
						"documentation/dhf-typescript-api/overview",
					],
					demote: ["schema/versions"],
					exclude: [
						"overview/concepts",
						"overview/llms",
						"schema",
						"index",
						"404",
					],
				}),
			],
			editLink: {
				baseUrl:
					"https://github.com/DH-Forge/system/edit/main/apps/docs/src/content/docs",
			},
			customCss: ["./src/styles/global.css"],
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
