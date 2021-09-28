import React from "react";


const SignUp = () => {
  return (
<div>
<div class=" bg-gray-50 -lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-gray-50 px-6 py-8 border border-red-light rounded-xl shadow-md overflow-hidden text-black w-full  font-medium">
            <h1 class="mb-1 text-2xl ">Đăng Ký</h1>
            <p class="mb-3 text-sm">Nhanh chóng và dễ dàng</p>
            <input type="text"     class="block border border-grey-light w-full p-3 rounded-xl shadow-md overflow-hidden mb-4 text-sm   "  placeholder="Họ và Tên" />
            <input type="text"     class="block border border-grey-light w-full p-3 rounded-xl shadow-md overflow-hidden mb-4 text-sm  "   placeholder="Email hoặc Số điện thoại" />
            <input type="password" class="block border border-grey-light w-full p-3 rounded-xl shadow-md overflow-hidden mb-4 text-sm  "   placeholder="Mật Khẩu" />
            <input type="password" class="block border border-grey-light w-full p-3 rounded-xl shadow-md overflow-hidden mb-4 text-sm  "   placeholder="Xác nhận mật khẩu" />

            <button type="submit"class="w-3/4 mx-10 text-center text-white  py-3 rounded bg-green-600 focus:outline-none my-1 rounded-xl shadow-md overflow-hidden  font-medium" >Đăng Ký</button>

            <div class="text-center text-sm text-grey-dark mt-4 ">
              Bằng cách đăng ký  bạn đồng ý với 
                <a class="underline border-b border-grey-dark text-grey-dark ml-1" href="#">
                   Điều khỏan bảo mật 
                </a> và
                <a class="underline  border-grey-dark text-grey-dark ml-1" href="#">
                   Chính sách quyền riêng tư
                </a>
            </div>
        </div>

    </div>
</div>
</div>
  );
};

export default SignUp;
