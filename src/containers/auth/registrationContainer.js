"use strict";

import React, { Component}       from "react";
import PropTypes                            from 'prop-types'
import {connect}                           from "react-redux";
import {bindActionCreators}                from "redux";
import * as authActions                    from "../../actions/authenticationActions";
import RegistrationForm                    from "./registrationForm";

class Registration extends Component {
    constructor(props) {
        super(props);

        this.register = this.register.bind(this);
    }

    register(formData) {
        const {registrationActions}  = this.props;
        event.preventDefault();
        return registrationActions.register(formData);
    }

    render() {
        const {registration, errors} = this.props;

        return (
            <RegistrationForm
                registration={registration}
                errors={errors.data}
                onSubmit={this.register}
            />
        )
    }
}

Registration.propTypes = {
    registration: PropTypes.object,
    errors: PropTypes.object,
};

function mapStateToProps(state) {
    const {registrationState} = state;

    return {
        registration: registrationState.registration,
        errors: registrationState.errors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registrationActions: bindActionCreators(authActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);