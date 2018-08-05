const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.twig$/,
    loader: "twig-loader",
    options: {},
  });
  defaultConfig.resolve.extensions.push(".twig");

  return defaultConfig;
};