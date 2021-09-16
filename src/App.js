import React  from 'react';
import './App.scss';
import Home from './containers/Home';
import Product from './containers/Product'
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

          {/* <Route path="/users">
            <Users />
          </Route> */}

        </Switch>
      </Router>
  );
}

export default App;
