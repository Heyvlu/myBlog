const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {EsbuildPlugin} = require('esbuild-loader');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
const devMode=process.env.NODE_ENV !== "production";

const mapArticles=require('./src/mapArticles');

const articleList=mapArticles();

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "dist.js",
        assetModuleFilename: "images/[hash][ext][query]"
    },
    optimization: {
        minimizer: [
            new EsbuildPlugin({
                target:'es2020'
            })
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname,'src/')
        },
        extensions: [".js",".jsx"],
        mainFiles: ["index"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [{loader: 'esbuild-loader', options: {target: 'es2020'}}]
            },
            {
                test: /\.css$/i,
                use: [
                    devMode ? 'style-loader':MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc)ss$/i,
                use: [
                    devMode ? 'style-loader':MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    {loader: "sass-loader"}
                ]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.mdx?$/i,
                use: [
                    {
                        loader: '@mdx-js/loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: "./public/index.html"}),
        new webpack.DefinePlugin({
            articleList:JSON.stringify(articleList)
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        open: true,
        hot: true,
        compress: true,
        port: 3000,
        historyApiFallback:true
    }
}