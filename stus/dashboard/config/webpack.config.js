const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js",
    },
    mode: "development",
    devServer: {
        static: {
          directory: path.join(__dirname, '../dist'),
        },
        compress: true,
        port: 9000,
        hot: true,
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".*", ".js", ".jsx"],
    },
     module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          },
        ],
    },
}
