/**
 * BASE WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({ // Compila dentro js/build.js
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output), // Merge com env das configuracoes
  module: {
    loaders: [
      {
        test: /\.js$/, //  Faz o transpiler de todos arquivos .js
        loader: 'babel',
        exclude: /node_modules/,
        query: options.babelQuery,
      },
      {
        // Faz o transpiler de todos nosso arquivo .css com PostCSS and CSS-modules
        test: /\.css$/,
        exclude: /node_modules/,
        loader: options.cssLoaders,
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          'file-loader',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader?limit=10000',
      }]
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      fetch: 'exports?self.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  postcss: () => options.postcssPlugins,
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '',
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: [
      'jsnext:main',
      'main',
    ],
  },
  devtool: options.devtool,
  target: 'web',
  stats: false,
  progress: true,
});
