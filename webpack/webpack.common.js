// shared Webpack configuration for development and production mode.
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { generateHtmlPlugins } = require("./helpers.js");
const PATH_OUTPUT = "assets/"
module.exports = {
  entry: {
    index: path.resolve(__dirname, "../", "src/js/scripts/pages/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "../", "frontEnd"),
    filename: `${PATH_OUTPUT}js/[name].js`,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true,
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          },
          "css-loader",
        ],

      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: `${PATH_OUTPUT}imgs/[name].[ext]`,
            esModule: false,
          }
        }]
      },
      {
        test: /\.hbs$/,
        use: {
          loader: "handlebars-loader",
          options: {
            // This option tells to to require the assest 👇
            inlineRequires: '\/assets\/',
          }
        },
      }

    ],
  },
  plugins: [...generateHtmlPlugins("src/views"), new MiniCssExtractPlugin({ linkType: "text/css", filename: `${PATH_OUTPUT}css/[name].css`, })],
};
