const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: '@equip/core',
            replacement: path.resolve(
              __dirname,
              '../../../packages/equip-core/'
            ),
          },
          {
            find: '@equip/map',
            replacement: path.resolve(
              __dirname,
              '../../../packages/equip-map/'
            ),
          },
        ],
      },
    };
  },
};
