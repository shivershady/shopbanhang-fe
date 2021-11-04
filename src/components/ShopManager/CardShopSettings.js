import React from "react";
import { FastField, Form, Formik } from "formik";
import InputField from "cutom-fields/InputField/InputField";
import InputPhotoField from "cutom-fields/InputField/InputPhotoField";
import TextareaField from "cutom-fields/InputField/TextareaField";
import { editShop } from "services/authService";
import { useNotification } from "Notifications/NotificationProvider";

// components

export default function CardShopSettings() {
  const initialValues = {
    nameShop: "",
    photoShop: "",
    address_line1: "",
    address_line2: "",
    city:"",
    province:"",
    description: "",
  };
  const dispatch = useNotification();
  const doSettingShop = async (data) => {
    await editShop(data).then(() => {
      dispatch({
        type: "success",
        message: "Đăng nhập thành công",
      })
    })
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blue-700 text-xl font-bold">
              Tài khoản của bạn
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h6 className="text-blue-400 text-sm mt-3 mb-6 font-bold uppercase">
            Thông tin shop
          </h6>
          <Formik 
          initialValues={initialValues}
          onSubmit={doSettingShop}
          >
            {(formikProps) => {
              return (
                <Form className="flex flex-col gap-4 px-0 py-1 ">
                  <FastField
                    name="nameShop"
                    type="text"
                    label="Tên Shop"
                    component={InputField}
                    placeholder="abc shop"
                  />

                  <FastField
                    name="photoShop"
                    title="Tải ảnh"
                    component={InputPhotoField}
                  />

                  <FastField
                    label="Địa chỉ 1"
                    name="address_line1"
                    type="text"
                    component={InputField}
                    placeholder="Địa chỉ shop"
                  />

                  <FastField
                    label="Địa chỉ 2"
                    name="address_line2"
                    type="text"
                    component={InputField}
                    placeholder="Địa chỉ shop"
                  />

                  <FastField
                    label="Huyện"
                    name="province"
                    type="text"
                    component={InputField}
                    placeholder="Huyện"
                  />

                  <FastField
                    label="Thành phố"
                    name="city"
                    type="text"
                    component={InputField}
                    placeholder="Thành phố"
                  />
                  
                  <FastField
                    label="Về tôi"
                    name="description"
                    type="text"
                    component={TextareaField}
                    placeholder="Nhập mô tả hoặc thông tin về shop của bạn tại đây"
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
    </>
  );
}
