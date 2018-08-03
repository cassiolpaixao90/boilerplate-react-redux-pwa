import React from "react";

import { Page, Input, Button } from "react-onsenui";

import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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

  render() {
    return (
      <Page>
        <div className="form-register">
          <div>
            <p>
              <Input
                id="name"
                className="marginInput"
                modifier="material"
                placeholder="Name"
                float
              />
            </p>
            <p>
              <Input
                id="email"
                className="marginInput"
                modifier="material"
                placeholder="E-mail"
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
              <Button modifier="large">Sign up</Button>
            </p>
          </div>
        </div>
      </Page>
    );
  }
}
export default Register;
