import { iNDUSTRY_OPTION } from "constants/global";
import InputField from "cutom-fields/InputField/InputField";
import SelectField from "cutom-fields/SelectField/SelectField";
import { FastField, Form, Formik } from "formik";
import React from "react";

export default function CardAddCategory() {
  const initialValues = {
    nameCategory: "",
    industry: "",
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blue-100 border-0">
        <div className="flex-auto px-4 lg:px-10 py-2">
          <h6 className="text-blue-400 text-sm my-3 font-bold uppercase">
            Thêm danh mục
          </h6>
          <Formik initialValues={initialValues}>
            {(formikProps) => {
              return (
                <Form className="flex flex-col gap-4 px-0 py-1 ">
                  <FastField
                    name="nameCategory"
                    type="text"
                    label="Tên danh mục"
                    component={InputField}
                    placeholder="Áo nam"
                  />

                  <FastField
                    name="industry"
                    label="Ngành hàng"
                    component={SelectField}
                    placeholder="Ngành hàng"
                    options={iNDUSTRY_OPTION}
                  />

                  <div className=" text-center  py-4">
                    <button
                      className=" w-1/5 h-11 border border-transparent rounded-md shadow-sm text-base  text-white bg-indigo-600 p-1 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                      type="submit"
                    >
                      Thêm
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
