const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'production',
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'twój_folder'),
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
                { from: './css', to: './css' },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}