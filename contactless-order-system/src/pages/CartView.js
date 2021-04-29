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

const CartView = ({
  cart,
  setCart,
  total,
  setTotal,
  currentRestaurant,
  setCurrentRestaurant,
}) => {
  if (cart.length == 0) {
    return (
      <Error>
        <h1>Oh no!</h1>
        <h2>Nothing in your cart!</h2>
      </Error>
    );
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
          <div className="title1">
            <img src={currentRestaurant.restImage} alt="" />
            <div className="name-loc">
              <h2>{currentRestaurant.location}</h2>
            </div>
          </div>

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
        {/* <Line></Line> */}
        <StyledForm>
          <CheckoutForm
            total={total}
            cart={cart}
            currentRestaurant={currentRestaurant}
          />
        </StyledForm>
      </Container>
    );
  }
};

const Error = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-top: 5rem;
  color: #1b4332;
`;

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin: 5rem 3rem 1rem 3rem;
  padding: 0rem;
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
  .title1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding-bottom: 1rem;
    h1 {
      margin-top: auto;
      //margin-bottom: auto;
      padding-right: 1rem;
      padding-bottom: 0.5rem;
      font-size: 3rem;
      text-align: center;
    }
    img {
      margin: auto;
      object-fit: scale-down;
      height: 8rem;
      width: 17rem;
      border: none;
    }
    .name-loc {
      margin-top: 1rem;
      text-align: center;
    }
    width: 80%;
    margin: auto;
    margin-bottom: 0.2rem;
  }

  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  //margin: 2rem;
  //margin: auto;
  margin-bottom: auto;
`;

const StyledForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem;
  margin: auto;
`;

// const Line = styled.div`
//   height: 100%;
//   width: 10%;
//   background: black;
// `;
export default CartView;
