import React from "react";

// components

import CardShopSettings from "components/ShopManager/CardShopSettings.js";
import CardShopProfile from "components/ShopManager/CardShopProfile.js";
import { useNotification } from "Notifications/NotificationProvider";
import { useState } from "react";
import { useEffect } from "react";
import { getShop } from "services/authService";

export default function ShopProfile({user}) {
  const [shop,setShop] = useState({});
  const dispatch = useNotification();
  useEffect(async () => {
    await getShop()
      .then((response) => {
        setShop(response[0]);
      })
      .catch((error) => {
        dispatch({
          type: "error",
          message: "Lấy thông tin thất bại" + error,
        });
      });
  }, []);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardShopSettings user={user} shop={shop}/>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardShopProfile user={user} shop={shop}/>
        </div>
      </div>
    </>
  );
}
