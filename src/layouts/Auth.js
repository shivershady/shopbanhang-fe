import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Footer from "components/Footers/Footer";
import Header from "components/Headers/Header";

// views
import Login from "views/Auth/Login";
import Signup from "views/Auth/Signup";
import Profile from "views/Auth/Profile";

export default function Auth() {
  return (
    <>
      <Header transparent />
      <main>
        <section className="relative w-full h-full py-8 min-h-screen">
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/signup" exact component={Signup} />
            <Route path="/auth/profile" exact component={Profile} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
        </section>
        <Footer absolute />
      </main>
    </>
  );
}
