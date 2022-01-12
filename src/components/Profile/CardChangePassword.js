import InputField from "cutom-fields/InputField/InputField";
import { FastField, Form, Formik } from "formik";
import { useNotification } from "Notifications/NotificationProvider";
import React from "react";
import { changePassword } from "services/authService";
import * as yup from "yup";

const schema = yup.object().shape({
  oldPassword: yup
    .string()
    .min(8, "Mật khẩu từ 8 - 16 ký tự")
    .max(16, "Mật khẩu không được quá 16 kí tự")
    .required("Vui lòng nhập mật khẩu"),
  newPassword: yup
    .string()
    .min(8, "Mật khẩu từ 8 - 16 ký tự")
    .max(16, "Mật khẩu không được quá 16 kí tự")
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
  const dispatch = useNotification();
  const doChangePassword = (data, { resetForm }) => {
     changePassword({
      current_password: data.oldPassword,
      new_password: data.newPassword,
    })
      .then(() => {
        dispatch({
          type: "success",
          message: "Đổi mật khẩu thành công",
        });
        resetForm();
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "error",
          message: "Đổi mật khẩu thất bại " + error,
        });
      });
  };
  return (
    <div className="w-full bg-gray-100 px-8">
      <div className="text-3xl font-bold mt-4">Đổi mật khẩu</div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={doChangePassword}
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
