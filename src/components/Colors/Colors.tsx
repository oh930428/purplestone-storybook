import React from 'react';
import styled from 'styled-components';
import { ColorCard, ColorCardProps } from './ColorCard';

export interface ColorsProps {
  bgImage: string;
  title: string;
  subTitle: string;
  colorCardList: ColorCardProps[];
}

export const Colors = ({ title, subTitle, colorCardList }: ColorsProps) => {
  return (
    <Container>
      <div className="header">
        <h1>Color System</h1>
      </div>
      <hr />
      <div className="main">
        <div className="main-title">
          <div className="title">{title}</div>
          <div className="subtitle">{subTitle}</div>
        </div>
        <div className="main-section">
          {colorCardList.map((color: ColorCardProps) => (
            <ColorCard
              cardColor={color.cardColor}
              cardBorder={color?.cardBorder}
              colorTitle={color.colorTitle}
              colorValue={color.colorValue}
              useColor={color.useColor}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .header {
    margin: 2rem;
    h1 {
      margin: 0px;
      font-size: 72px;
      line-height: 98px;
      letter-spacing: -0.01em;
    }
  }
  hr {
    margin: 1rem;
    opacity: 0.2;
  }
  .main {
    display: flex;
    flex-flow: column;
    gap: 20px;
    margin: 2rem;

    .main-title {
      .title {
        font-size: 40px;
        font-weight: 700;
        line-height: 54.48px;
        letter-spacing: -1%;
      }
      .subtitle {
        color: #888888;
        font-size: 15px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: -1%;
      }
    }

    .main-section {
      display: flex;
      gap: 20px;
    }
  }
`;
