const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'home': path.resolve(__dirname, 'src/pages/home/home-page.ts'),
        'teater': path.resolve(__dirname, 'src/pages/teater/teater-page.js'),
        'teater-demo': path.resolve(__dirname, 'src/pages/teater/teater-demo-page.js'),
        'form-controls-demo': path.resolve(__dirname, 'src/pages/common/form-controls.js'),
        'pagetops': path.resolve(__dirname, 'src/pages/pagetops/page-tops.js'),
        'transparency': path.resolve(__dirname, 'src/pages/transparency/transparency.js'),
        'page-dividers': path.resolve(__dirname, 'src/pages/page-dividers/page-dividers.js'),
        'scroll-story': path.resolve(__dirname, 'src/pages/scroll-story/scroll-story.js'),
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
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: [/images/],
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext]",
                },
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home - Dansk Modelteater Forening',
            filename: 'index.html',
            template: 'src/pages/home/home-page.html',
            chunks: ['home'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title: 'DMF - 3D Teater Moduler',
            filename: 'teater.html',
            template: 'src/pages/teater/teater-page.html',
            chunks: ['teater'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title: '3D Teater Samlet Demo',
            filename: 'teater-demo.html',
            template: 'src/pages/teater/teater-demo-page.html',
            chunks: ['teater-demo'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Form Controls',
            filename: 'form-controls.html',
            template: 'src/pages/common/form-controls.html',
            chunks: ['form-controls-demo'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Pagetops',
            filename: 'page-tops.html',
            template: 'src/pages/pagetops/page-tops.html',
            chunks: ['pagetops'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Transpante Ark',
            filename: 'transparency.html',
            template: 'src/pages/transparency/transparency.html',
            chunks: ['transparency'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Page Dividers Parallax',
            filename: 'page-dividers.html',
            template: 'src/pages/page-dividers/page-dividers.html',
            chunks: ['page-dividers'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title: 'ScrollStory Parallax',
            filename: 'scroll-story.html',
            template: 'src/pages/scroll-story/scroll-story.html',
            chunks: ['scroll-story'],
            minify: false,
        }),
    ]

}