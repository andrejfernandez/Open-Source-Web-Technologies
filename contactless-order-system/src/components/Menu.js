// Style
import styled from "styled-components";

// Components
import MenuItem from "./MenuItem";

// Animation
import { menuAnim } from "../animation";
import { motion } from "framer-motion";

const Menu = ({ currentRestaurant, cart, setCart, total, setTotal }) => {
  return (
    <List variants={menuAnim} initial="hidden" animate="show" exit="exit">
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

const List = styled(motion.div)`
  width: 90%;
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
