// Dependencies
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <ul className="links">
        <li>
          <Link
            href="https://www.linkedin.com/in/andrejfernandez/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} size="1x" />
            <h4>LinkedIn</h4>
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/andrejfernandez"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} size="1x" />
            <h4>GitHub</h4>
          </Link>
        </li>
        <li>
          <Link
            href="https://docs.google.com/document/d/14-aQ_nnz-JT3YSia0JRIKoQNievQ9m06HaCpBddVD1Q/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGoogleDrive} size="1x" />
            <h4>Resume</h4>
          </Link>
        </li>
      </ul>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  left: 0;
  bottom: 0;
  position: absolute;
  padding: 0;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  background: transparent;
  .links {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    width: 25rem;
    height: 3rem;
    margin: auto;
    padding: 0.2rem;
    border-radius: 20em;
    background: #1b4332;

    li {
      a {
        padding: 0.5rem;
        display: flex;
        text-decoration: none;
        color: white;

        .icon {
          margin-right: 0.5em;
        }
        h4 {
          margin-top: -0.1rem;
        }
      }
    }
  }
  ul:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.1);
  }
`;

const Link = styled.a`
  :hover {
    .icon {
      //color: #fcfd01;
    }
    /* background: #161616;
    border-radius: 20em; */
  }
`;

export default Footer;
