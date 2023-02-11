'use strict';

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/game/game.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    module: {
      rules: [
        {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
      alias: {
        '~': path.resolve(__dirname, '../src'),
      },
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
          template: './src/game/game.html'
      }),
    ],
    devServer: {
      static: path.join(__dirname, "dist"),
      compress: true,
      port: 3000,
    },
  };