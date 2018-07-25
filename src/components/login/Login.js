import React from 'react'

import {
  Page,
  Input,
  Card
} from 'react-onsenui';

import './Login.css';

class Login extends React.Component{

  constructor(props){
    super(props)
    this.state = { email: '', password: '', error: '' };
  }


  handleSubmit = event => {
    event.preventDefault();
    this.setState({ error: '' });
    if (this.state.email && this.state.password) {
      this.login();
    } else {
      this.setState({ error: 'Please fill in both fields.' });
    }
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };


  render(){

    return(
      <div className="container">
        <div className="inner-container">
        <form onSubmit={this.handleSubmit}>
          <p>Sign in or sign up by entering your email and password.</p>
          <Input
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="Email" float />

          <Input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="Password" float />

          <p className="error">
            {this.state.error}
          </p>
          <button className="red light" type="submit">
            Login
          </button>
        </form>
        </div>
      </div>
    );
  }



}
export default Login
