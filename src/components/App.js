import React from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {}
}

export default connect(mapStateToProps)(App);
