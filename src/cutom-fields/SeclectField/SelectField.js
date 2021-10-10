import React from "react";
import PropTypes from "prop-types";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  options: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

SelectField.defaultProps = {
  options: [],
  label: "",
  placeholder: "",
  disabled: false,
};

function SelectField(props) {
  const { 
      field,
      options, label, placeholder, disabled } = props;

  const {name} = field;

  const selectedValue = options.find(options => options.value === value);

  const handleSeclectedOptionChange = (selectedOption) => {
      const selectedValue = selectedOption ? selectedOption.value : selectedOption;

      const changeEvent = {
        target : {
          name : name,
          value : selectedValue,
        }
      };
      field.onChange(changeEvent);
  }
  return (
    <div>
      {label && <label for={label}>{label}</label>}
      <select
        className="py-2 pl-3 border border-transparent rounded-md shadow-sm text-sm h-11 w-full text-left my-2"
        id={name}
        {...field}
        value={selectedValue}
        onChange={handleSeclectedOptionChange}

        placeholder={placeholder}
        options={options}
        isDisabled={disabled}
      />
    </div>
  );
}

export default SelectField;
