/* eslint-disable import/no-named-as-default */
import React from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import * as desafioActions from '../../actions/desafioActions';
import { bindActionCreators } from "redux";
import DesafioExperience from './DesafioExperience';
import DesafioContact from './DesafioContact';
import DesafioProfile from "./DesafioProfile";

export class DesafioPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

   render() {
    const { desafio } = this.props;
    return (
      <div className="outer-wrap">
        <div className="content">
          <DesafioContact contact={desafio} />
          <DesafioProfile desafio={desafio} />
        </div>
      </div>
    );
  }

}

DesafioPage.propTypes = {
  desafio: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    desafio: state.desafio
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(desafioActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DesafioPage);

