import React from "react";

// components

import CardShopSettings from "components/ShopManager/CardShopSettings.js";
import CardShopProfile from "components/ShopManager/CardShopProfile.js";

export default function ShopProfile({user}) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardShopSettings user={user}/>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardShopProfile user={user}/>
        </div>
      </div>
    </>
  );
}
