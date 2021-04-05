const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    clean: {
      keep(asset) {
        return asset.includes('CNAME');
      },
    }
  },
  // DEVELOPMENT
  devtool: 'inline-source-map',
  // DEVELOPMENT
  mode: 'development',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      cache: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              // All default supported tags and attributes
              '...',
              {
                tag: 'a',
                attribute: 'href',
                type: 'src'
              }
            ]
          }
        }
      },
      // BABEL
      // {
      //   test: /\.m?js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         ['@babel/preset-env', { targets: 'defaults' }],
      //       ],
      //     },
      //   },
      // },
    ],
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },
};
