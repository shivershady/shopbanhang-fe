import { FastField, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

import Footer from "components/Footers/Footer";
import Header from "components/Headers/Header";

import InputField from "cutom-fields/InputField/InputField";
import { login } from "services/authService";
import { useNotification } from "Notifications/NotificationProvider";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .min(8, "Mật khẩu từ 8 - 16 ký tự")
    .max(16)
    .required("Vui lòng nhập mật khẩu"),
});

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useNotification();
  const doLogin = async function (data) {
    await login(data).then((response) => {
        if(response.token){
        localStorage.setItem("token", response.token);
        // đưa ra thông báo
        dispatch({
          type: "success",
          message: "Đăng nhập thành công",
        })
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
      })
      .catch((error) => {
        dispatch({
          type: "error",
          message: "Đăng nhập thất bại " + error,
        })
        // alert.error('Đăng nhập thất bại');
      });
  };

  return (
    <div>
      <Header />
      <header className="relative">
        <div class="bg-gray-50  min-h-screen w-screen flex flex-col justify-center items-center  font-sans  rounded-xl shadow-md overflow-hidden px-6  ">
          <div class=" bg-gray-100 shadow-none sm:shadow-lg h-auto w-full sm:w-8/12  md:w-7/12   lg:w-1/2  xl:w-2/5 sm:h-auto p-5  border border-transparent rounded-md  text-sm font-medium py-12   ">
            <div>
              <h1 class=" text-center w-full text-3xl text-gray-600 mb-8 ">
                {" "}
                Đăng Nhập{" "}
              </h1>
            </div>
            <div class="w-full bg-gray-200 my-3 h-px"> </div>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={doLogin}
            >
              {(formikProps) => {
                return (
                  <Form className="flex flex-col gap-4 px-0 py-1 ">
                    <FastField
                      name="email"
                      type="email"
                      component={InputField}
                      placeholder="Email"
                    />

                    <FastField
                      name="password"
                      type="password"
                      component={InputField}
                      placeholder="Mật khẩu"
                    />
                    <div className=" text-center  py-4">
                      <button
                        className=" w-3/5 h-11 border border-transparent rounded-md shadow-sm text-base  text-white bg-indigo-600 p-1 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                        type="submit"
                      >
                        Đăng Nhập
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>

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
                <button class=" border border-transparent rounded-md shadow-sm text-base  text-white bg-red-600 p-1  hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white  font-medium">
                  {" "}
                  Đăng nhập bằng Google{" "}
                </button>
                <button class=" border border-transparent rounded-md shadow-sm text-base  text-white bg-indigo-600 p-1 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white font-medium ">
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
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Login;
