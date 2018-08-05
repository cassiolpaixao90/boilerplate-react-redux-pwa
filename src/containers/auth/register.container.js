import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types'
import RegisterForm from '../../components/register/RegisterForm'

import Tabs from '../../components/Tabs'
import * as authActions from "../../actions/auth.action";

class Register extends React.Component {
    constructor(props, context) {
    super(props, context);
    this.state = {
      user: Object.assign({}, this.props.user),
      errors: Object.assign({}, this.props.error),
      saving: false
    };
    this.updateUserState = this.updateUserState.bind(this);
    this.register = this.register.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {errors, user} = nextProps;
    this.setState({
      user: Object.assign({}, user),
      errors: Object.assign({}, errors)
    });
  }

  updateUserState= event => {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user: user });
  }

  register = event => {
    event.preventDefault();
    this.props.authActions.login(this.state.user).then((data) => {
      this.props.navigator.pushPage({ comp: Tabs,props: { key: 'tabs-page' }});
    }).catch(error =>{
      this.setState({saving: false, errors: error});
    });
  }

  redirect() {
    this.setState({saving: false});
  }

  render() {
    return (
      <RegisterForm
        onChange={this.updateUserState}
        onSave={this.register}
        user={this.state.user}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

Register.propTypes = {
  user: PropTypes.object,
  errors: PropTypes.object,
};

function mapStateToProps(state) {
  const {register} = state;
  return {
      user: register.user,
      error: register.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
      authActions: bindActionCreators(authActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
