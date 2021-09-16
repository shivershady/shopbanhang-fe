import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Product extends Component {
  render() {
    return (
      <div className="container-fluid space-y-10">
        <Header></Header>
        <main className="container mx-auto space-y-4">
          {/* ProductHeader */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden ">
            <div className="md:flex">
              {/* Imgage */}
              <div className="md:flex-shrink-0">
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
              </div>

              <div className="p-8 border-l border-gray-300">
                {/* Title */}
                <div className="uppercase tracking-wide text-2xl text-indigo-500">
                  Điện Thoại Samsung Galaxy S20 FE - Hàng Chính Hãng
                </div>
                <div className="border-b py-4 space-y-4">
                  <div className="bg-gray-100 flex items-center space-x-4 p-4">
                    <p className="text-red-500 text-4xl">
                      12.000.000 vnđ
                    </p>
                    <p className="text-gray-500 line-through">
                      15.000.000 vnđ
                    </p>
                    <p className="  text-red-500 text-xl">-25%</p>
                  </div>

                  {/* variants */}
                  <div>
                    <div>Màu</div>
                    <div>Dung lượng</div>
                  </div>
                </div>

                {/* quantity&button */}
                <div className="p-4 space-y-4 text-center">
                  <div className="flex justify-center space-x-2">
                    <button className="w-10 h-8 border border-gray-300">
                      -
                    </button>
                    <input
                      className="w-10 h-8 border border-gray-300 text-center"
                      type="number"
                      value="1"
                    />
                    <button className="w-10 h-8 border border-gray-300">
                      +
                    </button>
                  </div>
                  <button className="px-16 py-4 bg-purple-800 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">
                    Chọn Mua
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Sản Phẩm Tương Tự */}
          <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">
            <b>Sản phẩm tương tự</b>
            <div className="grid grid-cols-6 gap-4 text-center">
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
            </div>
          </div>

          {/* Thông tin chi tiết */}
          <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">
            <b>Thông tin chi tiết</b>
            <table className="table-fixed border-separate border border-gray-400 w-full text-center">
              <thead>
                <tr>
                  <th className="border border-gray-200">Tiêu đề</th>
                  <th className="border border-gray-200">Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200">Dung lượng pinS</td>
                  <td className="border border-gray-200">4500 mAh</td>
                </tr>
                <tr className="bg-emerald-200">
                  <td className="border border-gray-200">Bluetooth</td>
                  <td className="border border-gray-200">V5.0</td>
                </tr>
                <tr>
                  <td className="border border-gray-200">Thương hiệu</td>
                  <td className="border border-gray-200">Samsung lorem</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Mô tả sản phẩm */}
          <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">
              <b>Mô tả sản phẩm</b>
              <div>
              Màn hình: FHD Infinity-O 6.5 inch Hệ điều hành: Android 10 Camera sau: Chính 12 MP & Phụ 12 MP, 8 MP Camera trước: 32 MP CPU: Exynos 990 8 nhân RAM: 8 GB Bộ nhớ trong: 128 GB/ 256GB Thẻ SIM: 2 Nano SIM (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G Dung lượng pin: 4500 mAh, có sạc nhanh
              </div>
          </div>
          {/* Đánh giá từ khách hàng */}
          <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">
              <b>Đánh giá từ khách hàng</b>
              <div>
                  Nội dung
              </div>
              <div>
                  Nội dung
              </div>
              <div>
                  Nội dung
              </div>
          </div>

          {/* Khám phá thêm */}
          <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">
              <b>Khám phá thêm</b>
              <div className="grid grid-cols-6 gap-4 text-center">
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
            </div>
          </div>

          {/* Sản phẩm đã xem */}
          <div className="container mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">
              <b>Sản phẩm đã xem</b>
              <div className="grid grid-cols-6 gap-4 text-center">
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
              <div>
                <img
                  src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhduong-1.png"
                  alt=""
                />
                <div>Sảm phẩm</div>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
