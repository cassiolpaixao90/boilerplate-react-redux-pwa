import React from 'react';
import { connect } from 'react-redux'
import { openMenu } from '../actions/menu'
import { setRoute } from '../actions/route'
import {
  Toolbar as OnsToolbar,
  ToolbarButton,
  Icon
} from 'react-onsenui';

const mapStateToProps = _state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openMenu: () => dispatch(openMenu()),
    setRoute: id => dispatch(setRoute(id))
  }
}

class Toolbar extends React.Component {
  goBack = () => {
    const { navigator, setRoute } = this.props
    const pageToPop = navigator.pages[navigator.pages.length - 2]
    navigator.popPage().then(() => setRoute(pageToPop.props.id))
  }
  render() {
    const { openMenu, navigator } = this.props;
    const title = navigator.pages[navigator.pages.length - 1].props.title;
    return (
      <OnsToolbar inline>
        <div className="left">
          {navigator && navigator.pages.length > 1 &&
            <ToolbarButton modifier="quiet" onClick={this.goBack}>
              <Icon icon="ion-ios-arrow-back" />
            </ToolbarButton>}
          <ToolbarButton onClick={openMenu}>
            <Icon icon="ion-ios-menu" />
          </ToolbarButton>
        </div>
        <div className="center">{title}</div>
      </OnsToolbar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
