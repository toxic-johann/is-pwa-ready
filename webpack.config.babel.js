import glob from 'glob'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import Visualizer from 'webpack-visualizer-plugin'
import webpack from 'webpack'
export default function ({mode = 'development', port, nodePort} = {}) {
  const qiniuPlugin = mode === 'development' ? {} : require('./qiniu.js')
  const viewRoot = './client/views/'
  const staticRoot = './static'
  const files = glob.sync(viewRoot + '*/main.js')
  const entry = {}
  files.forEach(filename => {
    const name = path.posix.relative(viewRoot, filename).replace(/\/main\.js/, '')
    entry[name] = filename
  })
  console.log(entry)
  console.log('\x1b[35m%s\x1b[0m', '[' + new Date().toLocaleString() + ']', '--webpack start')
  const cssLoader = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'postcss-loader']
  })
  return {
    entry,
    output: {
      filename: 'js/[name].js',
      path: path.resolve(staticRoot),
      publicPath: mode === 'development' ? '/static/' : 'http://cdn.toxicjohann.com/ispwaready/',
      chunkFilename: '[name]-[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules|sw\.js$/,
          use: [{
            loader: 'babel-loader',
            options: {
              cacheDirectory: './.babel_cache/',
              presets: [['es2015', {'modules': false}]]
            }
          }]
        },
        {
          test: /\.css$/,
          use: cssLoader
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                outputPath: url => {
                  const filename = url.match(/\/main.html$/)
                    ? url.replace(/\/main/, '')
                    : url
                  return '../' + path.relative('./client', filename)
                }
              }
            },
            'extract-loader',
            'html-loader?' + JSON.stringify({
              ignoreCustomFragments: [/\{\{.*?}}|\{%.*?%}|\{=.*?=}/],
              root: path.resolve('./client'),
              attrs: ['img:src'],
            })
          ]
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
      new ExtractTextPlugin({filename: './css/[name].css'}),
      new Visualizer()
    ].concat(mode !== 'development'
      ? [
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

