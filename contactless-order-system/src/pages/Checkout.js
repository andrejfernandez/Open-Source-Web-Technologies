// Style
import styled from "styled-components";

// Hooks
import { useState, useRef } from "react";

// Components
import CheckoutItem from "../components/CheckoutItem.js";

const Checkout = ({ cart, setCart, total, setTotal }) => {
  return (
    <div className="container">
      <List>
        {cart.map((item) => {
          return <CheckoutItem item={item} cart={cart} setCart={setCart} />;
        })}
        <Total>
          <span>Subtotal </span>
          <h1> {total}</h1>
        </Total>
      </List>
    </div>
  );
};

const Total = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  span {
    font-size: 2rem;
    margin-right: 1rem;
    margin-left: auto;
  }
`;

const List = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2rem;
  margin: auto;
`;

export default Checkout;
