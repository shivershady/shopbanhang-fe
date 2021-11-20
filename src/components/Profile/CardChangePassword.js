import InputField from "cutom-fields/InputField/InputField";
import { FastField, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const schema = yup.object().shape({
    oldPassword: yup
      .string()
      .min(8, "Mật khẩu từ 8 - 16 ký tự")
      .max(16)
      .required("Vui lòng nhập mật khẩu"),
    newPassword: yup
      .string()
      .min(8, "Mật khẩu từ 8 - 16 ký tự")
      .max(16)
      .required("Vui lòng nhập mật khẩu"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Mật khẩu không trùng khớp")
      .required("Vui lòng nhập mật khẩu"),
  });

export default function CardChangePassword() {
    const initialValues = {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      };
  return (
    <div className="w-full bg-gray-100 px-8">
      <div className="text-3xl font-bold mt-4">Đổi mật khẩu</div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
        >
          {(formikProps) => {
            return (
              <Form className="mt-8 space-y-8">
                  <FastField
                    name="oldPassword"
                    type="password"
                    label="Mật khẩu cũ"
                    component={InputField}
                  />
                  <FastField
                    name="newPassword"
                    type="password"
                    label="Mật khẩu mới"
                    component={InputField}
                  />
                  <FastField
                    name="confirmPassword"
                    type="password"
                    label="Nhập lại mật khẩu"
                    component={InputField}
                  />
                
                <div className=" text-center  py-4">
                  <button
                    className=" w-1/5 h-11 border border-transparent rounded-md shadow-sm text-base  text-white bg-indigo-600 p-1 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                    type="submit"
                  >
                    Lưu
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
