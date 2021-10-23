import React from "react";
import { FastField, Form, Formik } from "formik";
import InputField from "cutom-fields/InputField/InputField";
import InputPhotoField from "cutom-fields/InputField/InputPhotoField";
import TextareaField from "cutom-fields/InputField/TextareaField";
import SelectField from "cutom-fields/SelectField/SelectField";
import { iNDUSTRY_OPTION } from "constants/global";

// components

export default function CardAddProduct() {
  const initialValues = {
    nameProduct: "",
    photoProductCover: null,
    photoProduct1: null,
    photoProduct2: null,
    photoProduct3: null,
    photoProduct4: null,
    photoProduct5: null,
    photoProduct6: null,
    photoProduct7: null,
    colorProduct: "",
    sizeProduct: "",
    priceProduct: "",
    wareHouseProduct: "",
    category: "",
    industry: "",
    ProductDescription: "",
  };


/*  export function updateAvatar(file) {
    Axios.setHeaders({
      'Content-Type': 'multipart/form-data'
    })
    let formData = new FormData();
    formData.append('file', file);
    return Axios.post(`user/avatar`, formData);
  }*/

  const doSumit = (data) => console.log(data);
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
          <Formik initialValues={initialValues} onSubmit={doSumit}>
            {(formikProps) => {
              return (
                <Form className="flex flex-col gap-4 px-0 py-1 ">
                  <FastField
                    name="nameProduct"
                    type="text"
                    label="Tên sản phẩm"
                    component={InputField}
                    placeholder="Quần áo"
                  />
                  <label className="text-base font-semibold">Tải ảnh</label>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                    <FastField
                      name="photoProductCover"
                      title="Ảnh bìa"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photoProduct1"
                      title="Tải ảnh 1"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photoProduct2"
                      title="Tải ảnh 2"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photoProduct3"
                      title="Tải ảnh 3"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photoProduct4"
                      title="Tải ảnh 4"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photoProduct5"
                      title="Tải ảnh 5"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photoProduct6"
                      title="Tải ảnh 6"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photoProduct7"
                      title="Tải ảnh 7"
                      component={InputPhotoField}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FastField
                      name="colorProduct"
                      type="text"
                      label="Màu sắc"
                      component={InputField}
                      placeholder="Nhập màu hàng, ví dụ: Trắng, Đỏ v.v"
                    />
                    <FastField
                      name="sizeProduct"
                      type="text"
                      label="Kích thước"
                      component={InputField}
                      placeholder="Nhập kích thước hàng, ví dụ: 10cm, 20cm v.v"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FastField
                      name="priceProduct"
                      type="number"
                      label="Giá sản phẩm"
                      component={InputField}
                      placeholder="100.000 vnđ"
                    />

                    <FastField
                      name="wareHouseProduct"
                      type="number"
                      label="Kho"
                      component={InputField}
                      placeholder="0"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FastField
                      name="category"
                      label="Danh mục"
                      component={SelectField}
                      placeholder="Ngành hàng"
                      options={iNDUSTRY_OPTION}
                    />

                    <FastField
                      name="industry"
                      label="Ngành hàng"
                      component={SelectField}
                      placeholder="Ngành hàng"
                      options={iNDUSTRY_OPTION}
                    />
                  </div>

                  <FastField
                    label="Mô tả"
                    name="ProductDescription"
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
