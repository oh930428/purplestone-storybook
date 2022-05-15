import { Story, Meta } from '@storybook/react';

import { Button } from '../components/Button/Button';
import { ButtonProps } from '../types/button.type';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    theme: {
      options: ['default', 'primary', 'disabled', 'error'],
      control: { type: 'radio' },
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'default',
  label: '버튼',
};

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  label: '버튼',
};

export const Disabled = Template.bind({});
Disabled.args = {
  theme: 'disabled',
  label: '비활성',
};

export const Error = Template.bind({});
Error.args = {
  theme: 'error',
  label: '오류',
};

export const Medium = Template.bind({});
Medium.args = {
  ...Primary.args,
  size: 'medium',
  label: '저장하기',
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  size: 'large',
  label: '취향 카드 만들기',
};

export const IsRegular = Template.bind({});
IsRegular.args = {
  ...Primary.args,
  size: 'medium',
  label: 'Create My Card',
  isRegular: true,
};
