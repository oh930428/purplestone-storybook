import React from 'react';
import styled from 'styled-components';

export interface ColorCardProps {
  cardColor: string;
  cardBorder?: boolean;
  colorTitle: string;
  colorValue: string;
  useColor: string;
}

export const ColorCard = ({
  cardColor,
  cardBorder,
  colorTitle,
  colorValue,
  useColor,
}: ColorCardProps) => {
  return (
    <Container
      bgColor={colorValue}
      cardColor={cardColor}
      cardBorder={cardBorder}
    >
      <div className="title">{colorTitle}</div>
      <div className="value">{colorValue}</div>
      <div className="color">{useColor}</div>
    </Container>
  );
};

const Container = styled.div<{
  bgColor: string;
  cardColor: string;
  cardBorder?: boolean;
}>`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-columns: minmax(200px, auto);
  grid-gap: 2px;
  background-color: ${(props) => props.bgColor};
  border: ${(props) => (props.cardBorder ? '1px solid #DDDDDD' : 'none')};
  border-radius: 0.5rem;
  padding: 1rem;

  .title {
    color: ${(props) => props.cardColor};
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -1%;
  }
  .value,
  .color {
    color: ${(props) => props.cardColor};
    opacity: 0.6;
    font-size: 16px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -1%;
  }
`;
