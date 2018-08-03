import React from "react";

import { Page, Input, Button } from "react-onsenui";

import "./Login.css";
import Register from '../register/Register'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      error: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ error: "" });
    if (this.state.email && this.state.password) {
      this.login();
    } else {
      this.setState({ error: "Please fill in both fields." });
    }
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  register(){
    const nav = this.props.navigator;

    nav.pushPage({
      comp: Register,
      props: {
        key: "register-page",
        popPage: () => nav.popPage({animation: 'animation-none', animationOptions: {duration: 0.8}})
      }
    }, {animation: 'animation-none', animationOptions: {duration: 0.8}});
    // this.props.navigator.pushPage({comp: Register, props: { key: 'register-page' }});
  }

  render() {
    return (
      <Page>
        <div className="form-login">
          <div>
            <p>
              <Input
                id="email"
                className="marginInput"
                modifier="material"
                placeholder="Email"
                float
              />
            </p>
            <p>
              <Input
                id="password"
                className="marginInput"
                modifier="material"
                type="password"
                placeholder="Password"
                float
              />
            </p>
          </div>
          <div className="marginButton">
            <p>
              <Button modifier="large" >Sign in</Button>
            </p>
            <p>
              <Button modifier="large" onClick={this.register.bind(this)} >Sign up</Button>
            </p>
          </div>
        </div>
      </Page>
    );
  }
}
export default Login;
