import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import HeaderStats from "components/Headers/HeaderStats";
import FooterAdmin from "components/Footers/FooterAdmin";

// views

import Dashboard from "views/admin/Dashboard";
import ShopProfile from "views/admin/ShopProfile";
import ProductShow from "views/admin/ProductShow";
import ProductAdd from "views/admin/ProductAdd";
import OrderShow from "views/admin/OrderShow";
import { useNotification } from "Notifications/NotificationProvider";
import { getUser } from "services/authService";
// import OrderExit from "views/admin/OrderExit";
// import OrderReturn from "views/admin/OrderReturn";
// import ShipManagement from "views/admin/ShipManagement";
// import ShipMethod from "views/admin/ShipMethod";
// import ShipSetting from "views/admin/ShipSetting";

export default function Admin() {
  const [user, setUser] = useState({});
  const dispatch = useNotification();
  useEffect(async () => {
    await getUser().then((response)=>{
      setUser(response.user[0]);
    }).catch((error) => {
      dispatch({
        type: "error",
        message: "Bạn chưa đăng nhập" + error,
      })
    });
  }, []);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 py-8 md:px-10 mx-auto w-full -m-24 bg-gray-100">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/shop-profile" exact component={ShopProfile} />
            <Route path="/admin/products-show" exact component={ProductShow} />
            <Route path="/admin/products-add" exact>
              <ProductAdd user={user}></ProductAdd>
            </Route>
            <Route path="/admin/orders-show" exact component={OrderShow} />
            {/* <Route path="/admin/order-exit" exact component={OrderExit} />
            <Route path="/admin/order-return" exact component={OrderReturn} />
            <Route path="/admin/ship-management" exact component={ShipManagement} />
            <Route path="/admin/ship-method" exact component={ShipMethod} />
            <Route path="/admin/ship-setting" exact component={ShipSetting} /> */}
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
