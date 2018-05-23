const webpack = require('webpack');
const merge = require('webpack-merge');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
// const MinifyPlugin = require('babel-minify-webpack-plugin');

var config = {
  mode: 'development',
  entry: './src/plugin.js',
  output: {
    filename: 'access-gate.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [    {
      test: /\.js$/,
      include: [path.resolve(__dirname, 'src')],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },{
        test: /\.vue$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: {
          loader: 'vue-loader',
        },
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
     new VueLoaderPlugin()
  ]
};

module.exports = config;

