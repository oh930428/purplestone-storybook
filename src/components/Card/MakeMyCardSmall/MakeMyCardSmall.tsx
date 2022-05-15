import React from 'react';
import styled from 'styled-components';

import { MakeMyCardSmallProps } from '../../../types/makeMyCardSmall.type';
import { Icons } from './Icon';

export const MakeMyCardSmall = ({
  bgCard,
  bgDigram,
  userName,
  tasteIcon,
  tasteDigram,
}: MakeMyCardSmallProps) => {
  return (
    <Container bgCard={bgCard}>
      <Card>
        <div className="header">
          <div className="header-title">
            <span>{userName}</span>님의 &nbsp;&nbsp;<span>커피 취향</span>
          </div>
          <div className="header-section">
            <Icons
              brandIcon={tasteIcon.brandIcon}
              beanIcon={tasteIcon.beanIcon}
              coffeeTypeIcon={tasteIcon.coffeeTypeIcon}
              bottleIcon={tasteIcon.bottleIcon}
              temperatureIcon={tasteIcon.temperatureIcon}
            />
          </div>
        </div>
        <div className="main">
          <ul>
            <li className="brand">{tasteDigram.brandName}</li>
            <li className="bean">{tasteDigram.beanName}</li>
            <li className="coffeetype">{tasteDigram.coffeeTypeName}</li>
            <li className="bottle">{tasteDigram.bottleName}</li>
            <li className="temperature">{tasteDigram.temperature}</li>
          </ul>
          <div className="main-section">
            <img src={bgDigram} alt="커피 취향 다이어그램" />
          </div>
        </div>
      </Card>
    </Container>
  );
};

const Container = styled.div<{ bgCard: string }>`
  width: 320px;
  height: 390px;
  background-image: ${(props) => `url(${props.bgCard})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 23px 23px 8px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
`;

const Card = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;

  .header {
    display: flex;
    flex-flow: column;
    gap: 20px;

    .header-title {
      text-align: center;
      letter-spacing: -0.01em;
      line-height: 32px;
      span {
        font-size: 24px;
        font-weight: 700;
        background: linear-gradient(to top, #f5f2c1 50%, transparent 50%);
      }
    }
  }

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 2rem;
    box-sizing: border-box;

    ul {
      position: absolute;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        position: absolute;
        list-style: none;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
        line-height: 21px;
        font-weight: 700;
        padding-inline: 14px;
        letter-spacing: -0.01em;
      }
      .brand {
        top: 6%;
        left: 27%;
      }
      .bean {
        top: 33%;
        right: -1%;
      }
      .bottle {
        bottom: 8%;
        right: 8%;
      }
      .coffeetype {
        bottom: 8%;
        left: 13%;
      }
      .temperature {
        top: 34%;
        left: 2%;
      }
    }
  }
`;
