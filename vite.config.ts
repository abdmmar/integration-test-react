/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "vitest.setup.ts",
		testTimeout: 30000,
		// you might want to disable it, if you don't have tests that rely on CSS
		// since parsing CSS is slow
		// css: true,
	},
});
