import React from 'react';

import ons from 'onsenui';

import {
  Page,
  Toolbar,
  List,
  ListItem,
  ListHeader,
  Dialog,
  Button
} from 'react-onsenui';

import Popovers from './Popovers';

class Dialogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false
    };
  }

  toggleDialog() {
    this.setState({
      dialogOpen: !this.state.dialogOpen
    });
  }

  showPopovers() {
    this.props.navigator.pushPage({comp: Popovers, props: { key: 'popovers' }});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Dialogs</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <List
          dataSource={[
            <ListItem
              key="show-dialog"
              tappable
              onClick={this.toggleDialog.bind(this)}>
              Show dialog ({this.state.dialogOpen ? 'open' : 'closed'})
            </ListItem>,
            <ListItem key="popovers" onClick={this.showPopovers.bind(this)}>
              Popovers
            </ListItem>
          ]}
          renderHeader={() => <ListHeader>Dialogs</ListHeader>}
          renderRow={(row) => row}
        />

        <List
          dataSource={[
            <ListItem
              key="alert"
              tappable
              onClick={ons.notification.alert.bind(null, 'Hello, world!')}>
              Alert dialog
            </ListItem>,
            <ListItem
              key="confirmation-dialog"
              tappable
              onClick={ons.notification.confirm.bind(null, {
                message: 'Do you like React?',
                buttonLabels: ['Yes!', 'Of course!']
              })}>
              Confirmation dialog
            </ListItem>,
            <ListItem
              key="prompt-dialog"
              tappable
              onClick={ons.notification.prompt.bind(null, {
                message: 'What is your name?'
              })}>
              Prompt dialog
            </ListItem>
          ]}
          renderHeader={() => <ListHeader>Notifications</ListHeader>}
          renderRow={(row) => row}
        />

        <Dialog
          isOpen={this.state.dialogOpen}
          onCancel={this.toggleDialog.bind(this)}
          cancelable>
          <p style={{textAlign: 'center'}}>I am a dialog!</p>
          <p style={{textAlign: 'center'}}>
            <Button disabled={!this.state.dialogOpen} onClick={this.toggleDialog.bind(this)}>Close me!</Button>
          </p>
        </Dialog>
      </Page>
    );
  }
}

export default Dialogs;
