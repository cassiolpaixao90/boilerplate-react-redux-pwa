import React from 'react';

import {
  Page,
  Toolbar,
  BackButton,
  Fab,
  Icon
} from 'react-onsenui';

class FloatingActionButton extends React.Component {
  renderToolbar() {
    return (
      <Toolbar>
        <div className='left'><BackButton>Back</BackButton></div>
        <div className='center'>Floating action button</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Fab position="right bottom" ripple>
          <Icon icon="md-phone" />
        </Fab>
      </Page>
    );
  }
}

export default FloatingActionButton;
