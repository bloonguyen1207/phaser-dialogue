'use strict';

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/game.ts',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
      alias: {
        '~': path.resolve(__dirname, '../src'),
      },
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new webpack.DefinePlugin({
        CANVAS_RENDERER: JSON.stringify(true),
        WEBGL_RENDERER: JSON.stringify(true),
        EXPERIMENTAL: JSON.stringify(true),
        PLUGIN_CAMERA3D: JSON.stringify(false),
        PLUGIN_FBINSTANT: JSON.stringify(false),
        FEATURE_SOUND: JSON.stringify(true)
      }),
      new HtmlWebpackPlugin({
          title: 'Demo', 
          template: './src/game.html' 
      }) 
    ],
    devServer: {
      static: path.join(__dirname, "dist"),
      compress: true,
      port: 3000,
    },
  };