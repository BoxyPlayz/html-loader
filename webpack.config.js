import path from "path";
import url from "url";
import TerserPlugin from "terser-webpack-plugin";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "index.min.js",
    path: path.resolve(__dirname),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_fnames: true,
        },
      }),
    ],
  },
};