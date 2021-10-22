import React from "react";
import PropTypes from "prop-types";
import Images from "constants/Images";


// components

import TabelDropdown from "components/Dropdowns/TabelDropdown.js";

export default function CardShowCategory({ color }) {
  return (
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg " +
          (color === "light" ? "bg-white" : "bg-blue-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blue-700" : "text-white")
                }
              >
                Bảng thẻ
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-50 text-gray-500 border-gray-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Tên danh mục
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-50 text-gray-500 border-gray-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Ngành hàng
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-50 text-gray-500 border-gray-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Sản phẩm
                </th>
                
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-50 text-gray-500 border-gray-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Trạng thái
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-50 text-gray-500 border-gray-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Người tạo
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-50 text-gray-500 border-gray-100"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-gray-600" : "text-white")
                    }
                  >
                    Category Name
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Quần áo
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  10
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-green-500 mr-2"></i>on
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src={Images.team_1_800x800}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-50 shadow"
                    ></img>
                    <img
                      src={Images.team_2_800x800}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={Images.team_3_800x800}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={Images.team_4_470x470}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TabelDropdown />
                </td>
              </tr>
              
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-gray-600" : "text-white")
                    }
                  >
                    Category Name
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Di động
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  10
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-red-500 mr-2"></i> off
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      src={Images.team_1_800x800}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-50 shadow"
                    ></img>
                    <img
                      src={Images.team_2_800x800}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={Images.team_3_800x800}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-50 shadow -ml-4"
                    ></img>
                    <img
                      src={Images.team_4_470x470}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-gray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TabelDropdown />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
}

CardShowCategory.defaultProps = {
  color: "light",
};

CardShowCategory.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
