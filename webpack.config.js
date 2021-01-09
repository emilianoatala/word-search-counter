var path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.ENVIRONMENT || "development",
        
  entry:["@babel/polyfill", path.join(__dirname, "src", "index.jsx")],
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },

  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "async",
      minSize: 0,
      minChunks: 1,
      maxAsyncRequests: 10,
      maxInitialRequests: 10,
      automaticNameDelimiter: "~",
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },

  plugins: [
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|jsx|css|html|svg)$/,
      threshold: 0,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.(js|jsx||css|html|svg)$/,
      threshold: 0,
      minRatio: 0.8,
    }),
    
    new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.join(__dirname, "public/index.html"),
        inject: true
    }),
  ],

  resolve: {
    extensions: [".js", ".json", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },

  output: {
    publicPath: "/",
    path: path.join(__dirname, "public"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },

  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    port: 3000,
    watchContentBase: true,
    open: true,
    compress: true,
  },
};