// EmailJs
import emailjs from "emailjs-com";

// Style
import styled from "styled-components";

// Animation
import { fadeAnim } from "../animation";
import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";

const CheckoutForm = ({
  total,
  cart,
  setCart,
  currentRestaurant,
  customer,
  setCustomer,
}) => {
  let history = useHistory();

  const redirect = () => {
    history.push("/Order-Successful");
  };

  const newCustomer = (e) => {
    const result = {
      name: e.target[0].value,
      email: e.target[2].value,
    };
    console.log(result);
    setCustomer(result);
  };

  function sendEmail(e) {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        "service_e4ucgis",
        "template_alohoxw",
        e.target,
        "user_V4FljNqzoczL9fpBp5euh"
      )
      .then(
        (result) => {
          console.log(result.text);
          redirect();
          newCustomer(e);
          setCart([]);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function prettyCart(cart) {
    let result = "| ";
    cart.forEach((element) => {
      result = result + "\n" + element.item + " - " + element.price + " | ";
    });
    console.log("Pretty cart: " + result);
    return result;
  }

  return (
    <Form variants={fadeAnim} initial="hidden" animate="show" exit="exit">
      <form classNme="Customer Info" onSubmit={sendEmail}>
        <h1>Customer Information</h1>
        <div className="name">
          <input
            type="text"
            className="first"
            id="first"
            name="user_first"
            placeholder="First"
          />
          <input
            type="text"
            className="last"
            name="user_last"
            placeholder="Last"
          />
        </div>
        <div className="contact">
          <input
            type="email"
            className="email"
            name="user_email"
            placeholder="Email"
          />
          <input
            type="tel"
            className="phone"
            name="user_phone"
            placeholder="Cell"
          />
        </div>
        <div className="payment">
          <input
            type="text"
            className="card"
            name="user_card"
            pattern="\d*"
            placeholder="Card Number"
            maxlength="16"
          />
          <input
            type="text"
            className="csc"
            name="user_csc"
            pattern="\d*"
            placeholder="CSC"
            maxlength="3"
          />
          <input
            type="text"
            className="exp"
            name="user_exp"
            placeholder="MM/YY"
            maxlength="5"
          />
          <input
            type="text"
            className="zip"
            name="user_zip"
            pattern="\d*"
            placeholder="Zip"
            maxlength="5"
          />
          <input
            type="text"
            className="hide"
            name="user_rest"
            value={currentRestaurant.name}
          />
          <input
            type="text"
            className="hide"
            name="user_cart"
            value={prettyCart(cart)}
          />
          <input
            type="text"
            className="hide"
            name="user_subtotal"
            value={total}
          />
          <input
            type="text"
            className="hide"
            name="user_total"
            value={Math.round((total + total * 0.06) * 100) / 100}
          />
        </div>
        <div className="send">
          <button type="submit">
            <h2>Place Order</h2>
          </button>
        </div>
      </form>
    </Form>
  );
};

const Form = styled(motion.div)`
  //  background-color: #d8f3dc;
  width: 80%;
  margin: auto;
  padding: 2rem;
  border-radius: 1em;
  border-style: solid;
  border-width: 0.15rem;
  border-color: #bdbdbd;

  :hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0.3rem 0.3rem rgba(92, 92, 92, 0.1);
  }
  //margin-top: 5rem;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  input {
    border: none;
    border-bottom: 0.15rem solid #1b4332;
    //border-width: 0.15rem;
    height: 2rem;
    //width: 25rem;
    padding: 0.5rem;
    font-size: 1.4rem;
    margin-bottom: 2rem;
    margin: 0.8rem;
    text-align: center;
    /* :hover {
      background-color: #d8f3dc;
    } */
    :focus {
      background-color: #d8f3dc;
    }
  }

  .name {
    display: flex;
    justify-content: center;
    .first {
      width: 50%;
    }
    .last {
      width: 50%;
    }
  }
  .contact {
    display: flex;
    justify-content: center;
    .email {
      width: 70%;
    }
    .phone {
      width: 30%;
    }
  }
  .payment {
    display: flex;
    justify-content: center;
    .card {
      width: 40%;
    }
    .csc {
      width: 20%;
    }
    .exp {
      width: 20%;
    }
    .zip {
      width: 20%;
    }

    .hide {
      display: none;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }

  .send {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    button {
      background-color: #1b4332;
      color: white;
      padding: 0.8rem 3rem 0.8rem 3rem;
      border-radius: 2em;
      border: none;
      :hover {
        transition: all 0.1s ease-in-out;
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
`;

export default CheckoutForm;
