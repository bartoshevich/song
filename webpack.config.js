// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
  entry: {
    main: './src/index.js',
    gallery: './src/gallery.js',
    game: './src/game.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),  
    clean: true,
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'game.html',
      template: './src/pages/game.html',
      chunks: ['game'],
    }),
    new HtmlWebpackPlugin({
      filename: 'gallery.html',
      template: './src/pages/gallery.html',
      chunks: ['gallery'],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
      chunks: ['main'],
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/assets/public/' },
      ],
    }),
   
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      { test: /\.ejs$/, loader: "ejs-render-loader" },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset/resource',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.plugins.push(new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }));


    // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

  } else {
    config.mode = 'development';
  }
  return config;
};
