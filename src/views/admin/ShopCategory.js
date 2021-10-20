import React from "react";

// components

import CardShowCategory from "components/ShopManager/CardShowCategory";
import CardAddCategory from "components/ShopManager/CardAddCategory";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardAddCategory />
        </div>
        <div className="w-full mb-12 px-4">
          <CardShowCategory color="light" />
        </div>
      </div>
    </>
  );
}
