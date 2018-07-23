import React from 'react';
import { Page, Tabbar, Tab } from 'react-onsenui';

import Home from './Home';
import Dialogs from './Dialogs';
import Forms from './Forms';
import Animations from './Animations';

class Tabs extends React.Component {

  constructor(props){
    super(props);
    this.renderTabs = this.renderTabs.bind(this)

  }

  renderTabs() {
    return [
      {
        content: <Home key="home" navigator={this.props.navigator} />,
        tab: <Tab key="home" label="Home" icon="ion-ios-home-outline" />
      },
      {
        content: <Dialogs key="dialogs" navigator={this.props.navigator} />,
        tab: <Tab key="dialogs" label="Dialogs" icon="ion-ios-albums-outline" />
      },
      {
        content: <Forms key="forms" />,
        tab: <Tab key="forms" label="Forms" icon="ion-edit" />
      },
      {
        content: <Animations key="animations" navigator={this.props.navigator} />,
        tab: <Tab key="animations" label="Animations" icon="ion-film-marker" />
      }
    ];
  }

  render() {
    return (
      <Page>
        <Tabbar
          renderTabs={this.renderTabs}
        />
      </Page>
    );
  }
}

export default Tabs;
