import React, { useState } from "react";
import PropTypes from "prop-types";
import "assets/styles/InputImageField.css";

InputImageField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
};

InputImageField.defaultProps = {
  label: "",
  title: "",
  img: ""
};

function InputImageField(props) {
  const { field, form, label, title } = props;
  const { name } = field;
  const img = field.value;
  const [profileImg, setProfileImg] = useState(img);
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    const urlImg = URL.createObjectURL(e.target.files[0]);
    form.setFieldValue(name, urlImg);
  };

  return (
    <div className="page">
      <div className="container-img">
        <h1 className="heading">{label}</h1>
        <div className="img-holder">
          <img src={profileImg} alt="" id="img" className="img" />
        </div>
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={imageHandler}
        />
        <div className="label">
          <label className="image-upload" htmlFor="input">
           {title}
          </label>
        </div>
      </div>
    </div>
  );
}

export default InputImageField;
