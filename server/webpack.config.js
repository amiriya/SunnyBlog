const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    entry: './app.js', 
    output: { 
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'sourcemap',
    externals: [nodeExternals()],
    node: {
        fs: 'empty',
        net: 'empty'
    }
}
