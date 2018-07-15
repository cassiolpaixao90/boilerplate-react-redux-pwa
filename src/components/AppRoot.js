import React from "react"
import { Page, Toolbar, Button, Card, Input } from 'react-onsenui';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getInitialState() {
    return {
      username: '',
      password: ''
    };
  }

  handleClick() {
    if (this.state.username === 'bob' && this.state.password === 'secret') {
      // ons.notification.alert('You are now signed in!');
    }
    else {
      // ons.notification.alert('Username or password incorrect!');
    }
  };

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  };

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  };

  renderToolbar() {
    return (
      <Toolbar>
      <div className='center'>Toolbar</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar} contentStyle={{padding: 8}}>
          <section style={{textAlign: 'center'}}>
            <p>
              <Input
                value={this.state.username}
                onChange={this.handleUsernameChange}
                modifier='underbar'
                float
                placeholder='Username' />
            </p>
            <p>
              <Input
                value={this.state.password}
                onChange={this.handlePasswordChange}
                modifier='underbar'
                type='password'
                float
                placeholder='Password' />
            </p>
            <p>
              <Button onClick={this.handleClick}>Sign in</Button>
            </p>
          </section>
      </Page>
    )
  }
}
