import React, { useEffect, useState } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { getUser } from "services/authService";

// components

import Footer from "components/Footers/Footer";
import Header from "components/Headers/Header";

// views
import Profile from "views/Auth/Profile";
import Cart from "views/Auth/Cart";
import Order from "views/Auth/Order";
import { useNotification } from "Notifications/NotificationProvider";

export default function Auth() {
  const [user, setUser] = useState({});
  const dispatch = useNotification();
  useEffect(async () => {
    await getUser().then((response)=>{
      setUser(response.user);
    }).catch((error) => {
      const err = error.response.data.message;
      dispatch({
        type: "error",
        message: err,
      })
    });
  }, []);
  return (
    <>
    <div>

      <Header />
      <main>
        <Switch>
          <Route path="/auth/profile" exact component={Profile} user={user} />
          <Route path="/auth/cart" exact component={Cart} />
          <Route path="/auth/order" exact component={Order} />
          <Redirect from="/auth" to="/auth/profile" />
        </Switch>
      </main>
      <Footer />
    </div>
    </>
  );
}
