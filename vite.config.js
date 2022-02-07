import { defineConfig } from "vite";
import mcss from "@modular-css/vite";
import inspect from "vite-plugin-inspect";

export default defineConfig({
    clearScreen: false,

    plugins: [
        inspect(),
        mcss({ verbose : true }),
    ],
});
