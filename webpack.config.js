const path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "/dist"),
    publicPath: "dist",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { node: "current" },
                },
              ],
              "@babel/preset-typescript",
            ],
            plugins: [
              "@babel/plugin-proposal-private-methods",
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread",
            ],
          },
        },
      },
    ],
  },
};
