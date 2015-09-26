import React, { Component } from 'react';
import * as Dispatcher from '../dispatcher';

export class Debugger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: true
    }
  }

  handleOnPause() {
    this.setState({ paused: !this.state.paused });

    var angle = Number(this.refs['QueBall.angle'].getDOMNode().value);
    var force = Number(this.refs['QueBall.force'].getDOMNode().value);
    var x = Number(this.refs['QueBall.x'].getDOMNode().value);
    var y = Number(this.refs['QueBall.y'].getDOMNode().value);

    Dispatcher.debuggerChange({
      QueBall: { angle, force, x, y }
    });

    Dispatcher.pause();
  }

  render() {
    let pausedText = this.state.paused ? 'Go' : 'Pause';
    let coordinatesTextBoxStyle = { width: '40px' };
    return(
      <div {...this.props}>
        <button onClick={this.handleOnPause.bind(this)}>{ pausedText }</button>
        <div>
          <label for='x' >x: </label>
          <input type='text' name='x' ref='QueBall.x' style={coordinatesTextBoxStyle} defaultValue='400' ref='QueBall.x' />
          <label for='y'>y: </label>
          <input type='text' name='y' ref='QueBall.y' style={coordinatesTextBoxStyle} defaultValue='200' ref='QueBall.y' />
        </div>
        <div>
          <label for='angle'>Angle: </label>
          <input type='text' name='angle' ref='QueBall.angle' defaultValue='45' />
        </div>
        <div>
          <label for='force'>Force: </label>
          <input type='text' name='force' ref='QueBall.force' defaultValue='0.5' />
        </div>

        <div>
          <pre style={{ width: '300px' }}>I Love Lamp { this.props.debug}</pre>
        </div>
      </div>
    );
  };

};
