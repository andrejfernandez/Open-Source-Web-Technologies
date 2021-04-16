// Style
import styled from "styled-components";

// Components
import RestaurantCard from "./RestaurantCard";

// Data
import restaurantElements from "../data/restaurantElements";

const RestaurantList = ({ currentRestaurant, setCurrentRestaurant }) => {
  return (
    <List>
      {restaurantElements.map((element) => {
        return (
          <RestaurantCard
            name={element.name}
            location={element.location}
            restImage={element.restImage}
            currentRestaurant={currentRestaurant}
            setCurrentRestaurant={setCurrentRestaurant}
          />
        );
      })}
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem;
  background: #1b4332;
`;

export default RestaurantList;
