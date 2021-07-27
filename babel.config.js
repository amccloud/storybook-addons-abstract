/* eslint-env node */
module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    ["@babel/preset-env", { modules: "commonjs" }],
  ],
};
