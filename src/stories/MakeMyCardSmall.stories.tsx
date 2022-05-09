import { Story, Meta } from '@storybook/react';

import {
  MakeMyCardSmall,
  MakeMyCardSmallProps,
} from '../components/Card/MakeMyCardSmall/MakeMyCardSmall';

export default {
  title: 'Components/MakeMyCardSmall',
  component: MakeMyCardSmall,
} as Meta;

const Template: Story<MakeMyCardSmallProps> = (args) => (
  <MakeMyCardSmall {...args} />
);

export const Default = Template.bind({});
Default.args = {
  bgCard: require('../assets/images/bg-card-small.png'),
  bgDigram: require('../assets/images/bg-digram-small.png'),
  userName: '은평구 코알라',
  tasteIcon: {
    brandIcon: require('../assets/Icons/morning.png'),
    beanIcon: require('../assets/Icons/morning.png'),
    syrupIcon: require('../assets/Icons/morning.png'),
    dayTimeIcon: require('../assets/Icons/morning.png'),
    temperatureIcon: require('../assets/Icons/ice.png'),
  },
  tasteDigram: {
    brandName: 'Coffee Bean',
    beanName: '예가체프 AA',
    isSyrup: 'No 시럽',
    daytime: '모닝 커피',
    temperature: '얼.죽.아',
  },
};
