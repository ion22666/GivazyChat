import typescript from "@rollup/plugin-typescript";

export default {
    input: "./server/server.ts",
    output: {
        file: "./main.js",
        format: "es",
    },
    plugins: [typescript({ outputToFilesystem: false, target: "es2017", include: ["server/**", "@types/**"] })],
    external: [/node_modules/],
};
