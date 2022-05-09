import { Story, Meta } from '@storybook/react';
import MakeMyCard from '../components/Card/MakeMyCard/MakeMyCard';
import { IMakeMyCard } from '../types/makeMyCard.type';

export default {
  title: 'Components/MakeMyCard',
  component: MakeMyCard,
} as Meta;

const Template: Story<IMakeMyCard> = (args) => <MakeMyCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  brand: {
    name: 'Coffee Bean',
    description: '커피빈 브랜드가 좋아요',
    thumbnail: require('../assets/images/coffee.png'),
  },
  temperature: {
    name: '얼.죽.아',
    description: '겨울에도 차가운 아이스 커피 못 잃어',
    thumbnail: require('../assets/Icons/ice.png'),
  },
  beans: {
    name: '예가체프 AA',
    description: '적절한 산미가 깔끔한 맛의 예가체프가 AA가 내 취향~',
  },
  time: {
    name: '모닝 커피',
    description: '아침을 깨우는 커피 한잔의 행복',
    thumbnail: require('../assets/Icons/morning.png'),
  },
  syrup: {
    name: 'No 시럽',
    description: '커피는 오리지널의 맛을 즐겨야죠',
  },
};
