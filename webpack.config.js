module.exports = {
  entry: {
    'first-components': './first-components/main.js'
  },
  output: {
    path: './',
    filename: '[name]/index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
