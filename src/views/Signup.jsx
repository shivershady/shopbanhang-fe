import React from "react";
const Signup = () => {
  return (
    <header>
      <div class="bg-gray-50  min-h-screen w-screen flex flex-col justify-center items-center   rounded-xl shadow-md overflow-hidden px-6  ">
        <div class=" bg-gray-100 shadow-none sm:shadow-lg h-auto w-full sm:w-8/12  md:w-7/12   lg:w-1/2  xl:w-2/5 sm:h-auto p-5  border border-transparent rounded-md  text-sm font-medium py-12   ">
          
            <h1 class=" text-center w-full text-3xl text-gray-600 mb-8 "> Đăng Ký </h1>
          
          <div class="w-full bg-gray-200 my-3 h-px"> </div>
          <form>
              <div class="flex flex-col gap-4 px-0 py-1 ">
                <input  class="py-2 pl-3 border border-transparent rounded-md shadow-sm text-sm h-11 w-full text-left my-2 "  placeholder="Họ và Tên" type="text" />
                <input class="py-2 pl-3 border border-transparent rounded-md shadow-sm text-sm h-11 w-full my-2" placeholder="Email hoặc Số Điện Thoại"type="text"    />
                <input class="py-2 pl-3 border border-transparent rounded-md shadow-sm text-sm h-11 w-full my-2" placeholder="Mật Khẩu"type="text"    />
                 <input class="py-2 pl-3 border border-transparent rounded-md shadow-sm text-sm h-11 w-full my-2" placeholder="Xác Nhận Mật Khẩu"type="text"    />
                </div>
    
              <div class=" text-center  py-4">
                <button class=" w-3/5 h-11 border border-transparent rounded-md shadow-sm text-base  text-white bg-red-600 p-1 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                 
                  Đăng Ký
                </button>
              </div>

              <div class="text-center  mt-4 mb-12 tracking-wide "> Bằng cách đăng ký bạn đồng ý với
            <a class="hover:underline  ml-1 text-indigo-600" href="#">
            Điều khỏan bảo mật
          </a> và<a class="hover:underline   ml-1 text-indigo-600" href="#">
            Chính sách quyền riêng tư
          </a>
        </div>

          </form>
        </div>
      </div>
    </header>
  );
};

export default Signup;

