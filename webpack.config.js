const path = require("path");

module.exports = {
    entry: "./src/ui/main",
    mode: "development",
    //mode: "production",
    module: {
        rules: [
            { test: /\.tsx?$/, use: "ts-loader" }
        ]
    },
    resolve: {
        extensions: [".ts"]
    },
    output: {
        filename: "sinterklaas-2018.js",
        path: path.resolve(__dirname, './public/js'),
        libraryTarget: 'var',
        library: 'sinterklaas2018'
    }
};
