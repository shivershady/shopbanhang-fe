import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductDetail from "../components/Product/ProductDetail";
import ProductInformation from "../components/Product/ProductInformation";
import ProductDescription from "../components/Product/ProductDescription";
import ProductComment from "../components/Product/ProductComment";

export default function Product() {
  return (
    <div className="container-fluid space-y-10">
      <Header></Header>
      <main className="container mx-auto space-y-4">
        {/* ProductDetail */}
        <ProductDetail />

        {/* Sản Phẩm Tương Tự */}
        <div className="rounded-xl shadow-md overflow-hidden bg-white px-8 py-4">
          <b>Sản phẩm tương tự</b>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-5 text-center">
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
        </div>

        {/* Thông tin chi tiết */}
        <ProductInformation />

        {/* Mô tả sản phẩm */}
        <ProductDescription />

        {/* Đánh giá từ khách hàng */}
        <ProductComment />

        {/* Khám phá thêm */}
        <div className="rounded-xl shadow-md overflow-hidden bg-white px-8 py-4">
          <b>Khám phá thêm</b>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-5 text-center">
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
        </div>

        {/* Sản phẩm đã xem */}
        <div className="rounded-xl shadow-md overflow-hidden bg-white px-8 py-4">
          <b>Sản phẩm đã xem</b>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-5 text-center">
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
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
