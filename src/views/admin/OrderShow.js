import React from "react";

// components

import CardShowOrder from "components/OrderManagement/CardShowOrder";

export default function ProductShow() {
  return (
    <>
      <div className="flex flex-wrap mt-4"> 
        <div className="w-full mb-12 px-4">
          <CardShowOrder />
        </div>
      </div>
    </>
  );
}
