const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [{ test: /\.css$/i, use: ["style-loader", "css-loader"] }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 9000,
  },
};
