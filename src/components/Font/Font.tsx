import styled from "styled-components";
import fonts from "../../styles/font";

const Font = () => {
  return (
    <Container>
      <div className="hero">
        <Hero1>카페인이 좋아 80</Hero1>
        <Hero2>카페인이 좋아 60</Hero2>
        <Hero3>카페인이 좋아 36</Hero3>
      </div>

      <div className="headline">
        <Headline1>카페인이 좋아 28</Headline1>
        <Headline2>카페인이 좋아 24</Headline2>
        <Headline3>카페인이 좋아 20</Headline3>
        <Headline4>카페인이 좋아 20</Headline4>
      </div>

      <div className="body1">
        <BoldBody1>카페인이 좋아 15</BoldBody1>
        <MediumBody1>카페인이 좋아 15</MediumBody1>
        <RegularBody1>카페인이 좋아 15</RegularBody1>
      </div>

      <div className="body2">
        <BoldBody2>카페인이 좋아 13</BoldBody2>
        <RegularBody2>카페인이 좋아 13</RegularBody2>
      </div>

      <div className="caption">
        <MediumCaption>카페인이 좋아 11</MediumCaption>
        <RegularCaption>카페인이 좋아 11</RegularCaption>
      </div>
    </Container>
  );
};

export default Font;

const Container = styled.div`
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
