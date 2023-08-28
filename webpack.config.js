const path = require('path')
const { ModuleFederationPlugin } = require("webpack").container;


module.exports = {
    entry: './src/Index.tsx',
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            filename: "remoteEntry.js",
            remotes: {
                profileintegration: "profileintegration@https://6-dot-profileintegration-dot-microfrontend-se.uc.r.appspot.com/remoteEntry.js"
            },
            shared: {
                react: { singleton: true, eager: true },
                "react-dom": { singleton: true, eager: true }
            }
        })
    ]
}