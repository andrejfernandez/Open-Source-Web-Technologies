// Dependencies
import styled from "styled-components";
// Animation
import { pageAnimation, orderAnim, onTheGoAnim } from "../animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <StyledHome
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Intro>
        <div className="ContentWrapper">
          <motion.h3 variants={orderAnim}>
            <span>Takeout while you're</span>
          </motion.h3>
          <motion.h1 variants={onTheGoAnim}>OnTheGo</motion.h1>
        </div>
      </Intro>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  overflow: hidden;
`;

const Intro = styled(motion.div)`
  padding: 0;
  margin: 0;
  margin-top: 7rem;
  margin-bottom: 7rem;
  .ContentWrapper {
    width: 100%;
    text-align: center;
    h3 {
      font-size: 5em;
      color: #1b4332;
    }
    h1 {
      background: transparent;
      color: #1b4332;
      font-size: 11em;
      font-family: "Satisfy", cursive;
    }
  }
`;

export default Home;
