import React from 'react';
import styled from 'styled-components';

import font from '../../../styles/font';
import { ProcessCardProps } from '../../../types/processCard.type';

export const ProcessCard = ({ title, tasteType }: ProcessCardProps) => {
  return (
    <Container>
      <div className="header">{title}</div>
      <div className="main">
        {tasteType.map((taste) => (
          <div key={taste.id} className="main-section">
            <div className="main-thumbnail" data-value={taste.name}>
              <img src={taste.thumbnail} alt={taste.name} />
            </div>
            <div className="main-title">
              <span id="tasteName">{taste.name}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 10px;
  padding: 24px 20px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 400px;

  .header {
    margin-bottom: 7px;
    ${font.Headline2}
    line-height: 32px;
    letter-spacing: -0.01em;
    color: #5a2b81;
  }
  .main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(90px, auto);
    grid-gap: 15px;

    .main-section {
      display: flex;
      flex-flow: column;
      align-items: center;
      width: 118px;
      gap: 2px;
      cursor: pointer;

      .main-thumbnail {
        img {
          width: 90px;
          height: 90px;
          background-color: #f5f5f5;
          box-sizing: border-box;
          border-radius: 50%;
          padding: 0.5rem;
          object-fit: contain;
          transition: transform 0.1s linear;
        }
      }
      .main-title {
        #tasteName {
          font-family: 'Noto Sans CJK KR';
          font-weight: bold;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 0.02rem;
        }
      }
    }
    .main-section:hover {
      .main-thumbnail img {
        transform: scale(1.2);
      }
    }
  }
`;
