import React from "react";

// components

import CardShowProduct from "components/ProductManagement/CardShowProduct";

export default function ProductShow() {
  return (
    <>
      <div className="flex flex-wrap mt-4"> 
        <div className="w-full mb-12 px-4">
          <CardShowProduct />
        </div>
      </div>
    </>
  );
}
