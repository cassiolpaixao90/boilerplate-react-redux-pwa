import React from 'react';
import PropTypes from 'prop-types'
import {Input} from "react-onsenui";
import './Common.css';

const InputC = ({ name, label, onChange, placeholder, value, type, error }) => {

  let wrapperClass = 'form-group';
  if (error && error.lenght > 0) {
    wrapperClass += "-" + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <p>
          <Input
            id="text"
            name={name}
            type={type}
            className="marginInput"
            modifier="material"
            placeholder={placeholder}
            float
            value={value}
            onChange={onChange} />
        </p>
      </div>
    </div>
  );
};

InputC.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string
};

export default InputC;
