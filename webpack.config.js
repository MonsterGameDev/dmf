const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'index': path.resolve(__dirname, 'src/index.ts')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        clean: true,
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        },
        port: 9000, 
        hot: true,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']  // for older browsers
                    }
                }
            },
            {
                test: /\.(jpg|png|webp)$/i, //i: caseinsensitive
                type: 'asset',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Webpak App',
            filename: 'index.html',
            template: 'src/pages/template.html',
            chunks: ['index'],
            minify: false,
        }),
    ]

}