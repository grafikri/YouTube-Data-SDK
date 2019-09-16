const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

const devConfig = {
  entry: "./src/index.ts",
  output: {
    filename: "youTubeData.js",
    path: path.resolve(__dirname, "dist"),
    library: "YouTube",
    libraryTarget: "umd"
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }]
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  mode: "development"
}

const proConfig = {
  ...devConfig,
  mode: "production",
  output: {
    ...devConfig.output,
    filename: "youTubeData.min.js"
  },
  optimization: {
    ...devConfig.optimization,
    minimize: true
  }
}

module.exports = [devConfig, proConfig]
