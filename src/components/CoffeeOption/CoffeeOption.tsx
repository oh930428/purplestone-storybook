import styled, { css } from "styled-components";

export interface CoffeeOptionProps {
  bgCircle: string;
  bgCircleActive: string;
  name: string;
  thumbnail: CoffeeOptionIconsProps[];
  isSelected?: boolean;
}

export interface CoffeeOptionIconsProps {
  id: number;
  name: string;
  image: string;
}

export const CoffeeOption = ({
  bgCircle,
  bgCircleActive,
  thumbnail,
  isSelected = false,
}: CoffeeOptionProps) => {
  return (
    <Container bgCircle={bgCircle} bgCircleActive={bgCircleActive}>
      <ul className="list-container">
        {thumbnail.map((image, index) => (
          <li className={`list ${isSelected}`}>
            <img key={index} src={image.image} alt={image.name} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default CoffeeOption;

const Container = styled.div<{
  bgCircle: string;
  bgCircleActive: string;
}>`
  width: 100%;
  height: 100%;

  .list-container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .list {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    background-image: ${(props) => `url(${props.bgCircle})`};
    cursor: pointer;
    list-style: none;
  }

  .list.true {
    background-image: ${(props) => `url(${props.bgCircleActive})`};
  }

  img {
    height: 70px;
  }
`;
