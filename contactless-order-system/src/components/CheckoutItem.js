// Style
import styled from "styled-components";
import MenuItem from "./MenuItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CheckoutItem = ({ item, cart, setCart, total, setTotal }) => {
  const removeFromCart = (item) => {
    let array = [...cart];
    let index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
    setCart(array);

    let num = total - item.price;
    let result = Math.round(num * 100) / 100;
    setTotal(result);
  };

  return (
    <Container>
      <StyledItem>
        <span className="item">{item.item}</span>
        <span className="price">{item.price}</span>
        <h1 onClick={() => removeFromCart(item)}>X</h1>
      </StyledItem>
      <Line></Line>
    </Container>
  );
};

const Container = styled.div`
  height: 4rem;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.01);
  }
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //margin: auto;
  padding: 0.1rem;

  .item {
    font-size: 1.4rem;
    margin-top: auto;
    margin-bottom: auto;
  }
  .price {
    margin-left: auto;
    margin-right: 1rem;
    font-size: 1.4rem;
    margin-top: auto;
    margin-bottom: auto;
  }
  h1 {
    font-size: 1.4rem;
    padding: 0.5rem;
    :hover {
      transition: all 0.1s ease-in-out;
      transform: scale(1.1);
      // color: red;
      cursor: pointer;
    }
  }
`;

const DeleteButton = styled.button`
  padding: 0.5rem 0.5rem 0.5rem 1.3em;
  border-radius: 50%;
`;

const Line = styled.div`
  background: black;
  height: 0.1rem;
  width: 100%;
  margin: auto;
`;

export default CheckoutItem;
