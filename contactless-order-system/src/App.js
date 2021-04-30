// Pages
import Home from "./pages/Home.js";
import Menu from "./pages/Menus.js";
import CartView from "./pages/CartView.js";
import Ordered from "./pages/Ordered.js";

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
  const [customer, setCustomer] = useState([]);

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
        <Route path="/CartView" exact>
          <CartView
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
            currentRestaurant={currentRestaurant}
            setCurrentRestaurant={setCurrentRestaurant}
            customer={customer}
            setCustomer={setCustomer}
          />
        </Route>
        <Route path="/Order-Successful" exact>
          <Ordered customer={customer} />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
