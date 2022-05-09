import styled, { css } from "styled-components";
import fonts from "../../styles/font";

export interface ButtonProps {
  size: "medium" | "large";
  isRegular?: true | false;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  size = "medium",
  label,
  isRegular = false,
}: ButtonProps) => {
  return (
    <Container type="button" size={size} isRegular={isRegular}>
      <span className="button-text">{label}</span>
    </Container>
  );
};

const Container = styled.button<{ size: string; isRegular: boolean }>`
  position: relative;
  border-radius: 6px;
  background: 0;
  outline: 0;

  ${(props) =>
    props.size === "medium"
      ? css`
          width: 180px;
          height: 60px;
          border: 1px solid #212121;
        `
      : css`
          width: 244px;
          height: 85px;
          border: 1px solid #4f4f4f;
        `}

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transform: translate(10px, 10px);
    border-radius: 6px;
    background: #f5ee84;
    z-index: -1;
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: translate(0, 0);
  }

  .button-text {
    color: #5a2b81;

    ${(props) =>
      props.size === "medium"
        ? css`
            ${fonts.Headline4}
          `
        : css`
            font-family: "Noto Sans";
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 33px;
            letter-spacing: -0.01em;
            color: #474306;
          `}

    ${(props) =>
      props.isRegular &&
      css`
        font-weight: 400;
        font-family: Poppins;
      `}
  }
`;
