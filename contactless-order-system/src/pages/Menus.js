// Components
import RestaurantList from "../components/RestaurantList";
import Menu from "../components/Menu";
import CartView from "./CartView.js";

// Style
import styled from "styled-components";

// Data
import restaurantElements from "../data/restaurantElements";

// Hooks
import { useState, useRef } from "react";

// Animation
import { checkOutAnim, pageAnimation } from "../animation";
import { motion } from "framer-motion";

const Menus = ({
  restaurants,
  setRestaurants,
  currentRestaurant,
  setCurrentRestaurant,
  cart,
  setCart,
  total,
  setTotal,
}) => {
  // State
  return (
    <StyledMenus
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <RestaurantList
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        currentRestaurant={currentRestaurant}
        setCurrentRestaurant={setCurrentRestaurant}
      />

      <Menu
        currentRestaurant={currentRestaurant}
        cart={cart}
        setCart={setCart}
        total={total}
        setTotal={setTotal}
      />
    </StyledMenus>
  );
};

const StyledMenus = styled(motion.div)``;

export default Menus;
