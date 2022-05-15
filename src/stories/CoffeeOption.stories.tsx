import { Story, Meta } from '@storybook/react';
import { CoffeeOption } from '../components/CoffeeOption/CoffeeOption';
import { CoffeeOptionProps } from '../types/coffeeOption.type';

export default {
  title: 'Components/CoffeeOption',
  component: CoffeeOption,
} as Meta;

const Template: Story<CoffeeOptionProps> = (args) => <CoffeeOption {...args} />;

export const Default = Template.bind({});
Default.args = {
  bgCircle: require('../assets/Images/bg-circle.png'),
  thumbnail: [
    {
      id: 1,
      name: 'brand',
      image: require('../assets/Icons/brands/starbucks.png'),
    },
  ],
};

export const selected = Template.bind({});
selected.args = {
  ...Default.args,
  bgCircleActive: require('../assets/Images/bg-circle-active.png'),
  isSelected: true,
};
