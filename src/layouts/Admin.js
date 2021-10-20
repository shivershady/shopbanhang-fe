import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import HeaderStats from "components/Headers/HeaderStats";
import FooterAdmin from "components/Footers/FooterAdmin";

// views

import Dashboard from "views/admin/Dashboard";
import ShopProfile from "views/admin/ShopProfile";
import ShopCategory from "views/admin/ShopCategory";

export default function Admin() {
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
            <Route path="/admin/shop-category" exact component={ShopCategory} />
            {/* <Route path="/admin/products-show" exact component={ProductShow} />
            <Route path="/admin/products-add" exact component={ProductAdd} />
            <Route path="/admin/orders-show" exact component={OrderShow} />
            <Route path="/admin/order-exit" exact component={OrderExit} />
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
