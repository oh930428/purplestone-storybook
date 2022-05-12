export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Design System',
        'Components',
        [
          'Header',
          'Navigation',
          'Footer',
          'Button',
          'Card',
          'IconSocial',
          'CoffeeOption',
        ],
      ],
    },
  },
};
