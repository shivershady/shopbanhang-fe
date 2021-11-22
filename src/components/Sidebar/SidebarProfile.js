import { useNotification } from "Notifications/NotificationProvider";
import React from "react";
import { Link } from "react-router-dom";
import { logout } from "services/authService";

export default function SidebarProfile({ user }) {
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
  return (
    <div className="min-h-screen flex flex-row bg-gray-200">
      <div className="flex flex-col w-56 rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img className="rounded-full h-6 w-6" src={user.url} alt="" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-gray-400">
                {user.name}
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                {user.email}
              </div>
            </div>
          </div>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <Link
              to="/auth/profile"
              className={
                "flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 " +
                (window.location.href.indexOf("/auth/profile") !== -1
                  ? "text-blue-500 hover:text-blue-600"
                  : "text-gray-500 hover:text-gray-800")
              }
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="fas fa-user-alt" />
              </span>
              <span className="text-sm font-medium">Hồ sơ của tôi</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={
                "flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 " +
                (window.location.href.indexOf("/admin/dashboard") !== -1
                  ? "text-blue-500 hover:text-blue-600"
                  : "text-gray-500 hover:text-gray-800")
              }
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="fas fa-bell" />
              </span>
              <span className="text-sm font-medium">Thông báo</span>
              <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                5
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/auth/changePassword"
              className={
                "flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 " +
                (window.location.href.indexOf("/auth/changePassword") !== -1
                  ? "text-blue-500 hover:text-blue-600"
                  : "text-gray-500 hover:text-gray-800")
              }
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="fas fa-key" />
              </span>
              <span className="text-sm font-medium">Đổi mật khẩu</span>
            </Link>
          </li>
          <li className="cursor-pointer">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="fas fa-sign-out-alt" />
              </span>
              <span className="text-sm font-medium" onClick={doLogout}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
