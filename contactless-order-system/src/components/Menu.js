// Style
import styled from "styled-components";

// Components
import MenuItem from "./MenuItem";

const Menu = ({ currentRestaurant, cart, setCart, total, setTotal }) => {
  return (
    <List>
      {currentRestaurant.menu.map((item) => {
        return (
          <MenuItem
            item={item}
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />
        );
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
