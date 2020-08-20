//webpack.config.js
const HtmlWebpackPluguin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    devServer: {
        port: 8081
    },
    module: {
        rules: [
            {   
                test: /\.scss$/,
                use: [ 
                    { loader : MiniCssExtractPlugin.loader}, 
                    { loader : 'css-loader'}, 
                    { loader : 'sass-loader'} 
                ]
            }
        ]
    },


    plugins: [
        new HtmlWebpackPluguin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({

            filename: 'bundle.css',
        }

        ),
    ]
}