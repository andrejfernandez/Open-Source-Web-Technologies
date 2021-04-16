// Components
import RestaurantList from "../components/RestaurantList";

// Style
import styled from "styled-components";

// Data
import restaurantElements from "../data/restaurantElements";

// Hooks
import { useState, useRef } from "react";

const Menus = () => {
  // State
  const [currentRestaurant, setCurrentRestaurant] = useState(
    restaurantElements[0]
  );
  return (
    <StyledMenus>
      <RestaurantList
        currentRestaurant={currentRestaurant}
        setCurrentRestaurant={setCurrentRestaurant}
      />
    </StyledMenus>
  );
};

const StyledMenus = styled.div``;

export default Menus;
