// Style
import styled from "styled-components";

const MenuItem = ({ item }) => {
  return (
    <StyledItem>
      <img src={item.itemImage} alt="" />
      <div className="container">
        {" "}
        <div className="desc">
          <h2>{item.item}</h2>
          <span>{item.ingred}</span>
          <h3>{item.price}</h3>
        </div>
        <button>Add to Cart</button>
      </div>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  height: 10rem;
  width: 40rem;
  overflow: hidden;
  background: white;
  color: black;
  margin: 1rem 1rem 1rem 1rem;
  text-align: center;
  position: relative;
  border-radius: 1em;
  display: flex;
  justify-content: space-space-around;
  border-style: solid;
  border-width: 0.1rem;
  border-color: #1b4332;

  .container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;

    .desc {
      padding: 1rem;
      text-align: left;
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        margin-top: 1rem;
      }
    }

    button {
      width: 20%;
      margin-left: auto;
      margin-right: auto;
      background: #1b4332;
      border: none;
      border-radius: 20em;
      color: white;
      filter: greyscale(100%) opacity(0.7);
      text-decoration: none;
      padding: 0.8rem;
      margin-bottom: 0.5rem;
    }
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 30%;
    border: none;
  }

  :hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.01);
  }
`;

export default MenuItem;
