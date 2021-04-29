// Style
import styled from "styled-components";

// Components
import MenuItem from "./MenuItem";

const Menu = ({ currentRestaurant, cart, setCart, total, setTotal }) => {
  return (
    <List>
      {/* <div className="container"> */}
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
      {/* </div> */}
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

  /* container {
    flex: 1;
    flex-basis: 50%;
  } */
`;
export default Menu;
