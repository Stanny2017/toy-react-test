module.exports = {
    entry: {
        main: './main.js'
    },
    watch: true,
    mode: 'development',
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['@babel/preset-env'],// babel config 的快捷方式
                        plugins: [
                            ['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }]
                        ]
                    }
                }
            }
        ]
    }
}