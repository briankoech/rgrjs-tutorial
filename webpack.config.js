var path = require('path');
module.exports = {
    entry: './public/js/main.js',
    output: {
      path: __dirname + "/public",
      filename: "bundle.js"
    },

    module: {
      preLoaders: [
        {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
      ],
      loaders: [
        {
          test: /.jsx$/,
          include: path.join(__dirname, 'public/js', 'main.js'),
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {presets: ['react', 'es2015']}
        }
      ]
    },

    resolve: {
      extensions: ['', '.js', '.jsx']
    }
}
