import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { ChartProps } from '../../types/chart.type';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Doghnut = ({ labels, datasets, styles, options }: ChartProps) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: datasets.label,
        data: datasets.data,
        backgroundColor: datasets.backgroundColor,
        borderColor: datasets.borderColor,
        borderWidth: datasets.borderWidth,
        hoverOffset: datasets.hoverOffset,
      },
    ],
  };

  return (
    <>
      <Doughnut data={data} style={styles} options={options} />
    </>
  );
};
