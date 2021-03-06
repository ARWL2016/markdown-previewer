var webpack = require('webpack');

module.exports = {
  entry: [ 
     'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
    ], 
  externals: {
    jquery: 'jQuery'
  }, 
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery', 
      'jQuery': 'jquery'
    })
  ], 
  output: {
    path: __dirname, //current folder
    filename: './public/bundle.js'
  }, 
  resolve: {
    root: __dirname, 
    alias: {
      Main: 'app/components/Main.jsx', 
      Nav: 'app/components/Nav.jsx',
      MarkdownPreviewer: 'app/components/MarkdownPreviewer',
      MarkdownForm: 'app/components/MarkdownForm.jsx',
      MarkdownOutput: 'app/components/MarkdownOutput.jsx',
      Examples:'app/components/Examples.jsx',
      About: 'app/components/About.jsx',
      UserGuide: 'app/components/UserGuide.jsx',
      cssReset: 'app/styles/cssReset.scss', 
      applicationStyles: 'app/styles/app.scss', 
      markdown: 'app/markdown/markdown.js'
    },
    extensions: ['', '.js', '.jsx']
  }, 
  module: {
    loaders: [
      {
        loader: 'babel-loader', 
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }, 
        test: /\.jsx?$/, 
        exclude: /(node_modules|bower_components)/
      }
    ]
  }, 
  devtool: 'cheap-module-eval-source-map'
};