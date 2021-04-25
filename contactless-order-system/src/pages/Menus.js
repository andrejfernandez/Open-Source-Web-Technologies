// Components
import RestaurantList from "../components/RestaurantList";
import Menu from "../components/Menu";

// Style
import styled from "styled-components";

// Data
import restaurantElements from "../data/restaurantElements";

// Hooks
import { useState, useRef } from "react";

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
    <StyledMenus>
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

const StyledMenus = styled.div``;

export default Menus;
