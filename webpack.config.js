var webpack = require("webpack");
var path = require("path");
var PROD = process.env.NODE_ENV === "production";

module.exports = {
    entry: "./_webpack/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "assets/js/")
    },
    devtool: "source-map",
    target: "node",
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: true
        // })
    ]
};
