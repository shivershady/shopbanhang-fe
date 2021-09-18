import React  from 'react';
import './App.scss';
import Home from './views/Home';
import Product from './views/Product';
import Cart from './views/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/product">
            <Product />
          </Route>

          <Route path="/cart">
            <Cart/>
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
