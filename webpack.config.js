var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/js/index'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/vertx/)
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.gif$/,           loader: 'url-loader?limit=10000&minetype=image/gif' },
      { test: /\.jpg$/,           loader: 'url-loader?limit=10000&minetype=image/jpg' },
      { test: /\.png$/,           loader: 'url-loader?limit=10000&minetype=image/png' },
      { test: /\.css$/,           loader: 'style-loader!css-loader' },
      { test: /\.(scss|sass)$/,   loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.js$/,            loaders: ['react-hot', 'jsx?harmony'] },
      { test: /\.woff$/,          loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/,           loader: "file-loader" },
      { test: /\.eot$/,           loader: "file-loader" },
      { test: /\.svg$/,           loader: "file-loader" }
    ]
  }
};
