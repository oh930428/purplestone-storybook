import { Story, Meta } from '@storybook/react';

import {
  HeaderSection,
  HeaderProps,
} from '../components/HeaderSection/HeaderSection';

export default {
  title: 'Components/HeaderSection',
  component: HeaderSection,
} as Meta;

const Template: Story<HeaderProps> = (args) => <HeaderSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Other's Coffee.",
  subTitle: '다른 사람들은 어떤 취향을 가지고 있을까요?',
};
