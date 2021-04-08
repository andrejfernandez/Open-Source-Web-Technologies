// Pages
import Menu from "./pages/Menu.js";
import Chekout from "./pages/Checkout.js";

// Styles
import "./styles/global.css";

// Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Switch location={location} key={location.pathname}>
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
