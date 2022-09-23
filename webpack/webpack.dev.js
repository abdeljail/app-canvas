// webpack.dev.js: Webpack configuration only used by development mode.
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    static: {
      directory: path.resolve(__dirname, "../", "frontEnd"),
      watch: true,
    },
    port: 9000,
    open: false,
    client: {
      logging: "error",
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
