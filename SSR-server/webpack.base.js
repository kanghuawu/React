module.exports = {
  // Tell webpack to run babe on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targes: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
};
