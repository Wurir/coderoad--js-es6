const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[hash].js'
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        client: {
            overlay: true,
        },
        allowedHosts: '...',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: './public', to: './' },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
}