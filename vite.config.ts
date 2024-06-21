import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            include: "**/*.glsl",
        }),
        glsl(),
    ],
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
