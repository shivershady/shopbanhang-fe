import React, { Component } from "react";
import "../sass/Home.scss";
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid space-y-10">
        <Header></Header>
        <main className="container mx-auto space-y-4">
          {/* BANNER */}
         <Banner></Banner>

          {/* HomeQuicklinksTabContainer */}
          <div className="flex justify-between border border-yellow-600 bg-white px-8 py-4 text-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-yellow-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Thịt, rau củ
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-yellow-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Mã giảm giá
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-yellow-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Dịch vụ & tiện ích
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-yellow-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Gói hội viên
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-yellow-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Giảm đến 50%
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-yellow-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Hoàn tiền 15%
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-yellow-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Ưu đãi thanh toán{" "}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-yellow-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Hẹn giao và lắp đặt
            </div>
          </div>

          {/* BrandStaticWidget */}
          <div className="border border-yellow-600 bg-white px-8 py-4">
            <b>Thương hiệu chính hãng</b>
            <div className="my-5">
              {/* Slide */}
              <div className="grid grid-cols-6 gap-4 space-x-4">
                <img
                  src="https://hc.com.vn/i/ecommerce/media/GS.007666_FEATURE_80464.jpg"
                  alt=""
                  className="border border-gray-300"
                />
                <img
                  src="https://hc.com.vn/i/ecommerce/media/GS.007666_FEATURE_80464.jpg"
                  alt=""
                  className="border border-gray-300"
                />
                <img
                  src="https://hc.com.vn/i/ecommerce/media/GS.007666_FEATURE_80464.jpg"
                  alt=""
                  className="border border-gray-300"
                />
                <img
                  src="https://hc.com.vn/i/ecommerce/media/GS.007666_FEATURE_80464.jpg"
                  alt=""
                  className="border border-gray-300"
                />
                <img
                  src="https://hc.com.vn/i/ecommerce/media/GS.007666_FEATURE_80464.jpg"
                  alt=""
                  className="border border-gray-300"
                />
                <img
                  src="https://hc.com.vn/i/ecommerce/media/GS.007666_FEATURE_80464.jpg"
                  alt=""
                  className="border border-gray-300"
                />
              </div>
            </div>
          </div>

          {/* FeaturedCategorises */}
          <div className="border border-yellow-600 bg-white px-8 py-4">
            <b>Danh mục sản phẩm</b>
            <div className="grid grid-cols-10 gap-4 my-5 text-center">
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
              <div>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-blue-600x600.jpg"
                  alt=""
                />
                <p>Điện thoại</p>
              </div>
            </div>
          </div>

          {/* FeaturedKeywords */}
          <div className="border border-yellow-600 bg-white px-8 py-4">
            <b>Tìm kiến nổi bật</b>
            <div className="grid grid-cols-4 gap-4 my-5">
              <div className="border border-gray-300 text-center bg-yellow-400">
                <img
                  src="https://leep.imgix.net/2020/08/thuc-pham-giau-dam-image.jpg?auto=compress&fm=pjpg&ixlib=php-1.2.1"
                  alt=""
                />
                <div>Thực phẩm sạch</div>
              </div>
              <div className="border border-gray-300 text-center bg-yellow-400">
                <img
                  src="https://leep.imgix.net/2020/08/thuc-pham-giau-dam-image.jpg?auto=compress&fm=pjpg&ixlib=php-1.2.1"
                  alt=""
                />
                <div>Thực phẩm sạch</div>
              </div>
              <div className="border border-gray-300 text-center bg-yellow-400">
                <img
                  src="https://leep.imgix.net/2020/08/thuc-pham-giau-dam-image.jpg?auto=compress&fm=pjpg&ixlib=php-1.2.1"
                  alt=""
                />
                <div>Thực phẩm sạch</div>
              </div>
              <div className="border border-gray-300 text-center bg-yellow-400">
                <img
                  src="https://leep.imgix.net/2020/08/thuc-pham-giau-dam-image.jpg?auto=compress&fm=pjpg&ixlib=php-1.2.1"
                  alt=""
                />
                <div>Thực phẩm sạch</div>
              </div>
            </div>
          </div>
          {/* InfiniteScroll */}
          <div className="border border-yellow-600 bg-white px-8 py-4">
            <b>Gợi ý hôm nay</b>
            <div className="grid grid-cols-6 gap-4 my-5 text-center">
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
              <div className="border border-gray-300 px-1">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-04/885.jpg"
                  alt=""
                />
                <p>Điện thoại iphone 13</p>
                <p>12.000.000 vnđ</p>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
