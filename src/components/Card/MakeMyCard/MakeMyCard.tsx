import styled from "styled-components";
import fonts from "../../../styles/font";
import { IMakeMyCard } from "../../../types/makeMyCard.type";

const MakeMyCard = ({
  bgCard,
  bgDigram,
  brand,
  temperature,
  beans,
  coffee,
  bottle,
}: IMakeMyCard) => {
  return (
    <Container bgCard={bgCard}>
      <InputTitle type="text" placeholder="이름을 입력하세요" />

      <Dirgram bgDigram={bgDigram}>
        <img
          className="digram-thumbnail"
          src={bottle.thumbnail}
          alt={bottle.name}
        />
      </Dirgram>

      <div className="barnd col">
        <div className="name">{brand.name}</div>
        <p className="description">{brand.description}</p>
      </div>

      <div className="beans col">
        <div className="name">{beans.name}</div>
        <p className="description">{beans.description}</p>
      </div>

      <div className="bottle col">
        <div className="name">{bottle.name}</div>
        <p className="description">{bottle.description}</p>
      </div>

      <div className="coffee col">
        <div className="name">{coffee.name}</div>
        <p className="description">{coffee.description}</p>
      </div>

      <div className="temperature col">
        <div className="name">{temperature.name}</div>
        <p className="description">{temperature.description}</p>
      </div>
    </Container>
  );
};

export default MakeMyCard;

const Container = styled.div<{ bgCard: string }>`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 564px;
  height: 423px;
  background-image: ${(props) => `url(${props.bgCard})`};
  background-repeat: no-repeat;
  background-size: cover;

  .col {
    position: absolute;
  }

  p {
    margin: 0;
  }

  .barnd {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 102px;
    left: 229px;

    .name {
      margin-right: 10px;
    }

    .description {
      position: relative;
      top: 1px;
    }
  }

  .temperature {
    top: 177px;
    left: 37px;
    width: 131px;
    text-align: right;
  }

  .beans {
    top: 172px;
    right: 36px;
    width: 133px;
    text-align: left;
  }

  .coffee {
    bottom: 41px;
    left: 141px;
    width: 121px;
  }

  .bottle {
    bottom: 54px;
    right: 113px;
    width: 114px;
  }

  .name {
    ${fonts.Headline4}
    color: #614E32;
  }

  .description {
    ${fonts.MediumCaption}
  }
`;

const InputTitle = styled.input`
  width: 55%;
  margin-top: 50px;
  color: #5a2b81;
  outline: 0;
  border: 0;
  background: 0;
  background: linear-gradient(to top, #f5f2c2 50%, transparent 50%);

  ${fonts.Hero3}
  ::placeholder {
    color: #5a2b81;
  }
`;

const Dirgram = styled.figure<{ bgDigram: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 190px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-image: ${(props) => `url(${props.bgDigram})`};
  background-size: contain;
  background-repeat: no-repeat;

  .digram-thumbnail {
    width: 90px;
    height: 125px;
    margin-top: 10px;
    object-fit: contain;
  }
`;
