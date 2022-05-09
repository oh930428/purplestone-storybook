import styled from "styled-components";
import { Button } from "../Button/Button";

const Navigation = () => {
  return (
    <Container>
      <Logo>
        <a href="/">PurpleStone</a>
      </Logo>

      <Nav>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/coffes">All Coffes</a>
        </li>
        <li className="nav-button-item">
          <a href="/mycard">
            <Button size="medium" label="Create My Card" isRegular></Button>
          </a>
        </li>
      </Nav>
    </Container>
  );
};

export default Navigation;

const Container = styled.header`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  a {
    text-decoration: none;
    outline: none;
    color: #5a2b81;
  }
`;

const Logo = styled.h1`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
  color: #5a2b81;
`;

const Nav = styled.nav`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;

  li {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    color: #5a2b81;

    .nav-button-item {
      font-weight: 400;
    }
  }
`;