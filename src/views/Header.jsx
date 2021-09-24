import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";

const solutions = [
  {
    name: "Kênh người bán",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Trở thành người bán",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Tải ứng dụng",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Kết nối với chúng tôi",
    href: "#",
    icon: ViewGridIcon,
  },
];

const resources = [
  {
    name: "Thông báo",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Hỗ trợ",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Sự kiện",
    href: "#",
    icon: CalendarIcon,
  },
];

export default function Header() {
  return (
    <Popover className="relative bg-yellow-400 border shadow-md">
      <div className="hidden container mx-auto lg:flex justify-between mt-2 px-2">
        <nav>
          <ol className="flex space-x-4">
            {solutions.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="p-3 flex items-center rounded-md hover:bg-gray-50"
              >
                <item.icon
                  className="flex-shrink-0 h-6 w-6 text-purple-800"
                  aria-hidden="true"
                />
                <span className="ml-3 text-base font-medium text-gray-900">
                  {item.name}
                </span>
              </a>
            ))}
          </ol>
        </nav>
        <nav className="order-last">
          <ol className="flex space-x-4">
            {resources.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="p-3 flex items-center rounded-md hover:bg-gray-50"
              >
                <item.icon
                  className="flex-shrink-0 h-6 w-6 text-purple-800"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>

          <form className="container mx-auto flex space-x-4 px-4 w-2/3">
            <input
              className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full text-black"
              placeholder="Tìm kiếm"
              type="text"
            />
            <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-800 p-2 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <svg
                xmlns="http:www.w3.org/2000/svg"
                className="h-6 w-6"
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

          <div className="-mr-2 -my-2 md:hidden space-x-1">
            <a
              href="#"
              className="bg-purple-800 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </a>
            <Popover.Button className="bg-purple-800 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1">
            <a
              href="#"
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-800 p-2 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-800 p-2 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              Đăng nhập
            </a>
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
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
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
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
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

              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Đăng nhập
                </a>

                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Bạn chưa có tài khoản?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Đăng ký
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
