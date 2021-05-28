const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.sass$/,
        use:[
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {}
          },
        ],
        // include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              useRelativePath: true,
              name: '[path][name].[ext]',
            }
          },
          { loader: 'image-webpack-loader'}
        ],
      },
    ]
  },
  resolve: {
    alias: {
      '@': path.dirname(path.resolve(__dirname)),
      '~': path.dirname(path.resolve(__dirname))
    }
  }
}
