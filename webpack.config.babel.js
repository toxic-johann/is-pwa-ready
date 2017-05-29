import glob from 'glob'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import Visualizer from 'webpack-visualizer-plugin'
import webpack from 'webpack'
import WebpackMd5Hash from 'webpack-md5-hash'
import HtmlWebpackPlugin from 'html-webpack-plugin'
export default function ({mode = 'development', port, nodePort} = {}) {
  const qiniuPlugin = mode === 'development' ? {} : require('./qiniu.js')
  const viewRoot = './client/views/'
  const staticRoot = './static'
  const jsFiles = glob.sync(viewRoot + '*/main.js')
  const entry = jsFiles.reduce((entry, filename) => {
    const name = path.posix.relative(viewRoot, filename).replace(/\/main\.js/, '')
    entry[name] = filename
    return entry
  }, {})
  const autoSWFiles = glob.sync(viewRoot + '*/*/sw.js')
  autoSWFiles.map(filename => {
    const name = path.posix.relative(viewRoot, filename).replace(/\/sw\.js/, '-sw')
    entry[name] = filename
  })
  const htmlFiles = glob.sync(viewRoot + '*/main.html')
  const htmlWebpackPlugins = htmlFiles.map(template => {
    const [, path] = template.match(/\.\/client\/views\/([^\/]+)\/main\.html/)
    const options = {
      inject: false,
      chunks: [path],
      filename: '../views/' + path + '.html',
      template,
    }
    if(mode !== 'development') {
      options.minify = {
        removeComments: true,
        collapseWhitespace: true
      }
    }
    return new HtmlWebpackPlugin(options)
  })
  console.log(entry)
  console.log('\x1b[35m%s\x1b[0m', '[' + new Date().toLocaleString() + ']', '--webpack start')
  const cssLoader = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader?minimize', 'postcss-loader']
  })
  return {
    entry,
    output: {
      filename: mode === 'development' ? 'js/[name].js' : 'js/[name]-[chunkhash].js',
      // chunkFilename: mode === 'development' ? 'js/[name].js' : 'js/[name]-[chunkhash].js',
      path: path.resolve(staticRoot),
      publicPath: mode === 'development' ? '/static/' : 'https://resource.toxicjohann.com/ispwaready/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules$/,
          use: [{
            loader: 'babel-loader',
            options: {
              babelrc: false,
              cacheDirectory: './.babel_cache/',
              presets: [
                ['es2015', {'loose': true, 'modules': false}]
              ],
              plugins: ['async-to-promises']
            }
          }]
        },
        {
          test: /\.css$/,
          use: cssLoader
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          use: 'url-loader?limit=10000&name=img/[name]-[hash].[ext]'
        },
        {
          test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          use: 'url-loader?limit=10000&name=font/[name]-[hash].[ext]'
        }
      ]
    },
    resolve: {
      // 模块别名定义，方便后续直接引用别名，无须多写长长的地址
      alias: {
        'utils': path.resolve('./client/views/common/utils.js'),
        'store': path.resolve('./client/views/common/store.js'),
        'raven': path.resolve('./client/views/common/raven.js')
      },
      enforceExtension: false,
      modules: [
        path.resolve('./client'),
        'node_modules'
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          output: {
            publicPath: '/static/'
          },
          postcss: [
            require('postcss-import')({
              path: [path.resolve('./fesrc')],
              resolve: (id, basedir, importOptions) => {
                return id.match(/^\//)
                  ? path.resolve('./client') + id
                  : id
              }
            }),
            require('precss'),
            require('postcss-cssnext')(),
          ]
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"' + mode + '"'
        }
      }),
      new ExtractTextPlugin({filename: mode === 'development' ? 'css/[name].css' : 'css/[name]-[contenthash].css'}),
      ...htmlWebpackPlugins,
      new Visualizer()
    ].concat(mode !== 'development'
      ? [
        new WebpackMd5Hash(),
          // css minify will finished by stc
        new webpack.optimize.UglifyJsPlugin({
          test: /\.js$/,
          comments: false,
          sourceMap: true,
          compress: {
            // remove warnings
            warnings: false,
            // Drop console statements
            drop_console: true
          }
        }),
        qiniuPlugin
      ]
      : [
      ]
    )
  }
}

