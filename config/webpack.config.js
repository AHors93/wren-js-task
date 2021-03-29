const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT_PATH = path.resolve(__dirname, "..");
const SRC_PATH = path.resolve(ROOT_PATH, "src");
const DIST_PATH = path.resolve(ROOT_PATH, "dist");

module.exports = {
  entry: path.resolve(SRC_PATH, "index.tsx"),
  mode: "development",
  devtool: "cheap-eval-source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_PATH, "index.html"),
      filename: "index.html",
      inject: "body",
    }),
  ],

  output: {
    path: DIST_PATH,
    filename: "[name].js",
  },
};
