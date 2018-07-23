import React from 'react';
import { Navigator } from 'react-onsenui';
import Tabs from './Tabs'

class App extends React.Component {

  constructor(props){
    super(props)
  }

  renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;
    return React.createElement(route.comp, route.props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{comp: Tabs, props: { key: 'tabs' }}}
        renderPage={this.renderPage}
      />
    );
  }
}

export default App;
