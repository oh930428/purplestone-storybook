import { Story, Meta } from '@storybook/react';

import {
  ProcessCard,
  ProcessCardProps,
} from '../components/Card/ProcessCard/ProcessCard';

export default {
  title: 'Components/ProcessCard',
  component: ProcessCard,
} as Meta;

const Template: Story<ProcessCardProps> = (args) => <ProcessCard {...args} />;

export const BrandsTypes = Template.bind({});
BrandsTypes.args = {
  title: '브랜드를 선택하세요',
  tasteType: [
    {
      id: 1,
      name: 'EDIYA COFFEE',
      thumbnail: require('../assets/Icons/ediya.png'),
    },
    {
      id: 2,
      name: 'STARBUCKS',
      thumbnail: require('../assets/Icons/starbucks.png'),
    },
    {
      id: 3,
      name: 'COFFEE BEEN',
      thumbnail: require('../assets/Icons/coffeebean.png'),
    },
    {
      id: 4,
      name: 'TWOSOME PLACE',
      thumbnail: require('../assets/Icons/twosome.png'),
    },
  ],
};

export const BeansTypes = Template.bind({});
BeansTypes.args = {
  title: '원두 종류를 선택하세요',
  tasteType: [
    {
      id: 1,
      name: '콜롬비아 수프리모',
      thumbnail: require('../assets/Icons/colombiaSupremo.png'),
    },
    {
      id: 2,
      name: '유기농 콜롬비아',
      thumbnail: require('../assets/Icons/colombiaDecaffein.png'),
    },
    {
      id: 3,
      name: '콜롬비아 디카페인',
      thumbnail: require('../assets/Icons/colombiaOrganic.png'),
    },
    {
      id: 4,
      name: '멕시코 알투라',
      thumbnail: require('../assets/Icons/mexicoAlturaOrganic.png'),
    },
    {
      id: 5,
      name: '브라질 산토스',
      thumbnail: require('../assets/Icons/brazilSantos.png'),
    },
    {
      id: 6,
      name: '콰테말라SHB',
      thumbnail: require('../assets/Icons/guatemalaSHB.png'),
    },
  ],
};

export const TemperatureTypes = Template.bind({});
TemperatureTypes.args = {
  title: '차가운 것과 뜨거운 것',
  tasteType: [
    {
      id: 1,
      name: '뜨겁게',
      thumbnail: require('../assets/Icons/hot.png'),
    },
    {
      id: 2,
      name: '얼음 적게',
      thumbnail: require('../assets/Icons/lessIce.png'),
    },
    {
      id: 3,
      name: '얼음',
      thumbnail: require('../assets/Icons/ice.png'),
    },
    {
      id: 4,
      name: '얼음 많이',
      thumbnail: require('../assets/Icons/manyIce.png'),
    },
  ],
};

export const SyrupTypes = Template.bind({});
SyrupTypes.args = {
  title: '달달한 정도를 선택하세요',
  tasteType: [
    {
      id: 1,
      name: '카라멜 시럽',
      thumbnail: require('../assets/Icons/caramelSyrup.png'),
    },
    {
      id: 2,
      name: '헤이즐넛 시럽',
      thumbnail: require('../assets/Icons/hazelnutSyrup.png'),
    },
    {
      id: 3,
      name: '블루 큐라소 시럽',
      thumbnail: require('../assets/Icons/bluecuracaoSyrup.png'),
    },
    {
      id: 4,
      name: '바닐라 시럽',
      thumbnail: require('../assets/Icons/vainillaSyrup.png'),
    },
  ],
};

export const DayTimeTypes = Template.bind({});
DayTimeTypes.args = {
  title: '커피를 언제 드시나요?',
  tasteType: [
    {
      id: 1,
      name: '아침',
      thumbnail: require('../assets/Icons/morning.png'),
    },
    {
      id: 2,
      name: '점심',
      thumbnail: require('../assets/Icons/lunch.png'),
    },
    {
      id: 3,
      name: '저녁',
      thumbnail: require('../assets/Icons/evening.png'),
    },
  ],
};

export const BottleTypes = Template.bind({});
BottleTypes.args = {
  title: '컵은 어떤 것을 사용하시나요?',
  tasteType: [
    {
      id: 1,
      name: '머그 컵',
      thumbnail: require('../assets/Icons/mugCup.png'),
    },
    {
      id: 2,
      name: '리유저블 컵',
      thumbnail: require('../assets/Icons/reuseableCup.png'),
    },
    {
      id: 3,
      name: '일회용 컵',
      thumbnail: require('../assets/Icons/disposableCup.png'),
    },
  ],
};
