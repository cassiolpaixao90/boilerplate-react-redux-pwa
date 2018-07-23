import React from 'react';

import {
  Page,
  Splitter,
  SplitterSide,
  SplitterContent,
  Toolbar,
  ToolbarButton,
  BackButton,
  Icon,
  List,
  ListItem,
  ListHeader
} from 'react-onsenui';

class SideMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.show =  this.show.bind(this);
    this.renderToolbar = this.renderToolbar.bind(this);
    this.hide = this.hide.bind(this);
  }

  hide() {
    this.setState({
      isOpen: false
    });
  }

  show() {
    this.setState({
      isOpen: true
    });
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='left'>
          <BackButton>Back</BackButton>
        </div>
        <div className='center'>
          Side menu
        </div>
        <div className='right'>
          <ToolbarButton onClick={this.show}>
            <Icon icon='ion-navicon, material:md-menu' />
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page>
        <Splitter>
          <SplitterSide
            side='right'
            isOpen={this.state.isOpen}
            onClose={this.hide}
            onOpen={this.show}
            collapse={true}
            width={240}
            swipeable={true}>
            <Page>
              <List
                dataSource={[1, 2, 3, 4]}
                renderHeader={() => <ListHeader>Menu</ListHeader>}
                renderRow={(i) => <ListItem key={`menu-item-${i}`} modifier='longdivider' tappable>{'Menu item ' + i}</ListItem>}
              />
            </Page>
          </SplitterSide>

          <SplitterContent>
            <Page renderToolbar={this.renderToolbar}>
              <p style={{textAlign: 'center'}}>
                Swipe left to open menu!
              </p>
            </Page>
          </SplitterContent>
        </Splitter>
      </Page>
    );
  }
}

export default SideMenu;
