"use strict";

import React, {Component}         from "react";
import PropTypes                  from 'prop-types'
import {connect}                  from "react-redux";
import {bindActionCreators}       from "redux";
import LoginForm                  from '../../components/login/LoginForm'
import * as authActions           from "../../actions/authenticationActions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {errors} = nextProps;
        this.setState({errors: Object.assign({}, errors)});
    }

    login(formData) {
        const {authActions} = this.props;
        const {returnUrl} = this.props.location.query;
        authActions.login(formData, returnUrl);
    }

    render() {
        const {error} = this.props;
        return (
            <LoginForm
                onSubmit={this.login}
                errors={error}
            />
        )
    }
}

Login.propTypes = {
    creds: PropTypes.object,
    errors: PropTypes.object,
};

function mapStateToProps(state) {
    const {loginState} = state;

    return {
        creds: loginState.creds,
        error: loginState.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
