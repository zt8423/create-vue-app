const path = require('path');
const vuePlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.less', '.css', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            use: 'json-loader'
        }, {
            test: /\.(png|jpg|eot|svg|ttf|woff|woff2)$/,
            use: 'url-loader'
        }, {
            test: /\.(less|css|scss)$/,
            use: ['style-loader', 'css-loader', 'less-loader', 'scss-loader']
        }]
    },
    plugins: [
        new vuePlugin()
    ]
}
