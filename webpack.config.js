var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./src/server.ts",
    target: 'node',
    output: {
        filename: "./build/bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            {test: /\.tsx?$/, loader: "ts-loader"}
        ]
    },
    watch: true,
    devServer: {
        inline:true,
        port: 8000
    },
    externals: nodeExternals()
};