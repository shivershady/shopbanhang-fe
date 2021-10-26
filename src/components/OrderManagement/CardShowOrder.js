import Images from "constants/Images";
import React from "react";

const products = [
  {
    id: 1,
    name: "Bình đất",
    href: "#",
    price: "48.000 vnđ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Chai sứ mảnh mai cao với phần thân bằng đất sét tự nhiên và nút chai.",
  },
  {
    id: 2,
    name: "Bình bầu dục",
    href: "#",
    price: "35.000 vnđ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Chai cách nhiệt màu xanh lá cây ô liu có nắp vặn loe và phần trên bằng phẳng.",
  },
  {
    id: 3,
    name: "Giấy ghi chú",
    href: "#",
    price: "89.000 vnđ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Người dùng bút để gạch ngang một nhiệm vụ trên thẻ giấy năng suất.",
  },
  {
    id: 4,
    name: "Bút chì cơ khí được gia công",
    href: "#",
    price: "35.000 vnđ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Tay cầm bút chì cơ bằng thép gia công màu đen với đầu và đỉnh bằng đồng.",
  },
  // More products...
];

export default function CardShowOrder() {
  return (
    <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3 bg-white">
      <div className="flex justify-between min-w-0 break-words w-full mb-1 px-8 py-10 shadow-sm ">
        <button className="inline-flex items-center justify-center border rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-blue-200 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          Giao hàng loạt
        </button>
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
      {/* Replace with your content */}
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-blue-700">Bảng thẻ</h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100">
                  Sản phẩm
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100">
                  Tổng đơn hàng
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 ">
                  Trạng thái
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500">
                  Vận chuyển
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={Images.bootstrap}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className=
                      "ml-3 font-bold text-gray-600"
                      
                  >
                    Argon Design System
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $2,500 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-yellow-500 mr-2"></i>Chờ lấy hàng
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
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <button className="border border-transparent rounded-md shadow-sm text-base  text-white bg-indigo-600 p-1  hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white  font-medium">Chuẩn bị hàng</button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      {/* /End replace */}
    </div>
  );
}
