import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '../components/table/Table';
import Ball from '../components/ball/Ball.js';
import Debugger from '../components/debugger/Debugger.js';

import * as poolActionCreators from '../actions/PoolActions';
console.log(poolActionCreators);

@connect((state) => {
  console.log('connect state', state);
  return {
    pool: state.pool,
  };
}, poolActionCreators)


export default class PoolPage extends Component {
  render() {

    return (
      <div>
        <Debugger onPauseClick={this.props.togglePause} />
        <Table>
          <Ball x='500' y='30' fill='blue' />
          <Ball x='60' y='60' fill='yellow' />
          <Ball x='90' y='90' fill='white' />
        </Table>
      </div>
    );
  }
}


