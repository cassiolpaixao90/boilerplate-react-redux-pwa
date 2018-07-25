import React from 'react';
import { Navigator } from 'react-onsenui';
import Tabs from './Tabs'
import Login from '../components/login/Login'

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
        initialRoute={{comp: Login, props: { key: 'login' }}}
        renderPage={this.renderPage}
      />
    );
  }
}

export default App;
