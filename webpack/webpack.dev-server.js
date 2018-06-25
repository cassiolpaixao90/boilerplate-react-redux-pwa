import path       from 'path'
import webpack    from 'webpack'
import externals  from './node-externals'
import config     from '../settings/environment/index'

module.exports = {
  name: "server",
  target: "node",
  externals,
  entry: "./src/render.js",
  mode: config.envNode,
  output: {
    filename: "dev-server-bundle.js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "../build"),
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }]
      },
      {
        test: /\.css$/,
        use: {
          loader: "css-loader",
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.jpg$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "/images/[name].[ext]",
            emitFile: false
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(`${config.envNode}`)
      }
    })
  ]
}
