const path = require("path");

module.exports = {
  stories: ["../packages/**/*.stories.(ts|tsx|js|jsx|mdx)"],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    },
    "@storybook/addon-a11y/register",
    "@storybook/addon-knobs/register"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        require.resolve("ts-loader"),
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
    config.resolve.alias = {
      "packages": path.join(__dirname, "..", "packages"),
    };

    return config;
  },
};
