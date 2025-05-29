import { defineConfig } from "vite";
import ssrPlugin from "vite-ssr-components/plugin";

export default defineConfig({
	plugins: [ssrPlugin()],
});
