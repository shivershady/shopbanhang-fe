import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default class Category extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main className="container mx-auto grid grid-cols-6">
          <div className="col-span-1 bg-gray-200 py-4 space-y-4">
            <div className="ml-2">
              <div className="text-lg font-semibold flex justify-start items-center  space-x-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="hidden lg:block">Tất cả danh mục</p>
              </div>
            </div>
            <div className="ml-2">
              <div className="text-red-500 text-base font-medium cursor-pointer">
                Balo & Túi ví Nam
              </div>
              <ul className="text-gray-400">
                <li className="cursor-pointer">Balo Nam</li>
                <li className="cursor-pointer">Balo Nam</li>
                <li className="cursor-pointer">Balo Nam</li>
                <li className="cursor-pointer">Balo Nam</li>
              </ul>
            </div>
          </div>
          
          <div className="col-span-5 bg-white p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className="border border-gray-300 rounded-xl p-4 h-full w-full shadow-md cursor-pointer">
              <img
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="flex flex-col justify-end items-center text-center">
                <p className="text-xl font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-base font-normal">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 rounded-xl p-4 h-full w-full shadow-md cursor-pointer">
              <img
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="flex flex-col justify-end items-center text-center">
                <p className="text-xl font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-base font-normal">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 rounded-xl p-4 h-full w-full shadow-md cursor-pointer">
              <img
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="flex flex-col justify-end items-center text-center">
                <p className="text-xl font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-base font-normal">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 rounded-xl p-4 h-full w-full shadow-md cursor-pointer">
              <img
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="flex flex-col justify-end items-center text-center">
                <p className="text-xl font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-base font-normal">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 rounded-xl p-4 h-full w-full shadow-md cursor-pointer">
              <img
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="flex flex-col justify-end items-center text-center">
                <p className="text-xl font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-base font-normal">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 rounded-xl p-4 h-full w-full shadow-md cursor-pointer">
              <img
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="flex flex-col justify-end items-center text-center">
                <p className="text-xl font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-base font-normal">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 rounded-xl p-4 h-full w-full shadow-md cursor-pointer">
              <img
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="flex flex-col justify-end items-center text-center">
                <p className="text-xl font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-base font-normal">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
            <div className="border border-gray-300 rounded-xl p-4 h-full w-full shadow-md cursor-pointer">
              <img
                src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg"
                alt=""
              />
              <div className="flex flex-col justify-end items-center text-center">
                <p className="text-xl font-bold">Điện thoại iphone 13</p>
                <p className="text-red-500 text-base font-normal">
                  12.000.000 vnđ
                </p>
              </div>
            </div>
          </div>
          
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
