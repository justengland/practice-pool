import React, { Component, PropTypes } from 'react';
import * as Dispatcher from '../dispatcher';

let _ball;

export class QueBall extends Component {

  constructor(props) {
    super(props);

    _ball = this;
  }

  static propTypes =  {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
  };


  //static propTypes =  {
  //  velocity: React.PropTypes.shape({
  //    angle: React.PropTypes.number,
  //    force: React.PropTypes.number,
  //    x: React.PropTypes.number,
  //    y: React.PropTypes.number,
  //    mass: React.PropTypes.number,
  //    isStopped: React.PropTypes.bool
  //  })
  //};



  componentWillAppear (callback) {
    console.log('componentWillAppear');


    setTimeout(function() {
      callback();
    }, 1); // need at least one tick to fire transition


  };

  componentDidAppear () {
    console.log('componentDidAppear');
    // this.enterStyle();
  };


  render() {
    return (
      <circle  { ... this.props}
        cx = { this.props.x  }
        cy = { this.props.y  }
        r = { '20' }
        fill={ 'white' } />
    );
  }

}