const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin
const path = require('path')
const deps = require('./package.json').dependencies
const sassLoader = require('sass')

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 3002
  },
  output: {
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript']
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'accountlist',
      filename: 'remoteEntry.js',
      remotes: {
        // here you must put the entry point routes for all other micro frontends.
        accountlist: 'accountlist@http://localhost:3002/remoteEntry.js'
      },
      exposes: {
        './Accountlist': './src/components/pages/AccountList/index.tsx'
      },
      shared: {
        // The module federation handles the resolution of modules so
        // that the same package is not processed several times.
        ...deps,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react // requiredVersion: "*"
        },
        'react-dom': {
          eager: true,
          singleton: true,
          requiredVersion: deps['react-dom']
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
