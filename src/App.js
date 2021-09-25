import React from "react";
import "./App.scss";
import Home from "./views/Home/Home";
import Product from "./views/Product/Product";
import Cart from "./views/Cart/Cart";
import Category from "./views/Category/Category";
import Order from "./views/Order/Order";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/index";

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-200">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/product">
            <Product />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/category">
            <Category />
          </Route>

          <Route path="/order">
            <Order />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
