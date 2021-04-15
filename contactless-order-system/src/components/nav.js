// Dependencies
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <StyledNav>
      <div className="container">
        <NavLink to="/" className="logo">
          <h1 className="logo">OnTheGo</h1>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/Contact" activeClassName="Active" className="button">
              <div className="content-wrapper">
                <FontAwesomeIcon
                  className="icon"
                  icon={faShoppingCart}
                  size="1x"
                />
                <h4>Cart</h4>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Home" activeClassName="Active" className="button">
              <div className="content-wrapper">
                <FontAwesomeIcon className="icon" icon={faUtensils} size="1x" />
                <h4>Menus</h4>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

// Styling
const StyledNav = styled.nav`
  min-height: 5vh;
  //display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem;
  background: #52b788;
  transition: 200ms ease;

  .logo {
    background: transparent;
    text-decoration: none;
    h1 {
      font-size: 2rem;
      background: transparent;
      padding-left: 2rem;
      padding-top: 0.2rem;
      font-family: "Satisfy", cursive;
      color: #1b4332;
    }
  }
  .container {
    display: flex;
    background: transparent;
    justify-content: space-between;
  }
  ul {
    background: transparent;
    width: 70%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: right;
    list-style: none;
    margin: right;
    padding-right: 2rem;
  }
  li {
    background: transparent;
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
  }
  li .button {
    background: #2d6a4f;
    border-radius: 20em;
    color: white;
    filter: greyscale(100%) opacity(0.7);
    text-decoration: none;
    display: flex;
    padding: 16px 16px;
  }
  .content-wrapper {
    background: transparent;
    display: flex;
    .icon {
      margin-right: 0.5em;
      background: transparent;
    }
    h4 {
      background: transparent;
    }
  }
  li:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.1);
    a {
      background: #1b4332;
      border-radius: 20em;
    }
  }
  // Active classes
  .Active {
    background: #1b4332;
    border-radius: 20em;
    .icon {
      //color: #d8f3dc;
    }
  }
  @media only screen and (max-width: 1250px) {
    h4 {
      // display: none;
    }
  }
`;

export default Nav;
