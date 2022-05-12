import { Story, Meta } from '@storybook/react';
import {
  ProfileCard,
  ProfileCardProps,
} from '../components/Card/ProfileCard/ProfileCard';

export default {
  title: 'Components/Card/ProfileCard',
  component: ProfileCard,
} as Meta;

const Template: Story<ProfileCardProps> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  userName: 'KIM BORA',
  descrition: '프론트엔드 담당<br/> 에어자이저 <br/> 아이디어 뱅크',
  thumbnail: require('../assets/Images/profile.png'),
  iconSocials: [
    {
      name: 'facebook',
    },
    {
      name: 'google',
    },
    {
      name: 'instagram',
    },
  ],
};
