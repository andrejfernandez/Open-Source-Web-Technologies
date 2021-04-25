// Style
import styled from "styled-components";
import MenuItem from "./MenuItem";

const CheckoutItem = ({ item, cart, setCart }) => {
  return (
    <Container>
      <StyledItem>
        <h1>{item.item}</h1>
        <span>{item.price}</span>
      </StyledItem>
      <Line></Line>
    </Container>
  );
};

const Container = styled.div`
  height: 6rem;
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //margin: auto;
  padding: 0.1rem;
  span {
    font-size: 2rem;
  }
`;

const Line = styled.div`
  background: black;
  height: 0.1rem;
  width: 100%;
  margin: auto;
`;

export default CheckoutItem;
