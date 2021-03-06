import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../../styles';
import { HeaderProps } from '../../types/header.type';

export const Header = ({ title, subTitle, textAlign }: HeaderProps) => {
  return (
    <Container textAlign={textAlign}>
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="subtitle">
        <span>{subTitle}</span>
      </div>
    </Container>
  );
};

const Container = styled.div<{ textAlign?: string }>`
  display: flex;
  gap: 7px;
  flex-flow: column;
  align-items: ${(props) => (props.textAlign ? props.textAlign : 'center')};

  .title {
    display: flex;
    align-items: flex-end;

    span {
      ${fonts.Hero2}
      line-height: 80px;
      color: ${colors.Primary_01};
      letter-spacing: -0.01em;
      background: linear-gradient(
        to top,
        ${colors.Secondary_03} 40%,
        transparent 50%
      );
    }
  }

  .subtitle {
    span {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      letter-spacing: -0.01em;
      color: ${colors.Secondary_01};
    }
  }
`;
