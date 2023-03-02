const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const FontminPlugin = require('fontmin-webpack');

const isDev = process.env.NODE_ENV === 'development';
const filename = extension => isDev ? `[name].${extension}` : `[name].[hash].${extension}`;

module.exports = {
  // entry: [
  //   '@babel/polyfill',
  //   path.resolve(__dirname, 'src/js/index.js'),
  // ],
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, 'src/main/index.js')],
    partnership: ['@babel/polyfill', path.resolve(__dirname, 'src/partnership/index.js')],
    catalog: ['@babel/polyfill', path.resolve(__dirname, 'src/catalog/index.js')],
    good: ['@babel/polyfill', path.resolve(__dirname, 'src/good/index.js')],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  devtool: isDev ? 'eval': false,
  // devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 9000,
    historyApiFallback: isDev,
    hot: isDev,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/main/index.html'),
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/partnership/partnership.html'),
      filename: 'partnership.html',
      chunks: ['partnership']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/catalog/catalog.html'),
      filename: 'catalog.html',
      chunks: ['catalog']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/good/good.html'),
      filename: 'good.html',
      chunks: ['good']
    }),
    new CopyPlugin({ patterns: [
      {
        from: "src/assets/img/**/*.png" ,
        to() {
          return "img/webp/[name][ext]";
        },
      },
      {
        from: "src/assets/img/**/*.jpg" ,
        to() {
          return "img/webp/[name][ext]";
        },
      },
    ]}),
  ].concat(isDev ? [] : [
    new MiniCssExtractPlugin({
      filename: 'css/' + filename('css'),
    }),
    new FontminPlugin({
      autodetect: true,
    }),
  ]),
  optimization: {
    runtimeChunk: 'multiple',
    splitChunks: {
      minChunks: Infinity,
      chunks: 'all'
    },
    // minimize: !isDev,
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new ImageMinimizerPlugin({
        generator: [
          {
            type: "asset",
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ["imagemin-webp"],
            },
          },
        ],
      }),
    ],
  },
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
              url: {
                filter: (url, resourcePath) => {
                  if (url.includes(".png") || url.includes(".jpg")) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: "$env: " + process.env.NODE_ENV + ";",
              sourceMap: isDev,
            },
          },
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `[name].[ext]`,
              outputPath: 'img/',
            }
          },
        ].concat(isDev ? [] : [
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                  plugins: [
                    'imagemin-jpegtran',
                    'imagemin-optipng',
                    'imagemin-svgo',
                  ],
                },
              },
            },
          },
        ]),
      }
    ]
  },
}
