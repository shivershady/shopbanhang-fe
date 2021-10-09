import React, { useState, useEffect } from "react";
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
import Login from "./views/Login";
import productApi from "./services/productApi";
import Signup from "./views/Signup";
import Profile from "./views/Profile";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getData();
        console.log(response);
      } catch (error) {
        console.log("Thêm thất bại", error);
      }
    };
    fetchProductList();
  }, []);

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
