import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { logout } from "services/authService";
import Icons from "constants/Icons";

export function Login() {
  return (
    <Link
      to="/auth/login"
      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    >
      Đăng nhập
    </Link>
  );
}

export function LoginItem() {
  return (
    <Link
      to="/auth/login"
      className="w-full inline-flex items-center justify-center p-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
    >
      Đăng nhập
    </Link>
  );
}

export function Signup() {
  return (
    <Link
      to="/auth/signup"
      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 p-2 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    >
      Đăng ký
    </Link>
  );
}

export function SignupItem() {
  return (
    <p className="mt-6 text-center text-base font-medium text-gray-500">
      Bạn chưa có tài khoản?{" "}
      <Link to="/auth/signup" className="text-indigo-600 hover:text-indigo-500">
        Đăng ký
      </Link>
    </p>
  );
}

const doLogout = async () => {
  try {
    await logout();
    //xử lý tiếp,
    localStorage.removeItem("token");
    // đưa ra thông báo
    alert("Đăng xuất thành công");
    window.location.href = "/auth/login";
  } catch (e) {
    //đưa ra thông báo lỗi
    alert("Đăng nhập thất bại", e);
  }
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function User(props) {
  const { user } = props;
  console.log(user.images);
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="max-w-xs rounded-md p-2 inline-flex items-center justify-center hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-whit space-x-4">
          {!user.images==[] && (
            <img className="rounded-full h-6 w-6" src={Icons.userIcon} alt="" />
          )}
          {user.images==[] && (
            <img className="rounded-full h-6 w-6" src={user.images} alt="" />
          )}
          <div className="text-base font-medium leading-none ">{user.name}</div>
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
                Hồ sơ của bạn
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
  );
}

export function UserItem(props) {
  const { user } = props;
  return (
    <div className="pt-4 pb-3 border-t border-gray-700">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
        {!user.images==[] && (
            <img className="rounded-full h-6 w-6" src={Icons.userIcon} alt="" />
          )}
          {user.images==[] && (
            <img className="rounded-full h-6 w-6" src={user.images} alt="" />
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
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-3 px-2 space-y-1">
        <Link
          to="/auth/profile"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
        >
          Hồ sơ của bạn
        </Link>
        <button
          onClick={doLogout}
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 w-full"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
}

export const HeaderUser = {
  Login,
  LoginItem,
  Signup,
  SignupItem,
  User,
};
