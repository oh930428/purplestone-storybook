import styled from "styled-components";

export interface CoffeeOptionProps {
  bgCircle: string;
  bgCircleActive: string;
  name: string;
  optionIcons: CoffeeOptionIconsProps;
}

export interface CoffeeOptionIconsProps {
  brandIcon: string;
  beanIcon: string;
  cupIcon: string;
  syrupIcon: string;
  dayTimeIcon: string;
  temperatureIcon: string;
}

export const CoffeeOption = ({
  bgCircle,
  bgCircleActive,
  name,
  optionIcons,
}: CoffeeOptionProps) => {
  return (
    <Container bgCircle={bgCircle} bgCircleActive={bgCircleActive}>
      {name === "brand" && (
        <img className="position-l" src={optionIcons.brandIcon} alt={name} />
      )}
      {name === "bean" && (
        <img className="position-l" src={optionIcons.beanIcon} alt={name} />
      )}
      {name === "cup" && (
        <img className="position-r" src={optionIcons.cupIcon} alt={name} />
      )}
      {name === "syrup" && (
        <img className="syrup-image" src={optionIcons.syrupIcon} alt={name} />
      )}
      {name === "dayTime" && <img src={optionIcons.dayTimeIcon} alt={name} />}
      {name === "temperature" && (
        <img
          className="position-r"
          src={optionIcons.temperatureIcon}
          alt={name}
        />
      )}
    </Container>
  );
};

export default CoffeeOption;

const Container = styled.div<{ bgCircle: string; bgCircleActive: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background-image: ${(props) => `url(${props.bgCircle})`};
  transition: background-image 0.2s ease;
  cursor: pointer;

  .position-l {
    position: relative;
    left: 2.5px;
  }

  .position-r {
    position: relative;
    right: 2.5px;
  }

  .syrup-image {
    width: 70px;
    height: 70px;
  }

  &:hover {
    background-image: ${(props) => `url(${props.bgCircleActive})`};
  }
`;
