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
      <Page>
      <Card>
       <form onSubmit={this.handleSubmit}>
          <p>Sign in or sign up by entering your email and password.</p>

          <Input
              className="size-input"
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="Email" float />
          <br/>
          <br/>
          <Input
              className="size-input"
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
      </Card>

        {/* <div className="login-form">
          <Input className="text-input--underbar" value={this.state.name} onChange={this.handleNameChange.bind(this)} placeholder="Email" float />
          <Input className="text-input--underbar" value={this.state.name} onChange={this.handleNameChange.bind(this)} placeholder="Password" float />
          <br/><br/>
        </div> */}
      </Page>
    );
  }



}
export default Login
