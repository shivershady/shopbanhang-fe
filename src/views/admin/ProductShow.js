import React from "react";

// components

import CardShowProduct from "components/ProductManagement/CardShowProduct";
import CardActionProduct from "components/ProductManagement/CardActionProduct";

export default function ProductShow() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <CardActionProduct/>
        </div>  
        <div className="w-full mb-12 px-4">
          <CardShowProduct />
        </div>
      </div>
    </>
  );
}
