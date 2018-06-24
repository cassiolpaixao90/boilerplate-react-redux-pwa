import path            from "path"
import webpack         from "webpack"
import config          from '../settings/environment/index'

module.exports = {
  name: "client",
  entry: {
    vendor: ["react", "react-dom"],
    main: [
      "react-hot-loader/patch",
      "babel-runtime/regenerator",
      "webpack-hot-middleware/client?reload=true",
      "./src/main.js"
    ]
  },
  mode: config.envNode,
  output: {
    filename: "[name]-bundle.js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true,
    stats: {
      colors: true
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(`${config.envNode}`),
        WEBPACK: true
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
