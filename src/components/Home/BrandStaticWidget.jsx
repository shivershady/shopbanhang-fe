import React from "react";

const productLisst = [
  {
    src: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg",
    name: "Điện thoại iphone 13",
    price: "12.000.000 vnđ",
  },
  {
    src: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg",
    name: "Điện thoại iphone 13",
    price: "12.000.000 vnđ",
  },
  {
    src: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg",
    name: "Điện thoại iphone 13",
    price: "12.000.000 vnđ",
  },
  {
    src: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg",
    name: "Điện thoại iphone 13",
    price: "12.000.000 vnđ",
  },
  {
    src: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg",
    name: "Điện thoại iphone 13",
    price: "12.000.000 vnđ",
  },
  {
    src: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg",
    name: "Điện thoại iphone 13",
    price: "12.000.000 vnđ",
  },
  {
    src: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg",
    name: "Điện thoại iphone 13",
    price: "12.000.000 vnđ",
  },
  {
    src: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg",
    name: "Điện thoại iphone 13",
    price: "12.000.000 vnđ",
  },
  {
    src: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg",
    name: "Điện thoại iphone 13",
    price: "12.000.000 vnđ",
  },
  {
    src: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg",
    name: "Điện thoại iphone 13",
    price: "12.000.000 vnđ",
  },
];

function BrandStaticWidget() {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white px-8 py-4">
      <b>Thương hiệu chính hãng</b>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-5 text-center">
      {productLisst.map((item, index) => {
        return (
            <div key={index} className="border border-gray-300 rounded-xl p-4 h-full w-full shadow-md cursor-pointer">
              <img src={item.src} alt="" />
              <div className="flex flex-col justify-end items-center text-center">
                <p className="text-xl font-bold">{item.name}</p>
                <p className="text-red-500 text-base font-normal">
                  {item.price}
                </p>
              </div>
            </div>
        );
      })}
      </div>
    </div>
  );
}

export default BrandStaticWidget;
