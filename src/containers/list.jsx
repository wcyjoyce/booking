import React, { Component } from "react";
import { bindActionCreators } from "redux"; // helps to trigger action
import { connect } from "react-redux"; // helps to connect action function to component

import Flat from "../containers/flat.jsx";
import { setFlats } from "../actions";

class List extends Component {
  componentWillMount() {
    this.props.setFlats();
    // dispatches an action to update the Redux State tree (flats)
      // 1) calls "setFlats" action defined in action index
      // 2) "flatsReducer" receives action and returns
      // 3) "mapReduxStateToProps" - reduxState.flats === flats: flatsReducer as defined in index
      // 4) information in reduxState can now go directly in React props
      // 5) "this.props.flats" is now available in container
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
      </div>
    );
  }
}

// binds action to props of the component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats }, // "this.props.setFlats()" is now connected
    dispatch
  );
}

// maps Redux state from external store to props in component
function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  };
}

// connect functions to component
export default connect(mapReduxStateToProps, mapDispatchToProps)(List);
