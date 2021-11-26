import React from "react";
import { FastField, Field, Form, Formik } from "formik";
import InputField from "cutom-fields/InputField/InputField";
import SelectField from "cutom-fields/SelectField/SelectField";
import { SELLER_OPTION } from "constants/global";
import InputImageField from "cutom-fields/InputField/InputImageField";
import { editProfile } from "services/authService";
import { useNotification } from "Notifications/NotificationProvider";

export default function SettingProfile({ user }) {
  const initialValues = {
    img: user.url,
    name: user.name,
    email: user.email,
    phone: user.phone,
    user_seller: user.user_seller,
  };
  const dispatch = useNotification();
  const uploadProfile = async (data) => {
    console.log(data);
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("img", data.img);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("user_seller", data.user_seller);
    await editProfile(formData).then(() => {
      dispatch({
        type: "success",
        message: "Thêm thành công",
      })
      window.location.reload();
    }).catch((e) => {
      dispatch({
        type: "error",
        message: "Thêm thất bại" + e,
      })
    })
  }
  return (
    <div className="w-full bg-gray-100 px-8">
      <div className="text-3xl font-bold mt-4">Hồ sơ của tôi</div>
      <p className="text-red-400">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </p>
      <div>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={uploadProfile}
        >
          {(formikProps) => {
            return (
              <Form className="mt-8 space-y-8">
                <div className="text-center">
                  <Field
                    name="img"
                    label="Ảnh đại diện"
                    title="Chọn ảnh"
                    component={InputImageField}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Field
                    name="name"
                    label="Tên"
                    type="text"
                    component={InputField}
                  />

                  <Field
                    name="email"
                    label="Email"
                    type="text"
                    component={InputField}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <Field
                    name="phone"
                    label="Số Điện Thoại"
                    type="number"
                    component={InputField}
                  />

                  <Field
                    label="Trạng thái"
                    name="user_seller"
                    component={SelectField}
                    options={SELLER_OPTION}
                  />
                </div>

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
