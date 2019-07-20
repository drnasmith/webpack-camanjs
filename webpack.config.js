const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Used by webpack-cli to run a basic dev server
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  resolve: {
      alias: {
        // Alias the caman js library for imports. 
        // Also need to use this pattern with the import loader below
          'caman': 'caman/dist/caman.min'
      },
      modules: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'vendor'),
        path.resolve(__dirname, 'src')
    ]
  },
  module: {
    rules: [
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
        // We need to help Caman load properly
        // Caman adds to the window object within a browser
        // The import loader ensures it it recognised as browser env not NodeJS
        {
          test: /caman\.min\.js$/,
          use: "imports-loader?exports=>undefined,require=>false,this=>window"
        }
      ],    
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    }),
    new CopyPlugin([
      { from: path.resolve(__dirname, 'src/images'), to: path.resolve(__dirname, 'dist') },
    ]),
  ]
};