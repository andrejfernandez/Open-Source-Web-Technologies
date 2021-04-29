// Style
import styled from "styled-components";

const MenuItem = ({ item, cart, setCart, total, setTotal }) => {
  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart);
    const num = total + item.price;
    const result = Math.round(num * 100) / 100;
    console.log("R = " + result);
    setTotal(result);
  };

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
        <button onClick={() => addToCart(item)}>
          <h2> Add to Cart</h2>
        </button>
      </div>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  border-radius: 1em;
  border-style: solid;
  border-width: 0.15rem;
  border-color: #bdbdbd;
  margin: 0rem 1rem 2rem 1rem;
  padding: 0rem 0rem 2rem 0rem;

  :hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0.2rem 0.2rem rgba(92, 92, 92, 0.1);
  }
  .top-container {
    height: 8rem;
    width: 35rem;
    overflow: hidden;
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
      border-radius: 1rem;
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
      :hover {
        cursor: pointer;
      }

      width: 30%;
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
      :active {
        background: #2d6a4f;
      }
    }
  }
`;

export default MenuItem;
