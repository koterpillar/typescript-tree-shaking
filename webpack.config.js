"use strict";

export default {
  mode: "production",
  target: "node18",
  entry: {
    index: "./src/index.ts",
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
  resolve: {
    modules: ["src"],
    extensions: [".ts"],
    extensionAlias: {
      ".js": [".ts"],
    },
  },
  optimization: {
    usedExports: true,
  },
};
