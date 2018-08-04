import React, { Component}                      from "react";
import PropTypes                                from 'prop-types'
import {Link}                                   from "react-router";
import {Field, reduxForm}                       from "redux-form";
import RenderField                              from "../common/renderFieldComponent";

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.password) {
        errors.password = "Required";
    }

    return errors;
};


const LoginForm = ({handleSubmit, onSubmit, errors}) => {
    return (
        <div className="login">
            <div className="login-form">
                <div className="login-heading">
                    <i className="fa fa-sign-in fa-4x" aria-hidden="true"></i>
                    <h1>Login</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field name="email" component={RenderField} type="text" placeholder="Email"
                           className="form-control" label="Email" tabIndex="1" focusField="email"
                    />
                    <Field name="password" component={RenderField} type="password" placeholder="Password"
                           className="form-control" label="Password" tabIndex="4"
                    />
                    {errors && <div className="error"><span>{errors}</span></div>}
                    <button className="btn btn-primary" tabIndex="6">Login</button>
                </form>
                <div className="login_register-link">
                    <Link to="/register">Don't have any account? Sign up</Link>
                </div>
            </div>
        </div>
    )
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: "loginForm",validate})(LoginForm);