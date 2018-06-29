import path                     from 'path'
import webpack                  from 'webpack'
import MiniCSSExtractPlugin     from 'mini-css-extract-plugin'
import OptimizeCssAssetsPlugin  from 'optimize-css-assets-webpack-plugin'
import UglifyJSPlugin           from 'uglifyjs-webpack-plugin'
import CompressionPlugin        from 'compression-webpack-plugin'
import BrotliPlugin             from 'brotli-webpack-plugin'
import config                   from '../settings/environment/index'

module.exports = {
  name: "client",
  entry: {
    vendor: ["react", "react-dom"],
    main: ["./src/app.js"]
  },
  mode: config.envNode,
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendor",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
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
        use: [MiniCSSExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(`${config.envNode}`),
        WEBPACK: true
      }
    }),
    new UglifyJSPlugin(),
    new CompressionPlugin({
      algorithm: "gzip"
    }),
    new BrotliPlugin()
  ]
}
