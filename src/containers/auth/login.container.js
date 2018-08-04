import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types'
import LoginForm from '../../components/login/LoginForm'

import Register from '../../components/register/Register'
import Tabs from '../../components/Tabs'
import * as authActions from "../../actions/auth.action";

class Login extends React.Component {
    constructor(props, context) {
    super(props, context);
    this.state = {
      user: Object.assign({}, this.props.user),
      errors: Object.assign({}, this.props.error),
      saving: false
    };
    this.updateUserState = this.updateUserState.bind(this);
    this.login = this.login.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    debugger
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

  login = event => {
    const {authActions} = this.props;
    event.preventDefault();
    this.setState({saving: true});
    authActions.login(this.state.user).then((data) => {
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
      <LoginForm
        onChange={this.updateUserState}
        onSave={this.login}
        user={this.state.user}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

Login.propTypes = {
  user: PropTypes.object,
  errors: PropTypes.object,
};

function mapStateToProps(state) {
  const {login} = state;
  return {
      user: login.user,
      error: login.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
      authActions: bindActionCreators(authActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
