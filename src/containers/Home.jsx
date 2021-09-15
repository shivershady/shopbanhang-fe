import React, { Component, Fragment } from "react";
import "../sass/Home.scss";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid space-y-10">
        <header className="bg-yellow-400 border border-yellow-600 h-30">
          <div className="container mx-auto px-8 py-4 grid grid-cols-4 gap-4 my-auto">
            <div className="flex space-x-5 col-span-1 ">
              <img
                src="https://reactjs.org/logo-og.png"
                alt=""
                className="w-16 h-12"
              />
              <Menu as="div" className="relative inline-block">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    Danh mục sản phẩm
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Điện thoại - Máy tính bảng
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Điện thoại - Máy tính bảng
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Điện thoại - Máy tính bảng
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Điện thoại - Máy tính bảng
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Điện thoại - Máy tính bảng
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <form className=" col-span-2 grid grid-cols-4 gap-4">
              <input
                type="text"
                className="h-10 col-span-3"
                placeholder="Tìm danh mục sản phẩm mong muốn"
              />
              <button className="h-10 bg-purple-800 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">
                Tìm kiếm
              </button>
            </form>

            <div className="col-span-1 flex justify-end">
              <div className="flex space-x-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <div>Đăng nhập/Đăng ký</div>
                  <div>Tài khoản</div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <div>Giỏ hàng</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="container mx-auto space-y-4">
          {/* BANNER */}
          <div
            className="bg-cover bg-center  h-auto text-black py-24 px-10 object-fill"
            style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/Banner1.jpg')`,
            }}
          ></div>

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
              <img src="https://luatvietan.vn/wp-content/uploads/2014/07/dich-vu-visa.jpg" alt="" className="h-5"/>
              <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="" className="h-5"/>
              <img src="http://2.bp.blogspot.com/-BOGW14riPcQ/VflMge_bUgI/AAAAAAAAA5I/SrpU4vCU5Lk/s400/paypal-la-gi.jpg" alt="" className="h-5"/>
            </div>
          </div>
          <div>
            <b>Kết nối với chúng tôi</b>
            <div className="flex justify-between">
            <img src="https://cdn.tgdd.vn/2020/03/GameApp/Facebook-200x200.jpg" alt="" className="h-5" />
            <img src="https://cdn.tgdd.vn/Files/2020/07/21/1272550/unnamed_800x480.png" alt="" className="h-5" />
            <img src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc" alt="" className="h-5" />
            </div>
          </div>
          </div>
        </footer>
      </div>
    );
  }
}
