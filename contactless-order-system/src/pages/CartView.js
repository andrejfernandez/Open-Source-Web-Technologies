// Style
import styled from "styled-components";

// Hooks
import { useState, useRef } from "react";

import { NavLink } from "react-router-dom";

// Components
import CheckoutItem from "../components/CheckoutItem.js";

// Animation
import { checkOutAnim, pageAnimation } from "../animation";
import { motion } from "framer-motion";

const CartView = ({ cart, setCart, total, setTotal }) => {
  return (
    <motion.div
      className="container"
      variants={checkOutAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <List>
        {cart.map((item) => {
          return <CheckoutItem item={item} cart={cart} setCart={setCart} />;
        })}
        <Total>
          <span>Subtotal </span>
          <h1> {total}</h1>
        </Total>
        <CheckoutButton>
          <NavLink to="/Checkout" activeClassName="Active" className="button">
            Proceed to Checkout{" "}
          </NavLink>
        </CheckoutButton>
      </List>
    </motion.div>
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

const CheckoutButton = styled.button`
  width: 25%;
  height: 4rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  padding: 1rem 1rem 1rem 1rem;
  background: #1b4332;
  border-radius: 20em;
  color: white;
  border: none;
  filter: greyscale(100%) opacity(0.7);
  text-decoration: none;
  :hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.1);
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: white;
    padding: 2rem;
  }
`;

export default CartView;
