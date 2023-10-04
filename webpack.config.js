const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./sdk.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 5,
          compress: true,
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};
