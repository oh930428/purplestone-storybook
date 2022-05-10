import React from 'react';
import styled from 'styled-components';

import font from '../../../styles/font';

export interface ProcessCardProps {
  title: string;
  tasteType: TasteTypeProps[];
}

export interface TasteTypeProps {
  id: number;
  name: string;
  thumbnail: string;
}

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
    ${font.Headline2}
    line-height: 32px;
    letter-spacing: -0.01em;
    color: #5a2b81;
  }
  .main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(90px, auto);
    grid-gap: 8px;

    .main-section {
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 2px;

      .main-thumbnail {
        img {
          width: 90px;
          height: 90px;
          background-color: #f5f5f5;
          box-sizing: border-box;
          border-radius: 50%;
          padding: 0.5rem;
          object-fit: contain;
          transition: opacity 0.3s linear;
        }
      }
      .main-title {
        white-space: pre;

        #tasteName {
          ${font.BoldBody2}
          opacity: 0;
          transition: opacity 0.5s linear;
        }
      }
    }
    .main-section:hover {
      .main-thumbnail img {
        opacity: 0.5;
      }
      .main-title #tasteName {
        opacity: 1;
      }
    }
  }
`;
