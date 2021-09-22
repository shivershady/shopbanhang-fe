import React  from 'react';
import './App.scss';
import Home from './containers/Home';
import Product from './containers/Product';
import Cart from './containers/Cart';
import
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

          <Route path="/cart">
            <Cart/>
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
