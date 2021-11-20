import React from "react";
import PropTypes from "prop-types";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { 
      field, form,
      type, label, placeholder, disabled } = props;
      const {name} = field;
      const {errors , touched} = form;
      const showError = errors[name] && touched[name];
  return (
    <div>
      {label && <label className="text-base font-semibold" for={label}>{label}</label>}
      <input
        className="py-2 pl-3 border border-transparent rounded-md shadow-sm text-sm h-11 w-full text-left my-2"
        id={name}
        {...field}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
      />
      {showError && <p className="text-red-400">{errors[name]}</p>}
    </div>
  );
}

export default InputField;
