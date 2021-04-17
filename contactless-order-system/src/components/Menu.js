// Style
import styled from "styled-components";

// Components
import MenuItem from "./MenuItem";

const Menu = ({ currentRestaurant }) => {
  return (
    <List>
      {currentRestaurant.menu.map((item) => {
        return <MenuItem item={item} />;
      })}
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  justify-content: space-around;
  padding: 0.5rem;
`;
export default Menu;
