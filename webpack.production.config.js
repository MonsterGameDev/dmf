const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // creates  one styles.css to rule them all

module.exports = {
    entry: {
        'home': path.resolve(__dirname, 'src/pages/home/home-page.ts'),
        'teater': path.resolve(__dirname, 'src/pages/teater/teater-page.js'),
        'teater-demo': path.resolve(__dirname, 'src/pages/teater/teater-demo-page.js'),
        'form-controls': path.resolve(__dirname, 'src/pages/common/form-controls.js'),
        'pagetops': path.resolve(__dirname, 'src/pages/pagetops/page-tops.js'),
        'transparency': path.resolve(__dirname, 'src/pages/transparency/transparency.js'),
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        clean: true,
    },
    mode: 'production',
    optimization: {  //bundles common depenencies between multiple pages
        splitChunks: {
            chunks: 'all',
            minSize: 20000,  // external dependencies will only be bundle seperately if over a size of 20kb
        }
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
        new MiniCssExtractPlugin({ //extract all css/scss into a single styles.css
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'Home ComponentDemos',
            filename: 'index.html',
            template: 'src/pages/home/home-page.html',
            chunks: ['home'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'DMF - 3D Teater Moduler',
            filename: 'teater.html',
            template: 'src/pages/teater/teater-page.html',
            chunks: ['teater'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: '3D Teater Samlet Demo',
            filename: 'teater-demo.html',
            template: 'src/pages/teater/teater-demo-page.html',
            chunks: ['teater-demo'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Form Controls',
            filename: 'form-controls.html',
            template: 'src/pages/common/form-controls.html',
            chunks: ['form-controls'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Pagetops',
            filename: 'page-tops.html',
            template: 'src/pages/pagetops/page-tops.html',
            chunks: ['pagetops'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Transpante Ark',
            filename: 'transparency.html',
            template: 'src/pages/transparency/transparency.html',
            chunks: ['pagetops'],
            minify: true,
        }),
    ]

}