const path = require('path');
const DIST_DIR = 'assets';

module.exports = {
  entry: path.resolve(__dirname, './src/sw.ts'),
  output: {
    filename: 'sw.js',
    path: path.resolve(__dirname, DIST_DIR)
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            target: "es5",
            module: "esnext"
          }
        }
      }
    ]
  }
}
