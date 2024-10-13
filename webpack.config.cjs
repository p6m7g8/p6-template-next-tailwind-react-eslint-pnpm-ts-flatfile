const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    entry: './src/index.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'),
	process: false,
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
        fs: false,
        vm: false,
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^crypto$/,
        contextRegExp: /node_modules/,
      }),
    ],
    devtool: argv.mode === 'production' ? false : 'source-map',
    performance: {
      maxAssetSize: 244000, // Set size limits (in bytes)
      maxEntrypointSize: 244000,
    },
  };
};

