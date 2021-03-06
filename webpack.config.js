const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env, argv) => {
    let watch = false
    if ('watch' in env) {
        if (env['watch'] === 'true') {
            watch = true
        }
    }
    return {
        entry: './src/index.ts',
        mode: 'development',
        watch: watch,
        devtool: 'inline-source-map',
        output: {
            filename: env['mode'] === 'production' ? 'maper.min.js' : 'maper.js',
            libraryTarget: 'umd',
            path: path.resolve(__dirname, 'build')
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: ['.ts', '.js']
        },
        node: {
            fs: 'empty'
        },
        module: {
            rules: [
                // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader'
                }
            ]
        },
        externals: {
            // loadsh: 'lodash',
            // assert: 'assert',
        },
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'disabled',
                generateStatsFile: true,
                statsOptions: {
                    source: false
                }
            })
        ],
        optimization: {
            minimize: env['mode'] === 'production'
        },
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 1000
        }
    }
}
