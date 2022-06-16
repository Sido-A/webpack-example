const path = require("path");
// const toml = require("toml");
// const yaml = require("yamljs");
// const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  // entry: {
  //   app: "./src/index.js",
  //   // Runtime code for hot module replacement
  //   hot: "webpack/hot/dev-server.js",
  //   // Dev server client for web socket transport, hot and live reload logic
  //   client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
  // },

  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js",
  },

  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    // Dev server client for web socket transport, hot and live reload logic
    hot: false,
    client: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
    // Plugin for hot module replacement
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  optimization: {
    // runtimeChunk: "single",
    splitChunks: { chunks: "all" },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //     {
      //       test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //       type: "asset/resource",
      //     },
      //     {
      //       test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //       type: "asset/resource",
      //     },
      //     {
      //       test: /\.(csv|tsv)$/i,
      //       use: ["csv-loader"],
      //     },
      //     {
      //       test: /\.xml$/i,
      //       use: ["xml-loader"],
      //     },
      //     {
      //       test: /\.toml$/i,
      //       type: "json",
      //       parser: {
      //         parse: toml.parse,
      //       },
      //     },
      //     {
      //       test: /\.yaml$/i,
      //       type: "json",
      //       parser: {
      //         parse: yaml.parse,
      //       },
      //     },
      //     {
      //       test: /\.json5$/i,
      //       type: "json",
      //       parser: {
      //         parse: json5.parse,
      //       },
      //     },
    ],
  },
};
