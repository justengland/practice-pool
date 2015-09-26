import React, { Component } from 'react';
import { Table } from './table/table';
import { Debugger } from './debugger/Debugger';
import * as Dispatcher from './dispatcher';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inMotion:false,
      debug: {}
    }

    Dispatcher.addDebugMessageListener(this.handleDebug.bind(this));
  }

  handleDebug(message) {
    this.setState({ debug: message });
  }

  handleStart() {
    this.setState({inMotion: !this.state.inMotion})
  }

  render() {
    let debug = JSON.stringify(this.state.debug, 0, 2);
    return (
      <div>
        <button onClick={this.handleStart.bind(this)}>Click Me!</button>
        <h1>Go</h1>
        <Debugger style={{ float: 'right' }} debug={ debug } />
        <Table inMotion={this.state.inMotion} />
      </div>
    );
  }
}