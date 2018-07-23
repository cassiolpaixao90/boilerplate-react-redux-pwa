import React from 'react';

import {
  Page,
  Toolbar,
  BackButton,
  Popover
} from 'react-onsenui';

class Popovers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.showPopover =  this.showPopover.bind(this);
    this.getTarget = this.getTarget.bind(this);
  }

  showPopover() {
    this.setState({
      isOpen: true
    });

    setTimeout(() => {
      this.setState({
        isOpen: false
      });
    }, 1000);
  }

  getTarget() {
    return this.refs.target;
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='left'>
          <BackButton>Back</BackButton>
        </div>
        <div className='center'>
          Popovers
        </div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div style={{textAlign: 'center'}}>
          <br />
          <div
            onClick={this.showPopover}
            style={{
            width: '100px',
            height: '100px',
            display: 'inline-block',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            color: 'rgba(0, 0, 0, 0.6)',
            lineHeight: '100px'
          }} ref="target">
            Click me!
          </div>
        </div>
        <Popover
          direction="down"
          isOpen={this.state.isOpen}
          getTarget={this.getTarget}>
          <div style={{
            textAlign: 'center',
            lineHeight: '100px'
          }}>
            I'm a popover!
          </div>
        </Popover>
      </Page>
    );
  }
}

export default Popovers;
