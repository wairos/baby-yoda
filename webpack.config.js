const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'resources/src'),
    output: {
        path: path.resolve(__dirname, 'public_html/assets/js'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /.\/node_modules/,
            use: ['babel-loader']
        }]
    }
};
