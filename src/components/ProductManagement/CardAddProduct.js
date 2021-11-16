import React, { useState } from "react";
import { FastField, Form, Formik, Field } from "formik";
import InputField from "cutom-fields/InputField/InputField";
import InputPhotoField from "cutom-fields/InputField/InputPhotoField";
import TextareaField from "cutom-fields/InputField/TextareaField";
import SelectField from "cutom-fields/SelectField/SelectField";
import { ACTIVE_OPTION } from "constants/global";
import { useNotification } from "Notifications/NotificationProvider";
import { addProduct } from "services/productService";

// components

export default function CardAddProduct(props) {
  const { categories, user } = props;
  const optionsCategory = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));
  const initialValues = {
    name: "",
    photoCover: null,
    price: "",
    quantity: "",
    category: "",
    active: "",
    iHot: "",
    discount:"",
    iPay: "",
    description: "",
    content: "",
  };
  const dispatch = useNotification();
  const doAddProduct = async (data) => {
    let formData = new FormData();
    const file_name = data.photoCover;
    for (let i = 0; i < file_name.length; i++) {
      formData.append("img[]", file_name[i]);
    }
    formData.append("name", data.name);
    formData.append("category_id", data.category);
    formData.append("quantity", data.quantity);
    formData.append("price", data.price);
    formData.append("active", data.active);
    formData.append("iHot", data.iHot);
    formData.append("discount_id", data.discount);
    formData.append("iPay", data.iPay);
    formData.append("description", data.description);
    formData.append("content", data.content);
    formData.append("user_id", user.id);
    try {
      await addProduct(formData);
      dispatch({
        type: "success",
        message: "Thêm sản phẩm thành công",
      });
    } catch (error) {
      dispatch({
        type: "error",
        message: "Thêm sản phẩm thất bại" + error,
      });
    }
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blue-700 text-xl font-bold">Thêm sản phẩm</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h6 className="text-blue-400 text-sm mt-3 mb-6 font-bold uppercase">
            Thông tin cơ bản
          </h6>

          <Formik initialValues={initialValues} onSubmit={doAddProduct}>
            {() => {
              return (
                <Form className="flex flex-col gap-4 px-0 py-1 ">
                  <FastField
                    name="name"
                    type="text"
                    label="Tên sản phẩm"
                    component={InputField}
                    placeholder="Quần áo"
                  />

                  <FastField
                    name="photoCover"
                    label="Ảnh sản phẩm"
                    title="Thêm ảnh"
                    component={InputPhotoField}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FastField
                      name="price"
                      type="number"
                      label="Giá sản phẩm"
                      component={InputField}
                      placeholder="100.000 vnđ"
                    />

                    <FastField
                      name="quantity"
                      type="number"
                      label="Kho"
                      component={InputField}
                      placeholder="0"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      name="category"
                      label="Danh mục"
                      component={SelectField}
                      placeholder="Danh mục"
                      options={optionsCategory}
                    />

                    <FastField
                      name="active"
                      label="Trạng thái"
                      component={SelectField}
                      placeholder="Trạng thái"
                      options={ACTIVE_OPTION}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FastField
                      name="iHot"
                      type="number"
                      label="iHot"
                      component={InputField}
                      placeholder="100.000 vnđ"
                    />

                    <FastField
                      name="discount"
                      type="number"
                      label="Chiết khấu"
                      component={InputField}
                      placeholder="25%"
                    />
                  </div>
                  <FastField
                    name="iPay"
                    type="text"
                    label="Phương thức thanh toán"
                    component={InputField}
                    placeholder="Thêm phương thức thanh toán cho sản phẩm của bạn"
                  />

                  <FastField
                    label="Chi tiết sản phẩm"
                    name="description"
                    type="text"
                    component={TextareaField}
                    placeholder="Nhập mô tả hoặc thông tin về sản phẩm của bạn tại đây"
                  />

                  <FastField
                    label="Nội dung sản phẩm"
                    name="content"
                    type="text"
                    component={TextareaField}
                    placeholder="Nhập mô tả hoặc thông tin về sản phẩm của bạn tại đây"
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
