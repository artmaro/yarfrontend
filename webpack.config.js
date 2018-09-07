const path = require('path');
const webpack = require('webpack');

module.exports = env => {
    const ENV = process.env.NODE_ENV || 'development';
    const PORT = (env && env.port) || 8081;

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
        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
                },
                {
                    test: /\.css$/,
                    loader: ['style-loader', 'css-loader', 'postcss-loader']
                }
            ]
        }
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
