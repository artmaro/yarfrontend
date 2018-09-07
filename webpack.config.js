const path = require('path');
const webpack = require('webpack');
const { generateHtmlPlugins } = require('./generateHtmlPlugins');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => {
  const ENV = process.env.NODE_ENV || 'development';
  const PORT = (env && env.port) || 8081;

  const htmlPlugins = generateHtmlPlugins('./src/pages');

  const config = {
    devServer: {
      port: PORT,
      hot: true,
      historyApiFallback: true
    },
    entry: {
      'nav-bar': './src/styles/nav-bar.less',
      header: './src/styles/header.less'
    },
    context: path.resolve(path.join(__dirname, '.')),
    target: 'web',
    output: {
      path: path.resolve(path.join(__dirname, '/dist')),
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'less-loader'],
          }),
        },
        {
          test: /\.html$/,
          include: path.resolve(__dirname, 'src/html/includes'),
          use: ['raw-loader']
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'css/[name].css',
        allChunks: true,
      }),
      new CopyWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(ENV)
      })
    ].concat(htmlPlugins)
  };

  switch (ENV) {
    case 'production':
      config.devtool = 'source-map';
      break;
    case 'development':
      config.devtool = 'inline-source-map';
      break;
    case 'test':
      config.devtool = 'inline-source-map';
      delete config.entry;
      break;
    default:
      break;
  }

  return config;
};
