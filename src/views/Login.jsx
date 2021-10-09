import React, {useState} from "react";
import {login} from "../services/authService";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const doLogin = async function (event) {
        event.preventDefault();
        try {
            const resp = await login({
                email: email,
                password: password
            });
            const token = resp.data.token;
            localStorage.setItem('token', token);
            //xử lý tiếp,
            // đưa ra thông báo tạo tk thành công
            // chuyển sang trang verify otp
        } catch (e) {
            //đưa ra thông báo lỗi
            alert("Đăng nhập không thành công, vui lòng check lại");
        }

    };

    return (
        <header>
            <div
                class="bg-gray-50  min-h-screen w-screen flex flex-col justify-center items-center  font-sans  rounded-xl shadow-md overflow-hidden px-6  ">
                <div
                    class=" bg-gray-100 shadow-none sm:shadow-lg h-auto w-full sm:w-8/12  md:w-7/12   lg:w-1/2  xl:w-2/5 sm:h-auto p-5  border border-transparent rounded-md  text-sm font-medium py-12   ">
                    <div>
                        <h1 class=" text-center w-full text-3xl text-gray-600 mb-8 ">
                            {" "}
                            Đăng Nhập{" "}
                        </h1>
                    </div>
                    <div class="w-full bg-gray-200 my-3 h-px"></div>
                    <form onSubmit={doLogin}>
                        <div>
                            <div class="flex flex-col gap-4 px-0 py-1 ">
                                <p>
                                    {" "}
                                    <label class="text-gray-700  ">Tài Khoản</label>
                                    <input
                                        class="py-2 pl-3 border border-transparent rounded-md shadow-sm text-sm  w-full text-left my-2 "
                                        placeholder="Số điện thoại hoặc Email"
                                        type="text"
                                        onChange={(evt) => {
                                            setEmail(evt.target.value)
                                        }}
                                    />
                                </p>
                            </div>
                        </div>

                        <div>
                            <div>
                                {" "}
                                <label class="text-gray-700">Mật khẩu </label>
                                <input
                                    class="py-2 pl-3 border border-transparent rounded-md shadow-sm text-sm  w-full my-2"
                                    placeholder="Mật Khẩu"
                                    type="text"
                                    onChange={(evt) => {
                                        setPassword(evt.target.value)
                                    }}/>
                            </div>
                        </div>

                        <div>
                            <div class="w-full flex flex-row gap-2 py-4">
                                <button
                                    class=" w-full  border border-transparent rounded-md shadow-sm text-base  text-white bg-red-600 p-1 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                                    {" "}
                                    Đăng Ký{" "}
                                </button>
                                <button
                                    class=" w-full border border-transparent rounded-md shadow-sm text-base  text-white bg-indigo-600 p-1 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    {" "}
                                    Đăng Nhập{" "}
                                </button>
                            </div>
                        </div>

                        <div>
                            <div class="w-full flex flex-row justify-center ">
                                <a
                                    class="text-blue-600 hover:text-blue-800 hover:underline  "
                                    href="#"
                                >
                                    Quên mật khẩu?{" "}
                                </a>
                            </div>
                        </div>

                        <div>
                            <div class="my-2 flex flex-row justify-center py-2">
                                <span class="absolute bg-white px-4">hoặc</span>
                                <div class="w-full bg-gray-200 mt-3 h-px"></div>
                            </div>
                        </div>

                        <div>
                            <div class="w-full flex flex-col gap-2 py-2  ">
                                <button
                                    class=" border border-transparent rounded-md shadow-sm text-base  text-white bg-red-600 p-1  hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white  font-medium">
                                    {" "}
                                    Đăng nhập bằng Google{" "}
                                </button>
                                <button
                                    class=" border border-transparent rounded-md shadow-sm text-base  text-white bg-indigo-600 p-1 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white font-medium ">
                                    {" "}
                                    Đăng nhập bằng Facebook{" "}
                                </button>
                            </div>
                        </div>

                        <div>
                            <p class="mt-3 text-center ">
                                {" "}
                                Không có tài khoản ?{" "}
                                <span class="cursor-pointer text-sm text-blue-600 hover:underline">
                  {" "}
                                    Đăng ký để nhận ưu đãi
                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Login;
