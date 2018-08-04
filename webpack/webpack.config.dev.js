import path              from 'path'
import webpack           from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'babel-runtime/regenerator',
      'babel-register',
      'webpack-hot-middleware/client?reload=true',
      './src/app.js'
    ]
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    stats: {
      colors: true
    }
  },
  devtool: 'source-map',
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
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)(\?\S*)?$/,
        loader: "url-loader?limit=100000&name=[name].[ext]"
      },
      {
          test: /\.(eot)(\?\S*)?$/,
          loader: "url-loader?limit=100000&mimetype=application/font-otf&name=[name].[ext]"
      },
      {
          test: /\.(woff|woff2)(\?\S*)?$/,
          loader: "url-loader?limit=100000&mimetype=application/x-font-woff&name=[name].[ext]"
      },
      {
          test: /\.(ttf)(\?\S*)?$/,
          loader: "url-loader?limit=100000&mimetype=application/octet-stream&name=[name].[ext]"
      },
      {
          test: /\.(svg)(\?\S*)?$/,
          loader: "url-loader?limit=100000&mimetype=image/svg+xml&name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html',
      inject: true
    })
  ],
  externals: {
    config: JSON.stringify({
        apiUrl: 'http://localhost:9000'
    })
}
}
