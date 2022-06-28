const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.ts'),
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js',
      '@': path.resolve(__dirname, '../src'),
      '@core': path.resolve(__dirname, '../src/core'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, '../tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
    ],
  },
}