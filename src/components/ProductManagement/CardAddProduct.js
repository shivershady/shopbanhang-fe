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
    name: "",
    photoCover: null,
    photo1: null,
    photo2: null,
    photo3: null,
    photo4: null,
    photo5: null,
    photo6: null,
    photo7: null,
    price: "",
    quantity: "",
    category: "",
    active: "",
    iHot: "",
    iPay: "",
    description: "",
    description_seo: "",
    keyword_seo: "",
    title_seo: "",
    content: "",
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
                    name="name"
                    type="text"
                    label="Tên sản phẩm"
                    component={InputField}
                    placeholder="Quần áo"
                  />
                  <label className="text-base font-semibold">Tải ảnh</label>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                    <FastField
                      name="photoCover"
                      title="Ảnh bìa"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photo1"
                      title="Tải ảnh 1"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photo2"
                      title="Tải ảnh 2"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photo3"
                      title="Tải ảnh 3"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photo4"
                      title="Tải ảnh 4"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photo5"
                      title="Tải ảnh 5"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photo6"
                      title="Tải ảnh 6"
                      component={InputPhotoField}
                    />

                    <FastField
                      name="photo7"
                      title="Tải ảnh 7"
                      component={InputPhotoField}
                    />
                  </div>

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
                    <FastField
                      name="category"
                      label="Danh mục"
                      component={SelectField}
                      placeholder="Danh mục"
                      options={iNDUSTRY_OPTION}
                    />

                    <FastField
                      name="active"
                      label="Trạng thái"
                      component={SelectField}
                      placeholder="Trạng thái"
                      options={iNDUSTRY_OPTION}
                    />
                  </div>

                  <FastField
                    name="iHot"
                    type="number"
                    label="iHot"
                    component={InputField}
                    placeholder="100.000 vnđ"
                  />

                  <FastField
                    name="iPay"
                    type="text"
                    label="iPay"
                    component={InputField}
                    placeholder="25%"
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
