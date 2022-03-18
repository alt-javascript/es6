const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './index.js'
    },
    devtool: 'inline-source-map',
    plugins: [
    ],
    devServer: {
        allowedHosts: ['all'],
        port: 8080,
    },
    output: {
        filename: 'alt-javascript-lang-iife.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',
        clean: true,
    },
};
