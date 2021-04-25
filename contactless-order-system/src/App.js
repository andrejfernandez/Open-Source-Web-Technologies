// Pages
import Home from "./pages/Home.js";
import Menu from "./pages/Menus.js";
import Checkout from "./pages/Checkout.js";

// Data
import data from "./data/restaurantElements";

// Components
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";

// Styles
import "./styles/global.css";

// Router
import { Switch, Route, useLocation } from "react-router-dom";

// Hooks
import { useState, useRef } from "react";

function App() {
  const location = useLocation();
  // State
  const [restaurants, setRestaurants] = useState(data);
  const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <Nav cart={cart} />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Menus" exact>
          <Menu
            restaurants={restaurants}
            setRestaurants={setRestaurants}
            currentRestaurant={currentRestaurant}
            setCurrentRestaurant={setCurrentRestaurant}
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />
        </Route>
        <Route path="/Checkout" exact>
          <Checkout
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
