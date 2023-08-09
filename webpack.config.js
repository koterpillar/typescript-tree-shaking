'use strict';

module.exports = {
  target: 'node18',
  entry: {
    index: './src/index.ts'
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
  resolve: {
    modules: [
      require('path').resolve(__dirname, 'src')
    ],
    extensions: ['.ts']
  }
};

