// Pages
import Home from "./pages/Home.js";
import Menu from "./pages/Menus.js";
import Checkout from "./pages/Checkout.js";

// Components
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";

// Styles
import "./styles/global.css";

// Router
import { Switch, Route, useLocation } from "react-router-dom";

// State
import { useState, useRef } from "react";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Menus" exact>
          <Menu />
        </Route>
        <Route path="/Checkout" exact>
          <Checkout />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
