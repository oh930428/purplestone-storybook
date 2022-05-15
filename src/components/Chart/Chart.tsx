import React from 'react';
import styled from 'styled-components';

import { ChartProps } from '../../types/chart.type';
import { Header } from '../Header/Header';
import { Doghnut } from './Doghnut';

export const Chart = ({ labels, datasets }: ChartProps) => {
  return (
    <Container>
      <div className="header">
        <Header
          title="The Most Popular."
          subTitle="다른 사람들은 취향을 가지고 있을까요?"
        />
      </div>
      <div className="main">
        <div className="main-section">
          <Doghnut labels={labels} datasets={datasets} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  max-width: 960px;
  gap: 40px;

  .main {
    display: flex;
    justify-content: space-around;
    gap: 30px;

    .main-section {
      padding: 1rem;
    }
  }
`;
