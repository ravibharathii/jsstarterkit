import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [
        // CommonsChunkPlugin to split bundle
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        }),

        //Create Html file that includes reference to bundle js
        new HtmlWebpackPlugin({
            template:'src/index.html',
            minify:{
                removeComments:true,
                collapseWhitespace:true,
                removeRedundantAttributes:true,
                useShortDoctype:true,
                removeEmptyAttributes:true,
                removeStyleLinkTypeAttributes:true,
                keepClosingSlash:true,
                minifyJs:true,
                minifyCSS:true,
                minifyURLs:true
            },
            inject:true

        }),

        // Elminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),
        // Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loaders: ['style','css']}
        ]
    }
}