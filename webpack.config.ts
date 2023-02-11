import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import { buildPlugins } from "./config/build/buildPlugins";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildResolvers } from "./config/build/buildResolver";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";

  const config: Configuration = buildWebpackConfig({
    paths,
    mode,
    isDev,
    port: PORT,
  });
  return config;
};
