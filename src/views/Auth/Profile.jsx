import SidebarProfile from "components/Sidebar/SidebarProfile";
import { FastField, Field, Form, Formik } from "formik";
import InputField from "cutom-fields/InputField/InputField";
import SelectField from "cutom-fields/SelectField/SelectField";
import { SELLER_OPTION } from "constants/global";
import InputImageField from "cutom-fields/InputField/InputImageField";

function Profile(props) {
  const { user } = props;
  console.log(user);
  const initialValues = {
    photo: user.url,
    name: user.name,
    email: user.email,
    phone: user.phone,
    user_seller: user.user_seller,
  };
  const uploadProfile = (data) => {
    console.log(data);
  };
  return (
    <div class="container mx-auto flex bg-gray-200 my-8 rounded-xl shadow-md overflow-hidden">
      <SidebarProfile user={user} />
      <div className="w-full bg-gray-100 px-8">
        <Formik initialValues={initialValues} onSubmit={uploadProfile}>
          {(formikProps) => {
            return (
              <Form className="mt-8 space-y-8">
                <div className="text-center">
                  <Field
                    name="photo"
                    label="Ảnh đại diện"
                    title="Chọn ảnh"
                    component={InputImageField}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Field
                    label="Tên"
                    name="name"
                    type="text"
                    component={InputField}
                  />

                  <Field
                    label="Email"
                    name="email"
                    type="text"
                    component={InputField}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <Field
                    label="Số Điện Thoại"
                    name="phone"
                    type="text"
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
export default Profile;
