const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = require('./package.json');

const isDevelopMode = process.env.NODE_ENV !== 'production';

const plugins = [new MiniCssExtractPlugin({ filename: `${config.name}.css` })];

if (isDevelopMode) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: 'localhost',
      analyzerPort: 8082,
    })
  );
}

module.exports = {
  mode: isDevelopMode ? 'development' : 'production',
  entry: path.resolve(__dirname, './src/index'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: `${config.name}.js`,
    library: '',
    libraryTarget: 'commonjs',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  externals: [nodeExternals()],

  plugins,

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'linaria/loader',
            options: { sourceMap: isDevelopMode },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopMode,
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: isDevelopMode },
          },
        ],
      },
      { enforce: 'pre', test: /\.(ts|js)x?$/, loader: 'source-map-loader' },
    ],
  },
};
