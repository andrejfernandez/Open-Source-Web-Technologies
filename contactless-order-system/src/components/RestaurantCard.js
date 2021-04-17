// Style
import styled from "styled-components";

// Data
import restaurantElements from "../data/restaurantElements";

const RestaurantCard = ({
  restaurant,
  id,
  name,
  location,
  restImage,
  restaurants,
  setRestaurants,
  currentRestaurant,
  setCurrentRestaurant,
}) => {
  // Handler
  const currentRestaurantHandler = async () => {
    await setCurrentRestaurant(restaurant);
    // Add active state
    const newRestaurants = restaurants.map((element) => {
      if (element.id === id) {
        return {
          ...restaurant,
          active: true,
        };
      } else {
        return {
          ...restaurant,
          active: false,
        };
      }
    });
    setRestaurants(newRestaurants);
    // console.log(currentRestaurant);
  };

  return (
    <StyledCard onClick={currentRestaurantHandler}>
      <img src={restImage} alt="" />
      <div className="name-loc">
        <h2>{name}</h2>
        <h4>{location}</h4>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  height: 10rem;
  width: 18rem;
  overflow: hidden;
  background: white;
  color: black;
  margin: 1rem 1rem 1rem 1rem;
  text-align: center;
  position: relative;
  border-radius: 1em;

  img {
    object-fit: cover;
    height: 70%;
    width: 100%;
    border: none;
  }

  .name-loc {
    background: white;
    font-size: 0.8rem;
  }

  :hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.03);
  }
`;

export default RestaurantCard;
