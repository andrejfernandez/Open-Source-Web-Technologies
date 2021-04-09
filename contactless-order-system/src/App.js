// Pages
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Checkout from "./pages/Checkout.js";

// Components
import Nav from "./components/Nav.js";

// Styles
import "./styles/global.css";

// Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Menu" exact>
          <Menu />
        </Route>
        <Route path="/Checkout" exact>
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
