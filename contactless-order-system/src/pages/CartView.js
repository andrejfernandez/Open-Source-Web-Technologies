// Style
import styled from "styled-components";

// Hooks
import { useState, useRef } from "react";

import { NavLink } from "react-router-dom";

// Components
import CheckoutItem from "../components/CheckoutItem.js";
import CheckoutForm from "../components/CheckoutForm.js";

// Animation
import { checkOutAnim, pageAnimation } from "../animation";
import { motion } from "framer-motion";

const CartView = ({ cart, setCart, total, setTotal }) => {
  if (cart.length == 0) {
    return <h1>Nothing in your cart!</h1>;
  } else {
    return (
      <Container
        className="container"
        variants={checkOutAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <StyledCart>
          {cart.map((item) => {
            return (
              <CheckoutItem
                item={item}
                cart={cart}
                setCart={setCart}
                total={total}
                setTotal={setTotal}
              />
            );
          })}
          <Total>
            <span>Subtotal </span>
            <h2>{total}</h2>
          </Total>
          <Total>
            <span>Total </span>
            <h2> {Math.round((total + total * 0.06) * 100) / 100}</h2>
          </Total>
        </StyledCart>
        <StyledForm>
          <CheckoutForm />
        </StyledForm>
      </Container>
    );
  }
};

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem 0rem 2rem;
  padding: 2rem;
`;

const Total = styled.div`
  width: 80%;
  margin: 1rem auto 0rem auto;
  display: flex;
  span {
    font-size: 1.6rem;
    margin-right: 1rem;
    margin-left: auto;
  }
`;

const StyledCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  //margin: 2rem;
  //margin: auto;
  margin-bottom: auto;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem;
  margin: auto;
`;

export default CartView;
