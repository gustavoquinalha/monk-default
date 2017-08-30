const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack = require('webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CssoWebpackPlugin = require('csso-webpack-plugin').default
const WebpackPwaManifest = require('webpack-pwa-manifest')


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath :
      config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'pages': resolve('src/pages'),
      'components': resolve('src/components'),
      'assets': resolve('src/assets')
    }
  },
  plugins: [

    new WebpackPwaManifest({
      filename: "manifest.json",
      name: 'EAD Minds',
      short_name: 'EADMinds',
      description: 'EAD',
      background_color: '#C2003C',
      orientation: "portrait",
      display: "standalone",
      icons: [{
          src: path.resolve('src/assets/img/my-logo.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          data: '@import "src/assets/css/variables.scss";',
          includePaths: 'src/assets/css'
        },
        context: path.resolve(__dirname) // your project root
      }
    }),

    // minify name class
    // new CssoWebpackPlugin({ sourceMap: true }),

    new FaviconsWebpackPlugin({
      // Your source logo
      logo: './src/assets/img/my-logo.png',
      // The prefix for all image files (might be a folder or a name)
      prefix: 'icons/',
      // Emit all stats of the generated icons
      emitStats: false,
      // The name of the json containing all favicon information
      statsFilename: 'iconstats.json',
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: '#C2003C',
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: 'EAD Minds',
      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: false,
        windows: true
      }
    })
  ],
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
