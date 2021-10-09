import React from 'react'

export default function SummaryCart() {
    return (
        <div id="summary" className="md:w-1/4 px-8 py-10 bg-gray-200">
            <h1 className=" text-2xl border-b pb-8 font-bold">
              Tóm tắt đơn hàng
            </h1>
            <div className="my-5 uppercase font-bold text-base">Sản phẩm 3</div>
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
            <button className="border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 p-2 hover:bg-gray-300 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white uppercase w-full">
              Áp dụng
            </button>
            <div className="border-t mt-8">
              <div className="pb-6">
                <dl className="space-y-4">
                  <div className="flex items-center justify-between space-x-2">
                    <dt className="text-sm text-gray-600">Tổng</dt>
                    <dd className="text-sm font-medium text-red-500">$99.00</dd>
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <dt className="text-sm text-gray-600">
                      Phí Ship
                    </dt>
                    <dd className="text-sm font-medium text-red-500">$5.00</dd>
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <dt className="text-sm text-gray-600">Thuế</dt>
                    <dd className="text-sm font-medium text-red-500">$8.32</dd>
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <dt className="text-base font-medium text-gray-900">
                      Tổng đơn đặt hàng
                    </dt>
                    <dd className="text-base font-medium text-red-500">
                      $112.32
                    </dd>
                  </div>
                </dl>
              </div>
              <button className="border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-gray-300 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white w-full">
                Xác nhận
              </button>
            </div>
          </div>
    )
}
