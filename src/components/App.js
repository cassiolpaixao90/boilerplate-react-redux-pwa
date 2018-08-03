import React from 'react';
import { Navigator } from 'react-onsenui';
import Tabs from './Tabs'
import Login from '../components/login/Login'
import Splash from '../components/splash/Splash'

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
        initialRoute={{comp: Splash, props: { key: 'login' }}}
        renderPage={this.renderPage}
      />
    );
  }
}

export default App;
