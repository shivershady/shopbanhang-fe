import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/index";
import Cart from "./views/Cart/Cart";
import Category from "./views/Category/Category";
import Home from "./views/Home/Home";
import Login from "./views/Login";
import Order from "./views/Order/Order";
import Product from "./views/Product/Product";
import Profile from "./views/Profile";
import Signup from "./views/Signup";


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

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/profile">
            <Profile />
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
