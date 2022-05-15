import React from 'react';
import styled from 'styled-components';

import { fonts } from '../../../styles';
import { ProfileCardProps } from '../../../types/profileCard.type';
import IconSocial from '../../Icon/IconSocial';

export const ProfileCard = ({
  userName,
  descrition,
  thumbnail,
  iconSocials,
}: ProfileCardProps) => {
  return (
    <Container
      style={{
        backgroundImage: `url(${require('../../../assets/Images/bg-profile-card.png')})`,
      }}
    >
      <div className="header">
        <div className="header-thumbnail">
          <img src={thumbnail} alt={userName} />
        </div>
        <div className="header-title">
          <span>{userName}</span>
        </div>
      </div>
      <div className="main">
        <div
          className="main-section"
          dangerouslySetInnerHTML={{ __html: descrition }}
        ></div>
        <div className="main-socials">
          {iconSocials.map((icon) => (
            <IconSocial name={icon.name} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 8px;
  width: 278px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 20px 10px;

  .header {
    display: flex;
    flex-flow: column;
    gap: 8px;
    padding: 0px 49px;

    .header-thumbnail {
      width: 160px;
      height: 160px;
    }

    .header-title {
      text-align: center;
      span {
        ${fonts.Headline1}
        line-height: 32px;
        color: #614e32;
        letter-spacing: -0.01em;
      }
    }
  }

  .main {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 8px;
    padding: 0px 73px;

    .main-section {
      ${fonts.MediumBody1}
      text-align: center;
    }

    .main-socials {
      display: flex;
      gap: 8px;
    }
  }
`;
