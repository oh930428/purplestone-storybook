import React from 'react';
import styled from 'styled-components';

import font from '../../styles/font';
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
      ${font.Hero2}
      line-height: 80px;
      color: #5a2b81;
      letter-spacing: -0.01em;
      background: linear-gradient(to top, #f5f2c1 40%, transparent 50%);
    }
  }

  .subtitle {
    span {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      letter-spacing: -0.01em;
      color: #75372a;
    }
  }
`;
