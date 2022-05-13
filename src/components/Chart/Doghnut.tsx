import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { ChartProps } from './Chart';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface ChartDataSetProps {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
  hoverOffset: number;
}

export const Doghnut = ({ labels, datasets }: ChartProps) => {
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
      <Doughnut
        data={data}
        style={{ width: 430, height: 400 }}
        options={{
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 0,
              right: 10,
              bottom: 0,
              left: 10,
            },
          },
          plugins: {
            legend: {
              display: true,
              align: 'center',
              position: 'right',
              labels: {
                boxWidth: 10,
                font: {
                  size: 12,
                  family: 'Noto Sans CJK KR',
                  lineHeight: 14,
                  weight: 'bold',
                },
              },
            },
          },
        }}
      />
    </>
  );
};
