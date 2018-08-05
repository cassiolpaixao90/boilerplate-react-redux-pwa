import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import {Page, Input, Button} from "react-onsenui";
import Tabs from '../Tabs';

import Register from '../register/Register'
import * as userActions from "../../actions/user.action";
import "./Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
      e.preventDefault();

      this.setState({ submitted: true });
      const { username, password } = this.state;
      const { dispatch } = this.props;
      if (username && password) {
          dispatch(userActions.login(username, password));
      }
  }

    main() {
        this
            .props
            .navigator
            .pushPage({
                comp: Tabs,
                props: {
                    key: 'tabs-page'
                }
            });
    }

    handleEmailChange = event => {
        this.setState({email: event.target.value});
    };

    handlePasswordChange = event => {
        this.setState({password: event.target.value});
    };

    register() {
        const nav = this.props.navigator;

        nav.pushPage({
            comp: Register,
            props: {
                key: "register-page",
                popPage: () => nav.popPage({
                    animation: 'animation-none',
                    animationOptions: {
                        duration: 0.8
                    }
                })
            }
        }, {
            animation: 'animation-none',
            animationOptions: {
                duration: 0.8
            }
        });
        // this.props.navigator.pushPage({comp: Register, props: { key: 'register-page'
        // }});
    }

    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        return (
            <Page>
                <div className="form-login">
              <form name="form" onSubmit={this.handleSubmit}>
                    <div>
                        <p>
                            <Input
                                id="email"
                                className="marginInput"
                                modifier="material"
                                placeholder="Email"
                                value={email}
                                float
                                onChange={this.handleChange} />
                        </p>
                        <p>
                            <Input
                                id="password"
                                className="marginInput"
                                modifier="material"
                                type="password"
                                value={password}
                                placeholder="Password"
                                float
                                onChange={this.handleChange} />
                        </p>
                    </div>
                    <div className="marginButton">
                        <p>
                            <Button
                                modifier="large"
                                onClick={this
                                .main
                                .bind(this)}>Sign in</Button>
                        </p>
                    </div>
                </form>
                <p>
                    <Button
                        modifier="large"
                        onClick={this
                        .register
                        .bind(this)}>Sign up</Button>
                </p>
                </div>
            </Page>
        );
    }
}

// function mapStateToProps(state) {
//   debugger
//     const { loggingIn } = state.authentication;
//     return {
//         loggingIn
//     };
// }

// const connectedLoginPage = connect(mapStateToProps)(Login);
export default Login ;


