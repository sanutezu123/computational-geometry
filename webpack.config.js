const path = require("path");
module.exports = {
  // for debugging
  devtool: "eval-source-map",
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        // any file ending with .ts
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src")],
        use: "ts-loader",
      },
    ],
  },

  // resolve extensions for webpack needed for imports
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
