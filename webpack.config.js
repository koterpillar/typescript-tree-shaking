"use strict";

module.exports = {
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
  },
  optimization: {
    usedExports: true,
  },
};
