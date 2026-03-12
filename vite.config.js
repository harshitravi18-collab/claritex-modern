import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
export default defineConfig({
    // when deploying to GitHub Pages using a project site, set the base
    // to the repository name (e.g. "/claritex-modern/"). during local
    // development the base should remain "/" so assets load correctly.
    base: process.env.NODE_ENV === "production" ? "/claritex-modern/" : "/",
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
