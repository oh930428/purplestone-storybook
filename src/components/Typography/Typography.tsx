import styled from "styled-components";
import fonts from "../../styles/font";

const Typography = () => {
  return (
    <Container>
      <Overview>
        <Title>Typography</Title>
        <div>
          - 같은 줄에 상이한 사이즈/두께/컬러를 혼합하여 사용하지 않는다.
        </div>
        <div>- 사이즈는 11, 13, 15, 20, 24, 28, 36, 60, 80으로 한정</div>
        <div>- 두께는 Regular, Medium, Bold 로 한정</div>
        <div>- 컬러 Basic은 #000000, #FFFFFF로 한정</div>
        <div>
          - 컬러 Gray Scale은 #212121, #616161, #888888, #CCCCCC, #EEEEEE,
          #F5F5F5로 한정
        </div>
        <div>- 컬러 Primary는 #5A2B81, #CECBEF로 한정</div>
        <div>- 컬러 Secondary는 #75372A, #F5EE84, #F5F2C2로 한정</div>
        <div>- 줄간격은 Auto</div>
        <div>- Spacing은 Auto</div>
        <div>- line height는 14px, 18px, 21px, 26px, 34px, 38px;</div>
      </Overview>

      <section className="contents">
        <Title>Contents</Title>
        <div className="hero">
          <Title2>1. Hero</Title2>
          <Hero1>카페인이 좋아 80</Hero1>
          <Hero2>카페인이 좋아 60</Hero2>
          <Hero3>카페인이 좋아 36</Hero3>
        </div>

        <div className="headline">
          <Title2>2. Headline</Title2>
          <Headline1>카페인이 좋아 28</Headline1>
          <Headline2>카페인이 좋아 24</Headline2>
          <Headline3>카페인이 좋아 20</Headline3>
          <Headline4>카페인이 좋아 18</Headline4>
        </div>

        <div className="body1">
          <Title2>3. Body1</Title2>
          <BoldBody1>카페인이 좋아 15</BoldBody1>
          <MediumBody1>카페인이 좋아 15</MediumBody1>
          <RegularBody1>카페인이 좋아 15</RegularBody1>
        </div>

        <div className="body2">
          <Title2>4. Body2</Title2>
          <BoldBody2>카페인이 좋아 13</BoldBody2>
          <RegularBody2>카페인이 좋아 13</RegularBody2>
        </div>
      </section>

      <section className="sub">
        <Title>Sub</Title>
        <div className="caption">
          <Title2>Caption</Title2>
          <MediumCaption>카페인이 좋아 11</MediumCaption>
          <RegularCaption>카페인이 좋아 11</RegularCaption>
        </div>
      </section>
    </Container>
  );
};

export default Typography;

const Container = styled.div`
  .contents,
  .sub {
    color: #333;
  }

  .hero {
    div {
      padding: 25px 0;
    }
  }

  .headline {
    div {
      padding: 5px 0;
    }
  }

  .body1 {
    div {
      padding: 5px 0;
    }
  }

  .body2 {
    div {
      padding: 5px 0;
    }
  }

  .caption {
    div {
      padding: 5px 0;
    }
  }
`;

const Overview = styled.div`
  h1 {
    padding-top: 0;
  }

  div {
    font-size: 14px;
    line-height: 21px;
    color: rgb(102, 102, 102);
  }
`;

const Title = styled.h1`
  padding: 40px 0px 4px;
  font: bold 40px/1.2 "arial";
  color: #222;
  border-bottom: 1px solid gray;
`;

const Title2 = styled.h2`
  color: #222;
  font: normal 28px/1.2 "arial";
`;

const Hero1 = styled.div`
  ${fonts.Hero1}
`;

const Hero2 = styled.div`
  ${fonts.Hero2}
`;

const Hero3 = styled.div`
  ${fonts.Hero2}
`;

const Headline1 = styled.div`
  ${fonts.Headline1}
`;

const Headline2 = styled.div`
  ${fonts.Headline2}
`;

const Headline3 = styled.div`
  ${fonts.Headline3}
`;

const Headline4 = styled.div`
  ${fonts.Headline4}
`;

const BoldBody1 = styled.div`
  ${fonts.BoldBody1}
`;

const MediumBody1 = styled.div`
  ${fonts.MediumBody1}
`;

const RegularBody1 = styled.div`
  ${fonts.RegularBody1}
`;

const BoldBody2 = styled.div`
  ${fonts.BoldBody2}
`;

const RegularBody2 = styled.div`
  ${fonts.RegularBody2}
`;

const MediumCaption = styled.div`
  ${fonts.MediumCaption}
`;

const RegularCaption = styled.div`
  ${fonts.MediumCaption}
`;
