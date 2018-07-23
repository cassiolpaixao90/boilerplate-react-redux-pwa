import React from 'react';

import {
  Page,
  Toolbar,
  List,
  ListItem,
  ListHeader
} from 'react-onsenui';

const capitalize = (str) =>
  str.replace(/^[a-z]/, (c) => c.toUpperCase());

class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 5
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        counter: this.state.counter - 1
      }, () => {
        if (this.state.counter === 0) {
          clearInterval(this.interval);
          this.props.popPage();
        }
      });
    }, 400);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <Page>
        <div
          style={{
            textAlign: 'center',
            height: '100%'
          }}>
          <span
            style={{
              display: 'inline-block',
              position: 'relative',
              top: '50%',
              fontSize: '26px',
              transform: 'translate3d(0, -50%, 0)'
            }}>
            Please wait...<br />
            {this.state.counter}
          </span>
         </div>
      </Page>
    );
  }
}

class Animations extends React.Component {
  pushPage(transition) {
    const nav = this.props.navigator;

    nav.pushPage({
      comp: MyPage,
      props: {
        key: "my-page",
        popPage: () => nav.popPage({animation: transition, animationOptions: {duration: 0.8}})
      }
    }, {animation: transition, animationOptions: {duration: 0.8}});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Animations</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <List
          renderHeader={() => <ListHeader>Transitions</ListHeader>}
          dataSource={['none', 'fade', 'slide', 'lift']}
          renderRow={(row) =>
            <ListItem
              key={`animation-${row}`}
              tappable
              onClick={this.pushPage.bind(this, row)}>
              {capitalize(row)}
            </ListItem>
          }
        />
      </Page>
    );
  }
}

export default Animations;
