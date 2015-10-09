import React, { Component } from 'react';

export default class Debugger extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const pausedText = this.props.paused ? 'Go' : 'Paused';
    return (
      <button onClick= {this.handleOnPause.bind(this)}>{ pausedText }</button>
    );
  }

  handleOnPause() {
    this.props.onPauseClick();

    console.log('handle pause');
  }
};