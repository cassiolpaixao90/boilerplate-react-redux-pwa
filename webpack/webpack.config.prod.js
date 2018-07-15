import path                     from 'path'
import webpack                  from 'webpack'
import MiniCSSExtractPlugin     from 'mini-css-extract-plugin'
import HTMLWebpackPlugin        from 'html-webpack-plugin'
import OptimizeCssAssetsPlugin  from 'optimize-css-assets-webpack-plugin'
import UglifyJSPlugin           from 'uglifyjs-webpack-plugin'
import CompressionPlugin        from 'compression-webpack-plugin'
import BrotliPlugin             from 'brotli-webpack-plugin'

module.exports = env => {
  return {
    entry: {
      main: ['./src/app.js']
    },
    mode: 'production',
    output: {
      filename: '[name]-bundle.js',
      path: path.resolve(__dirname, '../build'),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            { loader: MiniCSSExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          ]
        },
        {
          test: /\.jpg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]'
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
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new HTMLWebpackPlugin({
        template: './src/index.ejs',
        inject: true,
        title: 'PWA React Redux Saga'
      }),
      new UglifyJSPlugin(),
      new CompressionPlugin({
        algorithm: 'gzip'
      }),
      new BrotliPlugin()
    ]
  }
}
