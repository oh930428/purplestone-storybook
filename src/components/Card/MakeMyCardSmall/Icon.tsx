import React from 'react';
import styled from 'styled-components';

export interface TasteIconProps {
  brandIcon: string;
  beanIcon: string;
  syrupIcon: string;
  dayTimeIcon: string;
  temperatureIcon: string;
}

export const Icons = ({
  brandIcon,
  beanIcon,
  syrupIcon,
  dayTimeIcon,
  temperatureIcon,
}: TasteIconProps) => {
  return (
    <Container>
      <div className="icon">
        <img src={brandIcon} alt="Brand Icon" />
      </div>
      <div className="icon">
        <img src={beanIcon} alt="Bean Icon" />
      </div>
      <div className="icon">
        <img src={syrupIcon} alt="Syrup Icon" />
      </div>
      <div className="icon">
        <img src={dayTimeIcon} alt="DayTime Icon" />
      </div>
      <div className="icon">
        <img src={temperatureIcon} alt="Temperature Icon" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-columns: minmax(48px, auto);
  grid-gap: 5px;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 9px;

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
