import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

// layouts

import Admin from "layouts/Admin";
import Auth from "layouts/Auth";

// views without layouts

import Login from "views/Viewer/Login";
import Signup from "views/Viewer/Signup";
import Home from "views/Viewer/Home/Home";
import NotFound from "components/NotFound/index";
import Category from "views/Viewer/Category/Category";
import Product from "views/Viewer/Product/Product";

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-200">
      <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} />

          {/* add routes without layouts */}
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/" exact component={Home} />
          <Route path="/category" exact component={Category} />
          <Route path="/product" exact component={Product} />
          <Route path="/notfound" exact component={NotFound} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
