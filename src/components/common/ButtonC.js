import React from 'react';
import PropTypes from 'prop-types'
import {Button} from "react-onsenui";
import './Common.css';

const ButtonC = ({ value, onSave, type, saving, modifier }) => {

  return (
    <div>
        <p>
          <Button
            modifier={modifier}
            type={type}
            disabled={saving}
            onClick={onSave}>{value}</Button>
        </p>
    </div>
  );
};

ButtonC.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  modifier: PropTypes.string.isRequired
};

export default ButtonC;
