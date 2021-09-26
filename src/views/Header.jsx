import React, { Component, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default class Header extends Component {
  render() {
    return (
      <header className="bg-yellow-400 border shadow-md overflow-hidden text-base text-white">
        <div className="container mx-auto">
          <div className="lg:flex justify-between ">
            <nav>
              <ol className="list-reset rounded flex bg-grey-light text-grey space-x-4">
                <li className="hover:text-black">
                  <a href="#" className="no-underline text-indigo">
                    Kênh người bán
                  </a>
                </li>
                <li>/</li>
                <li className="hover:text-black">
                  <a href="#" className="no-underline text-indigo">
                    Trở thành người bán
                  </a>
                </li>
                <li>/</li>
                <li className="hover:text-black">
                  <a href="#" className="no-underline text-indigo">
                    Tải ứng dụng
                  </a>
                </li>
                <li>/</li>
                <li className="hover:text-black">
                  <a href="#" className="no-underline text-indigo">
                    Kết nối với chúng tôi
                  </a>
                </li>
              </ol>
            </nav>
            <nav className="order-last">
              <ol className="list-reset rounded flex bg-grey-light text-grey space-x-4">
                <li className="hover:text-black">
                  <a href="#" className="no-underline text-indigo">
                    Thông báo
                  </a>
                </li>
                <li>/</li>
                <li className="hover:text-black">
                  <a href="#" className="no-underline text-indigo">
                    Hỗ trợ
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          <div className="md:flex md:items-center md:justify-between p-4 pb-0 md:pb-4">
            {/* Logo text or image */}
            <div className="flex items-center justify-center mb-4 md:mb-0 space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBT45ExAc6Sde3zTi0sNAxbf0H6iOPfS118pVIpBFf5lCnMetYvUGl7StY17Fi_R2xqTE&usqp=CAU"
                alt=""
                className="h-16 w-16"
              />
              <h1 className="leading-none text-2xl text-grey-darkest">
                <a
                  className="no-underline text-grey-darkest hover:text-black"
                  href="#"
                >
                  Site Title
                </a>
              </h1>
            </div>
            {/* END Logo text or image */}
            {/* Search field */}
            <div className="flex-1 mb-4 w-full md:mb-0 md:w-1/4">
              <form className="  flex space-x-4 px-4">
                <input
                  className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full text-black"
                  placeholder="Tìm kiếm"
                  type="text"
                />
                <button className="bg-purple-800 py-1 px-4 text-white font-bold rounded hover:bg-gray-200 hover:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
              <div className="px-8 hidden lg:block">
                <nav>
                  <ol className="list-reset rounded flex bg-grey-light text-grey space-x-4">
                    <li className="hover:text-black">
                      <a href="#" className="no-underline text-indigo">
                        Áo khoác
                      </a>
                    </li>
                    <li className="hover:text-black">
                      <a href="#" className="no-underline text-indigo">
                        Điện thoại
                      </a>
                    </li>
                    <li className="hover:text-black">
                      <a href="#" className="no-underline text-indigo">
                        Quần
                      </a>
                    </li>
                    <li className="hover:text-black">
                      <a href="#" className="no-underline text-indigo">
                        Tai nghe
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            {/* END Search field */}
            {/* Global navigation */}
            <nav>
              <ul className="list-reset md:flex md:items-center">
                <li className="md:ml-4">
                  <a
                    className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                    href="#"
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>Đăng ký | Đăng nhập</div>
                    </div>
                  </a>
                </li>
                <li className="md:ml-4">
                  <a
                    className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                    href="#"
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      <div>Giỏ hàng</div>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
            {/* END Global navigation */}
          </div>
        </div>
      </header>
    );
  }
}
