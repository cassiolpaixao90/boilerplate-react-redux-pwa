import React from 'react';

import {
  Page,
  Toolbar,
  BackButton,
  SpeedDial,
  SpeedDialItem,
  Fab,
  Icon
} from 'react-onsenui';

class SpeedDials extends React.Component {
  renderToolbar() {
    return (
      <Toolbar>
        <div className="left"><BackButton>Back</BackButton></div>
        <div className="center">Speed dial</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{padding: '0 15px'}}>A speed dial is a Floating action button that expands into a menu.</p>

        <SpeedDial position="right bottom" direction="up">
          <Fab>
            <Icon icon="md-car"></Icon>
          </Fab>
          <SpeedDialItem>A</SpeedDialItem>
          <SpeedDialItem>B</SpeedDialItem>
          <SpeedDialItem>C</SpeedDialItem>
        </SpeedDial>
      </Page>
    );
  }
}

export default SpeedDials;
