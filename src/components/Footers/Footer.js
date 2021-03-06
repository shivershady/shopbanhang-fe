import React, { Component } from "react";
import Icons from "constants/Icons";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-white shadow-md overflow-hidden ">
        <div className="container mx-auto text-gray-400 space-y-8 pb-8">
          <div className="px-8 py-4 border-b border-gray-300 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <b>Hỗ trợ khách hàng</b>
              <div>Các câu hỏi thường gặp</div>
              <div>Gửi yêu cầu hỗ trợ</div>
              <div>Hướng dẫn đặt hàng</div>
              <div>Phương thức vận chuyển</div>
              <div>Chính sách đổi trả</div>
              <div>Hướng dẫn trả góp</div>
              <div>Chính sách hàng nhập khẩu</div>
            </div>
            <div className="space-y-4">
              <b>Về chúng tôi</b>
              <div>Giới thiệu</div>
              <div>Tuyển dụng</div>
              <div>Chính sách bảo mật thanh toán</div>
              <div>Chính sách giải quyết khiếu nại</div>
              <div>Điều khoản sử dụng</div>
              <div>Giới thiệu</div>
              <div>Bán hàng doanh nghiệp</div>
            </div>
            <div className="space-y-4">
              <b>Phương thức thanh toán</b>
              <div className="flex-row lg:flex justify-between space-y-4 lg:space-y-0 pr-8">
                <img src={Icons.VS} alt="" className="h-8" />
                <img src={Icons.B} alt="" className="h-8" />
                <img src={Icons.PAY} alt="" className="h-8" />
              </div>
            </div>
            <div className="space-y-4">
              <b>Kết nối với chúng tôi</b>
              <div className="flex-row lg:flex justify-between space-y-4 lg:space-y-0 pr-8">
                <img src={Icons.FB} alt="" className="h-8" />
                <img src={Icons.ZL} alt="" className="h-8" />
                <img src={Icons.YT} alt="" className="h-8" />
              </div>
            </div>
          </div>
          <div className="space-y-4 px-8">
            <div className="grid grid-cols-4 gap-4 divide-x">
              <p className="uppercase text-center p-4 text-xs lg:text-sm">
                Chính sách bảo mật
              </p>
              <p className="uppercase text-center p-4 text-xs lg:text-sm">
                Quy chế hoạt động
              </p>
              <p className="uppercase text-center p-4 text-xs lg:text-sm">
                Chính sách vận chuyển
              </p>
              <p className="uppercase text-center p-4 text-xs lg:text-sm ">
                Chính sách trả hàng và hoàn tiền
              </p>
            </div>

            <div className="container mx-auto flex justify-between">
              <div className=" text-left col-span-3">
                <b>Thông tin liên hệ</b>
                <div>
                  <p>Địa chỉ :</p>
                  <p>Tổng đài hỗ trợ: </p>
                  <p>Email: </p>
                </div>
              </div>
              <img className="w-36 h-12" src={Icons.RGT} alt="" />
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
