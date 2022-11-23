
import React, { Component } from 'react';
import './App.css';

//
import ColorPicker from './components/ColorPicker';
import SettingSize from './components/SettingSize';
import Reset from './components/Reset';
import Result from './components/Result';
//

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 16
    }
  }
  onSetColor = (x) => {
    // console.log(x)
    this.setState({
      color: x
    })
  }
  onSetFontSize = (x) => {
    this.setState({
      fontSize: (this.state.fontSize + x > 8 && this.state.fontSize + x <= 32) ? this.state.fontSize + x : this.state.fontSize
    })
  }
  onSetDefaultValue = (value) => {
    if (value) {
      // console.log(`ok`)
      this.setState({
        color: 'red',
        fontSize: 16
      })
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

            <ColorPicker
              color={this.state.color}
              onReceiveColor={this.onSetColor}
            />

          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

            <SettingSize
              fontSize={this.state.fontSize}
              onReceiveFontSize={this.onSetFontSize}
            />


            <Reset
              onReceiveDefaultValue={this.onSetDefaultValue}
            />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

            < Result
              color={this.state.color}
              fontSize={this.state.fontSize}
            />

          </div>

        </div>
      </div>
    )
  }
}

export default App
