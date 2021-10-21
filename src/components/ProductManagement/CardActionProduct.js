import React from "react";
import PropTypes from "prop-types";
import Images from "constants/Images";


// components

import TabelDropdown from "components/Dropdowns/TabelDropdown.js";

export default function CardActionProduct({ color }) {
  return (
      <div
        className={
          "flex justify-between min-w-0 break-words w-full px-8 py-10 shadow-lg rounded-lg " +
          (color === "light" ? "bg-white" : "bg-blue-700 text-white")
        }
      >
          <button  className="inline-flex items-center justify-center border rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-blue-200 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">Thêm sản phẩm</button>
          <form className="flex w-48 flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blue-300   bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </form>
      </div>
  );
}

CardActionProduct.defaultProps = {
  color: "light",
};

CardActionProduct.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
