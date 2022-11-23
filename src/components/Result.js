import React, { Component } from "react";

class Result extends Component {
  getStyle() {
    return (
      {
        fontSize: this.props.fontSize,
        color: this.props.color,
        borderColor: this.props.color,
      }
    )
  }
  render() {
    return (
      <div>
        <p>Color: {this.props.color} - Fontsize: {this.props.fontSize}px</p>
        {/* <div id="content" style="color:red">
             */}
        <div id="content" style={this.getStyle()}>
          noi dung content
        </div>
      </div>
    )
  }

}
export default Result