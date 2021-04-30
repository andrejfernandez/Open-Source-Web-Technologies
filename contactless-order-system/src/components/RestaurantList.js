// Style
import styled from "styled-components";

// Components
import RestaurantCard from "./RestaurantCard";

// Data
import restaurantElements from "../data/restaurantElements";

const RestaurantList = ({
  restaurants,
  setRestaurants,
  currentRestaurant,
  setCurrentRestaurant,
}) => {
  return (
    <List>
      {restaurantElements.map((element) => {
        return (
          <RestaurantCard
            restaurant={element}
            id={element.id}
            name={element.name}
            location={element.location}
            restImage={element.restImage}
            restaurants={restaurants}
            setRestaurants={setRestaurants}
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

  .Active {
    color: red;
  }
`;

export default RestaurantList;
