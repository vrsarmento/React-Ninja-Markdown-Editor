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
    new CleanPlugin(['dist'], {
      root: common.paths.root,
    }),

    crp,
    styles,

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'react-build',
      chunks: ['main'],
      minChunks: ({ resource }) => (
        /node_modules\/(react(-dom)?|fbjs)\//.test(resource) ||
        /node_modules\/preact/.test(resource)
      )
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),

    new HtmlPlugin(
      Object.assign({}, common.htmlPluginConfig('template.html'), {
        minify: { collapseWhitespace: true },

        chunksSortMode: (chunk1, chunk2) => {
          const order = ['react-build', 'vendor', 'main']
          const left = order.indexOf(chunk1.names[0])
          const right = order.indexOf(chunk2.names[0])
          return left - right
        },
      })
    ),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ].concat(process.env.ANALYZER ? new BundleAnalyzerPlugin() : []),

  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoader,
      common.fileLoader,
      common.urlLoader,
      {
        test: /\.css$/,
        exclude: /node_modules|(style)\.css/,
        include: common.cssLoader.include,
        use: styles.extract({
          fallback: common.cssLoader.use[0],
          use: common.cssLoader.use.slice(1),
        }),
      },
      {
        test: /(style)\.css$/,
        exclude: /node_modules/,
        include: common.cssLoader.include,
        use: crp.extract({
          fallback: common.cssLoader.use[0],
          use: common.cssLoader.use.slice(1),
        }),
      },
    ],
  },

  resolve: {
    alias: Object.assign({}, common.resolve.alias, {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    }),
  },
}
