import React, { useState } from "react";
import * as yup from "yup";
import { FastField, Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import { useNotification } from "Notifications/NotificationProvider";

import Footer from "components/Footers/Footer";
import Header from "components/Headers/Header";

import InputField from "cutom-fields/InputField/InputField";
import { signup } from "services/authService";

const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .min(8, "Mật khẩu từ 8 - 16 ký tự")
    .max(16)
    .required("Vui lòng nhập mật khẩu"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Mật khẩu phải phù hợp")
    .required("Vui lòng nhập mật khẩu"),
});

const Signup = (props) => {
  // const {alert}=props;
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  let history = useHistory();
  const dispatch = useNotification();
  const doSignup = async function (data) {
    await signup({
      name: data.name,
      email: data.email,
      password: data.password,
    })
      .then(() => {;
        // chuyển sang trang verify otp
        dispatch({
          type: "success",
          message: "Đăng ký thành công",
        })
        setTimeout(() => {
          history.push("/login");
        }, 1000);
      })
      .catch((error) => {
        //đưa ra thông báo lỗi
        const err = error.response.data.message;
        dispatch({
          type: "error",
          message: "Đăng ký thất bại" + err,
        })
      });
  };

  return (
    <div>
      <Header />
      <header>
        <div className="bg-gray-50  min-h-screen w-screen flex flex-col justify-center items-center   rounded-xl shadow-md overflow-hidden px-6  ">
          <div className=" bg-gray-100 shadow-none sm:shadow-lg h-auto w-full sm:w-8/12  md:w-7/12   lg:w-1/2  xl:w-2/5 sm:h-auto p-5  border border-transparent rounded-md  text-sm font-medium py-12   ">
            <h1 className=" text-center w-full text-3xl text-gray-600 mb-8 ">
              {" "}
              Đăng Ký{" "}
            </h1>

            <div className="w-full bg-gray-200 my-3 h-px"></div>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={doSignup}
            >
              {(formikProps) => {
                return (
                  <Form className="flex flex-col gap-4 px-0 py-1 ">
                    <FastField
                      name="name"
                      type="text"
                      component={InputField}
                      placeholder="Họ và Tên"
                    />

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

                    <FastField
                      name="confirmPassword"
                      type="password"
                      component={InputField}
                      placeholder="Nhắc lại mật khẩu"
                    />
                    <div className=" text-center  py-4">
                      <button
                        className=" w-3/5 h-11 border border-transparent rounded-md shadow-sm text-base  text-white bg-red-600 p-1 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                        type="submit"
                      >
                        Đăng Ký
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="text-center  mt-4 mb-12 tracking-wide ">
              {" "}
              Bằng cách đăng ký bạn đồng ý với
              <a className="hover:underline  ml-1 text-indigo-600" href="#">
                Điều khỏan bảo mật
              </a>{" "}
              và
              <a className="hover:underline   ml-1 text-indigo-600" href="#">
                Chính sách quyền riêng tư
              </a>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Signup;
