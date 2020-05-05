'use strict'

const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const crp = new ExtractTextPlugin({
  filename: 'crp.css'
})
const styles = new ExtractTextPlugin({
  filename: '[name]-[hash].css'
})

module.exports = {
  entry: common.entry,

  output: common.output,

  plugins: [
    new BundleAnalyzerPlugin(),

    new CleanPlugin(['dist'], {
      root: common.paths.root
    }),
    
    crp,
    styles,

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'react-build',
      chunks: ['main'],
      minChunks: ({ resource }) => (
        /node_modules\/(react(-dom)?|fbjs)\//.test(resource)
      )
    }),

    new webpack.optimize.CommonsChunckPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: ({ resource }) => (
        /node_modules/.test(resource)
      )
    }),

    new HtmlPlugin(common.htmlPluginConfig('template.html')),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),

  ],

  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoader,
      common.fileLoader,
      common.urlLoader,
      {
        test: /\.css$/,
        exclude: /node_modules|(search|style)\.css/,
        include: /src/,
        use: styles.extract({
          fallback: common.cssLoader.use[0],
          use: common.cssLoader.use.slice(1)
        })
      },
      {
        test: /(search|style)\.css$/,
        exclude: /node_modules/,
        include: /src/,
        use: crp.extract({
          fallback: common.cssLoader.use[0],
          use: common.cssLoader.use.slice(1)
        })
      }
    ]
  },

  resolve: common.resolve
}
