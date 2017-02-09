var webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/main.ts",
  },
  output: {  filename: "./dist/app.js" },
  devtool: "source-map",

  resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

  module: {
    loaders: [
       { test: /\.ts?$/, loader: "awesome-typescript-loader" }
    ]
  }

};
