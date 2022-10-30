'use strict';

import webpack from 'webpack';
import path from 'path';

module.exports = {
    context: `${__dirname}/src/`,
    entry: './main.ts',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
        ],
    },
}