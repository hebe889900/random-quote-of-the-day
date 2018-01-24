

// webpack.config.js
const path = require('path'); // NOTE: We require path because we use it below

module.exports = {

  entry: './src/main.js', // IMPORTANT: We changed the path to match our new index.js location

  output: {
    path: path.resolve(__dirname+ '/dist'), // [3]
    filename: 'bundle.js',
  },
	devServer: {
	  contentBase: "./src",
	  inline: true,
	  port: 8080
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
   }

};
