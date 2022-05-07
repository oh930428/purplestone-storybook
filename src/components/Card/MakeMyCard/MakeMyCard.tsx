import styled from "styled-components";

const MakeMyCard = () => {
  return (
    <Container>
      <input type="text" placeholder="이름을 입력하세요" />
    </Container>
  );
};

export default MakeMyCard;

const Container = styled.div`
  width: 500px;
  height: 500px;
`;
