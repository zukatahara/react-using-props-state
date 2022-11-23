import React, { Component } from "react";

class SettingSize extends Component {
  
    changeFontSize(value) {
        return this.props.onReceiveFontSize(value)
    }
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.fontSize} px</h3>
                </div>
                <div className="panel-body">
                    <button
                        type="button"
                        className="btn btn-default"
                        onClick={() => this.changeFontSize(-1)}
                    >
                        Reduce
                    </button>
                    <button
                        type="button"
                        className="btn btn-default"
                        onClick={() => this.changeFontSize(1)}
                    >
                        Increase
                    </button>
                </div>
            </div>
        )
    }

}
export default SettingSize