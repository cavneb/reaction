var webpack = require('webpack');

var port = JSON.parse(process.env.npm_package_config_port || 3000),
    subdomain = JSON.parse(process.env.npm_package_config_subdomain),
    url = subdomain ?  'https://' + subdomain + '.localtunnel.me' : 'http://localhost:' + port;

module.exports = {
  devtool: 'eval',
  debug: true,
  stats: {
    colors: true,
    reasons: true
  },
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    'webpack-dev-server/client?' + url,
    'webpack/hot/only-dev-server',
    './src/js/index'
  ],
  output: {
    path: __dirname + '/assets',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.ProvidePlugin({
      $: "jquery",
      jq: "jquery",
      jQuery: "jquery"
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    moduleDirectories: ['node_modules', 'bower_components'],
    alias: { }
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
