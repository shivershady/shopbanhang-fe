import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-white shadow-md overflow-hidden ">
        <div className="container mx-auto text-gray-400 space-y-8 pb-8">
          <div className="space-x-2 px-8 py-4 flex justify-between border-b border-gray-300">
            <div>
              <b>Hỗ trợ khách hàng</b>
              <div>Các câu hỏi thường gặp</div>
              <div>Gửi yêu cầu hỗ trợ</div>
              <div>Hướng dẫn đặt hàng</div>
              <div>Phương thức vận chuyển</div>
              <div>Chính sách đổi trả</div>
              <div>Hướng dẫn trả góp</div>
              <div>Chính sách hàng nhập khẩu</div>
            </div>
            <div>
              <b>Về chúng tôi</b>
              <div>Giới thiệu</div>
              <div>Tuyển dụng</div>
              <div>Chính sách bảo mật thanh toán</div>
              <div>Chính sách giải quyết khiếu nại</div>
              <div>Điều khoản sử dụng</div>
              <div>Giới thiệu</div>
              <div>Bán hàng doanh nghiệp</div>
            </div>
            <div>
              <b>Phương thức thanh toán</b>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <img
                  src="https://luatvietan.vn/wp-content/uploads/2014/07/dich-vu-visa.jpg"
                  alt=""
                  className="h-5"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
                  alt=""
                  className="h-5"
                />
                <img
                  src="http://2.bp.blogspot.com/-BOGW14riPcQ/VflMge_bUgI/AAAAAAAAA5I/SrpU4vCU5Lk/s400/paypal-la-gi.jpg"
                  alt=""
                  className="h-5"
                />
              </div>
            </div>
            <div>
              <b>Kết nối với chúng tôi</b>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <img
                  src="https://cdn.tgdd.vn/2020/03/GameApp/Facebook-200x200.jpg"
                  alt=""
                  className="h-5"
                />
                <img
                  src="https://cdn.tgdd.vn/Files/2020/07/21/1272550/unnamed_800x480.png"
                  alt=""
                  className="h-5"
                />
                <img
                  src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"
                  alt=""
                  className="h-5"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="uppercase border-r border-gray-300 text-center lg:px-8 xl:px-14">
                Chính sách bảo mật
              </p>
              <p className="uppercase border-r border-gray-300 text-center lg:px-8 xl:px-14">
                Quy chế hoạt động
              </p>
              <p className="uppercase border-r border-gray-300 text-center lg:px-8 xl:px-14">
                Chính sách vận chuyển
              </p>
              <p className="uppercase text-center lg:px-8 xl:px-14">
                Chính sách trả hàng và hoàn tiền
              </p>
            </div>

            <div className="container mx-auto">
              <img
                className="px-32"
                src="https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/06/logo.png"
                alt=""
              />
            </div>
            <div className="text-center">
              <b>Thông tin liên hệ</b>
              <div>
                <p>Địa chỉ :</p>
                <p>Tổng đài hỗ trợ: </p>
                <p>Email: </p>
              </div>
            </div>
            <div className="text-center">
              © 2015 - Bản quyền thuộc về Công ty TNHH
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
