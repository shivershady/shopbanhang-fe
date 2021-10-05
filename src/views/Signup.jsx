import React from "react";


const Signup = () => {
  return (
    <div class=" bg-gray-50  min-h-screen w-screen flex flex-col justify-center items-center  font-sans  rounded-xl shadow-md overflow-hidden px-6 ">
      <div class="bg-gray-100 shadow-none sm:shadow-lg h-auto w-full sm:w-8/12  md:w-7/12   lg:w-1/2  xl:w-1/3 sm:h-auto p-5  border border-transparent rounded-md  text-sm font-medium ">
        <h1 class="my-12 text-3xl text-center  ">Đăng Ký</h1>
        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded-xl shadow-md overflow-hidden mb-5 text-sm   "
          placeholder="Họ và Tên"
        />
        -{" "}
        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded-xl shadow-md overflow-hidden mb-5 text-sm  "
          placeholder="Email hoặc Số -điện thoại"
        />
        <input
          type="password"
          class="block border border-grey-light w-full p-3 rounded-xl shadow-md overflow-hidden mb-5 text-sm  "
          placeholder="Mật Khẩu"
        />
        -{" "}
        <input
          type="password"
          class="block border border-grey-light w-full p-3 rounded-xl shadow-md overflow-hidden mb-5 text-sm  "
          placeholder="Xác nhận mật k-hẩu"
        />
        <button
          type="submit"
          class="w-3/4 mx-10 text-center text-white  py-3 rounded bg-green-600 focus:outline-none my-1 rounded-xl shadow-md overflow-hidden  font-medium hover:bg-green-500"
        >
          Đăng Ký
        </button>
        <div class="text-center text-sm text- mt-4 mb-12 ">
          Bằng cách đăng ký bạn đồng ý với
          <a class="hover:underline   ml-1 text-indigo-600" href="#">
            Điều khỏan bảo mật
          </a>{" "}
          và
          <a class="hover:underline   ml-1 text-indigo-600" href="#">
            Chính sách quyền riêng tư
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
