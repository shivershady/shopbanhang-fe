import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MenuIcon,
  XIcon,
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  BellIcon,
} from "@heroicons/react/outline";
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
// import { withAlert } from 'react-alert'

import { getUser } from "services/authService";
import { logout } from "services/authService";
import Icons from "constants/Icons";
import { useNotification } from "Notifications/NotificationProvider";

const solutions = [
  {
    name: "Kênh người bán",
    to: "/admin",
    icon: ChartBarIcon,
  },
  {
    name: "Tải ứng dụng",
    to: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Kết nối với chúng tôi",
    to: "#",
    icon: ViewGridIcon,
  },
];

const resources = [
  {
    name: "Thông báo",
    to: "#",
    icon: SupportIcon,
  },
  {
    name: "Hỗ trợ",
    to: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Sự kiện",
    to: "#",
    icon: CalendarIcon,
  },
];

function Header() {
  const [user, setUser] = useState({});

  useEffect(async () => {
    const hasToken = localStorage.getItem("token");
    if (!hasToken) return;
    await getUser().then((resp) => {
      setUser(resp.user[0]);
    });
  }, []);

  const dispatch = useNotification();
  const doLogout = async () => {
    try {
      await logout();
      //xử lý tiếp,
      localStorage.removeItem("token");
      // đưa ra thông báo
      dispatch({
        type: "success",
        message: "Đăng xuất thành công",
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (e) {
      //đưa ra thông báo lỗi
      dispatch({
        type: "error",
        message: "Đăng xuất thất bại",
      });
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Popover className="relative bg-gradient-to-br from-yellow-400 via-green-200 to-red-200 border shadow-md">
      <div className="hidden container mx-auto lg:flex justify-between mt-2 px-2">
        {/* Solutions */}
        <nav>
          <ol className="flex space-x-4">
            {solutions.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="p-3 flex items-center rounded-md hover:bg-gray-50"
              >
                <item.icon
                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                  aria-hidden="true"
                />
                <span className="ml-3 text-base font-medium text-gray-900">
                  {item.name}
                </span>
              </Link>
            ))}
          </ol>
        </nav>
        {/* Resources  */}
        <nav className="order-last">
          <ol className="flex space-x-4">
            {resources.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="p-3 flex items-center rounded-md hover:bg-gray-50"
              >
                <item.icon
                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                  aria-hidden="true"
                />
                <span className="ml-3 text-base font-medium text-gray-900">
                  {item.name}
                </span>
              </a>
            ))}
          </ol>
        </nav>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          {/* Logo */}
          <div className="flex justify-center w-1/4 lg:w-0 lg:flex-1">
            <Link to="/">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Logo"
              />
            </Link>
          </div>
          {/* Tìm kiếm */}
          <form className="container mx-auto flex space-x-4 px-4 w-2/3 lg:w-1/2">
            <input
              className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full text-black"
              placeholder="Tìm kiếm"
              type="text"
            />
            <button className="inline-flex items-center justify-center border rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 py-2 px-3 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <i className="fas fa-search text-base"></i>
            </button>
          </form>
          {/* Right header */}
          <div className="flex items-center lg:hidden space-x-1 w-1/3">
            {/* Cart mobile*/}
            <Link
              to="/auth/cart"
              className="bg-indigo-600 rounded-md py-2 px-3 inline-flex items-center justify-center text-white hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <i className="fas fa-shopping-cart text-base"></i>
            </Link>
            {/* Dropdown */}
            <Popover.Button className="bg-indigo-600 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden lg:flex items-center justify-center lg:flex-1">
            {/* Cart */}
            <Link
              to="/auth/cart"
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <i class="fas fa-shopping-cart text-base"></i>
            </Link>
            {/* User */}
            {!user.name && (
              <div className="flex">
                <Link
                  to="/login"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  Đăng Nhập
                </Link>
                <Link
                  to="/signup"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  Đăng ký
                </Link>
              </div>
            )}

            {user.name && (
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="max-w-xs rounded-md p-2 inline-flex items-center justify-center hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-whit space-x-4">
                    {!user.images && (
                      <img
                        className="rounded-full h-6 w-6"
                        src={Icons.userIcon}
                        alt=""
                      />
                    )}
                    {user.images && (
                      <img
                        className="rounded-full h-6 w-6"
                        src={user.images}
                        alt=""
                      />
                    )}
                    <div className="text-base font-medium leading-none ">
                      {user.name}
                    </div>
                    <i className="fas fa-caret-down"></i>
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
                  <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/auth/profile"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Hồ sơ của tôi
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={doLogout}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                          )}
                        >
                          Đăng xuất
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 z-50 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700 flex items-center space-x-2"
                  >
                    <item.icon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>

              <div className="text-center">
                {/* User */}
                {!user && (
                  <div>
                    {/* Login */}
                    <Link
                      to="/login"
                      className="w-full inline-flex items-center justify-center p-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Đăng nhập
                    </Link>
                    {/* Signup */}
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Bạn chưa có tài khoản?{" "}
                      <Link
                        to="/signup"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Đăng ký
                      </Link>
                    </p>
                  </div>
                )}

                {user && (
                  <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        {!user.images && (
                          <img
                            className="rounded-full h-6 w-6"
                            src={Icons.userIcon}
                            alt=""
                          />
                        )}
                        {user.images && (
                          <img
                            className="rounded-full h-6 w-6"
                            src={user.images}
                            alt=""
                          />
                        )}
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-gray-400">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-400">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                      <Link
                        to="/auth/profile"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        Hồ sơ của tôi
                      </Link>
                      <button
                        onClick={doLogout}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 w-full"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Header;
