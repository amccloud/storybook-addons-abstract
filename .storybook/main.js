module.exports = {
  stories: ["../examples/**/*.stories.@(js|md)"],
  addons: [
    "storybook-abstract-addon/register",
    "@storybook/addon-storysource",
    "@storybook/addon-links",
  ],
};
