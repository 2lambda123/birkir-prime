const path = require('path');

module.exports = {
  entry: './src/ui',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            noEmit: false,
            jsx: 'react',
          },
        },
      },
    ],
  },
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    antd: 'Antd',
    lodash: 'lodash',
    moment: 'moment',
    'braft-editor': 'BraftEditor',
  },
  output: {
    filename: 'index.js',
    path: path.join(process.cwd(), 'lib', 'ui'),
  },
};
