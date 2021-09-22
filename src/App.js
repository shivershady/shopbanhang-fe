import React  from 'react';
import './App.scss';
import Home from './views/Home';
import Product from './views/Product';
import Cart from './views/Cart';
import AllCategories from './views/AllCategories';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Category from './views/Category';

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

          <Route path="/all_categories">
            <AllCategories />
          </Route>

          <Route path="/category">
            <Category/>
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
