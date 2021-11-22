import React, { useEffect, useState } from "react";

// components

import CardAddProduct from "components/ProductManagement/CardAddProduct";
import { getCategory } from "services/categorySevice";
import { useNotification } from "Notifications/NotificationProvider";

export default function ProductAdd({user}) {
  const [categories, setCategories] = useState([]);
  const dispatch = useNotification();
  useEffect( async () => {
    await getCategory().then((response)=>{
      setCategories(response.data);
    }).catch((error) => {
      dispatch({
        type: "error",
        message: error,
      })
    })
  },[])
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <CardAddProduct categories={categories} user={user}/>
      </div>
    </>
  );
}
