import { Story, Meta } from '@storybook/react';

import { Header } from '../components/Header/Header';
import { HeaderProps } from '../types/header.type';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Other's Coffee.",
  subTitle: '다른 사람들은 어떤 취향을 가지고 있을까요?',
};
