import styled from "styled-components";
import fonts from "../../../styles/font";
import { IMakeMyCard } from "../../../types/makeMyCard.type";

const MakeMyCard = ({
  brand,
  temperature,
  beans,
  time,
  syrup,
}: IMakeMyCard) => {
  return (
    <Container
      style={{
        backgroundImage: `url(${require("../../../assets/images/bg-card.png")})`,
      }}
    >
      <InputTitle type="text" placeholder="이름을 입력하세요" />

      <Dirgram>
        <img
          src={require("../../../assets/images/bg-digram.png")}
          alt="다이어그램 이미지"
        />

        <figure className="brand-thumbnail">
          <img src={brand.thumbnail} alt="브랜드 이미지" />
        </figure>

        <figure className="temperature-thumbnail">
          <img src={temperature.thumbnail} alt="온도 이미지" />
        </figure>

        <figure className="time-thumbnail">
          <img src={time.thumbnail} alt="시간 이미지" />
        </figure>
      </Dirgram>

      <div className="barnd">
        <div className="name">{brand.name}</div>
        <div className="description">{brand.description}</div>
      </div>

      <div className="temperature">
        <div className="name">{temperature.name}</div>
        <div className="description">{temperature.description}</div>
      </div>

      <div className="beans">
        <div className="name">{beans.name}</div>
        <div className="description">{beans.description}</div>
      </div>

      <div className="time">
        <div className="name">{time.name}</div>
        <div className="description">{time.description}</div>
      </div>

      <div className="syrup">
        <div className="name">{syrup.name}</div>
        <div className="description">{syrup.description}</div>
      </div>
    </Container>
  );
};

export default MakeMyCard;

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 564px;
  height: 423px;
  background-repeat: no-repeat;
  background-size: cover;

  .barnd {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 103px;
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
    position: absolute;
    top: 177px;
    left: 42px;
    width: 131px;
    text-align: right;
  }

  .beans {
    position: absolute;
    top: 177px;
    right: 42px;
    width: 133px;
    text-align: left;
  }

  .time {
    width: 150px;
    position: absolute;
    bottom: 47px;
    left: 134px;
    width: 102px;
  }

  .syrup {
    width: 150px;
    position: absolute;
    bottom: 47px;
    right: 134px;
    width: 102px;
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

const Dirgram = styled.figure`
  width: 200px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  figure {
    position: absolute;
    margin: 0;
    padding: 0;
  }

  .brand-thumbnail {
    top: 27%;
    left: 27%;
    z-index: 100;
    width: 85px;
  }

  .temperature-thumbnail {
    top: 36%;
    left: 17%;
    width: 42px;
  }

  .time-thumbnail {
    top: 66%;
    left: 29%;
    width: 37px;
  }
`;
