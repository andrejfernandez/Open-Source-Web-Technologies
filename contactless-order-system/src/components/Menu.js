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
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  margin: auto;
`;
export default Menu;
