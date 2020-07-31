/* eslint-env node */
module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-react",
    ["@babel/preset-env", { "modules": "commonjs" }]
  ]
};
