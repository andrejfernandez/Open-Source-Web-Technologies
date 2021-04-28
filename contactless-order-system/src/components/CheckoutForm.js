// EmailJs
import emailjs from "emailjs-com";

// Style
import styled from "styled-components";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_43djgar",
      "template_tz5ilpf",
      e.target,
      "user_V4FljNqzoczL9fpBp5euh"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

const ContactMe = () => {
  return (
    <Form onSubmit={sendEmail}>
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
      </div>
      <div className="send">
        <button type="submit" value="Send">
          <h2>Place Order</h2>
        </button>
      </div>
    </Form>
  );
};

const Form = styled.form`
  width: 80%;
  margin: auto;
  //margin-top: 5rem;

  h1 {
    text-align: center;
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
    :focus {
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

export default ContactMe;
