const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const generateHtmlFile = (template, filename) => {
  return new HtmlWebpackPlugin({
    inject: false,
    hash: true,
    template,
    filename
  })
};

module.exports = env => {
  const ENV = process.env.NODE_ENV || 'development';
  const PORT = (env && env.port) || 8081;

  const config = {
    devServer: {
      port: PORT
    },
    entry: {
      styles: './src/styleLoader.js'
    },
    context: path.resolve(__dirname, '.'),
    target: 'web',
    output: {
      path: path.resolve(path.join(__dirname, '/dist')),
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
      publicPath: '/'
    },
    stats: {
      colors: true,
      chunks: false,
      modules: false,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: path.resolve(path.join(__dirname, 'src/scss')),
          use: ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            }
          )
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
          use: 'file-loader?name=assets/[name].[ext]?[hash]'
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin(
        [
          {
            from: './src/content',
            to: './content'
          },
          {
            from: './src/assets/favicon',
            to: './assets/favicon'
          },
          {
            from: './src/vendor',
            to: './vendor'
          },
          {
            from: './src/js',
            to: './js'
          },
          {
            from: './site.webmanifest',
            to: './'
          },
          {
            from: './browserconfig.xml',
            to: './browserconfig.xml'
          },
          {
            from: './CNAME',
            to: './'
          },
          {
            from: './.gitignore',
            to: './'
          },
          {
            from: './LICENSE',
            to: './'
          },
          {
            from: './README.md',
            to: './'
          }
        ]
      ),
      new ExtractTextPlugin(
        {
          filename: 'css/style.css'
        }
      ),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    ].concat([
      generateHtmlFile('src/html/index-template.html', 'index.html'),
      generateHtmlFile('src/html/index-en-template.html', 'index-en.html'),
      generateHtmlFile('src/html/privacy-template.html', 'privacy.html'),
      generateHtmlFile('src/html/cfp-template.html', 'cfp.html'),
      generateHtmlFile('src/html/training-ml-template.html', 'training-ml.html'),
      generateHtmlFile('src/html/training-sel-template.html', 'training-sel.html'),
      generateHtmlFile('src/html/talks-template.html', 'talks.html'),
      generateHtmlFile('src/html/yappidays2017-template.html', 'yappidays2017.html'),
      generateHtmlFile('src/html/yappidays2017-talks/yappidays2017-hadoop.html', 'yappidays2017-hadoop.html'),
      generateHtmlFile('src/html/yappidays2017-talks/yappidays2017-ci.html', 'yappidays2017-ci.html'),
      generateHtmlFile('src/html/yappidays2017-talks/yappidays2017-apachedrill.html', 'yappidays2017-apachedrill.html'),
      generateHtmlFile('src/html/yappidays2017-talks/yappidays2017-crud.html', 'yappidays2017-crud.html'),
    ])
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
