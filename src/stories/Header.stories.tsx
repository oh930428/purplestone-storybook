import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from '../components/Header/Header';

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
