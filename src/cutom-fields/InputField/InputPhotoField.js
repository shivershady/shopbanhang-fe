import React, { useState } from "react";
import PropTypes from "prop-types";

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

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [file_name, setFile_name] = useState([]);
  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      const file_names = Array.from(e.target.files).map((file) => file);
      setFile_name([...file_name, ...file_names]);
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  form.setFieldValue(name, file_name);

  const removeSelectedImage = (index) => {
    const arr = [...selectedFiles];
    arr.splice(index, 1);
    setSelectedFiles(arr);
    const arr2 = [...file_name];
    arr2.splice(index, 1);
    setFile_name(arr2);
  };

  const renderPhotos = (source) => {
    return source.map((photo, index) => {
      return (
        <div className="relative mx-auto" key={index}>
          <img
            className="w-40 h-40 object-cover shadow"
            type="img"
            src={photo}
            key={photo}
          />
          <i
            className="fas fa-times w-6 h-6 absolute z-10 top-2 left-32 rounded-full text-center flex items-center justify-center cursor-pointer opacity-30 bg-black hover:opacity-100 hover:bg-gray-200 text-2xl"
            onClick={removeSelectedImage.bind(this, index)}
          ></i>
        </div>
      );
    });
  };

  return (
    <div>
      {label && (
        <label className="text-base font-semibold" for={label}>
          {label}
        </label>
      )}
      <div>
        <input
          type="file"
          id={name}
          className="hidden"
          multiple
          onChange={handleImageChange}
        />
        <div className="my-8">
          <label
            htmlFor={name}
            className="flex justify-center items-center bg-indigo-600 text-white w-36 h-10 rounded-lg"
          >
            <i className="material-icons">{title}</i>
          </label>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {renderPhotos(selectedFiles)}
        </div>
      </div>
    </div>
  );
}

export default InputPhotoField;
