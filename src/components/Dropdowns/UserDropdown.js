import React, { useEffect, useState } from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";
import { getUser } from "services/authService";
import { useNotification } from "Notifications/NotificationProvider";
import { logout } from "services/authService";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const [user, setUser] = useState({});

  useEffect(async () => {
    const hasToken = localStorage.getItem("token");
    if (!hasToken) return;
    await getUser().then((resp) => {
      setUser(resp.data[0]);
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
  return (
    <>
      <a
        className="text-blue-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blue-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={user.url}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link
          to="/admin/shop-profile"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blue-700"
          }
        >
          Hồ sơ shop
        </Link>
        <div className="h-0 my-2 border border-solid border-blue-100" />
        <div
          onClick={doLogout}
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blue-700"
          }
        >
          Đăng xuất
        </div>
      </div>
    </>
  );
};

export default UserDropdown;
