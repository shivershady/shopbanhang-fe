import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-white ">
        <div className="container mx-auto px-8 py-4 flex justify-between">
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
            <div className="grid grid-cols-3 gap-4">
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
            <div className="flex justify-between">
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
      </footer>
    );
  }
}
