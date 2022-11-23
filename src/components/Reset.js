import React, { Component } from "react";

class Reset extends Component {
  resetDefaultValue = () => {
    this.props.onReceiveDefaultValue(true)
  }
  render() {
    return (
      <button
        type="button"
        className="btn btn-success"
        onClick={this.resetDefaultValue}
      >
        Reset
      </button>
    )
  }

}
export default Reset