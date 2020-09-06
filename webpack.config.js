const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
    entry: {
      main: path.resolve(__dirname, './src/js/', "index.js")
    },
    resolve: {
      modules: [
        path.join(__dirname, "./src"),
        "node_modules"
      ]
    },
    output: {
        path: path.resolve(__dirname, './dest/'),
        publicPath: './',
        filename: '[name]-[hash].js'
    },
    module: {
      rules: [
      {
        test: /\.jsx?$/,
        exclude:[ /node_modules/ ],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: ["style-loader", { loader: "css-loader", options: { url: false, modules: true } }]
      },
      {
        test: /\.(jpg|png)$/,
        loaders: 'url-loader'
      },
      ]
    },
    devtool: 'source-map',
    serve: {
        open: true,
        port: 8080,
        content: path.resolve(__dirname, 'public'),
    },
    plugins: [new HtmlWebpackPlugin({ template: "public/index.html" })]
}