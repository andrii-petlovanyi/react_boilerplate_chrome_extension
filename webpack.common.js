const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    popup: path.resolve("./src/core/popup/index.tsx"),
    options: path.resolve("./src/core/options/index.tsx"),
    google: path.resolve("./src/core/content-scripts/google/index.tsx"),
    background: path.resolve("./src/core/background/index.ts"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
      },
      {
        type: "asset/resource",
        test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/manifest.json"),
          to: path.resolve("dist"),
        },
        {
          from: path.resolve("src/assets"),
          to: path.resolve("dist/assets"),
        },
      ],
    }),
    ...getHtmlPlugins(["popup", "options"]),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
};

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "React boilerplate by pean.dev",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
