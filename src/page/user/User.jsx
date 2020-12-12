import React, { Component } from "react";
import { connect } from "react-redux";
import {modifyNameAction} from '../../action'
class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        user
        <p>
        <button onClick={this.props.onIncreaseClick}>modifyNameAction</button>
        </p>
        <p>{this.props.userName}</p>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return { ...state };
};
const mapDisPatchProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(modifyNameAction),
  };
};
export default connect(mapStateProps, mapDisPatchProps)(User);
