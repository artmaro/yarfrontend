const path = require('path');
const webpack = require('webpack');
const { generateHtmlPlugins } = require('./generateHtmlPlugins');

module.exports = env => {
  const ENV = process.env.NODE_ENV || 'development';
  const PORT = (env && env.port) || 8081;

  const htmlPlugins = generateHtmlPlugins('./src/pages');

  const config = {
    devServer: {
      port: PORT
    },
    entry: {
      app: ['./src/index.js']
    },
    context: path.resolve(path.join(__dirname, '.')),
    target: 'web',
    output: {
      path: path.resolve(path.join(__dirname, '/dist')),
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
      publicPath: '/'
    },
    resolve: {
      alias: {
        templates: path.resolve(path.join(__dirname, './src/templates'))
      }
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: ['style-loader', 'less-loader', 'postcss-loader']
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.html$/,
          include: path.resolve(__dirname, 'src/html/includes'),
          use: ['raw-loader']
        }
      ]
    },
    plugins: [
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
