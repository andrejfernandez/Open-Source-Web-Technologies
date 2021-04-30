// Style
import styled from "styled-components";

// Animation
import { restListAnim } from "../animation";
import { motion } from "framer-motion";

const Ordered = ({ customer }) => {
  return (
    <Confirmation>
      <div className="top">
        <h1>Thanks for choosing </h1>
        <h1 id="logo">OnTheGo, </h1>
        <h1>{customer.name}!</h1>
      </div>
      <span>Your order confirmation has been sent to</span>
      <h3>{customer.email}</h3>
    </Confirmation>
  );
};

const Confirmation = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-top: 5rem;
  color: #1b4332;
  .top {
    display: flex;
    justify-content: center;
    margin: auto;
    h1 {
      margin: 0rem 0.8rem 1rem 0.8rem;
    }
    #logo {
      font-family: "Satisfy", cursive;
      font-size: 4rem;
    }
  }
  span {
    padding-bottom: 3rem;
  }
  h3 {
    margin-top: 1rem;
  }
`;

export default Ordered;
