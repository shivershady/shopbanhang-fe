import React, { Component } from "react";
import facebook from "../../assets/images/icon/facebook.png";
import zalo from "../../assets/images/icon/zalo.png";
import youtube from "../../assets/images/icon/youtube.png";
import paypal from "../../assets/images/icon/paypal.png";
import bank from "../../assets/images/icon/debit-card.png";
import visa from "../../assets/images/icon/visa.png";
import registered from "../../assets/images/icon/Registered.png";

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
                <img src={visa} alt="" className="h-8" />
                <img src={bank} alt="" className="h-8" />
                <img src={paypal} alt="" className="h-8" />
              </div>
            </div>
            <div className="space-y-4">
              <b>Kết nối với chúng tôi</b>
              <div className="flex-row lg:flex justify-between space-y-4 lg:space-y-0 pr-8">
                <img src={facebook} alt="" className="h-8" />
                <img src={zalo} alt="" className="h-8" />
                <img src={youtube} alt="" className="h-8" />
              </div>
            </div>
          </div>
          <div className="space-y-4 px-8">
            <div className="flex justify-between">
              <p className="uppercase border-r border-gray-300 text-center px-4 sm:pl-0 sm:pr-4 lg:pr-10 xl:pr-24 text-xs lg:text-sm">
                Chính sách bảo mật
              </p>
              <p className="uppercase border-r border-gray-300 text-center px-4 sm:pl-0 sm:pr-4 lg:pr-10 xl:pr-24 text-xs lg:text-sm">
                Quy chế hoạt động
              </p>
              <p className="uppercase border-r border-gray-300 text-center px-4 sm:pl-0 sm:pr-4 lg:pr-10 xl:pr-24 text-xs lg:text-sm">
                Chính sách vận chuyển
              </p>
              <p className="uppercase text-center text-xs lg:text-sm px-4 sm:px-0">
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
              <img className="w-36 h-12" src={registered} alt="" />
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
