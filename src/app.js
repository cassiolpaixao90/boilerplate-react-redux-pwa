import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import initialStore from './store/initial.store'
import App from './components/App';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './styles/styles.css'

const store = initialStore();

class Init extends React.Component {
  componentDidMount() { }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(
  <Init />,
  document.getElementById('root')
)

