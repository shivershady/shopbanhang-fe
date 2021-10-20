import React from "react";

// components

import CardShowProduct from "components/ShopManager/CardShowProduct";
import CardShopProfile from "components/ShopManager/CardShopProfile";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardShopProfile />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardShowProduct />
        </div>
      </div>
    </>
  );
}
