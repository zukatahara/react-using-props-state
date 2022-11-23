import React, { Component } from "react";

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'blue', 'pink', 'yellow']
        }
    }
    getColor(x) {
        return (
            {
                backgroundColor: x
            }
        )
    }
    // con ->cha (function)
    setActiveColor(value) {
        this.props.onReceiveColor(value)
    }

    render() {
        let colors = this.state.colors.map((color, index) => {
            return (
                <span key={index}
                    style={this.getColor(color)}
                    className={this.props.color === color ? "active" : ""}
                    onClick={() => this.setActiveColor(color)}
                />
            )

        })
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    {colors}
                </div>
            </div>
        )
    }

}
export default ColorPicker