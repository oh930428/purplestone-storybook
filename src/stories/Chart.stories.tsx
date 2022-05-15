import { Story, Meta } from '@storybook/react';

import { Chart } from '../components/Chart/Chart';
import { ChartProps } from '../types/chart.type';

export default {
  title: 'Components/Chart',
  component: Chart,
} as Meta;

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const BeansTypePreference = Template.bind({});
BeansTypePreference.args = {
  labels: [
    '콜롬피아 수프리모',
    '에티오피아 예가체프',
    '콰테말라 SHB',
    '케냐 AA',
    '탄자니아 AA',
    '자메이카 블루마운틴',
  ],
  datasets: {
    label: '원두 종류 선호도',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
    borderWidth: 2,
    hoverOffset: 15,
  },
};
