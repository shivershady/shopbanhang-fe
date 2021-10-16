import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Home from "views/Home/Home";
import NotFound from "components/NotFound/index";
import Category from "views/Category/Category";
import Product from "views/Product/Product";
import Cart from "views/Cart/Cart";
import Order from "views/Order/Order";


function App() {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-200">
      <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} />

          {/* add routes without layouts */}    
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/order" exact component={Order} />
          <Route path="/category" exact component={Category} />
          <Route path="/product" exact component={Product} />
          <Route path="/notfound" exact component={NotFound} />
          <Redirect from="*" to="/notfound" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
