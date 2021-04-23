// Style
import styled from "styled-components";

const MenuItem = ({ item }) => {
  return (
    <StyledItem>
      <div className="top-container">
        <img src={item.itemImage} alt="" />
        <div className="container">
          <div className="desc">
            <div className="name-price">
              <h2>{item.item}</h2>
              <h3>${item.price}</h3>
            </div>
            <span>{item.ingred}</span>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <button>Add to Cart</button>
      </div>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  border-radius: 1em;
  border-style: solid;
  border-width: 0.1rem;
  border-color: #1b4332;
  margin: 0rem 1rem 2rem 1rem;
  padding: 0rem 0rem 2rem 0rem;

  .top-container {
    height: 8rem;
    width: 35rem;
    overflow: hidden;
    background: white;
    color: black;
    margin: 1rem 1rem 1rem 1rem;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: space-around;

    margin-bottom: 2rem;

    img {
      object-fit: cover;
      height: 100%;
      width: 30%;
      border: none;
    }

    .container {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: space-around;

      .desc {
        padding: 0rem;
        text-align: left;
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .name-price {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          h3 {
            font-size: 1.5rem;
            margin-right: 2rem;
          }
          h2 {
            line-height: 2rem;
          }
        }
      }
    }
  }

  .bottom-container {
    position: relative;
    margin-top: 2rem;
    button {
      width: 20%;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
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

  :hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.01);
  }
`;

export default MenuItem;
