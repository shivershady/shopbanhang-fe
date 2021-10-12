import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { getUser } from "../../services/authService";
import { Dropdown, DropdownItem } from "./components/HeaderDropdown";
import { Cart, CartItem } from "./components/HeaderCart";
import { Login, Signup, User } from "./components/HeaderUser";
import { Solutions, Resources } from "./components/HeaderTitle";

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
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      getUser(config).then((resp) => {
        setUser(resp);
        console.log(resp);
      });
    }
  }, []);

  return (
    <Popover className="relative bg-gradient-to-br from-yellow-400 via-green-200 to-red-200 border shadow-md">
      <div className="hidden container mx-auto lg:flex justify-between mt-2 px-2">
        <Solutions solutions={solutions} />
        <Resources resources={resources} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
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
            <button className="inline-flex items-center justify-center border rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
          {/* Right header */}
          <div className="-mr-2 -my-2 lg:hidden space-x-1">
            <CartItem />
            <Dropdown />
          </div>

          <div className="hidden lg:flex items-center justify-center lg:flex-1">
            <Cart />
            {/* User */}
            { !user.name && (
              <div className ="flex">
                <Login />
                <Signup />
              </div>
            )}

            {user.name && <User user = {user}/>}
          </div>
        </div>
      </div>

      <DropdownItem solutions={solutions} resources={resources} />
    </Popover>
  );
}
