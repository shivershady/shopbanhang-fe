import React from "react";
import Select from 'react-select';
import PropTypes from "prop-types";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

function SelectField(props) {
  const { 
      field,
      options, label, placeholder, disabled } = props;
  const {name , value} = field;
  const selectedOption = options.find(option => option.value === value);

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
      <Select
        className="py-2 pl-3 border border-transparent rounded-md shadow-sm text-sm h-11 w-full text-left my-2"
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSeclectedOptionChange}

        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
      />
    </div>
  );
}

export default SelectField;
