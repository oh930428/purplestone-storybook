import { Story, Meta } from '@storybook/react';

import { Colors, ColorsProps } from '../components/Colors/Colors';

export default {
  title: 'Components/Colors',
  component: Colors,
} as Meta;

const Template: Story<ColorsProps> = (args) => <Colors {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Basic',
  subTitle: '기본 색상으로 텍스트, 배경 등에 사용합니다.',
  colorCardList: [
    {
      colorTitle: 'Black',
      cardColor: '#ffffff',
      colorValue: '#000000',
      useColor: '텍스트',
    },
    {
      colorTitle: 'White',
      cardColor: '#000000',
      cardBorder: true,
      colorValue: '#FFFFFF',
      useColor: '배경',
    },
  ],
};

export const GrayScale = Template.bind({});
GrayScale.args = {
  title: 'Gray Scale',
  subTitle: '기본 색상으로 텍스트, 배경 등에 사용합니다.',
  colorCardList: [
    {
      colorTitle: 'Gray_01',
      cardColor: '#ffffff',
      colorValue: '#212121',
      useColor: '주 사용처 입력',
    },
    {
      colorTitle: 'Gray_02',
      cardColor: '#ffffff',
      colorValue: '#616161',
      useColor: '주 사용처 입력',
    },
    {
      colorTitle: 'Gray_03',
      cardColor: '#ffffff',
      colorValue: '#888888',
      useColor: '주 사용처 입력',
    },
    {
      colorTitle: 'Gray_04',
      cardColor: '#ffffff',
      colorValue: '#CCCCCC',
      useColor: '주 사용처 입력',
    },
    {
      colorTitle: 'Gray_05',
      cardColor: '#000000',
      colorValue: '#EEEEEE',
      useColor: '주 사용처 입력',
    },
    {
      colorTitle: 'Gray_06',
      cardColor: '#000000',
      colorValue: '#F5F5F5',
      useColor: '주 사용처 입력',
    },
  ],
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary',
  subTitle: '브랜드 컬러로 강조, 활성, 긍정 등을 표현할때 사용합니다.',
  colorCardList: [
    {
      colorTitle: 'Primary_01',
      cardColor: '#ffffff',
      colorValue: '#5A2B81',
      useColor: '활성화',
    },
    {
      colorTitle: 'Primary_01',
      cardColor: '#000000',
      colorValue: '#CECBEF',
      useColor: '포인트 컬러',
    },
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Secondary',
  subTitle:
    '프라이머리 컬러를 보조하며 주목도가 높아야 하는 요소에 한해 부분적으로 사용합니다',
  colorCardList: [
    {
      colorTitle: 'Secondary_01',
      cardColor: '#ffffff',
      colorValue: '#75372A',
      useColor: '플래그',
    },
    {
      colorTitle: 'Secondary_02',
      cardColor: '#000000',
      colorValue: '#F5EE84',
      useColor: '플래그',
    },
    {
      colorTitle: 'Secondary_03',
      cardColor: '#000000',
      colorValue: '#F5F2C2',
      useColor: '플래그',
    },
  ],
};
