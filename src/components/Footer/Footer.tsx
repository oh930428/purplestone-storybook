import fonts from "../../styles/font";
import styled from "styled-components";
import IconSocial from "../Icon/IconSocial";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <a href="/">PurpleStone</a>
        </Logo>

        <p>
          대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
          <br></br>
          <br></br>
          Copyright by (주)카페인. All right reserved.<br></br>
          이용약관 개인정보처리방침
        </p>

        <IconBox>
          <IconSocial name="facebook"></IconSocial>
          <IconSocial name="google"></IconSocial>
          <IconSocial name="instagram"></IconSocial>
        </IconBox>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 160px;
  background-color: #5a2b81;
  margin: 0;

  a {
    text-decoration: none;
  }
`;

const Logo = styled.h1`
  font-family: Noto Sans;
  font-size: 30px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: -0.05rem;
  margin-top: 26px;

  a {
    color: #fff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  max-width: 1080px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  p {
    ${fonts.RegularBody2}
    margin-right: 250px;
    color: #fff;
  }
`;

const IconBox = styled.div`
  display: flex;
  gap: 5px;
`;
