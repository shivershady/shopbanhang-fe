import React, { useState } from "react";
import PropTypes from "prop-types";
import Icons from "constants/Icons";

InputPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  title: PropTypes.string,
};

InputPhotoField.defaultProps = {
  label: "",
  title: "",
};

function InputPhotoField(props) {
  const { field, form, label, title } = props;
  const { name } = field;

  const [profileImg, setProfileImg] = useState(Icons.userIcon);
  const [loading, setLoading] = useState(false);

  const imageHandler = (e) => {
    setLoading(true);
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setProfileImg(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    form.setFieldValue( name , e.target.files[0]);
    setLoading(false);
  };

  return (
    <div className="flex-col justify-center items-center">
      {label && (
        <label className="text-base font-semibold" for={label}>
          {label}
        </label>
      )}
      <div className="mt-4">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img
            src={profileImg}
            alt=""
            id="img"
            className="h-48 w-48 mx-auto object-cover"
          />
        )}
      </div>
      <input
        id={name}
        className="hidden"
        name={name}
        type="file"
        accept="image/*"
        onChange={imageHandler}
      />
      <div className="w-full mt-4">
        <label
          htmlFor={name}
          className="m-auto flex justify-center items-center bg-indigo-600 text-white w-36 h-10 rounded-lg"
        >
          <i className="fas fa-image">{title}</i>
        </label>
      </div>
    </div>
  );
}

export default InputPhotoField;
