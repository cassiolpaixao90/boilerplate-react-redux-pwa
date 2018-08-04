import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types'
import LoginForm from '../../components/login/LoginForm'
import Tabs from '../../components/Tabs';

import Register from '../../components/register/Register'
import * as userActions from "../../actions/user.action";

class Login extends React.Component {
    constructor(props, context) {
    super(props, context);
    this.state = {
      user: Object.assign({}, this.props.user),
      errors: {},
      saving: false
    };
    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({user: Object.assign({}, nextProps.user)});
  }

  updateUserState= event => {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({ user: user });
  }

  saveUser = event => {
    event.preventDefault();
    this.setState({saving: true});
    debugger
    this.props.actions.login(this.state.user)

    .then(() =>{
      // this.redirect();
      console.log("opa");

    }).catch(error =>{
      this.setState({saving: false});
    });
  }

  redirect() {
    this.setState({saving: false});
  }

  render() {
    return (
      <LoginForm
        onChange={this.updateUserState}
        onSave={this.saveUser}
        user={this.state.user}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  let user = { id: '', email: '', password: ''};
  return {
    user: user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
