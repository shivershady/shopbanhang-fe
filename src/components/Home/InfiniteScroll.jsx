import React from "react";

function InfiniteScroll() {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white px-8 py-4">
      <b>Gợi ý hôm nay</b>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-5 text-center">
        <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
          <img
            className="row-span-3 w-full h-full"
            src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
            alt=""
          />
          <div className="row-span-1 flex flex-col justify-end items-center text-center">
            <p className="text-sm font-bold">Điện thoại iphone 13</p>
            <p className="text-red-500 text-xs font-medium">12.000.000 vnđ</p>
          </div>
        </div>
        <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
          <img
            className="row-span-3 w-full h-full"
            src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
            alt=""
          />
          <div className="row-span-1 flex flex-col justify-end items-center text-center">
            <p className="text-sm font-bold">Điện thoại iphone 13</p>
            <p className="text-red-500 text-xs font-medium">12.000.000 vnđ</p>
          </div>
        </div>
        <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
          <img
            className="row-span-3 w-full h-full"
            src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
            alt=""
          />
          <div className="row-span-1 flex flex-col justify-end items-center text-center">
            <p className="text-sm font-bold">Điện thoại iphone 13</p>
            <p className="text-red-500 text-xs font-medium">12.000.000 vnđ</p>
          </div>
        </div>
        <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
          <img
            className="row-span-3 w-full h-full"
            src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
            alt=""
          />
          <div className="row-span-1 flex flex-col justify-end items-center text-center">
            <p className="text-sm font-bold">Điện thoại iphone 13</p>
            <p className="text-red-500 text-xs font-medium">12.000.000 vnđ</p>
          </div>
        </div>
        <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
          <img
            className="row-span-3 w-full h-full"
            src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
            alt=""
          />
          <div className="row-span-1 flex flex-col justify-end items-center text-center">
            <p className="text-sm font-bold">Điện thoại iphone 13</p>
            <p className="text-red-500 text-xs font-medium">12.000.000 vnđ</p>
          </div>
        </div>
        <div className="border border-gray-300 px-1 h-full w-full grid grid-rows-4">
          <img
            className="row-span-3 w-full h-full"
            src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
            alt=""
          />
          <div className="row-span-1 flex flex-col justify-end items-center text-center">
            <p className="text-sm font-bold">Điện thoại iphone 13</p>
            <p className="text-red-500 text-xs font-medium">12.000.000 vnđ</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default InfiniteScroll;
