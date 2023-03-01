import typescript from "@rollup/plugin-typescript";
import ts from "vite-plugin-ts";

export default {
    input: "./server/server.ts",
    output: {
        file: "./main.js",
        format: "es",
    },
    plugins: [typescript({ outputToFilesystem: false, target: "es2017" })],
    external: [/node_modules/],
};
