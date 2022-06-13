module.exports = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  features: {
    previewMdx2: true,
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
