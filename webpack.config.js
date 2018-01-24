

// webpack.config.js
const path = require('path'); // NOTE: We require path because we use it below
const webpack = require('webpack');
module.exports = {

  entry: './src/main.js', // IMPORTANT: We changed the path to match our new index.js location

  output: {
    path: path.resolve(__dirname+ '/dist'), // [3]
    filename: 'bundle.js',
  },
	devServer: {
	  contentBase: "./src",
    hot: true
	},
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
