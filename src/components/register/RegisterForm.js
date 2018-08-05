import React from 'react';
import PropTypes from 'prop-types'
import {Page} from "react-onsenui";
import InputC from '../common/InputC'
import ButtonC from '../common/ButtonC'
import './Login.css'

const LoginForm = ({ onChange, onSave, user, errors, saving }) => {
  return (
    <Page>
      <div className="form-login">
        <form name="form" >
            <InputC
                name="name"
                label="Name"
                value={user.name}
                onChange={onChange}
                type="text"
                errors={errors.name} />

            <InputC
                name="email"
                label="Email"
                value={user.email}
                onChange={onChange}
                type="text"
                errors={errors.email} />

              <InputC
                  name="password"
                  label="Password"
                  value={user.password}
                  onChange={onChange}
                  type="password"
                  errors={errors.password} />

              <ButtonC
                  modifier="large"
                  type="submit"
                  value='Sign Up'
                  disabled={saving}
                  onSave={onSave} />

            </form>
          </div>
        </Page>
    );
};

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default LoginForm;

