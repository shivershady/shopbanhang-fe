import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Popover } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { getUser } from "../store/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

function Profile() {
  // const {user} = props;
  const [user , setUser] = useState({});

  const dispatch = useDispatch();
  useEffect(async () => {
    const actionResult =  await dispatch(getUser());
    const currentUser = unwrapResult(actionResult);
      // console.log("Logged in user : ", currentUser); 
      setUser(currentUser.user);
  },[])

  return (
    <Popover class="grid grid-cols-5  h-screen lg:text-base text-sm container mx-auto my-8 ">
      {/* LEFT  */}
      <div class="grid-cols-1 col-start-1 row-start-1 hidden lg:block  ">
        <div class=" bg-gray-100  z-10 py-4 xl:px-6 px-3 h-full ">
          <h1 class="text-gray-900 text-center text-3xl leading-normal mt-0 mb-2 ">
            Hồ Sơ Của Tôi
          </h1>
          <hr class="mt-6" style={{ color: "#000000" }} />
          <hr class="mt-8" style={{ color: "#0000" }} />
          <ul class="  min-w-full text-lg  ">
            <li class=" mb-8 mt-6">
              <a
                class=" items-center gap-4  text-gray-700 hover:text-red-500  px-4 py-3 "
                href=""
              >
                Tài Khoản Của Tôi
              </a>
            </li>
            <li class=" mb-8">
              {" "}
              <a
                class=" items-center gap-4  text-gray-800 hover:text-red-600   px-4 py-3 "
                href=""
              >
                {" "}
                Đơn Đặt Hàng
              </a>{" "}
            </li>
            <li class=" mb-8">
              {" "}
              <a
                class=" items-center gap-4  text-gray-800 hover:text-red-600   px-4 py-3 "
                href=""
              >
                {" "}
                Thông Báo
              </a>{" "}
            </li>
            <li class=" mb-8">
              <a
                class=" items-center gap-4  text-gray-800 hover:text-red-600   px-4 py-3 "
                href=""
              >
                Phiếu Giảm Giá
              </a>
            </li>
            <li class=" mb-8">
              {" "}
              <a
                class=" items-center gap-4  text-gray-800 hover:text-red-600   px-4 py-3 "
                href=""
              >
                {" "}
                Hỗ Trợ
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>

      {/* CENTER */}
      <div class="col-span-4 lg:col-start-2  col-start-1 w-screen lg:w-full  ">
        <div class="bg-white lg:py-4 py-1 px-3 h-screen ">
          <h2 class=" text-black lg:text-2xl text-lg  pt-1 lg:ml-6  ">
            Thông Tin Tài Khoản
          </h2>
          <p class="relative lg:text-lg  lg:ml-6">
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </p>
          <hr class="mt-5" style={{ color: "#0000" }} />
          <ul class=" flex flex-col relative list-none leading-10 lg:mt-9 mt-2">
            <div class=" absolute lg:text-right text-left lg:ml-12 ml-2  ">
              <li class="  rounded-lg mb-5  ">Tên Đăng Nhập</li>
              <li class=" rounded-lg mb-5  ">Tên</li>
              <li class="rounded-lg mb-5  ">Email</li>
              <li class="rounded-lg mb-5  ">Số Điện Thoại</li>
              <li class=" rounded-lg mb-5 ">Tên Shop</li>
              <li class="rounded-lg mb-5  ">Giới Tính</li>
              <li class="rounded-lg mb-5 ">Ngày Sinh</li>
            </div>
          </ul>

          {/* AVARTA */}
          <ul class=" flex flex-col  list-none leading-10 text-center  ">
            <div class=" absolute  self-end  ">
              <hr class="transform rotate-90 w-56 my-32  xl:mr-56 mr-32 lg:opacity-100 opacity-0  " />
              <img
                class="h-20  -my-56  ml-52 xl:ml-60  rounded-full w-20 hidden lg:block  "
                src="https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-1.jpg"
                alt=""
              />
              <div class="ml-28 hidden lg:block ">
                <button class=" mt-56  text-gray-700 hover:text-red-600">
                  Chọn Ảnh
                </button>
                <p class=" text-gray-400 -mb-2">Dụng lượng file tối đa 1 MB</p>
                <p class=" text-gray-400">Định dạng:.JPEG, .PNG</p>
              </div>

              {/* MENU Dropdown */}
              <Popover.Button className="mt-16 ml-72 lg:hidden ">
                <img
                  src="https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-1.jpg"
                  className=" h-10 w-10 -mt-96 ml-8 rounded-full  "
                  aria-hidden="true "
                />
              </Popover.Button>
              <div as={Fragment} className=" w-2/3  ml-24 -mt-96">
                <Popover.Panel focus className=" top-0 z-50 m inset-x-0 mt-12 ">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 ">
                    <div className="ml-6  pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div className="mx-2 opacity-20  ">
                          <Popover.Button className="absolute -mt-14 -ml-4  opacity-0  ">
                            <span className="sr-only   ">Close menu</span>
                            <XIcon
                              className="h-14 w-14 -mt-8 ml-44"
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6 -ml-6">
                        <nav className="grid gap-y-4 ">
                          <ul class="  min-w-full text-sm text-left ml-2  ">
                            <li class=" mb-8 ">
                              <a
                                class=" items-center gap-4  text-gray-700 hover:text-red-600   "
                                href=""
                              >
                                Tài Khoản Của Tôi
                              </a>
                            </li>
                            <li class=" mb-8">
                              {" "}
                              <a
                                class=" items-center gap-4  text-gray-800 hover:text-red-600    "
                                href=""
                              >
                                {" "}
                                Đơn Đặt Hàng
                              </a>{" "}
                            </li>
                            <li class=" mb-8">
                              {" "}
                              <a
                                class=" items-center gap-4  text-gray-800 hover:text-red-600    "
                                href=""
                              >
                                {" "}
                                Thông Báo
                              </a>{" "}
                            </li>
                            <li class=" mb-8">
                              <a
                                class=" items-center gap-4  text-gray-800 hover:text-red-600    "
                                href=""
                              >
                                Phiếu Giảm Giá
                              </a>
                            </li>
                            <li class=" mb-8">
                              {" "}
                              <a
                                class=" items-center gap-4  text-gray-800 hover:text-red-600    "
                                href=""
                              >
                                {" "}
                                Hỗ Trợ
                              </a>{" "}
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </div>
            </div>
          </ul>

          {/* col2 */}

          <ul class="flex flex-col  list-none leading-10 ml-44   ">
            <div class=" text-left lg:ml-12 -ml-9  ">
              <li class="  rounded-lg mb-5 border-b w-1/2 border-gray-100  ">
                {" "}
                <p class="ml-5">{user.email}</p>{" "}
              </li>
              <li class=" rounded-lg mb-4 border-b w-1/2 border-gray-100 ">
                <p class="ml-5">{user.name}</p>
              </li>

              <li class="rounded-lg mb-5 border-b lg:w-1/2 w-full  border-gray-100  ">
                <p class="ml-5">{user.email}</p>
              </li>

              <li class="rounded-lg mb-5 border-b w-1/2 border-gray-100  ">
                <p class="ml-5">{user.phone}</p>
              </li>
              <li class=" rounded-lg mb-5 border-b w-1/2 border-gray-100 ">
                <p class="ml-5">{user.name} shop</p>
              </li>

              <li class="rounded-lg mb-5  border-b w-1/2 border-gray-100 ">
                <label for="Nam" class="ml-5 ">
                  Nam
                </label>
              </li>

              <li class="rounded-lg mb-5 border-b w-1/2 border-gray-100 ">
                <p class="ml-5">11/11/1999</p>
              </li>
              <li class="bg-red-600 hover:bg-red-400 w-24 text-center text-white border border-transparent rounded-md shadow-sm  display-flex justify-center ml-5">
                <button>Thay đổi</button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Popover>
  );
}
export default Profile;
