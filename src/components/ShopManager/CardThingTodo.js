import React from "react";

// components

export default function CardSocialTraffic() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blue-700">
              Danh sách việc cần làm
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Nhìn thấy tất cả
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <div className="grid grid-cols-2 gap-6 m-4">
            <div className="text-center hover:bg-gray-200 rounded-md">
              <div className = "text-blue-600 text-base font-bold">0</div>
              <div>Chờ xác nhận</div>
            </div>
            <div className="text-center hover:bg-gray-200 rounded-md">
              <div className = "text-blue-600 text-base font-bold">0</div>
              <div>Chờ lấy hàng</div>
            </div>
            <div className="text-center hover:bg-gray-200 rounded-md">
              <div className = "text-blue-600 text-base font-bold">0</div>
              <div>Đã xử lý</div>
            </div>
            <div className="text-center hover:bg-gray-200 rounded-md">
              <div className = "text-blue-600 text-base font-bold">0</div>
              <div>Đơn hủy</div>
            </div>
            <div className="text-center hover:bg-gray-200 rounded-md">
              <div className = "text-blue-600 text-base font-bold">0</div>
              <div>Trả hàng/Hoàn tiền</div>
            </div>
            <div className="text-center hover:bg-gray-200 rounded-md">
              <div className = "text-blue-600 text-base font-bold">0</div>
              <div>Sản phẩm tạm khóa</div>
            </div>
            <div className="text-center hover:bg-gray-200 rounded-md">
              <div className = "text-blue-600 text-base font-bold">0</div>
              <div>Sản phẩm hết hàng</div>
            </div>
            <div className="text-center hover:bg-gray-200 rounded-md">
              <div className = "text-blue-600 text-base font-bold">0</div>
              <div>Chương trình khuyến mãi chờ xử lý</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
