const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "public/index.html"),
  filename: "./index.html"
});

module.exports = {
  entry: "./src/client/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    proxy: {
      "/auth": "http://localhost:3001"
    }
  },
  plugins: [htmlWebpackPlugin]
};
