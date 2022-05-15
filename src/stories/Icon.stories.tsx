import { Story, Meta } from '@storybook/react';

import { IconSocial } from '../components/Icon/IconSocial';
import { IconSocialProps } from '../types/iconSocial.type';

export default {
  title: 'Components/IconSocial',
  component: IconSocial,
} as Meta;

const Template: Story<IconSocialProps> = (args) => <IconSocial {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  name: 'facebook',
};

export const Google = Template.bind({});
Google.args = {
  name: 'google',
};

export const Instagram = Template.bind({});
Instagram.args = {
  name: 'instagram',
};
