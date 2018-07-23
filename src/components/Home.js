import React from 'react';

import ons from 'onsenui';

import {
  Page,
  Toolbar,
  List,
  ListItem,
  ListHeader
} from 'react-onsenui';

import PullToRefresh from './PullToRefresh';
import InfiniteScroll from './InfiniteScroll';
import SideMenu from './SideMenu';
import FloatingActionButton from './FloatingActionButton';
import SpeedDials from './SpeedDials';

const initialPlatform = ons.platform.isAndroid() ? 'android' : 'ios';

class Home extends React.Component {

  constructor(props){
    super(props)
  }

  gotoComponent(component, key) {
    this.props.navigator.pushPage({comp: component, props: { key }});
  }

  renderToolbar() {
    return (
      <Toolbar style={{"backgroundColor":"#fff"}}>
        <div className='center'>Home</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{padding: '0 15px'}}>
          This is a kitchen sink example that shows off the React extension for Onsen UI.
        </p>

        <p style={{padding: '0 15px'}}>
          <a href="https://onsen.io/v2/react.html" target="_blank"><strong>Official site with docs</strong></a>
        </p>

        <List
          renderHeader={() => <ListHeader>Components</ListHeader>}
          dataSource={[{
            name: 'Pull to refresh',
            component: PullToRefresh,
            key: 'pull-to-refresh'
          }, {
            name: 'Infinite scroll',
            component: InfiniteScroll,
            key: 'infinite-scroll'
          }, {
            name: 'Side menu',
            component: SideMenu,
            key: 'side-menu'
          }, {
            name: 'Floating action button',
            component: FloatingActionButton,
            key: 'fab'
          }, {
            name: 'Speed dials',
            component: SpeedDials,
            key: 'speed-dials'
          }]}
          renderRow={(row) =>
            <ListItem key={row.key} tappable onClick={this.gotoComponent.bind(this, row.component, row.key)}>
              {row.name}
            </ListItem>
          }
        />
      </Page>
    );
  }
}

export default Home;
