const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  // Set to 'development' or 'production'
  entry: './src/index.js', // Path to your entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]', // Defines where to put assets like images
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,  // Process image files
        type: 'asset/resource',  // Use asset/resource to handle images
        generator: {
          filename: 'assets/[name][ext][query]',  // Output path for images
        },
      },
      {
        test: /\.css$/,  // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Path to your HTML template
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve static files from 'dist' directory
    },
    compress: true,
    port: 8080,
    open: true, // Optional: Open the browser automatically
  },
};
