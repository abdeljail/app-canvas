const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const path = require("path");

module.exports = {
  generateHtmlPlugins: (templateDir) => {
    const src = path.resolve(__dirname, "../", templateDir);

    console.log(src);

    // /home/algorithm/Desktop/forMe/me/my-projects/dashboards/dashboard/html
    const templateFiles = glob.sync(`${src}/**/*.pug`.replace(/\\/g, '/'));
    /**
        [
          '/home/algorithm/Desktop/forMe/me/my-projects/dashboards/dashboard/html/ltr/horizontal-menu-template/index.pug',
          '/home/algorithm/Desktop/forMe/me/my-projects/dashboards/dashboard/html/ltr/horizontal-menu-template/pages/about.pug'
        ]
        */
    console.log(templateFiles);
    return templateFiles.map((file) => {
      console.log(file);

      const base = file.split("views")[1].substring(1);

      const name = base.split(".")[0];

      const arr = name.split("/");

      const chunkName = arr[arr.length - 1];
      
      return new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: path.resolve(__dirname, "../../", `${file}`),
        chunks: [chunkName],
      });
    });
  },
};
