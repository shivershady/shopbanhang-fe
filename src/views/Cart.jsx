import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main>
          <div className="container mx-auto mt-10 ">
            <div className="md:flex shadow-md my-10 rounded-xl overflow-hidden">
              <div className="md:w-3/4 bg-white px-10 py-10">
                <div className="flex justify-between border-b pb-8">
                  <h1 className=" text-2xl font-bold">Giỏ hàng</h1>
                  <h2 className=" text-2xl font-bold">3 Sản phẩm</h2>
                </div>
                <div className="flex mt-10 mb-5">
                  <h3 className=" text-gray-600 uppercase w-2/5 font-bold text-lg">
                    Thông tin chi tiết sản phẩm
                  </h3>
                  <h3 className=" text-center text-gray-600 uppercase w-1/5 font-bold text-lg">
                    Số lượng
                  </h3>
                  <h3 className=" text-center text-gray-600 uppercase w-1/5 font-bold text-lg">
                    Giá
                  </h3>
                  <h3 className=" text-center text-gray-600 uppercase w-1/5 font-bold text-lg">
                    Thành tiền
                  </h3>
                </div>
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                    {" "}
                    {/* product */}
                    <div className="w-1/2 md:w-20">
                      <img
                        className="h-24"
                        src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow w-1/2">
                      <span className="font-bold text-sm">Iphone 6S</span>
                      <span className="text-red-500 text-xs">Apple</span>
                      <a
                        href="#"
                        className=" hover:text-red-500 text-gray-500 text-xs"
                      >
                        Xóa
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      defaultValue={1}
                    />
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5  text-sm text-red-500">$400.00</span>
                  <span className="text-center w-1/5  text-sm text-red-500">$400.00</span>
                </div>
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                    {" "}
                    {/* product */}
                    <div className="w-1/2 md:w-20">
                      <img
                        className="h-24"
                        src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow w-1/2">
                      <span className="font-bold text-sm">
                        Xiaomi Mi 20000 mAh
                      </span>
                      <span className="text-red-500 text-xs">Xiaomi</span>
                      <a
                        href="#"
                        className=" hover:text-red-500 text-gray-500 text-xs"
                      >
                        Xóa
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      defaultValue={1}
                    />
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5  text-sm text-red-500">$40.00</span>
                  <span className="text-center w-1/5  text-sm text-red-500">$40.00</span>
                </div>
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                    {" "}
                    {/* product */}
                    <div className="w-1/2 md:w-20">
                      <img
                        className="h-24"
                        src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow w-1/2">
                      <span className="font-bold text-sm">Airpods</span>
                      <span className="text-red-500 text-xs">Apple</span>
                      <a
                        href="#"
                        className=" hover:text-red-500 text-gray-500 text-xs"
                      >
                        Xóa
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      defaultValue={1}
                    />
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5  text-sm text-red-500">$150.00</span>
                  <span className="text-center w-1/5  text-sm text-red-500">$150.00</span>
                </div>
                <a href="#" className="flex  text-indigo-600 text-sm mt-10">
                  <svg
                    className="fill-current mr-2 text-indigo-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Tiếp tục mua sắm
                </a>
              </div>
              <div id="summary" className="md:w-1/4 px-8 py-10">
                <h1 className=" text-2xl border-b pb-8 font-bold">Tóm tắt đơn hàng</h1>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="uppercase font-bold text-base">Sản phẩm 3</span>
                  <span className=" text-sm text-red-500">590$</span>
                </div>
                <div>
                  <label className="font-medium inline-block mb-3 uppercase text-lg">
                    Đang chuyển hàng
                  </label>
                  <select className="block p-2 text-gray-600 w-full text-sm">
                    <option>Vận chuyển tiêu chuẩn - $10.00</option>
                  </select>
                </div>
                <div className="py-10">
                  <label
                    htmlFor="promo"
                    className=" inline-block mb-3 text-lg uppercase font-medium"
                  >
                    Mã khuyến mại
                  </label>
                  <input
                    type="text"
                    id="promo"
                    placeholder="Nhập mã của bạn"
                    className="p-2 text-sm w-full"
                  />
                </div>
                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                  Áp dụng
                </button>
                <div className="border-t mt-8">
                  <div className="flex  justify-between py-6 text-sm uppercase">
                    <span className="font-medium uppercase text-lg"> Tổng chi phí</span>
                    <span className="text-red-500">$600</span>
                  </div>
                  <button className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800 w-full">
                    Xác nhận
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
